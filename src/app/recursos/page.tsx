import type { Metadata } from "next";
import RecursosClient from "./RecursosClient";

export const metadata: Metadata = {
    title: "Recursos y Guías Técnicas | Centro de Conocimiento SAVI",
    description: "Documentación técnica sobre construcción residencial, industrial e ingeniería estructural. Guías para proteger tu inversión patrimonial, por SAVI Construcciones.",
    alternates: {
        canonical: "https://www.saviconstrucciones.com/recursos",
    },
    openGraph: {
        title: "Recursos y Guías Técnicas | SAVI Construcciones",
        description: "Documentación técnica y guías sobre construcción residencial, industrial e ingeniería estructural.",
        url: "https://www.saviconstrucciones.com/recursos",
        type: "website",
    },
};

export default function Page() {
    return <RecursosClient />;
}
