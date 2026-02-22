"use client";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { HeroCTA } from "@/components/HeroCTA";
import { ChevronDown, Truck, Clock, Star, Sparkles } from "lucide-react";

// Mock Data (matches DB schema)
const PRODUCTS = [
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
    id: "3",
    name: "Klim Brigadeiro",
    description: "Masa de vainilla rellena de brigadeiro de leche Klim.",
    price: 12000,
    imageUrl: "/images/klim-brigadeiro.jpg",
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-jookies-beige">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-jookies-primary/15 rounded-full blur-[100px] animate-gentle-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-jookies-secondary/10 rounded-full blur-[100px] animate-gentle-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jookies-yellow/8 rounded-full blur-[120px] animate-gentle-pulse delay-300" />
        </div>

        {/* Floating cookie particles (decorative) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] text-4xl animate-float-slow opacity-20">🍪</div>
          <div className="absolute top-[25%] right-[15%] text-3xl animate-float delay-200 opacity-15">🍫</div>
          <div className="absolute bottom-[30%] left-[20%] text-2xl animate-float-slow delay-500 opacity-15">🥜</div>
          <div className="absolute top-[60%] right-[10%] text-3xl animate-float delay-400 opacity-10">✨</div>
          <div className="absolute top-[10%] right-[40%] text-2xl animate-float-slow delay-600 opacity-10">🍪</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="font-heading text-jookies-primary uppercase tracking-[0.3em] text-sm mb-6 block animate-fade-in-up">
            Freshly Baked in Santa Marta
          </span>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black text-jookies-text mb-6 leading-[0.95] animate-fade-in-up delay-100">
            El antojo, <br />
            <span className="relative inline-block">
              recién horneado
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-jookies-primary/20 rounded-full -skew-x-3" />
            </span>
            <span className="text-jookies-primary">.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-jookies-text/60 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Galletas chunky rellenas de felicidad. Pídelas ahora y llegamos en minutos a tu puerta.
          </p>

          <HeroCTA />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
          <span className="text-jookies-text/30 text-xs uppercase tracking-widest font-heading">Descubre</span>
          <ChevronDown className="w-5 h-5 text-jookies-text/30 animate-bounce-down" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BADGES
          ═══════════════════════════════════════════ */}
      <section className="py-8 bg-white border-y border-jookies-text/5">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <TrustBadge icon={<Truck className="w-5 h-5" />} text="Envío en 30 min" />
          <TrustBadge icon={<Clock className="w-5 h-5" />} text="Horneadas frescas" />
          <TrustBadge icon={<Star className="w-5 h-5" />} text="Ingredientes premium" />
          <TrustBadge icon={<Sparkles className="w-5 h-5" />} text="Hecho a mano" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCT GRID
          ═══════════════════════════════════════════ */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl md:text-5xl text-jookies-text font-black mb-3">
            Favoritos del Mes
          </h2>
          <p className="text-jookies-text/40 text-sm max-w-md mx-auto">
            Las galletas más pedidas este mes. Cada una horneada con los mejores ingredientes.
          </p>
        </div>

        {/* Categories / Tabs */}
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          <button className="px-6 py-2.5 bg-jookies-text text-jookies-beige rounded-full font-heading font-bold text-sm transition-all duration-300 hover:shadow-lg">
            Todos
          </button>
          <button className="px-6 py-2.5 bg-transparent text-jookies-text/60 border border-jookies-text/10 rounded-full font-heading font-bold text-sm hover:bg-white hover:text-jookies-text hover:border-jookies-text/20 hover:shadow-sm transition-all duration-300">
            Individuales
          </button>
          <button className="px-6 py-2.5 bg-transparent text-jookies-text/60 border border-jookies-text/10 rounded-full font-heading font-bold text-sm hover:bg-white hover:text-jookies-text hover:border-jookies-text/20 hover:shadow-sm transition-all duration-300">
            Cajas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Marketing Block: Plan Playa */}
          <div className="md:col-span-2 bg-gradient-to-br from-jookies-primary to-pink-400 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-start text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                Edición Playa 🌊
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-black mb-3 leading-tight">
                ¿Plan Playa?
              </h3>
              <p className="font-body text-base md:text-lg mb-6 max-w-xs text-white/80">
                Lleva nuestra caja x4 diseñada para compartir frente al mar.
              </p>
              <Link href="/menu">
                <Button variant="secondary" className="bg-white text-jookies-primary hover:bg-jookies-beige shadow-none font-heading">
                  Ver Combos
                </Button>
              </Link>
            </div>
            {/* Decorative background elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          </div>

          {/* Products */}
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}

          {/* Marketing Block: Envío */}
          <div className="md:col-span-1 bg-gradient-to-br from-jookies-secondary to-blue-300 rounded-3xl p-8 flex flex-col justify-center items-center text-center text-jookies-text relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Envío Rápido</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Cobertura en todo Rodadero, Bello Horizonte y Santa Marta.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════ */}
      <section className="py-20 bg-jookies-text relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jookies-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            ¿Listo para tu <span className="text-jookies-primary">antojo</span>?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Explora nuestro menú completo con más de 19 sabores artesanales.
          </p>
          <Link href="/menu">
            <Button size="lg" variant="primary" className="px-10 shadow-none bg-white text-jookies-text hover:bg-jookies-beige">
              Ver el Menú Completo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-jookies-text/50">
      <div className="text-jookies-primary">{icon}</div>
      <span className="font-heading text-xs uppercase tracking-wider font-bold">{text}</span>
    </div>
  );
}
