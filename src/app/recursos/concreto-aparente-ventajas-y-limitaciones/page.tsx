import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

const URL = "https://www.saviconstrucciones.com/recursos/concreto-aparente-ventajas-y-limitaciones";
const TITLE = "Concreto Aparente: Ventajas Reales y Sus Límites";
const DESCRIPTION = "Ventajas y limitaciones del concreto aparente frente a acabados tradicionales: durabilidad, acústica y la exigencia técnica de su ejecución.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "article",
        publishedTime: "2026-07-08T00:00:00.000Z",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: "2026-07-08",
        author: { "@type": "Organization", name: "SAVI Construcciones" },
        publisher: {
            "@type": "Organization",
            name: "SAVI Construcciones",
            logo: { "@type": "ImageObject", url: "https://www.saviconstrucciones.com/icon" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
            />
            <ArticleClient />
        </>
    );
}
