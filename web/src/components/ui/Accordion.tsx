"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null)

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="border-b border-border-subtle"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full text-left py-6 flex justify-between items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm"
              aria-expanded={isOpen}
            >
              <span className="type-body font-medium text-text-primary group-hover:text-text-primary/80 transition-colors duration-150">
                {item.title}
              </span>
              <span
                className={cn(
                "text-text-secondary font-code transition-transform duration-300",
                  isOpen ? "rotate-45" : ""
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className={cn(
              "overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              )}
              style={{
                maxHeight: isOpen ? "400px" : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="type-caption text-text-secondary  pb-6 leading-[1.6]">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
