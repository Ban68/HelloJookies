import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CartSidebar } from "@/components/CartSidebar";
import { QuickOrderModal } from "@/components/QuickOrderModal";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jookies Bakery — Galletas Artesanales",
  description: "Las mejores galletas artesanales de Santa Marta y Barranquilla. Horneadas con amor cada día.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-jookies-beige text-jookies-text`}
      >
        <Navbar />
        <main className="pt-40">
          {children}
        </main>
        <CartSidebar />
        <QuickOrderModal />
      </body>
    </html>
  );
}
