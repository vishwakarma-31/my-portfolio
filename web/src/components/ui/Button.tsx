import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
"inline-flex items-center justify-center whitespace-nowrap rounded-lg min-h-[44px] type-body-small font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-text-primary text-background-primary hover:opacity-90",
        destructive: "bg-[#ff453a] text-white hover:bg-[#ff453a]/90",
        outline: "border border-border-strong bg-transparent hover:bg-surface-hover",
        secondary: "bg-surface-default text-text-primary hover:bg-surface-hover",
        ghost: "bg-transparent text-text-primary hover:bg-surface-hover",
        cta: "bg-accent-primary text-[#050D05] hover:bg-[#A3FF1A] font-semibold shadow-[0_0_40px_rgba(150,255,0,0.2)] hover:scale-[1.02] active:scale-[0.98] rounded-sm type-caption",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2",
        lg: "px-10 py-5",
        icon: "h-11 w-11", // minimum 44px
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
