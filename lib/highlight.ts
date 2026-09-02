export type TokenType =
  | 'plain'
  | 'comment'
  | 'string'
  | 'keyword'
  | 'control'
  | 'boolean'
  | 'number'
  | 'function'
  | 'class'
  | 'variable'
  | 'property'
  | 'operator'
  | 'punctuation'

export interface Token {
  type: TokenType
  value: string
}

interface Rule {
  type: TokenType
  re: RegExp
  sub?: (match: RegExpExecArray, source: string, end: number) => Token[]
}

/** VS Code "Dark Modern / Dark+" token palette. */
export const TOKEN_COLORS: Record<TokenType, string> = {
  plain: '#d4d4d4',
  comment: '#6a9955',
  string: '#ce9178',
  keyword: '#569cd6',
  control: '#c586c0',
  boolean: '#569cd6',
  number: '#b5cea8',
  function: '#dcdcaa',
  class: '#4ec9b0',
  variable: '#9cdcfe',
  property: '#9cdcfe',
  operator: '#d4d4d4',
  punctuation: '#d4d4d4',
}

const memberSplit = (
  match: RegExpExecArray,
  source: string,
  end: number,
): Token[] => {
  const isCall = /^\s*\(/.test(source.slice(end))
  return [
    { type: 'operator', value: match[1] },
    { type: isCall ? 'function' : 'property', value: match[2] },
  ]
}

const PHP_RULES: Rule[] = [
  { type: 'comment', re: /\/\*[\s\S]*?\*\/|(?:\/\/|#(?!\[)).*/y },
  { type: 'string', re: /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y },
  { type: 'variable', re: /\$[a-zA-Z_]\w*/y },
  { type: 'property', re: /(->|::)([a-zA-Z_]\w*)/y, sub: memberSplit },
  {
    type: 'control',
    re: /\b(?:if|else|elseif|endif|foreach|endforeach|for|endfor|while|endwhile|do|switch|case|default|break|continue|return|throw|try|catch|finally|match|yield)\b/y,
  },
  {
    type: 'keyword',
    re: /\b(?:abstract|as|class|clone|const|declare|echo|empty|enum|extends|final|fn|function|global|implements|include|include_once|instanceof|interface|isset|list|namespace|new|print|private|protected|public|readonly|require|require_once|static|trait|unset|use|var|and|or|xor)\b/y,
  },
  { type: 'boolean', re: /\b(?:true|false|null|TRUE|FALSE|NULL)\b/y },
  {
    type: 'class',
    re: /\b(?:int|float|string|bool|void|array|object|mixed|never|iterable|callable|self|parent)\b|\b[A-Z][A-Za-z0-9_]*\b/y,
  },
  { type: 'function', re: /[a-zA-Z_]\w*(?=\s*\()/y },
  { type: 'number', re: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d+)?\b/y },
  { type: 'operator', re: /=>|->|::|\?\?|\.=|\+\+|--|&&|\|\||[+\-*/%.!<>=&|^~?:@]/y },
  { type: 'punctuation', re: /[{}[\]();,\\]/y },
]

const JS_RULES: Rule[] = [
  { type: 'comment', re: /\/\*[\s\S]*?\*\/|\/\/.*/y },
  {
    type: 'string',
    re: /`(?:\\[\s\S]|[^`\\])*`|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'/y,
  },
  { type: 'property', re: /(\.)([a-zA-Z_$][\w$]*)/y, sub: memberSplit },
  {
    type: 'control',
    re: /\b(?:if|else|for|while|do|switch|case|default|break|continue|return|throw|try|catch|finally|yield|await)\b/y,
  },
  {
    type: 'keyword',
    re: /\b(?:async|class|const|debugger|delete|export|extends|from|function|get|import|in|instanceof|let|new|of|set|static|super|this|typeof|var|void|as)\b/y,
  },
  { type: 'boolean', re: /\b(?:true|false|null|undefined|NaN)\b/y },
  { type: 'class', re: /\b[A-Z][A-Za-z0-9_]*\b/y },
  { type: 'function', re: /[a-zA-Z_$][\w$]*(?=\s*\()/y },
  { type: 'number', re: /\b0x[\da-fA-F]+\b|\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/y },
  { type: 'operator', re: /=>|\.\.\.|===?|!==?|&&|\|\||\?\?|[+\-*/%!<>=&|^~?:]/y },
  { type: 'punctuation', re: /[{}[\]();,.]/y },
]

const JSON_RULES: Rule[] = [
  { type: 'property', re: /"(?:\\.|[^"\\])*"(?=\s*:)/y },
  { type: 'string', re: /"(?:\\.|[^"\\])*"/y },
  { type: 'boolean', re: /\b(?:true|false|null)\b/y },
  { type: 'number', re: /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/y },
  { type: 'punctuation', re: /[{}[\]:,]/y },
]

const BASH_RULES: Rule[] = [
  { type: 'comment', re: /#.*/y },
  { type: 'string', re: /"(?:\\[\s\S]|[^"\\])*"|'[^']*'/y },
  { type: 'variable', re: /\$\w+|\$\{[^}]*\}/y },
  { type: 'control', re: /\b(?:if|then|else|elif|fi|for|in|do|done|while|case|esac)\b/y },
  {
    type: 'keyword',
    re: /\b(?:sudo|cd|ls|cp|mv|rm|mkdir|echo|export|source|npm|npx|yarn|pnpm|git|php|composer|artisan|node|docker|curl)\b/y,
  },
  { type: 'operator', re: /--?[a-zA-Z][\w-]*|[|&><]+/y },
  { type: 'number', re: /\b\d+\b/y },
]

const GRAMMARS: Record<string, Rule[]> = {
  php: PHP_RULES,
  js: JS_RULES,
  json: JSON_RULES,
  bash: BASH_RULES,
}

const ALIASES: Record<string, string> = {
  php: 'php',
  js: 'js',
  javascript: 'js',
  jsx: 'js',
  ts: 'js',
  typescript: 'js',
  tsx: 'js',
  node: 'js',
  json: 'json',
  bash: 'bash',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  console: 'bash',
  terminal: 'bash',
}

export function normalizeLang(lang: string): string {
  return ALIASES[(lang ?? '').toLowerCase()] ?? 'text'
}

export const LANG_META: Record<string, { label: string; file: string }> = {
  php: { label: 'PHP', file: 'example.php' },
  js: { label: 'JavaScript', file: 'example.js' },
  json: { label: 'JSON', file: 'example.json' },
  bash: { label: 'Shell', file: 'terminal' },
  text: { label: 'Text', file: 'snippet.txt' },
}

function tokenize(code: string, lang: string): Token[] {
  const grammar = GRAMMARS[normalizeLang(lang)]
  if (!grammar) return [{ type: 'plain', value: code }]

  const tokens: Token[] = []
  let pos = 0

  const pushPlain = (char: string) => {
    const last = tokens[tokens.length - 1]
    if (last && last.type === 'plain') last.value += char
    else tokens.push({ type: 'plain', value: char })
  }

  while (pos < code.length) {
    let matched = false

    for (const rule of grammar) {
      rule.re.lastIndex = pos
      const match = rule.re.exec(code)
      if (match && match[0].length > 0) {
        const produced = rule.sub
          ? rule.sub(match, code, pos + match[0].length)
          : [{ type: rule.type, value: match[0] }]
        for (const token of produced) tokens.push(token)
        pos += match[0].length
        matched = true
        break
      }
    }

    if (!matched) {
      pushPlain(code[pos])
      pos += 1
    }
  }

  return tokens
}

/** Tokenize a snippet and group the tokens per rendered line. */
export function tokenizeLines(code: string, lang: string): Token[][] {
  const tokens = tokenize(code.replace(/\n+$/, ''), lang)
  const lines: Token[][] = [[]]

  for (const token of tokens) {
    const segments = token.value.split('\n')
    segments.forEach((segment, index) => {
      if (index > 0) lines.push([])
      if (segment.length > 0) {
        lines[lines.length - 1].push({ type: token.type, value: segment })
      }
    })
  }

  return lines
}
