
export default function NewsletterSignup() {
    return (
        <section className="py-20 bg-jookies-chocolate relative overflow-hidden text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                    ¿Te avisamos cuando salgan del horno?
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                    Únete al Club Jookies. Recibe promos secretas, acceso anticipado a nuevos sabores y recetas exclusivas.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="flex-grow px-6 py-4 rounded-full text-jookies-chocolate focus:ring-2 focus:ring-jookies-orange outline-none"
                    />
                    <button className="bg-jookies-orange text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-orange-500/50">
                        Unirme al Club
                    </button>
                </form>

                <p className="mt-6 text-sm text-white/40">
                    Tranqui, odiamos el spam tanto como tú. Solo cosas ricas.
                </p>
            </div>
        </section>
    );
}
