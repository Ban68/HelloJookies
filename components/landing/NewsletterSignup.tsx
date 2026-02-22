"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <section ref={sectionRef} className="py-24 bg-jookies-text relative overflow-hidden text-white">
            {/* Animated dot pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-jookies-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-jookies-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto px-6 relative z-10 text-center"
            >
                {!submitted ? (
                    <>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-8 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-jookies-primary" />
                            <span className="text-white/70">Club exclusivo</span>
                        </motion.div>

                        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ¿Te avisamos cuando<br className="hidden sm:block" /> salgan del horno?
                        </h2>
                        <p className="text-white/50 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Únete al Club Jookies. Recibe promos secretas, acceso anticipado a nuevos sabores y recetas exclusivas.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tu correo electrónico"
                                required
                                className="flex-grow px-6 py-4 rounded-2xl text-jookies-text focus:ring-2 focus:ring-jookies-primary outline-none text-sm bg-white shadow-inner-soft"
                            />
                            <button
                                type="submit"
                                className="bg-jookies-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-jookies-primary/90 transition-all shadow-glow-pink hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap"
                            >
                                Unirme al Club 🍪
                            </button>
                        </form>

                        <p className="mt-8 text-xs text-white/25">
                            Tranqui, odiamos el spam tanto como tú. Solo cosas ricas.
                        </p>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="py-8"
                    >
                        <div className="w-20 h-20 bg-jookies-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-pink">
                            <Check className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="font-heading text-3xl font-bold mb-3">¡Bienvenido al Club! 🎉</h3>
                        <p className="text-white/50 text-base">
                            Te avisaremos cuando algo rico salga del horno. Mientras tanto, ¿por qué no pruebas una galleta?
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
