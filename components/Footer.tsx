"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Instagram, MapPin, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-jookies-text text-white relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="relative w-40 h-14 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center p-2">
                            <Logo className="w-full h-full brightness-[10] contrast-0" />
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Horneamos felicidad desde Santa Marta. Cada galleta es una historia de amor, chocolate y mantequilla de la buena.
                        </p>
                        <a
                            href="https://www.instagram.com/jookiesbakery/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-jookies-primary transition-colors text-sm group"
                        >
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>@jookiesbakery</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="font-heading text-lg font-bold text-white/90 uppercase tracking-widest text-sm">
                            Explora
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { href: "/", label: "Inicio" },
                                { href: "/menu", label: "Menú" },
                                { href: "/about", label: "Nosotros" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/40 hover:text-white transition-colors text-sm w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Locations */}
                    <div className="space-y-6">
                        <h4 className="font-heading text-lg font-bold text-white/90 uppercase tracking-widest text-sm">
                            Encuéntranos
                        </h4>
                        <div className="space-y-4">
                            {[
                                { city: "Santa Marta", detail: "Donde todo comenzó 🌊" },
                                { city: "Barranquilla", detail: "Sabor costeño 🌴" },
                                { city: "Bogotá", detail: "Calientica en el frío ☕" },
                            ].map((loc) => (
                                <div key={loc.city} className="flex items-start gap-3 text-sm">
                                    <MapPin className="w-4 h-4 text-jookies-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-white/70 font-medium">{loc.city}</p>
                                        <p className="text-white/30 text-xs">{loc.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/20 text-xs">
                        © {new Date().getFullYear()} Jookies Bakery. Todos los derechos reservados.
                    </p>
                    <p className="text-white/20 text-xs flex items-center gap-1">
                        Hecho con <Heart className="w-3 h-3 text-jookies-primary fill-jookies-primary" /> en Colombia
                    </p>
                </div>
            </div>
        </footer>
    );
}
