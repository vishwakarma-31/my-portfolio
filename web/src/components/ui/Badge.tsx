import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
"inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium leading-[1.5] tracking-[0.02em] transition-all duration-[150ms] ease-out focus:outline-none focus:ring-2 focus:ring-[#5e69d1]",
  {
    variants: {
      variant: {
        default:
        "border border-transparent bg-[#141516] text-[#d0d6e0]",
        primary:
        "border border-transparent bg-[#5e6ad2]/20 text-[#5e6ad2]",
        secondary:
        "border border-transparent bg-[#0f1011] text-[#f7f8f8]",
        destructive:
        "border border-transparent bg-[#ff453a]/10 text-[#ff453a]",
        outline: "text-[#8a8f98] border border-[#34343a]",
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
