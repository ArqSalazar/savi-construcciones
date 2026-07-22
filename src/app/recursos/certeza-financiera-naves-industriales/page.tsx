import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

const URL = "https://www.saviconstrucciones.com/recursos/certeza-financiera-naves-industriales";
const TITLE = "Certeza Financiera: Eficiencia en Naves Industriales";
const DESCRIPTION = "Cómo la precisión técnica y el control de obra eliminan los sobrecostos inesperados en proyectos industriales de gran escala.";

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
        type: "article",
        publishedTime: "2026-02-01T00:00:00.000Z",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: "2026-02-01",
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
