"use client";
import Image from 'next/image';
import { Plus, Check } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export function ProductCard({ id, name, description, price, imageUrl, category }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const [justAdded, setJustAdded] = useState(false);

    const handleAdd = () => {
        addItem({
            id,
            name,
            price,
            image_url: imageUrl,
        });
        setJustAdded(true);
        setTimeout(() => {
            setJustAdded(false);
            toggleCart();
        }, 600);
    };

    const categoryBg = category === 'box' ? 'bg-jookies-blue/10' : 'bg-jookies-yellow/10';

    return (
        <div className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 border border-transparent hover:border-jookies-text/5 hover:shadow-xl bg-white ${categoryBg}`}>
            {/* Image */}
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-heading text-base font-bold text-jookies-text leading-tight mb-0.5">
                        {name}
                    </h3>
                    <p className="text-[11px] text-jookies-text/40 line-clamp-1 mb-2">{description}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <span className="font-heading text-lg font-bold text-jookies-primary">
                        ${price.toLocaleString("es-CO")}
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
