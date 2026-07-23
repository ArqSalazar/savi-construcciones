import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

const URL = "https://www.saviconstrucciones.com/recursos/etapas-de-una-obra-de-principio-a-fin";
const TITLE = "Etapas de una Obra: de la Excavación a la Entrega";
const DESCRIPTION = "Guía completa de las fases de una construcción profesional: preliminares, cimentación, estructura, instalaciones, acabados y entrega documentada.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "article",
        publishedTime: "2026-07-01T00:00:00.000Z",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: "2026-07-01",
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
