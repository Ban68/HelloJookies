import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-heading font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jookies-text focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

        const variants = {
            primary: "bg-jookies-primary text-white hover:bg-jookies-pink/90 shadow-[4px_4px_0px_0px_#2D3436] hover:shadow-[2px_2px_0px_0px_#2D3436] hover:translate-x-[2px] hover:translate-y-[2px]",
            secondary: "bg-jookies-secondary text-jookies-text hover:bg-jookies-blue/90 shadow-[4px_4px_0px_0px_#2D3436] hover:shadow-[2px_2px_0px_0px_#2D3436] hover:translate-x-[2px] hover:translate-y-[2px]",
            outline: "border-2 border-jookies-text bg-transparent text-jookies-text hover:bg-jookies-text/5",
            ghost: "hover:bg-jookies-text/5 text-jookies-text",
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
