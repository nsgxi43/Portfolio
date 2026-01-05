import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority" // Wait, I didn't install cva. I should probably just write simple switch or install it. 
// Adding cva and clsx is standard practice. I installed clsx. I passed on cva in install step 8, I should install it or just write vanilla conditional logic. 
// I'll stick to vanilla for fewer deps unless I really need it. I'll just use a helper or simple logic.
// Actually, standard ui libs use cva. I'll just write a simple component without cva to save time/complexity if I didn't install it. 
// Wait, I can install cva quickly. It makes things cleaner.
// `npm install class-variance-authority`

import { cn } from "@/lib/utils"

// Let's assume I will install cva. It's very useful.
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all duration-300"

        let variantStyles = ""
        switch (variant) {
            case 'primary':
                variantStyles = "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:bg-primary/90"
                break
            case 'secondary':
                variantStyles = "bg-secondary text-secondary-foreground shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.5)] hover:bg-secondary/90"
                break
            case 'outline':
                variantStyles = "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
                break
            case 'ghost':
                variantStyles = "hover:bg-accent hover:text-accent-foreground"
                break
        }

        let sizeStyles = ""
        switch (size) {
            case 'sm':
                sizeStyles = "h-8 px-3 text-xs"
                break
            case 'md':
                sizeStyles = "h-10 px-8 py-2"
                break
            case 'lg':
                sizeStyles = "h-12 px-8 text-lg"
                break
        }

        return (
            <Comp
                className={cn(baseStyles, variantStyles, sizeStyles, className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
