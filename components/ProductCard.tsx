"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/store";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type ProductCardProps = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
};

export function ProductCard({ id, name, description, price, imageUrl, category }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addItem({ id, name, price, image_url: imageUrl });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-jookies-text/5 h-full">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-jookies-beige">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                {category === "box" && (
                    <div className="absolute top-3 left-3 bg-jookies-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">
                        🎁 Caja
                    </div>
                )}

                {/* Quick add button on hover */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAdd}
                    className="absolute bottom-3 right-3 z-10 bg-white text-jookies-text w-11 h-11 rounded-full flex items-center justify-center shadow-elevated opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-jookies-primary hover:text-white translate-y-2 group-hover:translate-y-0"
                >
                    {added ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
                </motion.button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-heading text-lg font-bold text-jookies-text mb-1.5 leading-tight group-hover:text-jookies-primary transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-jookies-text/50 mb-4 line-clamp-2 leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-jookies-text/5">
                    <span className="font-heading text-xl font-black text-jookies-text">
                        ${price.toLocaleString("es-CO")}
                    </span>
                    <button
                        onClick={handleAdd}
                        className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 ${added
                            ? "bg-jookies-green text-white"
                            : "bg-jookies-beige text-jookies-text hover:bg-jookies-primary hover:text-white"
                            }`}
                    >
                        {added ? "✓ Agregado" : "+ Agregar"}
                    </button>
                </div>
            </div>
        </div>
    );
}
