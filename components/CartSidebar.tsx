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
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-jookies-beige shadow-2xl z-[70] flex flex-col border-l-4 border-jookies-text"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-jookies-text/10 flex justify-between items-center bg-white/50">
                            <div>
                                <h2 className="font-heading text-2xl text-jookies-text">Tu Pedido</h2>
                                <p className="text-xs text-jookies-primary font-bold animate-pulse">
                                    ⚡ Llega en ~35 min a tu puerta
                                </p>
                            </div>
                            <button onClick={toggleCart} className="p-2 hover:bg-jookies-text/10 rounded-full transition-colors">
                                <X className="w-6 h-6 text-jookies-text" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
                                    <ShoppingBag className="w-16 h-16 text-jookies-text" />
                                    <p className="font-heading text-lg text-jookies-text">Tu bolsa está vacía :(</p>
                                    <p className="font-body text-sm">¡Agrega unas Jookies para ser feliz!</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-2xl shadow-sm border border-jookies-text/5">
                                        <div className="relative w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image_url}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-lg text-jookies-text leading-tight">{item.name}</h3>
                                            <p className="font-heading text-sm text-jookies-primary font-bold">
                                                ${(item.price * item.quantity).toLocaleString('es-CO')}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-center gap-1 bg-jookies-beige rounded-lg p-1 border border-jookies-text/5">
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="p-1 hover:bg-white rounded-md transition-colors text-jookies-text"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <span className="font-bold text-sm min-w-[20px] text-center text-jookies-text">{item.quantity}</span>
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="p-1 hover:bg-white rounded-md transition-colors text-jookies-text"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-6 bg-white border-t border-jookies-text/10 space-y-4">
                                <div className="flex justify-between items-center text-xl font-heading font-black text-jookies-text">
                                    <span>Total</span>
                                    <span>${total().toLocaleString('es-CO')}</span>
                                </div>

                                {/* Checkout Form */}
                                <div className="space-y-3">
                                    <input placeholder="Nombre" id="name" className="w-full border p-2 rounded-md border-jookies-text/20 font-body outline-none focus:border-jookies-primary" />
                                    <input placeholder="Dirección" id="address" className="w-full border p-2 rounded-md border-jookies-text/20 font-body outline-none focus:border-jookies-primary" />
                                    <input placeholder="Teléfono" id="phone" className="w-full border p-2 rounded-md border-jookies-text/20 font-body outline-none focus:border-jookies-primary" />

                                    <Button
                                        className="w-full text-lg h-14"
                                        variant="primary"
                                        onClick={async () => {
                                            // Note: In a real app we'd use a controlled form or React Hook Form.
                                            // Quick MVP logic:
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

                                <p className="text-center text-xs text-gray-400">
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
