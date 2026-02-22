"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { useCartStore } from "@/lib/store";
import { openQuickOrder } from "@/components/QuickOrderModal";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
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
                    ? "bg-jookies-beige/95 backdrop-blur-lg shadow-sm border-b border-jookies-text/5"
                    : "bg-jookies-beige/70 backdrop-blur-sm"
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Left: Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 flex-1">
                            {[
                                { href: "/", label: "Inicio" },
                                { href: "/menu", label: "Menú" },
                                { href: "/about", label: "Nosotros" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative font-heading text-jookies-text hover:text-jookies-primary transition-colors font-bold text-sm uppercase tracking-wider group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jookies-primary transition-all duration-300 group-hover:w-full rounded-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Center: Logo */}
                        <div className="flex justify-start md:justify-center items-center">
                            <Link href="/" className="hover:opacity-80 transition-opacity">
                                <Logo className={`transition-all duration-500 ${scrolled ? "w-32 h-14 md:w-40 md:h-16" : "w-36 h-16 md:w-48 md:h-20"
                                    }`} />
                            </Link>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center justify-end gap-3 flex-1">
                            <Button
                                variant="primary"
                                size="sm"
                                className="hidden lg:inline-flex shadow-none border-2 border-transparent hover:border-jookies-text/10 uppercase tracking-widest font-heading font-bold px-6 text-xs"
                                onClick={openQuickOrder}
                            >
                                Pedir Ya
                            </Button>

                            <button
                                className="relative p-2.5 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-colors"
                                onClick={toggleCart}
                            >
                                <ShoppingBag className="w-6 h-6" />
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-0.5 -right-0.5 bg-jookies-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                                    >
                                        {itemCount}
                                    </motion.span>
                                )}
                            </button>

                            <button
                                className="md:hidden p-2 text-jookies-text hover:bg-jookies-text/5 rounded-full transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-20 left-4 right-4 z-50 md:hidden bg-white rounded-2xl shadow-elevated-lg overflow-hidden border border-jookies-text/5"
                        >
                            <div className="p-6 space-y-1">
                                {[
                                    { href: "/", label: "Inicio", emoji: "🏠" },
                                    { href: "/menu", label: "Menú", emoji: "🍪" },
                                    { href: "/about", label: "Nosotros", emoji: "💛" },
                                ].map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-4 rounded-xl font-heading text-lg font-bold text-jookies-text hover:bg-jookies-beige transition-colors"
                                        >
                                            <span className="text-xl">{link.emoji}</span>
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="px-6 pb-6">
                                <Button
                                    variant="primary"
                                    className="w-full shadow-none text-sm"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        openQuickOrder();
                                    }}
                                >
                                    Pedir Ya 🍪
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
