import { type ReactNode } from 'react'
import CodeBlock from './CodeBlock'
import { parseMarkdown } from '@/lib/markdown'

/** Render inline `**bold**`, `*italic*`, and `` `code` `` markup. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`)/g
  let lastIndex = 0
  let key = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]
    if (token.startsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-semibold text-[#f1f5f9]">
          {token.slice(2, -2)}
        </strong>,
      )
    } else if (token.startsWith('`')) {
      nodes.push(
        <code
          key={key++}
          className="rounded-md border border-white/10 bg-white/6 px-1.5 py-0.5 font-mono text-[0.85em] text-[#93c5fd]"
        >
          {token.slice(1, -1)}
        </code>,
      )
    } else {
      nodes.push(
        <em key={key++} className="text-[#cbd5e1] italic">
          {token.slice(1, -1)}
        </em>,
      )
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function NoteContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content)

  return (
    <div className="text-[15px] leading-[1.85] text-[#cbd5e1] md:text-base">
      {blocks.map((block, index) => {
        if (block.type === 'code') {
          return <CodeBlock key={index} code={block.code} lang={block.lang} />
        }

        if (block.type === 'heading' && block.level === 2) {
          return (
            <h2
              key={index}
              id={block.id}
              className="mt-14 mb-5 flex items-start gap-3 text-2xl font-bold tracking-tight text-[#f8fafc] scroll-mt-28 first:mt-0"
            >
              <span
                aria-hidden
                className="mt-1.5 h-6 w-1 shrink-0 rounded-full bg-linear-to-b from-[#38bdf8] to-[#6366f1]"
              />
              <span>{block.text}</span>
            </h2>
          )
        }

        if (block.type === 'heading') {
          return (
            <h3
              key={index}
              id={block.id}
              className="mt-10 mb-3 text-lg font-semibold tracking-tight text-[#e8edf5] scroll-mt-28"
            >
              {block.text}
            </h3>
          )
        }

        if (block.type === 'list' && block.ordered) {
          return (
            <ol key={index} className="my-6 space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#6366f1]/30 bg-[#6366f1]/10 font-mono text-xs text-[#a5b4fc]">
                    {itemIndex + 1}
                  </span>
                  <span className="flex-1">{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="my-6 space-y-2.5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1]"
                  />
                  <span className="flex-1">{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={index} className="my-5">
            {renderInline(block.text)}
          </p>
        )
      })}
    </div>
  )
}
