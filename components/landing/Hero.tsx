import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/10 z-10" />
                {/* Replace with actual video or high-res image */}
                <div className="w-full h-full bg-[url('/images/hero-bg-placeholder.jpg')] bg-cover bg-center opacity-80" />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-white/80 backdrop-blur-sm text-jookies-chocolate text-sm font-medium tracking-wide mb-6 animate-fade-in-up border border-jookies-chocolate/10">
                    🍪 Horneadas con amor en Santa Marta
                </span>

                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-jookies-chocolate mb-8 leading-tight tracking-tight animate-fade-in-up delay-100 drop-shadow-sm">
                    Momentos que <br />
                    <span className="text-jookies-orange i-text" style={{ fontStyle: 'italic' }}>derriten</span> el alma.
                </h1>

                <p className="font-body text-xl md:text-2xl text-jookies-chocolate/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 drop-shadow-sm">
                    Más que una galleta, es un abrazo calentito. Descubre la historia detrás de cada mordida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
                    <Link href="#our-story">
                        <Button size="lg" className="bg-jookies-chocolate text-white hover:bg-jookies-chocolate/90 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                            Nuestra Historia
                        </Button>
                    </Link>
                    <Link href="#marketplace">
                        <Button size="lg" variant="outline" className="bg-white/90 backdrop-blur-md border-white/50 text-jookies-chocolate hover:bg-white rounded-full px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all">
                            Pedir un Antojo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-jookies-chocolate/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-jookies-chocolate/50 rounded-full mt-2" />
                </div>
            </div>
        </section>
    );
}
