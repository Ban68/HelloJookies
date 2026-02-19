-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Enum for Order Status
create type order_status as enum ('pending', 'preparing', 'ready', 'delivering', 'completed');

-- Products Table (Cookies & Mixes)
create table products (
  id uuid default gen_random_uuid() primary key,
  name text not null, -- E.g: "Klim Brigadeiro", "Red Velvet"
  description text,
  price integer not null, -- In COP (e.g. 12000)
  image_url text,
  category text, -- 'unit', 'box_6', 'box_12'
  stock_quantity integer default 0, -- Finished product inventory
  is_active boolean default true
);

-- Ingredients Table (For future inventory control)
create table ingredients (
  id uuid default gen_random_uuid() primary key,
  name text not null, -- E.g: "Harina", "Nutella", "Kinder Bueno"
  unit text, -- 'kg', 'gr', 'units'
  current_stock float default 0
);

-- Recipes Table (Pivot table to deduct ingredients)
create table recipes (
  product_id uuid references products(id) on delete cascade,
  ingredient_id uuid references ingredients(id) on delete cascade,
  quantity_required float, -- How much of this ingredient 1 cookie uses
  primary key (product_id, ingredient_id)
);

-- Orders Table
create table orders (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  status order_status default 'pending',
  customer_name text,
  customer_phone text,
  customer_address text,
  total_amount integer
);

-- Order Items Table
create table order_items (
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  quantity integer,
  price_at_time integer -- Price at time of purchase
);

-- Row Level Security (RLS) Setup
alter table products enable row level security;
alter table ingredients enable row level security;
alter table recipes enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- Policies

-- Products: Public Read, Admin Write
create policy "Public products are viewable by everyone." 
  on products for select using (true);

-- Orders: Public Create (Anyone can order), Admin Read/Update
create policy "Anyone can create orders." 
  on orders for insert with check (true);

create policy "Admins can view all orders." 
  on orders for select using (true); -- Ideally restrict to authenticated admin role later

create policy "Admins can update orders." 
  on orders for update using (true); -- Ideally restrict to authenticated admin role later

-- Order Items: Public Create, Admin Read
create policy "Anyone can create order items." 
  on order_items for insert with check (true);

create policy "Admins can view all order items." 
  on order_items for select using (true);

-- Realtime Setup
-- Supabase Realtime needs to be enabled for the 'orders' table specifically for INSERTs 
-- so the kitchen dashboard can hear them.
alter publication supabase_realtime add table orders;

-- Seed Data (Optional - For testing)
insert into products (name, description, price, category, stock_quantity, image_url) values
('Klim Brigadeiro', 'Deliciosa galleta rellena de brigadeiro de klim.', 12000, 'unit', 50, '/images/klim.jpg'),
('Red Velvet', 'Clásica red velvet con relleno de queso crema.', 12000, 'unit', 50, '/images/red-velvet.jpg'),
('Kinder Bueno', 'Nuestra estrella. Rellena de crema de avellanas y trozos de Kinder.', 14000, 'unit', 40, '/images/kinder.jpg'),
('Plan Playa x4', 'Caja mixta con 4 galletas a elección. Perfecta para compartir.', 45000, 'box_4', 20, '/images/box.jpg');
