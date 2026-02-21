"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Instagram } from "lucide-react";

const posts = [
    {
        image: "/images/kinder-bueno.jpg",
        caption: "­ƒì¬ Kinder Bueno Cookie ÔÇö Rellena de crema Kinder y chunks de chocolate blanco real. La favorita de todos. ­ƒññ",
        likes: 287,
        comments: 34,
        date: "Hace 2 d├¡as",
    },
    {
        image: "/images/red-velvet.jpg",
        caption: "ÔØñ´©Å Red Velvet con cream cheese frosting. Cada mordida es puro terciopelo. Disponible en Santa Marta y Barranquilla ­ƒì½",
        likes: 342,
        comments: 41,
        date: "Hace 4 d├¡as",
    },
    {
        image: "/images/klim-brigadeiro.jpg",
        caption: "­ƒçº­ƒçÀ Brigadeiro meets Cookie. Klim + chocolate + leche condensada = una locura que no te puedes perder.",
        likes: 198,
        comments: 22,
        date: "Hace 1 semana",
    },
    {
        image: "/images/plan-playa-box.jpg",
        caption: "­ƒÅû´©Å Plan Playa Box ÔÇö La caja perfecta para compartir en el Rodadero. 6 galletas surtidas + bebida. ┬íP├¡dela ya!",
        likes: 415,
        comments: 56,
        date: "Hace 1 semana",
    },
    {
        image: "/images/kinder-bueno.jpg",
        caption: "­ƒÆø Abiertos TODOS los d├¡as. Fit & Fat. Porque aqu├¡ no juzgamos, solo horneamos felicidad. ­ƒì¬­ƒñÄ",
        likes: 523,
        comments: 67,
        date: "Hace 2 semanas",
    },
    {
        image: "/images/red-velvet.jpg",
        caption: "­ƒÄé ┬┐Cumplea├▒os? ┬┐Aniversario? ┬┐Un martes random? Cualquier excusa es buena para una caja de Jookies. ­ƒÆî",
        likes: 178,
        comments: 19,
        date: "Hace 2 semanas",
    },
];

// Total pages = cover + posts + back cover
const TOTAL_PAGES = posts.length + 2;

export function InstagramBook() {
    const [currentPage, setCurrentPage] = useState(0); // 0 = cover
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

    const goNext = () => {
        if (currentPage >= TOTAL_PAGES - 1 || isFlipping) return;
        setFlipDirection("next");
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentPage((p) => p + 1);
            setIsFlipping(false);
        }, 600);
    };

    const goPrev = () => {
        if (currentPage <= 0 || isFlipping) return;
        setFlipDirection("prev");
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentPage((p) => p - 1);
            setIsFlipping(false);
        }, 600);
    };

    const isCover = currentPage === 0;
    const isBackCover = currentPage === TOTAL_PAGES - 1;
    const postIndex = currentPage - 1; // -1 because page 0 is cover

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto select-none">
            {/* Book */}
            <div
                className="relative w-full"
                style={{ perspective: "1200px" }}
            >
                {/* Book body with shadow */}
                <div className="relative rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                    {/* === Flipping Page (animated overlay) === */}
                    {isFlipping && (
                        <div
                            className="absolute inset-0 z-30 overflow-hidden"
                            style={{
                                transformOrigin: flipDirection === "next" ? "left center" : "right center",
                                animation: flipDirection === "next"
                                    ? "flipNext 0.6s ease-in-out forwards"
                                    : "flipPrev 0.6s ease-in-out forwards",
                                backfaceVisibility: "hidden",
                            }}
                        >
                            {/* Show the page we're leaving */}
                            {flipDirection === "next" ? (
                                <PageContent
                                    pageIndex={currentPage}
                                    posts={posts}
                                    onOpen={goNext}
                                />
                            ) : (
                                <PageContent
                                    pageIndex={currentPage - 1}
                                    posts={posts}
                                    onOpen={goNext}
                                />
                            )}
                        </div>
                    )}

                    {/* === Current visible page === */}
                    <div className={`transition-opacity duration-100 ${isFlipping ? "opacity-80" : "opacity-100"}`}>
                        <PageContent
                            pageIndex={isFlipping && flipDirection === "next" ? currentPage + 1 : isFlipping && flipDirection === "prev" ? currentPage - 1 : currentPage}
                            posts={posts}
                            onOpen={goNext}
                        />
                    </div>
                </div>

                {/* Book spine edge */}
                <div className="absolute top-0 left-0 bottom-0 w-[6px] bg-gradient-to-r from-amber-900/30 via-amber-800/15 to-transparent rounded-l-xl z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-gradient-to-l from-black/10 to-transparent rounded-r-xl z-20 pointer-events-none" />

                {/* Page edge lines (visible pages effect) */}
                {!isCover && (
                    <div className="absolute top-1 left-0 bottom-1 w-[5px] z-10 pointer-events-none flex flex-col justify-center gap-px">
                        {Array.from({ length: Math.min(currentPage, 5) }).map((_, i) => (
                            <div key={i} className="h-full bg-gray-200 rounded-l-sm" style={{ marginLeft: `${i}px` }} />
                        ))}
                    </div>
                )}
            </div>

            {/* Page indicator & Navigation */}
            <div className="flex items-center justify-between w-full px-2">
                <button
                    onClick={goPrev}
                    disabled={currentPage === 0 || isFlipping}
                    className="flex items-center gap-1 text-sm font-medium text-jookies-text/60 hover:text-jookies-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-2 rounded-full hover:bg-jookies-primary/10"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                    {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${i === currentPage
                                ? "w-6 h-2 bg-jookies-primary"
                                : "w-2 h-2 bg-jookies-text/15"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={goNext}
                    disabled={currentPage === TOTAL_PAGES - 1 || isFlipping}
                    className="flex items-center gap-1 text-sm font-medium text-jookies-text/60 hover:text-jookies-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors p-2 rounded-full hover:bg-jookies-primary/10"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Inline CSS for flip animation */}
            <style jsx>{`
                @keyframes flipNext {
                    0% {
                        transform: rotateY(0deg);
                    }
                    100% {
                        transform: rotateY(-180deg);
                    }
                }
                @keyframes flipPrev {
                    0% {
                        transform: rotateY(0deg);
                    }
                    100% {
                        transform: rotateY(180deg);
                    }
                }
            `}</style>
        </div>
    );
}

