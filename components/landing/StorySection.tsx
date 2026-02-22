"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="our-story" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-jookies-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-jookies-secondary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-elevated-lg rotate-1 hover:rotate-0 transition-transform duration-700">
                            <Image src="/images/klim-brigadeiro.jpg" alt="Baking with love" fill className="object-cover" />
                            {/* Quote overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8">
                                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg">
                                    <p className="font-heading text-base text-jookies-text italic leading-relaxed">&quot;No vendemos galletas, entregamos felicidad.&quot;</p>
                                    <p className="text-xs text-jookies-text/50 mt-2 font-medium">— El Equipo Jookies</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blobs behind image */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-jookies-primary/20 rounded-full blur-2xl animate-blob" />
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-jookies-secondary/20 rounded-full blur-2xl animate-blob animation-delay-2000" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="order-1 md:order-2 space-y-8"
                    >
                        <div>
                            <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">Nuestra Historia</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text leading-tight mt-3">
                                El Secreto está en el{" "}
                                <span className="text-jookies-primary relative inline-block">
                                    Corazón
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-jookies-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-5 text-jookies-text/65 text-base leading-relaxed">
                            <p>
                                Todo empezó en una pequeña cocina en Santa Marta, con un sueño simple: crear la galleta perfecta. Esa que es crujiente por fuera, pero suave y chicluda por dentro.
                            </p>
                            <p>
                                Usamos solo ingredientes reales. Chocolate de verdad, mantequilla de la buena y nada de conservantes extraños. Cada Jookie se hornea el mismo día que la pides, porque creemos que la frescura no es negociable.
                            </p>
                            <p className="font-medium text-jookies-text">
                                Venimos de la tradición de compartir. Una caja de Jookies no es para comer solo (aunque no te juzgamos si lo haces 😉), es para ese plan de playa, esa tarde de pelis o ese &quot;lo siento&quot; que necesita un toque dulce.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {[
                                { value: "3", label: "Ciudades" },
                                { value: "19+", label: "Sabores" },
                                { value: "∞", label: "Amor" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="font-heading text-3xl font-black text-jookies-primary">{stat.value}</p>
                                    <p className="text-xs text-jookies-text/40 uppercase tracking-wider mt-1 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
