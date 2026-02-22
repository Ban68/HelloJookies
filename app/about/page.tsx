import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, Star, Zap, Coffee, MapPin } from "lucide-react";
import { InstagramBook } from "@/components/InstagramBook";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-jookies-beige">
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-jookies-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="font-heading text-jookies-primary uppercase tracking-widest text-lg mb-6 block opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
                        Nuestra Historia
                    </span>
                    <h1 className="font-heading text-6xl md:text-8xl font-black text-jookies-text mb-8 leading-tight opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                        Más que galletas, <br />
                        <span className="text-jookies-primary italic">momentos dulces.</span>
                    </h1>
                </div>
            </section>

            {/* THE JOURNEY */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <InstagramBook />
                        </div>

                        <div className="space-y-8">
                            <h2 className="font-heading text-4xl font-bold text-jookies-text leading-tight">
                                Todo comenzó con un antojo y mucha curiosidad...
                            </h2>
                            <div className="prose prose-lg text-jookies-text/70 space-y-6">
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
            <section className="py-32 bg-jookies-beige relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-5xl font-bold text-jookies-text mb-4">Lo que nos hace Jookies</h2>
                        <div className="w-24 h-2 bg-jookies-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Star className="w-10 h-10 text-jookies-primary" />,
                                title: "Calidad Sin Negociar",
                                text: "Usamos solo ingredientes reales. Chocolate puro, trozos gigantes y masa fresca preparada cada día."
                            },
                            {
                                icon: <Heart className="w-10 h-10 text-jookies-primary" />,
                                title: "Hecho a Mano",
                                text: "Cada Jookie es boleada y armada artesanalmente. No hay dos iguales, porque la imperfección es parte del amor."
                            },
                            {
                                icon: <Zap className="w-10 h-10 text-jookies-primary" />,
                                title: "Freshly Baked",
                                text: "Horneamos en pequeños lotes durante todo el día. Si la pides, te llega calientica a tu puerta."
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-jookies-primary/10">
                                <div className="mb-6">{value.icon}</div>
                                <h3 className="font-heading text-2xl font-bold text-jookies-text mb-4">{value.title}</h3>
                                <p className="text-jookies-text/60 leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHERE TO FIND US */}
            <section className="py-32 bg-jookies-text text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="font-heading text-5xl font-bold mb-6">Encuéntranos en...</h2>
                            <p className="text-xl opacity-80 mb-10">
                                Estamos creciendo para estar más cerca de tu próximo antojo. Visítanos o pídenos por delivery.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { city: "Santa Marta", description: "Donde todo empezó. El Rodadero y Centro." },
                                    { city: "Barranquilla", description: "Dándole sabor a la Arenosa." },
                                    { city: "Bogotá", description: "Horneando felicidad a 2.600 metros." }
                                ].map((loc, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                        <MapPin className="w-6 h-6 text-jookies-primary mt-1" />
                                        <div>
                                            <h4 className="font-bold text-xl">{loc.city}</h4>
                                            <p className="opacity-60">{loc.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <div className="w-64 h-64 bg-jookies-primary rounded-full flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(255,128,171,0.3)]">
                                <Coffee className="w-32 h-32 text-white" />
                            </div>
                            <Link href="/menu">
                                <Button size="lg" variant="primary" className="px-12 py-8 text-xl rounded-full bg-white text-jookies-text hover:bg-jookies-beige shadow-2xl">
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
                    <h2 className="font-heading text-3xl font-bold text-jookies-text mb-4 italic">Sigue el rastro de las migajas</h2>
                    <p className="text-jookies-text/60 mb-8 font-body">Anunciamos nuevos sabores y promos en nuestro Instagram.</p>
                    <a
                        href="https://www.instagram.com/jookiesbakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-heading text-2xl text-jookies-primary hover:scale-105 transition-transform font-bold"
                    >
                        @jookiesbakery
                    </a>
                </div>
            </section>
        </div>
    );
}
