import * as React from "react"
import { cn } from "@/lib/utils"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string | React.ReactNode
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language = "typescript",
  className,
  ...props
}: CodeBlockProps) {
  return (
    <div
      className={cn(
      "font-code text-[13px] text-text-muted leading-[1.6] bg-[#0d0d0d] p-6 rounded border border-white/10 overflow-x-auto",
        className
      )}
    >
      <pre {...props}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
