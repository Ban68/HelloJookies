"use server";

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Admin client for server-side operations (bypassing RLS if needed, though public role allows insert)
// Ideally use a service role key for admin tasks, but for creating orders, anon key might suffice if policy allows.
// However, creating order items *transactionally* or securely might need service role or just standard client.
// Let's use standard env vars for now.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Or SERVICE_ROLE_KEY if defined
const supabase = createClient(supabaseUrl, supabaseKey);

export interface OrderItemInput {
    product_id: string;
    quantity: number;
    price_at_time: number;
}

export interface CreateOrderInput {
    customer_name: string;
    customer_phone: string;
    customer_address: string;
    total_amount: number;
    items: OrderItemInput[];
}

export async function createOrder(data: CreateOrderInput) {
    try {
        // 1. Create the Order
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                customer_name: data.customer_name,
                customer_phone: data.customer_phone,
                customer_address: data.customer_address,
                total_amount: data.total_amount,
                status: 'pending',
            })
            .select()
            .single();

        if (orderError) throw new Error(`Order creation failed: ${orderError.message}`);
        if (!order) throw new Error("Order creation failed: No data returned");

        // 2. Create Order Items
        const orderItems = data.items.map((item) => ({
            order_id: order.id,
            product_id: item.product_id,
            quantity: item.quantity,
            price_at_time: item.price_at_time,
        }));

        const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

        if (itemsError) {
            // In a real app, we might want to rollback the order here or use a stored procedure/RPC.
            // For MVP, we'll just throw.
            console.error("Order items creation failed:", itemsError);
            throw new Error(`Order items creation failed: ${itemsError.message}`);
        }

        return { success: true, orderId: order.id };

    } catch (error: any) {
        console.error("Error creating order:", error);
        return { success: false, error: error.message };
    }
}
