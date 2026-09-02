'use client'

import { useMemo, useState } from 'react'
import {
  LANG_META,
  TOKEN_COLORS,
  normalizeLang,
  tokenizeLines,
} from '@/lib/highlight'

interface CodeBlockProps {
  code: string
  lang: string
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const meta = LANG_META[normalizeLang(lang)] ?? LANG_META.text
  const lines = useMemo(() => tokenizeLines(code, lang), [code, lang])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.replace(/\n+$/, ''))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <div className="group relative my-8 overflow-hidden rounded-xl border border-white/10 bg-[#0b1120] shadow-[0_24px_60px_-24px_rgba(2,6,23,0.9)]">
      {/* Editor chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-white/6 bg-white/2 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-xs text-[#8b949e]">{meta.file}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#6e7681] sm:inline">
            {meta.label}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/3 px-2 py-1 font-mono text-[0.7rem] text-[#8b949e] transition-colors duration-200 hover:border-white/20 hover:text-[#e6edf3]"
            aria-label={copied ? 'Kode disalin' : 'Salin kode'}
          >
            {copied ? (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.5 4.5 6 12 2.5 8.5" />
                </svg>
                <span className="text-[#4ade80]">Disalin</span>
              </>
            ) : (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="5" y="5" width="9" height="9" rx="1.5" />
                  <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
                </svg>
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar]:h-1.5">
        <pre className="w-max min-w-full py-4 font-mono text-[13px] leading-[1.7] text-[#d4d4d4]">
          <code className="block">
            {lines.map((tokens, lineIndex) => (
              <span key={lineIndex} className="flex">
                <span className="sticky left-0 z-10 flex w-13 shrink-0 select-none justify-end border-r border-white/6 bg-[#0b1120] pr-3 text-xs leading-[1.7] text-[#5b6472]">
                  {lineIndex + 1}
                </span>
                <span className="whitespace-pre pr-6 pl-4">
                  {tokens.length === 0
                    ? ' '
                    : tokens.map((token, tokenIndex) => (
                        <span
                          key={tokenIndex}
                          style={
                            token.type === 'plain'
                              ? undefined
                              : { color: TOKEN_COLORS[token.type] }
                          }
                        >
                          {token.value}
                        </span>
                      ))}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
