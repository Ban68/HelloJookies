import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

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
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-jookies-beige">

        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jookies-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jookies-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="font-heading text-jookies-primary uppercase tracking-widest text-lg mb-4 block animate-fade-in-up">
            Freshly Baked in Santa Marta
          </span>
          <h1 className="font-heading text-6xl md:text-8xl font-black text-jookies-text mb-6 leading-tight animate-fade-in-up delay-100">
            El antojo, <br /> recién horneado.
          </h1>
          <p className="font-body text-xl text-jookies-text/80 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Galletas chunky rellenas de felicidad. Pídelas ahora y llegamos en minutos a tu puerta.
          </p>

          <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
            <Button size="lg" variant="primary" className="shadow-none hover:scale-105 transition-transform">
              Pedir Ahora
            </Button>
            <Button size="lg" variant="outline">
              Ver Menú
            </Button>
          </div>
        </div>

        {/* Floating Cookie Image (Parallax Placeholder) */}
        {/* Ideally this tracks mouse movement */}
        <div className="absolute -bottom-20 md:-bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 md:w-[600px] md:h-[400px] pointer-events-none z-0 opacity-20 md:opacity-100">
          {/* Use a div placeholder for now if no image, or a generic cookie svg */}
          <div className="w-full h-full bg-jookies-text/5 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* PRODUCT GRID (Bento Style) */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="font-heading text-4xl text-jookies-text text-center mb-16">
          Favoritos del Mes <span className="text-jookies-primary">🔥</span>
        </h2>

        {/* Categories / Tabs (Visual only for MVP) */}
        <div className="flex justify-center mb-12 space-x-2">
          <button className="px-6 py-2 bg-jookies-text text-jookies-beige rounded-full font-heading font-bold">Todos</button>
          <button className="px-6 py-2 bg-transparent text-jookies-text border border-jookies-text/20 rounded-full font-heading font-bold hover:bg-jookies-text/5 transition-colors">Individuales</button>
          <button className="px-6 py-2 bg-transparent text-jookies-text border border-jookies-text/20 rounded-full font-heading font-bold hover:bg-jookies-text/5 transition-colors">Cajas</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marketing Block 1 (Double size logic could go here, for now simple grid) */}
          <div className="md:col-span-2 bg-jookies-primary rounded-3xl p-8 flex flex-col justify-center items-start text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-heading text-4xl font-bold mb-4">¿Plan Playa? 🌊</h3>
              <p className="font-body text-lg mb-6 max-w-xs">Lleva nuestra caja x4 diseñada para compartir frente al mar.</p>
              <Button variant="secondary" className="bg-white text-jookies-primary hover:bg-jookies-beige shadow-none">
                Ver Combos
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Products */}
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

          {/* Marketing Block 2 */}
          <div className="md:col-span-1 bg-jookies-secondary rounded-3xl p-8 flex flex-col justify-center items-center text-center text-jookies-text">
            <span className="text-5xl mb-4">🛵</span>
            <h3 className="font-heading text-2xl font-bold mb-2">Envío Rápido</h3>
            <p className="text-sm opacity-80">Cobertura en todo Rodadero, Bello Horizonte y Santa Marta.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
