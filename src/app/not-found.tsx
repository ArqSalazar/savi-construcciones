import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Página no encontrada",
    robots: "noindex",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] section-padding text-center">
            <span className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_0_6px_rgba(29,78,216,.10)]" />
                Error 404
            </span>

            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.03em] text-ink uppercase">
                Plano no<br />
                <span className="opacity-40 italic">encontrado.</span>
            </h1>

            <p className="mt-6 max-w-md text-gray-500 text-[17px] font-light leading-relaxed">
                La página que buscas no existe o fue movida. Regresemos a terreno conocido.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/" className="btn-apple">
                    Volver al Inicio
                </Link>
                <Link href="/contacto" className="btn-ghost text-gray-500 hover:text-ink">
                    Contactar a SAVI
                </Link>
            </div>
        </div>
    );
}
