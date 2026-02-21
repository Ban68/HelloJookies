"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";

/* ─── Product Data ─────────────────────────────────────────────── */
interface Product {
    id: string;
    name: string;
    base: string;
    topping?: string;
    price: number;
    image: string;
    tag?: string;
}

const products: Product[] = [
    { id: "golden-ferrero", name: "Golden Ferrero", base: "Golden Ferrero", price: 12000, image: "/images/kinder-bueno.jpg", tag: "Bestseller" },
    { id: "pistacho", name: "Pistacho", base: "Pistacho", topping: "Crema de pistacho", price: 12000, image: "/images/kinder-bueno.jpg", tag: "Nuevo" },
    { id: "jookiefit-choco", name: "Jookiefit Chocolate", base: "Jookiefit chocolate", price: 13000, image: "/images/klim-brigadeiro.jpg", tag: "Fit" },
    { id: "reeses", name: "Reese's", base: "Reese's", price: 10000, image: "/images/kinder-bueno.jpg" },
    { id: "chewy-milo", name: "Chewy Milo", base: "Chewy Milo", topping: "Milo fudge", price: 8000, image: "/images/klim-brigadeiro.jpg" },
    { id: "oreo-blanca", name: "Oreo & Blanca", base: "Oreo&blanca", price: 11000, image: "/images/red-velvet.jpg" },
    { id: "caramelo-pecans", name: "Caramelo Salado & Pecans", base: "Caramelo salado & pecans", topping: "Caramelo salado", price: 8000, image: "/images/kinder-bueno.jpg" },
    { id: "nutella-lovers", name: "Nutella Lovers", base: "Nutella Lovers", price: 10000, image: "/images/red-velvet.jpg", tag: "Fan Fave" },
    { id: "choco-chips", name: "Chocolate Chips", base: "Chocolate chips", price: 8000, image: "/images/klim-brigadeiro.jpg" },
    { id: "crunchy-nucita", name: "Crunchy Nucita", base: "Crunchy Nucita", price: 8000, image: "/images/kinder-bueno.jpg" },
    { id: "lotus", name: "Lotus", base: "Lotus", price: 11000, image: "/images/red-velvet.jpg", tag: "Bestseller" },
    { id: "smores", name: "S'more's", base: "S'more's", price: 10000, image: "/images/kinder-bueno.jpg" },
    { id: "klim", name: "Klim", base: "Klim", topping: "Klim brigadeiro", price: 8000, image: "/images/klim-brigadeiro.jpg" },
    { id: "choco-jookie", name: "Chocolate Jookie", base: "Chocolate Jookie", price: 8000, image: "/images/klim-brigadeiro.jpg" },
    { id: "plain", name: "Plain", base: "Plain", price: 8000, image: "/images/red-velvet.jpg" },
    { id: "thin-biscoff", name: "Thin Biscoff – Choco", base: "Thin Biscoff - Choco", price: 9000, image: "/images/kinder-bueno.jpg" },
    { id: "kinder-bueno", name: "Kinder Bueno", base: "Kinder Bueno", price: 10000, image: "/images/kinder-bueno.jpg", tag: "Bestseller" },
    { id: "red-velvet", name: "Red Velvet", base: "Red Velvet", price: 10000, image: "/images/red-velvet.jpg", tag: "Fan Fave" },
    { id: "key-lime-pie", name: "Key Lime Pie", base: "Key Lime Pie", price: 25000, image: "/images/plan-playa-box.jpg", tag: "Edición Especial" },
];

/* ─── Filters ──────────────────────────────────────────────────── */
type FilterType = "all" | "bestsellers" | "fit" | "especial";

const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "Todas" },
    { value: "bestsellers", label: "Más pedidas" },
    { value: "fit", label: "Fit" },
    { value: "especial", label: "Edición Especial" },
];

