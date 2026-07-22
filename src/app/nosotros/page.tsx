import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
    title: "Nosotros | 23 Años de Trayectoria en Construcción",
    description: "SAVI Construcciones: más de 23 años construyendo con honestidad y rigor técnico en Sinaloa y Sonora. Conoce nuestra historia, filosofía y compromiso con tu patrimonio.",
    alternates: {
        canonical: "https://www.saviconstrucciones.com/nosotros",
    },
    openGraph: {
        title: "Nosotros | SAVI Construcciones",
        description: "Más de 23 años de trayectoria familiar y rigor técnico en la construcción del noroeste de México.",
        url: "https://www.saviconstrucciones.com/nosotros",
        type: "website",
    },
};

export default function Page() {
    return <NosotrosClient />;
}
