"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Plus, Check } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useState } from "react";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category?: string;
    index?: number;
}

export function ProductCard({ id, name, description, price, imageUrl, category, index = 0 }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const [justAdded, setJustAdded] = useState(false);

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            price,
            image_url: imageUrl,
        });
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1200);
    };

    return (
        <div
            className="group relative flex flex-col items-center"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Card Container */}
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-jookies-text/5 hover:border-jookies-text/10 transition-all duration-500 hover:-translate-y-1">

                {/* Background Color Base */}
                <div className={`absolute inset-0 opacity-5 ${category === 'box' ? 'bg-jookies-blue' : 'bg-jookies-yellow'} transition-opacity group-hover:opacity-15`} />

                {/* Image */}
                <div className="relative w-full h-3/5 p-6 flex items-center justify-center">
                    <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-between transition-transform duration-300">
                    <div>
                        <h3 className="font-heading text-lg font-bold text-jookies-text leading-tight mb-1">
                            {name}
                        </h3>
                        <p className="font-body text-xs text-jookies-text/40 line-clamp-2">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <span className="font-heading text-lg font-bold text-jookies-primary">
                            ${price.toLocaleString('es-CO')}
                        </span>
                        <button
                            className={`relative z-20 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 pointer-events-auto ${justAdded
                                    ? "bg-emerald-500 text-white scale-110"
                                    : "bg-jookies-beige text-jookies-text hover:bg-jookies-primary hover:text-white hover:scale-110"
                                }`}
                            title="Agregar al carrito"
                            onClick={handleAddToCart}
                        >
                            {justAdded ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <Plus className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
