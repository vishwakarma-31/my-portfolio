import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full min-h-[44px] min-w-[44px] type-body-small font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 active:scale-95",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border-2 border-white bg-transparent text-white hover:bg-white/10 active:scale-95",
        secondary: "bg-surface-default text-text-primary hover:bg-surface-hover active:scale-95",
        ghost: "bg-transparent text-text-primary hover:bg-surface-hover active:scale-95",
        cta: "bg-accent-primary text-black hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] font-semibold shadow-sm",
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
  VariantProps<typeof buttonVariants> { }

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
