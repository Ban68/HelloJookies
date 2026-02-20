import Image from "next/image";

export default function StorySection() {
    return (
        <section id="our-story" className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-jookies-beige rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-jookies-orange/5 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder for image */}
                            <Image src="/images/our-story.jpg" alt="Baking with love" fill className="object-cover" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                <p className="font-heading text-lg text-jookies-chocolate">"No vendemos galletas, entregamos felicidad."</p>
                                <p className="text-sm text-jookies-chocolate/60 mt-2">- El Equipo Jookies</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-jookies-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-jookies-turquoise rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <div className="inline-block">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-chocolate leading-tight">
                                El Secreto está en el <span className="text-jookies-orange relative inline-block">
                                    Corazón
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-jookies-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        <div className="prose prose-lg text-jookies-chocolate/70">
                            <p>
                                Todo empezó en una pequeña cocina en Santa Marta, con un sueño simple: crear la galleta perfecta. Esa que es crujiente por fuera, pero suave y chicluda por dentro.
                            </p>
                            <p>
                                Usamos solo ingredientes reales. Chocolate de verdad, mantequilla de la buena y nada de conservantes extraños. Cada Jookie se hornea el mismo día que la pides, porque creemos que la frescura no es negociable.
                            </p>
                            <p className="font-medium text-jookies-chocolate">
                                Venimos de la tradición de compartir. Una caja de Jookies no es para comer solo (aunque no te juzgamos si lo haces 😉), es para ese plan de playa, esa tarde de pelis o ese "lo siento" que necesita un toque dulce.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="text-jookies-orange font-bold text-lg hover:underline decoration-2 underline-offset-4 group flex items-center gap-2">
                                Lee nuestra historia completa
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
