import type { Metadata } from "next";
import LosMochisClient from "./LosMochisClient";

const URL = "https://www.saviconstrucciones.com/constructora-los-mochis";
const TITLE = "Constructora en Los Mochis, Sinaloa";
const DESCRIPTION = "SAVI Construcciones: constructora con matriz en Los Mochis, Sinaloa. Más de 25 años en residencias, naves industriales, comercial y estaciones de servicio en la región.";

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
        "@type": "LocalBusiness",
        "name": "SAVI Construcciones",
        "url": URL,
        "telephone": "+52 668 815 5975",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cjon. Domingo Rubi 517, La Cuchilla",
            "addressLocality": "Los Mochis",
            "addressRegion": "Sinaloa",
            "postalCode": "81250",
            "addressCountry": "MX",
        },
        "areaServed": { "@type": "City", "name": "Los Mochis" },
        "description": DESCRIPTION,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
            />
            <LosMochisClient />
        </>
    );
}
