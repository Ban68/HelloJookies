"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-jookies-beige/80 backdrop-blur-md border-b-2 border-jookies-chocolate/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-heading text-3xl font-black text-jookies-chocolate tracking-tighter hover:text-jookies-orange transition-colors">
                            HELLO JOOKIES
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="font-heading text-jookies-chocolate hover:text-jookies-pink transition-colors">
                            Incio
                        </Link>
                        <Link href="/menu" className="font-heading text-jookies-chocolate hover:text-jookies-pink transition-colors">
                            Menú
                        </Link>
                        <Link href="/about" className="font-heading text-jookies-chocolate hover:text-jookies-pink transition-colors">
                            Nosotros
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <Button variant="primary" size="sm" className="hidden md:inline-flex">
                            Pedir Ya
                        </Button>

                        <button className="relative p-2 text-jookies-chocolate hover:bg-jookies-chocolate/10 rounded-full transition-colors">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="absolute top-0 right-0 bg-jookies-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>

                        <button
                            className="md:hidden p-2 text-jookies-chocolate"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-jookies-beige border-t border-jookies-chocolate/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-chocolate hover:bg-jookies-chocolate/10">
                            Inicio
                        </Link>
                        <Link href="/menu" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-chocolate hover:bg-jookies-chocolate/10">
                            Menú
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md font-heading text-base font-medium text-jookies-chocolate hover:bg-jookies-chocolate/10">
                            Nosotros
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
