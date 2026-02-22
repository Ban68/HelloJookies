import Link from "next/link";
import { Instagram, MapPin, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-jookies-text text-white relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jookies-primary/50 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-jookies-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-3xl font-black">
                            Jookies<span className="text-jookies-primary">.</span>
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Galletas chunky rellenas de felicidad. Horneadas frescas cada día en Santa Marta, con amor y los mejores ingredientes.
                        </p>
                        <a
                            href="https://www.instagram.com/jookiesbakery/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-jookies-primary transition-colors text-sm group"
                        >
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            @jookiesbakery
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="font-heading text-sm uppercase tracking-widest text-white/40 font-bold">
                            Explorar
                        </h4>
                        <div className="space-y-3">
                            <FooterLink href="/">Inicio</FooterLink>
                            <FooterLink href="/menu">Menú</FooterLink>
                            <FooterLink href="/about">Nosotros</FooterLink>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="space-y-4">
                        <h4 className="font-heading text-sm uppercase tracking-widest text-white/40 font-bold">
                            Dónde encontrarnos
                        </h4>
                        <div className="space-y-3">
                            <LocationItem city="Santa Marta" detail="El Rodadero y Centro" />
                            <LocationItem city="Barranquilla" detail="Próximamente más puntos" />
                            <LocationItem city="Bogotá" detail="Delivery y puntos aliados" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} Hello Jookies. Todos los derechos reservados.
                    </p>
                    <p className="text-white/30 text-xs flex items-center gap-1">
                        Hecho con <Heart className="w-3 h-3 text-jookies-primary fill-jookies-primary" /> en Santa Marta
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block text-white/50 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-300"
        >
            {children}
        </Link>
    );
}

function LocationItem({ city, detail }: { city: string; detail: string }) {
    return (
        <div className="flex items-start gap-2.5 text-sm">
            <MapPin className="w-4 h-4 text-jookies-primary mt-0.5 flex-shrink-0" />
            <div>
                <span className="text-white/80 font-medium">{city}</span>
                <span className="text-white/30 ml-2">{detail}</span>
            </div>
        </div>
    );
}
