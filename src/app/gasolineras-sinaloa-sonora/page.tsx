import type { Metadata } from "next";
import GasolinerasClient from "./GasolinerasClient";

const URL = "https://www.saviconstrucciones.com/gasolineras-sinaloa-sonora";
const TITLE = "Construcción de Gasolineras en Sinaloa y Sonora";
const DESCRIPTION = "SAVI Construcciones: construcción y modernización de estaciones de servicio (gasolineras) en Sinaloa y Sonora. Gestión de permisos ASEA/CRE y ejecución Llave en Mano.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Construcción de estaciones de servicio (gasolineras)",
        "provider": {
            "@type": "LocalBusiness",
            "name": "SAVI Construcciones",
            "telephone": "+52 668 222 8008",
        },
        "areaServed": [
            { "@type": "State", "name": "Sinaloa" },
            { "@type": "State", "name": "Sonora" },
        ],
        "description": DESCRIPTION,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
            />
            <GasolinerasClient />
        </>
    );
}
