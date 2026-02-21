"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { openQuickOrder } from "@/components/QuickOrderModal";

export function HeroCTA() {
    return (
        <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
            <Button
                size="lg"
                variant="primary"
                className="shadow-none hover:scale-105 transition-transform"
                onClick={openQuickOrder}
            >
                Pedir Ahora
            </Button>
            <Link href="/menu">
                <Button size="lg" variant="outline">
                    Ver Menú
                </Button>
            </Link>
        </div>
    );
}
