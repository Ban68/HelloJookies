import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CartSidebar } from "@/components/CartSidebar";
import { QuickOrderModal } from "@/components/QuickOrderModal";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hello Jookies | El antojo de Santa Marta",
  description: "Galletas rellenas, toppings abundantes y delivery rápido en Santa Marta. Las mejores cookies artesanales de la costa caribe colombiana.",
  keywords: "galletas, cookies, Santa Marta, Barranquilla, Bogotá, delivery, artesanales, Jookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable} antialiased bg-jookies-beige text-jookies-chocolate`}>
        <Navbar />
        <CartSidebar />
        <QuickOrderModal />
        <main className="pt-28 min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