/* ============================================================
   Page Content renderer ÔÇö determines what to show per page index
   ============================================================ */
function PageContent({ pageIndex, posts: postList, onOpen }: { pageIndex: number; posts: typeof posts; onOpen?: () => void }) {
    // Cover
    if (pageIndex <= 0) return <CoverPage onOpen={onOpen} />;
    // Back cover
    if (pageIndex >= postList.length + 1) return <BackCoverPage />;
    // Post page
    return <PostPage post={postList[pageIndex - 1]} pageNum={pageIndex} total={postList.length} />;
}

/* ============================================================
   Cover Page
   ============================================================ */
function CoverPage({ onOpen }: { onOpen?: () => void }) {
    return (
        <div
            className="aspect-[3/4] w-full bg-gradient-to-br from-jookies-primary via-pink-400 to-orange-300 flex flex-col items-center justify-center p-10 relative overflow-hidden cursor-pointer hover:brightness-105 transition-all"
            onClick={onOpen}
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            {/* Logo ÔÇö full, no cropping */}
            <div className="relative w-48 h-48 mb-6 rounded-full bg-white/90 shadow-xl backdrop-blur-sm overflow-hidden flex-shrink-0">
                <Image
                    src="/images/logo.jpeg"
                    alt="Jookies Bakery"
                    fill
                    className="object-contain mix-blend-multiply"
                    unoptimized
                />
            </div>

            <p className="text-white/80 text-center text-sm font-medium mb-6">
                Cookies & m├ís Cookies ­ƒñÄ­ƒì¬
            </p>

            <div className="flex items-center gap-2 text-white/60 text-xs">
                <Instagram className="w-4 h-4" />
                <span>@jookiesbakery</span>
            </div>

            {/* Tap to open hint */}
            <div className="absolute bottom-6 right-6 flex items-center gap-1.5 text-white/50 text-xs animate-pulse">
                <span>Abrir</span>
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>
    );
}

/* ============================================================
   Post Page
   ============================================================ */
function PostPage({ post, pageNum, total }: { post: typeof posts[0]; pageNum: number; total: number }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="aspect-[3/4] w-full bg-white flex flex-col relative">
            {/* Page texture */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_0px,transparent_4px)] pointer-events-none z-10" />

            {/* Header */}
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-jookies-primary/30 relative flex-shrink-0">
                    <Image
                        src="/images/logo.jpeg"
                        alt="Jookies"
                        fill
                        className="object-cover scale-[2] mix-blend-multiply"
                        unoptimized
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-jookies-text">jookiesbakery</p>
                    <p className="text-[10px] text-jookies-text/40">Santa Marta ­ƒì¬</p>
                </div>
                <span className="text-[10px] text-jookies-text/30 font-medium">{post.date}</span>
            </div>

            {/* Image */}
            <div
                className="relative flex-1 min-h-0 overflow-hidden cursor-pointer group"
                onDoubleClick={() => setLiked(true)}
            >
                <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    unoptimized
                />
                {liked && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Heart className="w-16 h-16 text-white fill-white drop-shadow-lg animate-ping" />
                    </div>
                )}
            </div>

            {/* Engagement */}
            <div className="px-4 py-3 space-y-1.5">
                <div className="flex items-center gap-3">
                    <button onClick={() => setLiked(!liked)} className="hover:scale-110 transition-transform">
                        <Heart className={`w-5 h-5 transition-colors ${liked ? "text-red-500 fill-red-500" : "text-jookies-text/60"}`} />
                    </button>
                    <MessageCircle className="w-5 h-5 text-jookies-text/60" />
                </div>
                <p className="font-bold text-xs text-jookies-text">
                    {liked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()} Me gusta
                </p>
                <p className="text-xs text-jookies-text/70 leading-relaxed line-clamp-3">
                    <span className="font-bold">jookiesbakery </span>
                    {post.caption}
                </p>
            </div>

            {/* Page number */}
            <div className="absolute bottom-2 right-3 text-[9px] text-jookies-text/20 font-medium">
                {pageNum} / {total}
            </div>
        </div>
    );
}

/* ============================================================
   Back Cover
   ============================================================ */
function BackCoverPage() {
    return (
        <div className="aspect-[3/4] w-full bg-gradient-to-br from-jookies-text via-gray-800 to-gray-900 flex flex-col items-center justify-center p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <Instagram className="w-12 h-12 text-white/80 mb-4" />
            <h3 className="font-heading text-2xl font-black text-white text-center mb-2">
                ┬┐Quieres ver m├ís?
            </h3>
            <p className="text-white/50 text-sm text-center mb-6">
                S├¡guenos para nuevos sabores, promos y m├ís ­ƒì¬
            </p>
            <a
                href="https://www.instagram.com/jookiesbakery/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
                <Instagram className="w-4 h-4" />
                @jookiesbakery
            </a>
            <p className="text-white/20 text-xs mt-8">3,888 seguidores ÔÇó 107 publicaciones</p>
        </div>
    );
}
