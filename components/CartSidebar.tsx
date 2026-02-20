"use client";

import { useCartStore } from "@/lib/store";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CartSidebar() {
    const { items, isOpen, toggleCart, increaseQuantity, decreaseQuantity, removeItem, total } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-sm bg-jookies-beige shadow-2xl z-[70] flex flex-col border-l border-jookies-text/5"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-jookies-text/5 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                            <div>
                                <h2 className="font-heading text-2xl text-jookies-text font-bold">Tu Pedido</h2>
                                <p className="text-xs text-jookies-primary font-bold">
                                    ⚡ Galletas frescas en camino
                                </p>
                            </div>
                            <button onClick={toggleCart} className="p-2 hover:bg-jookies-text/5 rounded-full transition-colors">
                                <X className="w-6 h-6 text-jookies-text" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-30">
                                    <ShoppingBag className="w-16 h-16 text-jookies-text" />
                                    <p className="font-heading text-lg text-jookies-text uppercase tracking-widest">Carrito Vacío</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center bg-white/80 p-3 rounded-2xl shadow-sm border border-jookies-text/5">
                                        <div className="relative w-16 h-16 bg-jookies-beige rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image_url || '/images/logo.jpeg'}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-2 mix-blend-multiply"
                                                sizes="64px"
                                                unoptimized // Ensure local images load directly if optimization is causing issues
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-heading text-base text-jookies-text font-bold truncate">{item.name}</h3>
                                            <p className="font-heading text-sm text-jookies-primary font-bold">
                                                ${(item.price * item.quantity).toLocaleString('es-CO')}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 bg-jookies-beige rounded-full p-1 border border-jookies-text/5">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors text-jookies-text shadow-sm"
                                            >
                                                <Minus className="w-3.5 h-3.5" />
                                            </button>
                                            <span className="font-bold text-sm text-jookies-text w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors text-jookies-text shadow-sm"
                                            >
                                                <Plus className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-6 bg-white border-t border-jookies-text/5 space-y-4">
                                <div className="flex justify-between items-center text-xl font-heading font-black text-jookies-text uppercase tracking-tight">
                                    <span>Total</span>
                                    <span>${total().toLocaleString('es-CO')}</span>
                                </div>

                                {/* Checkout Form */}
                                <div className="space-y-2">
                                    <input placeholder="Nombre" id="name" className="w-full bg-jookies-beige/50 border-none px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary transition-all" />
                                    <input placeholder="Dirección" id="address" className="w-full bg-jookies-beige/50 border-none px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary transition-all" />
                                    <input placeholder="Teléfono" id="phone" className="w-full bg-jookies-beige/50 border-none px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary transition-all" />

                                    <Button
                                        className="w-full text-lg h-14 mt-4 uppercase tracking-widest font-heading shadow-none"
                                        variant="primary"
                                        onClick={async () => {
                                            const name = (document.getElementById('name') as HTMLInputElement).value;
                                            const addr = (document.getElementById('address') as HTMLInputElement).value;
                                            const phone = (document.getElementById('phone') as HTMLInputElement).value;

                                            if (!name || !addr || !phone) return alert("Por favor llena todos los datos");

                                            const { createOrder } = await import("@/app/actions");
                                            const result = await createOrder({
                                                customer_name: name,
                                                customer_address: addr,
                                                customer_phone: phone,
                                                total_amount: total(),
                                                items: items.map(i => ({
                                                    product_id: i.id,
                                                    quantity: i.quantity,
                                                    price_at_time: i.price
                                                }))
                                            });

                                            if (result.success) {
                                                alert("¡Pedido creado! Tu Jookie va en camino.");
                                                useCartStore.getState().clearCart();
                                                useCartStore.getState().toggleCart();
                                            } else {
                                                alert("Error al crear pedido");
                                            }
                                        }}
                                    >
                                        Confirmar Pedido
                                    </Button>
                                </div>

                                <p className="text-center text-[10px] text-jookies-text/40 uppercase tracking-widest">
                                    Pago contra entrega (Efectivo/Nequi).
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
