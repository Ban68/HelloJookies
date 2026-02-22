"use client";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PREVIEW_PRODUCTS = [
    {
        id: "1",
        name: "Kinder Bueno",
        description: "Nuestra estrella. Rellena de crema de avellanas y trozos de Kinder.",
        price: 14000,
        imageUrl: "/images/kinder-bueno.jpg",
        category: "unit",
    },
    {
        id: "2",
        name: "Red Velvet",
        description: "Clásica red velvet con relleno de queso crema suave.",
        price: 12000,
        imageUrl: "/images/red-velvet.jpg",
        category: "unit",
    },
    {
        id: "4",
        name: "Plan Playa x4",
        description: "Caja mixta con 4 galletas a elección. Perfecta para compartir en el rodadero.",
        price: 45000,
        imageUrl: "/images/plan-playa-box.jpg",
        category: "box",
    },
];

export default function MarketplacePreview() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section id="marketplace" ref={sectionRef} className="py-28 bg-jookies-beige relative">
            {/* Top gradient transition */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
                >
                    <div className="max-w-xl">
                        <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">El &quot;Cookie Jar&quot;</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text mt-3 leading-tight">
                            Favoritos de la Semana
                        </h2>
                        <p className="text-jookies-text/60 mt-4 text-base leading-relaxed">
                            Estas son las que todos se están llevando. Pide la tuya antes de que se acaben.
                        </p>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                        <Link href="/menu">
                            <Button variant="outline" className="border-jookies-text text-jookies-text hover:bg-jookies-text hover:text-white transition-all rounded-full">
                                Ver Menú Completo →
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Desktop Grid / Mobile Horizontal Scroll */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {PREVIEW_PRODUCTS.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            className="hover:-translate-y-2 transition-transform duration-300"
                        >
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden -mx-6 px-6">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                        {PREVIEW_PRODUCTS.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="flex-shrink-0 w-[75vw] snap-center"
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 text-center md:hidden"
                >
                    <Link href="/menu">
                        <Button className="w-full bg-jookies-text text-white py-4 rounded-2xl shadow-elevated text-base">
                            Ver Menú Completo →
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
