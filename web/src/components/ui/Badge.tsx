import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
"inline-flex items-center rounded-lg px-3 py-1 text-[12px] font-medium leading-[1.5] uppercase tracking-[0.08em] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary",
  {
    variants: {
      variant: {
        default:
        "border border-transparent bg-black/5 text-black dark:bg-surface-hover dark:text-white",
        primary:
        "border border-brand-primary/30 bg-brand-primary/10 text-brand-primary",
        secondary:
        "border border-transparent bg-[#e5e5ea] text-text-primary",
        destructive:
        "border border-transparent bg-[#ff453a]/10 text-[#ff453a]",
        outline: "text-text-secondary  border border-black/10 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
