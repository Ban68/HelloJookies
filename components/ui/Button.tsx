import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Note: keeping it simple without installing class-variance-authority if not needed, 
// but since I'm defining variants, I'll write standard tailwind code directly or rudimentary cva if I don't want to install it.
// Actually, I didn't install `class-variance-authority` in the previous step, so I will implement a simple version or install it.
// I'll stick to a simple prop approach to avoid extra deps if possible, OR I can just install it.
// The user asked for a "robust" stack. `class-variance-authority` is standard for Shadcn-like ui.
// I'll assume standard props for now to keep it fast, or add CVA.
// Let's stick to standard clsx logic for now to save a fetch, or just add it. 
// I'll add `class-variance-authority` and `@radix-ui/react-slot` quickly to be professional.

import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-heading font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jookies-chocolate focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

        const variants = {
            primary: "bg-jookies-turquoise text-jookies-chocolate hover:bg-[#3BD1C0] shadow-[4px_4px_0px_0px_rgba(74,44,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(74,44,42,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
            secondary: "bg-jookies-pink text-white hover:bg-[#FF55A7] shadow-[4px_4px_0px_0px_rgba(74,44,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(74,44,42,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
            outline: "border-2 border-jookies-chocolate bg-transparent text-jookies-chocolate hover:bg-jookies-beige/50",
            ghost: "hover:bg-jookies-chocolate/10 text-jookies-chocolate",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-8 text-sm",
            lg: "h-14 px-10 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
