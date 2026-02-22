"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, ShoppingBag, Sparkles } from "lucide-react";
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

const filters: { value: FilterType; label: string; emoji?: string }[] = [
    { value: "all", label: "Todas", emoji: "🍪" },
    { value: "bestsellers", label: "Más pedidas", emoji: "🔥" },
    { value: "fit", label: "Fit", emoji: "💪" },
    { value: "especial", label: "Edición Especial", emoji: "✨" },
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
            {/* ── Hero Banner ────────────────────── */}
            <section className="relative pt-12 pb-16 px-6 text-center overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-jookies-primary/8 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-jookies-secondary/8 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-jookies-primary/10 rounded-full text-jookies-primary text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in-up">
                        <Sparkles className="w-3.5 h-3.5" />
                        Horneadas con amor
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl font-black text-jookies-text leading-[0.95] mb-4 animate-fade-in-up delay-100">
                        Nuestras <span className="text-jookies-primary">Galletas</span>
                    </h1>

                    <p className="mt-4 text-jookies-text/40 max-w-lg mx-auto text-sm leading-relaxed animate-fade-in-up delay-200">
                        Cada galleta es preparada a mano con ingredientes seleccionados.
                        <br className="hidden md:block" />
                        Crocante por fuera, suave por dentro.
                    </p>
                </div>
            </section>

            {/* ── Filters ───────────────────────────── */}
            <div className="sticky top-28 z-30 glass border-b border-jookies-text/5">
                <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${activeFilter === f.value
                                    ? "bg-jookies-text text-white shadow-md scale-105"
                                    : "bg-white text-jookies-text/50 hover:bg-white hover:text-jookies-text hover:shadow-sm"
                                    }`}
                            >
                                <span className="text-xs">{f.emoji}</span>
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Mini cart indicator */}
                    {itemCount > 0 && (
                        <button
                            onClick={() => useCartStore.getState().toggleCart()}
                            className="flex items-center gap-2 bg-jookies-text text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-all duration-300 ml-4 flex-shrink-0"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span>{itemCount}</span>
                            <span className="hidden sm:inline text-white/40">·</span>
                            <span className="hidden sm:inline">${cartTotal.toLocaleString("es-CO")}</span>
                        </button>
                    )}
                </div>
            </div>

            {/* ── Product Grid ──────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {filtered.map((product, index) => (
                        <MenuCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-jookies-text/40">
                        <span className="text-5xl block mb-4">🍪</span>
                        <p className="text-lg font-heading font-bold">No hay galletas en esta categoría</p>
                        <p className="text-sm mt-2">Prueba con otra categoría o mira todas</p>
                    </div>
                )}
            </section>

            {/* ── Bottom CTA / Info ─────────────────── */}
            <section className="border-t border-jookies-text/5 bg-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h2 className="font-heading text-2xl font-bold text-jookies-text mb-3">
                        ¿No encuentras lo que buscas?
                    </h2>
                    <p className="text-jookies-text/40 text-sm mb-6">
                        Escríbenos por Instagram y te ayudamos con pedidos especiales, cajas personalizadas y más.
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

/* ─── Menu Card ─────────────────────────────────────────────────── */
function MenuCard({ product, index }: { product: Product; index: number }) {
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
        "Bestseller": "bg-jookies-yellow/80 text-jookies-text",
        "Nuevo": "bg-jookies-green text-white",
        "Fit": "bg-emerald-100 text-emerald-700",
        "Fan Fave": "bg-jookies-pink/20 text-jookies-pink",
        "Edición Especial": "bg-amber-100 text-amber-700",
    };

    return (
        <div
            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-jookies-text/5 hover:-translate-y-1"
            style={{ animationDelay: `${index * 50}ms` }}
        >
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
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-heading text-base font-bold text-jookies-text leading-tight mb-0.5">
                        {product.name}
                    </h3>
                    {product.topping && (
                        <p className="text-[11px] text-jookies-text/35 mb-2">
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
                            : "bg-jookies-beige text-jookies-text hover:bg-jookies-primary hover:text-white hover:scale-110"
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
