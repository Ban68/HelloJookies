"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { Clock, MapPin, CheckCircle, Bell } from "lucide-react";

interface Order {
    id: string;
    customer_name: string;
    customer_address: string;
    created_at: string;
    status: string;
    items?: any[]; // Simplified for MVP
}

export default function KitchenPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [lastOrderId, setLastOrderId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Fetch initial orders
    useEffect(() => {
        const fetchOrders = async () => {
            const { data } = await supabase
                .from('orders')
                .select('*')
                .eq('status', 'pending')
                .order('created_at', { ascending: true });
            if (data) setOrders(data);
        };
        fetchOrders();

        // Setup Audio
        audioRef.current = new Audio('/sounds/kitchen-bell.mp3');
    }, []);

    // Realtime Subscription
    useEffect(() => {
        const channel = supabase
            .channel('kitchen-orders')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'orders' },
                (payload) => {
                    const newOrder = payload.new as Order;
                    setOrders((prev) => [...prev, newOrder]);
                    setLastOrderId(newOrder.id);

                    // Play Sound
                    if (audioRef.current) {
                        audioRef.current.play().catch(e => console.log('Audio blocked', e));
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const completeOrder = async (orderId: string) => {
        const { error } = await supabase
            .from('orders')
            .update({ status: 'completed' })
            .eq('id', orderId);

        if (!error) {
            setOrders(prev => prev.filter(o => o.id !== orderId));
        }
    };

    return (
        <div className={`min-h-screen p-8 transition-colors duration-500 ${lastOrderId ? 'bg-jookies-primary/10' : 'bg-gray-100'}`}>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-heading font-black text-jookies-text">
                    KDS
                </h1>
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${orders.length > 0 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                    <span className="font-bold text-gray-600">{orders.length} Pedidos Pendientes</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} onComplete={completeOrder} isNew={order.id === lastOrderId} />
                ))}
            </div>
        </div>
    );
}

function OrderCard({ order, onComplete, isNew }: { order: Order, onComplete: (id: string) => void, isNew: boolean }) {
    // Cronometer logic could go here (useEffect with set interval calculating diff from created_at)

    return (
        <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-8 ${isNew ? 'border-jookies-primary animate-bounce-short' : 'border-jookies-secondary'}`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-2xl font-bold text-jookies-text">#{order.id.slice(0, 4)}</h3>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold font-mono">
                    {new Date(order.created_at).toLocaleTimeString()}
                </span>
            </div>

            <div className="space-y-2 mb-6">
                <p className="font-bold text-lg">{order.customer_name}</p>
                <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {order.customer_address}
                </div>
            </div>

            {/* Simulated Items (Since we didn't join fetching items in this simple view, assume chef knows or we fetch them) */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-400 italic text-center">Ver detalles en comanda impresa...</p>
                {/* To show items, we'd need to fetch from order_items table or use a view/join in the initial select */}
            </div>

            <Button onClick={() => onComplete(order.id)} className="w-full bg-green-500 hover:bg-green-600 text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                Despachar
            </Button>
        </div>
    );
}