function matchesFilter(product: Product, filter: FilterType) {
    if (filter === "all") return true;
    if (filter === "bestsellers") return product.tag === "Bestseller" || product.tag === "Fan Fave";
    if (filter === "fit") return product.tag === "Fit";
    if (filter === "especial") return product.tag === "Edición Especial";
    return true;
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function MenuPage() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const cartItems = useCartStore((s) => s.items);
    const cartTotal = useCartStore((s) => s.total());
    const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    const filtered = products.filter((p) => matchesFilter(p, activeFilter));

    return (
        <div className="min-h-screen bg-jookies-beige">
            {/* ── Header ────────────────────────────── */}
            <section className="pt-12 pb-8 px-6 text-center">
                <p className="text-jookies-primary font-heading font-bold text-sm tracking-[0.25em] uppercase mb-3">
                    Horneadas con amor
                </p>
                <h1 className="font-heading text-5xl md:text-6xl font-black text-jookies-text leading-tight">
                    Nuestras Galletas
                </h1>
                <p className="mt-4 text-jookies-text/50 max-w-md mx-auto text-sm leading-relaxed">
                    Cada galleta es preparada a mano con ingredientes seleccionados.<br className="hidden md:block" />
                    Crocante por fuera, suave por dentro.
                </p>
            </section>

            {/* ── Filters ───────────────────────────── */}
            <div className="sticky top-[160px] z-30 bg-jookies-beige/95 backdrop-blur-md border-b border-jookies-text/5">
                <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeFilter === f.value
                                        ? "bg-jookies-text text-white shadow-md"
                                        : "bg-white text-jookies-text/60 hover:bg-white hover:text-jookies-text hover:shadow-sm"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Mini cart indicator */}
                    {itemCount > 0 && (
                        <button
                            onClick={() => useCartStore.getState().toggleCart()}
                            className="flex items-center gap-2 bg-jookies-text text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform ml-4 flex-shrink-0"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span>{itemCount}</span>
                            <span className="hidden sm:inline">·</span>
                            <span className="hidden sm:inline">${cartTotal.toLocaleString("es-CO")}</span>
                        </button>
                    )}
                </div>
            </div>

            {/* ── Product Grid ──────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filtered.map((product) => (
                        <MenuCard key={product.id} product={product} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-jookies-text/40">
                        <p className="text-lg font-heading font-bold">No hay galletas en esta categoría</p>
                    </div>
                )}
            </section>

            {/* ── Bottom CTA / Info ─────────────────── */}
            <section className="border-t border-jookies-text/5 bg-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h2 className="font-heading text-2xl font-bold text-jookies-text mb-3">
                        ¿No encuentras lo que buscas?
                    </h2>
                    <p className="text-jookies-text/50 text-sm mb-6">
                        Escríbenos por Instagram y te ayudamos con pedidos especiales, cajas personalizadas y más.
                    </p>
                    <a
                        href="https://www.instagram.com/jookiesbakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold text-sm px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                        @jookiesbakery
                    </a>
                </div>
            </section>
        </div>
    );
}

/* ─── Menu Card ─────────────────────────────────────────────────── */
function MenuCard({ product }: { product: Product }) {
    const addItem = useCartStore((s) => s.addItem);
    const [justAdded, setJustAdded] = useState(false);

    const handleAdd = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.image,
        });
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1200);
    };

    const tagColors: Record<string, string> = {
        "Bestseller": "bg-jookies-yellow text-jookies-text",
        "Nuevo": "bg-jookies-green text-white",
        "Fit": "bg-emerald-100 text-emerald-700",
        "Fan Fave": "bg-jookies-pink/20 text-jookies-pink",
        "Edición Especial": "bg-amber-100 text-amber-700",
    };

    return (
        <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-jookies-text/5">
            {/* Tag */}
            {product.tag && (
                <div className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${tagColors[product.tag] || "bg-gray-100 text-gray-600"}`}>
                    {product.tag}
                </div>
            )}

            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-jookies-beige/50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                />
                {/* Hover overlay with add button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-heading text-base font-bold text-jookies-text leading-tight mb-0.5">
                        {product.name}
                    </h3>
                    {product.topping && (
                        <p className="text-[11px] text-jookies-text/40 mb-2">
                            con {product.topping}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-2">
                    <span className="font-heading text-lg font-bold text-jookies-text">
                        ${product.price.toLocaleString("es-CO")}
                    </span>

                    <button
                        onClick={handleAdd}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${justAdded
                                ? "bg-emerald-500 text-white scale-110"
                                : "bg-jookies-beige text-jookies-text hover:bg-jookies-text hover:text-white"
                            }`}
                    >
                        {justAdded ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <Plus className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
