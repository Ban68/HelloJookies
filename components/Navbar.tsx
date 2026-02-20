"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useCartStore } from "@/lib/store"; // Import store to show actual count

import { Logo } from "@/components/ui/Logo";
import { useCartStore } from "@/lib/store";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-jookies-beige/90 backdrop-blur-md border-b-2 border-jookies-text/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="hover:opacity-80 transition-opacity">
                            <Logo className="w-48 md:w-64 h-20" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold">
                            Incio
                        </Link>
                        <Link href="/menu" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold">
                            Menú
                        </Link>
                        <Link href="/about" className="font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold">
                            Nosotros
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <Button variant="primary" size="sm" className="hidden md:inline-flex shadow-none border-2 border-transparent hover:border-jookies-text/10">
                            Pedir Ya
                        </Button>

                        <button
                            className="relative p-2 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-colors"
                            onClick={toggleCart}
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 bg-jookies-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                    {itemCount}
                                </span>
                            )}
                        </button>

                        <button
                            className="md:hidden p-2 text-jookies-text"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
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
