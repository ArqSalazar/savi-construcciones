import type { Metadata } from "next";
import NavesClient from "./NavesClient";

const URL = "https://www.saviconstrucciones.com/naves-industriales-sonora";
const TITLE = "Construcción de Naves Industriales en Sonora";
const DESCRIPTION = "SAVI Construcciones: cimentaciones, estructura metálica y pisos súper planos para naves industriales en Sonora. Ejecución desde nuestra sucursal en Navojoa.";

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
        "serviceType": "Construcción de naves industriales",
        "provider": {
            "@type": "LocalBusiness",
            "name": "SAVI Construcciones",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. Sociedad Mutualista 1312, Deportiva",
                "addressLocality": "Navojoa",
                "addressRegion": "Sonora",
                "postalCode": "85860",
                "addressCountry": "MX",
            },
            "telephone": "+52 642 427 3489",
        },
        "areaServed": { "@type": "State", "name": "Sonora" },
        "description": DESCRIPTION,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
            />
            <NavesClient />
        </>
    );
}
