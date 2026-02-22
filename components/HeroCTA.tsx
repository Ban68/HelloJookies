"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { openQuickOrder } from "@/components/QuickOrderModal";

export function HeroCTA() {
    return (
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-300">
            <Button
                size="lg"
                variant="primary"
                className="shadow-none hover:scale-105 transition-transform px-10"
                onClick={openQuickOrder}
            >
                Pedir Ahora 🍪
            </Button>
            <Link href="/menu">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver Menú
                </Button>
            </Link>
        </div>
    );
}
