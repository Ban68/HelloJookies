"use client";

import { useCartStore } from "@/lib/store";
import { X, Minus, Plus, ShoppingBag, Check, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CartSidebar() {
    const { items, isOpen, toggleCart, increaseQuantity, decreaseQuantity, removeItem, total } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isMounted) return null;

    const handleOrder = async () => {
        const name = (document.getElementById('cart-name') as HTMLInputElement)?.value;
        const addr = (document.getElementById('cart-address') as HTMLInputElement)?.value;
        const phone = (document.getElementById('cart-phone') as HTMLInputElement)?.value;

        if (!name || !addr || !phone) return;

        setIsSubmitting(true);

        try {
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
                setOrderSuccess(true);
                useCartStore.getState().clearCart();
                setTimeout(() => {
                    setOrderSuccess(false);
                    toggleCart();
                }, 3000);
            } else {
                // Show error inline instead of alert
                setIsSubmitting(false);
            }
        } catch {
            setIsSubmitting(false);
        }
    };

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
                        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-sm bg-jookies-beige shadow-2xl z-[70] flex flex-col border-l border-jookies-text/5"
                    >
                        {/* Success Overlay */}
                        <AnimatePresence>
                            {orderSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center text-center px-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                                        className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <Check className="w-10 h-10 text-emerald-600" />
                                    </motion.div>
                                    <h3 className="font-heading text-2xl font-black text-jookies-text mb-2">
                                        ¡Pedido Creado! 🎉
                                    </h3>
                                    <p className="text-jookies-text/50 text-sm">
                                        Tu Jookie va en camino. ¡Prepárate para algo delicioso!
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Header */}
                        <div className="p-5 border-b border-jookies-text/5 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                            <div>
                                <h2 className="font-heading text-xl text-jookies-text font-bold">Tu Pedido</h2>
                                <p className="text-[11px] text-jookies-primary font-bold mt-0.5">
                                    ⚡ Galletas frescas en camino
                                </p>
                            </div>
                            <button onClick={toggleCart} className="p-2 hover:bg-jookies-text/5 rounded-full transition-colors">
                                <X className="w-5 h-5 text-jookies-text" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-3">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                    <div className="w-20 h-20 bg-jookies-text/5 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-8 h-8 text-jookies-text/20" />
                                    </div>
                                    <div>
                                        <p className="font-heading text-base text-jookies-text/40 font-bold">Carrito Vacío</p>
                                        <p className="text-xs text-jookies-text/25 mt-1">Agrega galletas para comenzar</p>
                                    </div>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        className="flex gap-3 items-center bg-white p-3 rounded-2xl shadow-sm border border-jookies-text/5 hover:shadow-md transition-shadow"
                                    >
                                        <div className="relative w-14 h-14 bg-jookies-beige rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image_url || '/images/logo.jpeg'}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-1.5 mix-blend-multiply"
                                                sizes="56px"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-heading text-sm text-jookies-text font-bold truncate">{item.name}</h3>
                                            <p className="font-heading text-sm text-jookies-primary font-bold">
                                                ${(item.price * item.quantity).toLocaleString('es-CO')}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 bg-jookies-beige rounded-full p-1 border border-jookies-text/5">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors text-jookies-text"
                                            >
                                                <Minus className="w-3.5 h-3.5" />
                                            </button>
                                            <span className="font-bold text-sm text-jookies-text w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors text-jookies-text"
                                            >
                                                <Plus className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-5 bg-white border-t border-jookies-text/5 space-y-3">
                                <div className="flex justify-between items-center text-lg font-heading font-black text-jookies-text uppercase tracking-tight">
                                    <span>Total</span>
                                    <span>${total().toLocaleString('es-CO')}</span>
                                </div>

                                {/* Checkout Form */}
                                <div className="space-y-2">
                                    <input
                                        placeholder="Nombre"
                                        id="cart-name"
                                        className="w-full bg-jookies-beige/50 border border-jookies-text/5 px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary focus:border-transparent transition-all outline-none"
                                    />
                                    <input
                                        placeholder="Dirección"
                                        id="cart-address"
                                        className="w-full bg-jookies-beige/50 border border-jookies-text/5 px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary focus:border-transparent transition-all outline-none"
                                    />
                                    <input
                                        placeholder="Teléfono"
                                        id="cart-phone"
                                        className="w-full bg-jookies-beige/50 border border-jookies-text/5 px-4 py-3 rounded-xl font-body text-sm focus:ring-2 focus:ring-jookies-primary focus:border-transparent transition-all outline-none"
                                    />

                                    <Button
                                        className="w-full text-base h-13 mt-3 uppercase tracking-widest font-heading shadow-none"
                                        variant="primary"
                                        onClick={handleOrder}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                                Procesando...
                                            </span>
                                        ) : (
                                            "Confirmar Pedido"
                                        )}
                                    </Button>
                                </div>

                                <p className="text-center text-[10px] text-jookies-text/30 uppercase tracking-widest">
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
