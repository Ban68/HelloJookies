import Link from "next/link";
import Image from "next/image";

const ARTICLES = [
    {
        id: 1,
        title: "5 Maneras de comer tu Jookie",
        category: "Tips",
        image: "/images/red-velvet.jpg",
        excerpt: "¿Sabías que si la calientas 10 segundos en el microondas pasa a otro nivel? Descubre más hacks aquí.",
        color: "bg-jookies-primary/10",
    },
    {
        id: 2,
        title: "El maridaje perfecto: Jookies & Café",
        category: "Cultura",
        image: "/images/kinder-bueno.jpg",
        excerpt: "Visitamos las mejores cafeterías de Santa Marta para encontrar la pareja ideal para nuestra Red Velvet.",
        color: "bg-jookies-secondary/10",
    },
    {
        id: 3,
        title: "Detrás de escena: Día de Horneado",
        category: "Inside",
        image: "/images/klim-brigadeiro.jpg",
        excerpt: "Acompáñanos un lunes cualquiera en nuestra cocina. Harina, risas y mucho chocolate.",
        color: "bg-jookies-beige",
    }
];

export default function ContentGrid() {
    return (
        <section className="py-24 bg-jookies-beige">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-jookies-primary font-bold tracking-wider uppercase text-sm">Blog & Comunidad</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-jookies-text mt-2">La Vida es Dulce 🍭</h2>
                    <p className="text-jookies-text/60 mt-4 max-w-2xl mx-auto text-lg">
                        Historias, tips y curiosidades para los amantes de las galletas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ARTICLES.map((article) => (
                        <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className={`relative h-64 overflow-hidden ${article.color}`}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-jookies-text uppercase tracking-wide z-10">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-heading text-2xl font-bold text-jookies-text mb-3 group-hover:text-jookies-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-jookies-text/70 leading-relaxed mb-6 flex-grow">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-jookies-primary font-bold group-hover:underline decoration-2 underline-offset-4">
                                    Leer Mas
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
