"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useCartStore } from "@/lib/store";
import { openQuickOrder } from "@/components/QuickOrderModal";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-jookies-beige/90 backdrop-blur-md border-b-2 border-jookies-text/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center h-40">

                    {/* Left: Desktop Menu (Hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold text-lg">
                            Inicio
                        </Link>
                        <Link href="/menu" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold text-lg">
                            Menú
                        </Link>
                        <Link href="/about" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold text-lg">
                            Nosotros
                        </Link>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-start md:justify-center items-center h-full">
                        <Link href="/" className="hover:opacity-80 transition-opacity">
                            <Logo className="w-80 md:w-[600px] h-32 md:h-40" />
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end space-x-4">
                        <Button variant="primary" size="lg" className="hidden lg:inline-flex shadow-none border-2 border-transparent hover:border-jookies-text/10 uppercase tracking-widest font-heading font-bold px-8" onClick={openQuickOrder}>
                            Pedir Ya
                        </Button>

                        <button
                            className="relative p-3 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-colors"
                            onClick={toggleCart}
                        >
                            <ShoppingBag className="w-8 h-8" />
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 bg-jookies-primary text-white text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                                    {itemCount}
                                </span>
                            )}
                        </button>

                        <button
                            className="md:hidden p-2 text-jookies-text"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-jookies-beige border-t border-jookies-text/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-text hover:bg-jookies-text/5">
                            Inicio
                        </Link>
                        <Link href="/menu" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-text hover:bg-jookies-text/5">
                            Menú
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-text hover:bg-jookies-text/5">
                            Nosotros
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
