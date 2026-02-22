"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-jookies-beige">
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-jookies-beige via-jookies-primary/10 to-jookies-secondary/10 animate-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,128,171,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,195,247,0.1),transparent_60%)]" />
            </div>

            {/* Floating Decorative Blobs */}
            <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-jookies-primary/8 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-jookies-secondary/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-[60%] left-[60%] w-48 h-48 bg-jookies-yellow/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            {/* Floating Cookie Decorations */}
            <div className="absolute top-[12%] right-[15%] text-5xl md:text-7xl animate-float opacity-20 select-none pointer-events-none">🍪</div>
            <div className="absolute bottom-[25%] left-[8%] text-4xl md:text-6xl animate-float-reverse opacity-15 select-none pointer-events-none animation-delay-1000">🍪</div>
            <div className="absolute top-[45%] right-[5%] text-3xl animate-float opacity-10 select-none pointer-events-none animation-delay-2000">✨</div>
            <div className="absolute bottom-[15%] right-[25%] text-3xl animate-float-reverse opacity-10 select-none pointer-events-none">🧈</div>

            {/* Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2D3436_1px,transparent_1px)] [background-size:32px_32px]" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block py-2 px-5 rounded-full bg-white/80 backdrop-blur-sm text-jookies-text text-sm font-medium tracking-wide mb-8 border border-jookies-text/5 shadow-sm"
                >
                    🍪 Horneadas con amor en Santa Marta
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-jookies-text mb-8 leading-[1.05] tracking-tight"
                >
                    Momentos que <br />
                    <span className="text-jookies-primary italic relative">
                        derriten
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-jookies-primary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 0 100 5 T 200 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                        </svg>
                    </span> el alma.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="font-body text-lg md:text-xl text-jookies-text/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Más que una galleta, es un abrazo calentito. Descubre la historia detrás de cada mordida.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="#marketplace">
                        <Button
                            size="lg"
                            className="bg-jookies-text text-white hover:bg-jookies-text/90 rounded-full px-10 py-6 text-base shadow-elevated hover:shadow-elevated-lg transition-all hover:-translate-y-0.5"
                        >
                            Pedir un Antojo 🍪
                        </Button>
                    </Link>
                    <Link href="#our-story">
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/60 backdrop-blur-md border-jookies-text/10 text-jookies-text hover:bg-white rounded-full px-10 py-6 text-base shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                        >
                            Nuestra Historia
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-jookies-text/30 text-xs font-medium tracking-widest uppercase">Descubre más</span>
                <div className="w-5 h-9 border-2 border-jookies-text/20 rounded-full flex justify-center pt-1.5">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1.5 bg-jookies-text/40 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
