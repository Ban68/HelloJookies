"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { useCartStore } from "@/lib/store";
import { openQuickOrder } from "@/components/QuickOrderModal";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass shadow-sm"
                : "bg-jookies-beige/70 backdrop-blur-sm"
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-28">

                        {/* Left: Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink href="/">Inicio</NavLink>
                            <NavLink href="/menu">Menú</NavLink>
                            <NavLink href="/about">Nosotros</NavLink>
                        </div>

                        {/* Center: Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="hover:opacity-90 transition-opacity">
                                <Logo className="w-44 h-[88px] md:w-[200px] md:h-[96px]" />
                            </Link>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="primary"
                                size="sm"
                                className="hidden lg:inline-flex shadow-none border-2 border-transparent hover:border-jookies-text/10 uppercase tracking-widest font-heading font-bold px-6"
                                onClick={openQuickOrder}
                            >
                                Pedir Ya
                            </Button>

                            <button
                                className="relative p-2.5 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-all duration-300"
                                onClick={toggleCart}
                                aria-label="Abrir carrito"
                            >
                                <ShoppingBag className="w-6 h-6" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 bg-jookies-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg ring-2 ring-jookies-beige">
                                        {itemCount}
                                    </span>
                                )}
                            </button>

                            <button
                                className="md:hidden p-2 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div className={`absolute top-28 left-0 right-0 bg-jookies-beige border-t border-jookies-text/5 shadow-2xl transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                    }`}>
                    <div className="px-6 py-8 space-y-2">
                        <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} delay={0}>
                            Inicio
                        </MobileNavLink>
                        <MobileNavLink href="/menu" onClick={() => setIsMenuOpen(false)} delay={1}>
                            Menú
                        </MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)} delay={2}>
                            Nosotros
                        </MobileNavLink>

                        <div className="pt-6">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full shadow-none uppercase tracking-widest"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    openQuickOrder();
                                }}
                            >
                                Pedir Ya 🍪
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold text-sm uppercase tracking-wider group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jookies-primary rounded-full transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}

function MobileNavLink({ href, children, onClick, delay }: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    delay: number;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block px-4 py-4 rounded-2xl font-heading text-2xl font-bold text-jookies-text hover:bg-jookies-primary/5 hover:text-jookies-primary transition-all duration-300"
            style={{ animationDelay: `${delay * 100}ms` }}
        >
            {children}
        </Link>
    );
}
