import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
    title: "Contacto | Solicita una Evaluación Técnica de tu Proyecto",
    description: "Agenda una videollamada técnica gratuita con SAVI Construcciones. Oficinas en Los Mochis, Sinaloa y Navojoa, Sonora. Atención inmediata por WhatsApp.",
    alternates: {
        canonical: "https://www.saviconstrucciones.com/contacto",
    },
    openGraph: {
        title: "Contacto | SAVI Construcciones",
        description: "Solicita una evaluación técnica de tu proyecto. Oficinas en Los Mochis, Sinaloa y Navojoa, Sonora.",
        url: "https://www.saviconstrucciones.com/contacto",
        type: "website",
    },
};

export default function Page() {
    return <ContactoClient />;
}
