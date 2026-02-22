"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ARTICLES = [
    {
        id: 1,
        title: "5 Maneras de comer tu Jookie",
        category: "Tips",
        image: "/images/red-velvet.jpg",
        excerpt: "¿Sabías que si la calientas 10 segundos en el microondas pasa a otro nivel? Descubre más hacks aquí.",
        color: "from-jookies-primary/20 to-jookies-primary/5",
    },
    {
        id: 2,
        title: "El maridaje perfecto: Jookies & Café",
        category: "Cultura",
        image: "/images/kinder-bueno.jpg",
        excerpt: "Visitamos las mejores cafeterías de Santa Marta para encontrar la pareja ideal para nuestra Red Velvet.",
        color: "from-jookies-secondary/20 to-jookies-secondary/5",
    },
    {
        id: 3,
        title: "Detrás de escena: Día de Horneado",
        category: "Inside",
        image: "/images/klim-brigadeiro.jpg",
        excerpt: "Acompáñanos un lunes cualquiera en nuestra cocina. Harina, risas y mucho chocolate.",
        color: "from-jookies-yellow/30 to-jookies-yellow/5",
    }
];

export default function ContentGrid() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-28 bg-jookies-beige relative">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2D3436_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">Blog & Comunidad</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text mt-3">La Vida es Dulce 🍭</h2>
                    <p className="text-jookies-text/50 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                        Historias, tips y curiosidades para los amantes de las galletas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ARTICLES.map((article, i) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-jookies-text/5"
                        >
                            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${article.color}`}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-jookies-text uppercase tracking-wider z-10 shadow-sm">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-7 flex flex-col flex-grow">
                                <h3 className="font-heading text-xl font-bold text-jookies-text mb-3 group-hover:text-jookies-primary transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-jookies-text/60 text-sm leading-relaxed mb-6 flex-grow">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-jookies-primary font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
                                    Leer Más
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
