export type MarkdownBlock =
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'code'; lang: string; code: string }

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const isUnordered = (line: string) => /^\s*[-*]\s+/.test(line)
const isOrdered = (line: string) => /^\s*\d+\.\s+/.test(line)
const isHeading = (line: string) => /^#{2,3}\s+/.test(line)
const isFence = (line: string) => /^```/.test(line)

/**
 * Small, dependency-free block parser for the subset of Markdown used across the
 * engineering notes: headings (##, ###), paragraphs, ordered/unordered lists,
 * and fenced code blocks with an optional language hint.
 */
export function parseMarkdown(source: string): MarkdownBlock[] {
  const lines = source.replace(/\r\n/g, '\n').replace(/\t/g, '  ').split('\n')
  const blocks: MarkdownBlock[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    const fence = line.match(/^```([A-Za-z0-9_+-]+)?\s*$/)
    if (fence) {
      const lang = (fence[1] ?? 'text').toLowerCase()
      const buffer: string[] = []
      i += 1
      while (i < lines.length && !/^```\s*$/.test(lines[i])) {
        buffer.push(lines[i])
        i += 1
      }
      i += 1 // consume closing fence
      while (buffer.length > 0 && buffer[0].trim() === '') buffer.shift()
      while (buffer.length > 0 && buffer[buffer.length - 1].trim() === '') buffer.pop()
      blocks.push({ type: 'code', lang, code: buffer.join('\n') })
      continue
    }

    const heading = line.match(/^(#{2,3})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length === 2 ? 2 : 3
      const text = heading[2].trim()
      blocks.push({ type: 'heading', level, text, id: slugify(text) })
      i += 1
      continue
    }

    if (isUnordered(line) || isOrdered(line)) {
      const ordered = isOrdered(line)
      const items: string[] = []
      while (i < lines.length && (isUnordered(lines[i]) || isOrdered(lines[i]))) {
        items.push(lines[i].replace(/^\s*(?:[-*]|\d+\.)\s+/, '').trim())
        i += 1
      }
      blocks.push({ type: 'list', ordered, items })
      continue
    }

    if (line.trim() === '') {
      i += 1
      continue
    }

    const buffer: string[] = [line.trim()]
    i += 1
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !isFence(lines[i]) &&
      !isHeading(lines[i]) &&
      !isUnordered(lines[i]) &&
      !isOrdered(lines[i])
    ) {
      buffer.push(lines[i].trim())
      i += 1
    }
    blocks.push({ type: 'paragraph', text: buffer.join(' ') })
  }

  return blocks
}
