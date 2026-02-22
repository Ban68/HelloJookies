import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, Star, Zap, MapPin } from "lucide-react";
import { InstagramBook } from "@/components/InstagramBook";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-jookies-beige">
            {/* HERO SECTION */}
            <section className="relative pt-16 pb-28 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-jookies-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-jookies-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="font-heading text-jookies-primary uppercase tracking-[0.3em] text-sm mb-6 block animate-fade-in-up">
                        Nuestra Historia
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-jookies-text mb-6 leading-[0.95] animate-fade-in-up delay-200">
                        Más que galletas, <br />
                        <span className="text-jookies-primary italic">momentos dulces.</span>
                    </h1>
                    <p className="text-jookies-text/40 max-w-lg mx-auto text-sm leading-relaxed animate-fade-in-up delay-300">
                        Desde una pequeña cocina en Santa Marta hasta tres ciudades. Esta es nuestra historia.
                    </p>
                </div>
            </section>

            {/* THE JOURNEY */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="relative">
                            <InstagramBook />
                        </div>

                        <div className="space-y-8">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-jookies-text leading-tight">
                                Todo comenzó con un antojo y mucha curiosidad...
                            </h2>
                            <div className="space-y-5 text-jookies-text/60 leading-relaxed">
                                <p>
                                    Jookies nació en una pequeña cocina de <strong className="text-jookies-text/80">Santa Marta</strong> con un objetivo claro: crear la galleta que nosotros mismos soñábamos encontrar. Queríamos esa textura perfecta que es crujiente por fuera y pecaminosamente suave por dentro.
                                </p>
                                <p>
                                    Lo que empezó como un experimento creativo se convirtió rápidamente en un fenómeno local. La gente no solo quería galletas, quería la experiencia de morder algo hecho con <strong className="text-jookies-text/80">chocolate de verdad</strong> y mantequilla de la más alta calidad.
                                </p>
                                <p>
                                    Hoy, esa pasión nos ha llevado a expandirnos a <strong className="text-jookies-text/80">Barranquilla y Bogotá</strong>, llevando el &ldquo;antojo recién horneado&rdquo; a más rincones de Colombia, pero manteniendo siempre la esencia artesanal que nos vio nacer frente al Mar Caribe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="py-28 bg-jookies-beige relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-black text-jookies-text mb-4">
                            Lo que nos hace <span className="text-jookies-primary">Jookies</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-jookies-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Star className="w-8 h-8" />,
                                title: "Calidad Sin Negociar",
                                text: "Usamos solo ingredientes reales. Chocolate puro, trozos gigantes y masa fresca preparada cada día.",
                                color: "from-jookies-yellow/20 to-jookies-yellow/5",
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Hecho a Mano",
                                text: "Cada Jookie es boleada y armada artesanalmente. No hay dos iguales, porque la imperfección es parte del amor.",
                                color: "from-jookies-primary/20 to-jookies-primary/5",
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Freshly Baked",
                                text: "Horneamos en pequeños lotes durante todo el día. Si la pides, te llega calientica a tu puerta.",
                                color: "from-jookies-secondary/20 to-jookies-secondary/5",
                            }
                        ].map((value, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-jookies-text/5 hover:-translate-y-1 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 text-jookies-primary group-hover:scale-110 transition-transform duration-300`}>
                                    {value.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-jookies-text mb-3">{value.title}</h3>
                                <p className="text-jookies-text/50 leading-relaxed text-sm">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHERE TO FIND US */}
            <section className="py-28 bg-jookies-text text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jookies-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                        <div className="max-w-xl">
                            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
                                Encuéntranos en<span className="text-jookies-primary">...</span>
                            </h2>
                            <p className="text-lg text-white/50 mb-10 leading-relaxed">
                                Estamos creciendo para estar más cerca de tu próximo antojo. Visítanos o pídenos por delivery.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { city: "Santa Marta", description: "Donde todo empezó. El Rodadero y Centro." },
                                    { city: "Barranquilla", description: "Dándole sabor a la Arenosa." },
                                    { city: "Bogotá", description: "Horneando felicidad a 2.600 metros." }
                                ].map((loc, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 group">
                                        <MapPin className="w-6 h-6 text-jookies-primary mt-0.5 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h4 className="font-bold text-lg">{loc.city}</h4>
                                            <p className="text-white/40 text-sm">{loc.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-jookies-primary to-pink-400 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,128,171,0.3)] relative overflow-hidden">
                                <span className="text-7xl md:text-8xl">🍪</span>
                                <div className="absolute inset-0 bg-white/10 animate-shimmer rounded-full" />
                            </div>
                            <Link href="/menu">
                                <Button size="lg" variant="primary" className="px-12 rounded-full bg-white text-jookies-text hover:bg-jookies-beige shadow-none text-base">
                                    Ver el Menú
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTAGRAM CTA */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-jookies-text mb-4 italic">
                        Sigue el rastro de las migajas
                    </h2>
                    <p className="text-jookies-text/40 mb-8 font-body text-sm">
                        Anunciamos nuevos sabores y promos en nuestro Instagram.
                    </p>
                    <a
                        href="https://www.instagram.com/jookiesbakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold text-sm px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        @jookiesbakery
                    </a>
                </div>
            </section>
        </div>
    );
}
