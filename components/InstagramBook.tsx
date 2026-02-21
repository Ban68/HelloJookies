"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Instagram } from "lucide-react";

const posts = [
    {
        image: "/images/kinder-bueno.jpg",
        caption: "🍪 Kinder Bueno Cookie — Rellena de crema Kinder y chunks de chocolate blanco real. La favorita de todos. 🤤",
        likes: 287,
        comments: 34,
        date: "Hace 2 días",
    },
    {
        image: "/images/red-velvet.jpg",
        caption: "❤️ Red Velvet con cream cheese frosting. Cada mordida es puro terciopelo. Disponible en Santa Marta y Barranquilla 🍫",
        likes: 342,
        comments: 41,
        date: "Hace 4 días",
    },
    {
        image: "/images/klim-brigadeiro.jpg",
        caption: "🇧🇷 Brigadeiro meets Cookie. Klim + chocolate + leche condensada = una locura que no te puedes perder. #JookiesBakery",
        likes: 198,
        comments: 22,
        date: "Hace 1 semana",
    },
    {
        image: "/images/plan-playa-box.jpg",
        caption: "🏖️ Plan Playa Box — La caja perfecta para compartir en el Rodadero. 6 galletas surtidas + bebida. ¡Pídela ya!",
        likes: 415,
        comments: 56,
        date: "Hace 1 semana",
    },
    {
        image: "/images/kinder-bueno.jpg",
        caption: "💛 Abiertos TODOS los días. Fit & Fat. Porque aquí no juzgamos, solo horneamos felicidad. 🍪🤎",
        likes: 523,
        comments: 67,
        date: "Hace 2 semanas",
    },
    {
        image: "/images/red-velvet.jpg",
        caption: "🎂 ¿Cumpleaños? ¿Aniversario? ¿Un martes random? Cualquier excusa es buena para una caja de Jookies. Escríbenos 💌",
        likes: 178,
        comments: 19,
        date: "Hace 2 semanas",
    },
];

export function InstagramBook() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(posts.length / 2);

    const goNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const goPrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const leftPost = posts[currentPage * 2];
    const rightPost = posts[currentPage * 2 + 1];

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Book Container */}
            <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">

                {/* Book Header — Instagram-style */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50/50">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-jookies-primary relative flex-shrink-0">
                        <Image
                            src="/images/logo.jpeg"
                            alt="Jookies"
                            fill
                            className="object-cover scale-[2] mix-blend-multiply"
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-jookies-text">jookiesbakery</p>
                        <p className="text-xs text-jookies-text/50">Santa Marta & Barranquilla 🍪</p>
                    </div>
                    <a
                        href="https://www.instagram.com/jookiesbakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <Instagram className="w-3.5 h-3.5" />
                        Seguir
                    </a>
                </div>

                {/* Pages */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-100 min-h-[420px]">
                    {/* Left Page */}
                    {leftPost && (
                        <PostCard post={leftPost} />
                    )}

                    {/* Right Page */}
                    {rightPost ? (
                        <PostCard post={rightPost} />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-jookies-beige/30 to-white">
                            <div className="w-20 h-20 rounded-full bg-jookies-primary/10 flex items-center justify-center mb-4">
                                <Instagram className="w-10 h-10 text-jookies-primary" />
                            </div>
                            <p className="font-heading font-bold text-jookies-text text-center text-lg mb-1">¿Quieres ver más?</p>
                            <p className="text-jookies-text/50 text-sm text-center mb-4">Síguenos en Instagram</p>
                            <a
                                href="https://www.instagram.com/jookiesbakery/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-jookies-primary font-bold text-sm hover:underline"
                            >
                                @jookiesbakery →
                            </a>
                        </div>
                    )}
                </div>

                {/* Navigation Footer */}
                <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/50">
                    <button
                        onClick={goPrev}
                        disabled={currentPage === 0}
                        className="flex items-center gap-1 text-sm font-medium text-jookies-text/70 hover:text-jookies-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Anterior
                    </button>

                    <div className="flex gap-1.5">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentPage
                                        ? "bg-jookies-primary scale-125"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goNext}
                        disabled={currentPage === totalPages - 1}
                        className="flex items-center gap-1 text-sm font-medium text-jookies-text/70 hover:text-jookies-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        Siguiente
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* "Spine" shadow for Book effect */}
            <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-transparent via-black/10 to-transparent rounded-full pointer-events-none z-10" />
        </div>
    );
}

function PostCard({ post }: { post: typeof posts[0] }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="flex flex-col">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100 cursor-pointer group"
                onDoubleClick={() => setLiked(true)}>
                <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                />
                {/* Double-tap heart animation */}
                {liked && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Heart className="w-20 h-20 text-white fill-white drop-shadow-lg animate-ping" />
                    </div>
                )}
            </div>

            {/* Engagement */}
            <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-2">
                    <button
                        onClick={() => setLiked(!liked)}
                        className="hover:scale-110 transition-transform"
                    >
                        <Heart
                            className={`w-6 h-6 transition-colors ${liked ? "text-red-500 fill-red-500" : "text-jookies-text/70"
                                }`}
                        />
                    </button>
                    <MessageCircle className="w-6 h-6 text-jookies-text/70" />
                </div>

                <p className="font-bold text-sm text-jookies-text mb-1">
                    {liked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()} Me gusta
                </p>

                <p className="text-sm text-jookies-text/80 leading-relaxed flex-1">
                    <span className="font-bold">jookiesbakery</span>{" "}
                    {post.caption}
                </p>

                <p className="text-xs text-jookies-text/40 mt-2">{post.date}</p>
            </div>
        </div>
    );
}
