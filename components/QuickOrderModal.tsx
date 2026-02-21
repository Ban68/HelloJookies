"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Link from "next/link";

/* ─── Top picks for quick ordering ─────────────────────────────── */
const quickPicks = [
    { id: "golden-ferrero", name: "Golden Ferrero", price: 12000, image: "/images/kinder-bueno.jpg", tag: "Bestseller" },
    { id: "kinder-bueno", name: "Kinder Bueno", price: 10000, image: "/images/kinder-bueno.jpg", tag: "Bestseller" },
    { id: "nutella-lovers", name: "Nutella Lovers", price: 10000, image: "/images/red-velvet.jpg", tag: "Fan Fave" },
    { id: "lotus", name: "Lotus", price: 11000, image: "/images/red-velvet.jpg", tag: "Bestseller" },
    { id: "red-velvet", name: "Red Velvet", price: 10000, image: "/images/red-velvet.jpg", tag: "Fan Fave" },
    { id: "pistacho", name: "Pistacho", price: 12000, image: "/images/kinder-bueno.jpg", tag: "Nuevo" },
];

/* ─── Hook for managing the modal state globally ─────────────── */
let openQuickOrderFn: (() => void) | null = null;

export function openQuickOrder() {
    openQuickOrderFn?.();
}

/* ─── Modal Component ──────────────────────────────────────────── */
export function QuickOrderModal() {
    const [isOpen, setIsOpen] = useState(false);
    const addItem = useCartStore((s) => s.addItem);
    const cartItems = useCartStore((s) => s.items);
    const cartTotal = useCartStore((s) => s.total());
    const toggleCart = useCartStore((s) => s.toggleCart);

    // Register opener
    openQuickOrderFn = () => setIsOpen(true);

    const itemCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    const getQty = (id: string) => {
        const item = cartItems.find((i) => i.id === id);
        return item ? item.quantity : 0;
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="fixed inset-x-4 top-[15%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-lg md:w-full z-[70] animate-[slideUp_0.3s_ease-out]">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[75vh] flex flex-col">

                    {/* Header */}
                    <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-gray-100">
                        <div>
                            <h2 className="font-heading text-2xl font-black text-jookies-text">
                                Pedido Rápido
                            </h2>
                            <p className="text-xs text-jookies-text/40 mt-0.5">Selecciona y listo 🍪</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5 text-jookies-text/60" />
                        </button>
                    </div>

                    {/* Product list */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                        {quickPicks.map((product) => {
                            const qty = getQty(product.id);
                            return (
                                <QuickPickRow
                                    key={product.id}
                                    product={product}
                                    qty={qty}
                                    onAdd={() =>
                                        addItem({
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            image_url: product.image,
                                        })
                                    }
                                />
                            );
                        })}

                        {/* Link to full menu */}
                        <Link
                            href="/menu"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 py-3 text-sm text-jookies-primary font-medium hover:underline"
                        >
                            Ver todas las galletas
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Footer / Cart summary */}
                    {itemCount > 0 && (
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setTimeout(() => toggleCart(), 200);
                                }}
                                className="w-full bg-jookies-text text-white rounded-2xl py-4 px-6 flex items-center justify-between font-medium hover:bg-jookies-text/90 transition-colors shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Ver carrito ({itemCount})</span>
                                </div>
                                <span className="font-heading font-bold text-lg">
                                    ${cartTotal.toLocaleString("es-CO")}
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}

/* ─── Quick Pick Row ───────────────────────────────────────────── */
function QuickPickRow({
    product,
    qty,
    onAdd,
}: {
    product: typeof quickPicks[0];
    qty: number;
    onAdd: () => void;
}) {
    const increaseQuantity = useCartStore((s) => s.increaseQuantity);
    const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);

    return (
        <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-jookies-beige/50 transition-colors">
            {/* Image */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold text-sm text-jookies-text truncate">
                    {product.name}
                </h4>
                <p className="font-heading text-sm text-jookies-text/60">
                    ${product.price.toLocaleString("es-CO")}
                </p>
            </div>

            {/* Quantity control */}
            {qty === 0 ? (
                <button
                    onClick={onAdd}
                    className="w-10 h-10 rounded-full bg-jookies-text text-white flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0"
                >
                    <Plus className="w-4 h-4" />
                </button>
            ) : (
                <div className="flex items-center gap-2 bg-jookies-text rounded-full px-1 py-1 flex-shrink-0">
                    <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-white font-bold text-sm w-5 text-center">{qty}</span>
                    <button
                        onClick={() => increaseQuantity(product.id)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}
        </div>
    );
}
