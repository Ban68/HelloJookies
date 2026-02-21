import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// Mock Data (Same as original page for now, but imported or passed as props ideally)
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
    return (
        <section id="marketplace" className="py-24 bg-jookies-beige relative">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">El &quot;Cookie Jar&quot;</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text mt-2">
                            Favoritos de la Semana
                        </h2>
                        <p className="text-jookies-text/70 mt-4 text-lg">
                            Estas son las que todos se están llevando. Pide la tuya antes de que se acaben.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/menu">
                            <Button variant="outline" className="border-jookies-text text-jookies-text hover:bg-jookies-text hover:text-white transition-colors">
                                Ver Menú Completo →
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PREVIEW_PRODUCTS.map((product) => (
                        <div key={product.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/menu">
                        <Button className="w-full bg-jookies-text text-white py-4 rounded-xl shadow-lg">
                            Ver Menú Completo
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
