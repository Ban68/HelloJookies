"use client";

import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Carolina M.",
        location: "Santa Marta",
        text: "La mejor galleta que he probado en mi vida. La Kinder Bueno es adictiva, no puedo parar de pedirlas. ¡Las amo!",
        rating: 5,
        avatar: "CM",
        color: "bg-jookies-primary",
    },
    {
        name: "Andrés P.",
        location: "Barranquilla",
        text: "Pedí la caja Plan Playa para un cumpleaños y fue un éxito total. Todos quedaron encantados. Ya es tradición pedir Jookies.",
        rating: 5,
        avatar: "AP",
        color: "bg-jookies-secondary",
    },
    {
        name: "Valentina R.",
        location: "Bogotá",
        text: "Nunca pensé que una galleta pudiera ser TAN buena. La Red Velvet con cream cheese es otra cosa. 10/10 siempre.",
        rating: 5,
        avatar: "VR",
        color: "bg-jookies-green",
    },
    {
        name: "Santiago L.",
        location: "Santa Marta",
        text: "Mis favoritas son las Nutella Lovers. Llegaron calientitas y con ese olor increíble. Servicio super rápido.",
        rating: 5,
        avatar: "SL",
        color: "bg-jookies-yellow text-jookies-text",
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

    return (
        <section ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-jookies-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">Testimonios</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text mt-3">Lo que dicen nuestros fans 💛</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative"
                >
                    {/* Quote Card */}
                    <div className="bg-jookies-beige rounded-3xl p-10 md:p-14 relative min-h-[280px] flex items-center justify-center">
                        {/* Large quote mark */}
                        <div className="absolute top-6 left-8 text-jookies-primary/10 font-heading text-[120px] leading-none select-none pointer-events-none">
                            &ldquo;
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-center relative z-10 max-w-2xl mx-auto"
                            >
                                {/* Stars */}
                                <div className="flex items-center justify-center gap-1 mb-6">
                                    {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-jookies-yellow fill-jookies-yellow" />
                                    ))}
                                </div>

                                <p className="font-body text-lg md:text-xl text-jookies-text/80 leading-relaxed mb-8 italic">
                                    &ldquo;{TESTIMONIALS[current].text}&rdquo;
                                </p>

                                <div className="flex items-center justify-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${TESTIMONIALS[current].color} flex items-center justify-center text-white text-sm font-bold`}>
                                        {TESTIMONIALS[current].avatar}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-heading font-bold text-jookies-text text-sm">{TESTIMONIALS[current].name}</p>
                                        <p className="text-jookies-text/40 text-xs">{TESTIMONIALS[current].location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-jookies-beige hover:bg-jookies-primary/10 flex items-center justify-center transition-colors text-jookies-text/60 hover:text-jookies-primary"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all duration-300 ${i === current
                                            ? "w-8 h-2.5 bg-jookies-primary"
                                            : "w-2.5 h-2.5 bg-jookies-text/10 hover:bg-jookies-text/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-jookies-beige hover:bg-jookies-primary/10 flex items-center justify-center transition-colors text-jookies-text/60 hover:text-jookies-primary"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
