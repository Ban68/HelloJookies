"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/store";

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const isCartOpen = useCartStore((s) => s.isOpen);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || isCartOpen) return null;

    return (
        <a
            href="https://wa.me/573001234567?text=Hola%20Jookies!%20Quiero%20hacer%20un%20pedido%20🍪"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contactar por WhatsApp"
        >
            <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />

                {/* Button */}
                <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:bg-green-600">
                    <MessageCircle className="w-7 h-7 text-white fill-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-jookies-text text-sm font-medium px-4 py-2 rounded-xl shadow-elevated whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    ¡Pide por WhatsApp! 🍪
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
                </div>
            </div>
        </a>
    );
}
