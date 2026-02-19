"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner"; // If we had sonner, but let's just open cart for now

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category?: string;
}

export function ProductCard({ id, name, description, price, imageUrl, category }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const isCartOpen = useCartStore((state) => state.isOpen);

    const handleAddToCart = () => {
        addItem({
            id,
            name,
            price,
            image_url: imageUrl,
        });
        if (!isCartOpen) toggleCart();
    };

    return (
        <div className="group relative flex flex-col items-center">
            {/* Card Container */}
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-jookies-chocolate/10 transition-all duration-500">

                {/* Background Shape / Color Base (Optional, for visual pop) */}
                <div className={`absolute inset-0 opacity-10 ${category === 'box' ? 'bg-jookies-turquoise' : 'bg-jookies-gold'} transition-opacity group-hover:opacity-20`} />

                {/* Image */}
                <div className="relative w-full h-3/5 p-6 flex items-center justify-center">
                    <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                        {/* Placeholder for now if image fails, or use standard img tag for external urls if not configured in next.config */}
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
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white/90 backdrop-blur-sm p-6 flex flex-col justify-between transition-transform duration-300">
                    <div>
                        <h3 className="font-heading text-xl font-bold text-jookies-chocolate leading-tight mb-1">
                            {name}
                        </h3>
                        <p className="font-body text-xs text-gray-500 line-clamp-2">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <span className="font-heading text-lg font-bold text-jookies-orange">
                            ${price.toLocaleString('es-CO')}
                        </span>
                        <Button
                            variant="primary" // Changed to primary for better visibility
                            size="icon" // Changed to icon size
                            className="rounded-full w-10 h-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                            title="Agregar al carrito"
                            onClick={handleAddToCart}
                        >
                            <Plus className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Add Button (Always visible on touch, handled via CSS media query logic if needed, but for now simple hidden on md) */}
                <button
                    className="md:hidden absolute bottom-4 right-4 bg-jookies-turquoise text-jookies-chocolate w-10 h-10 rounded-full flex items-center justify-center shadow-md font-bold"
                    onClick={handleAddToCart}
                >
                    <Plus className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
