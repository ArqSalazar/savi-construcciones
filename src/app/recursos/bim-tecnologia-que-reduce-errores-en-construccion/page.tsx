import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

const URL = "https://www.saviconstrucciones.com/recursos/bim-tecnologia-que-reduce-errores-en-construccion";
const TITLE = "BIM: La Tecnología que Reduce Errores en Construcción";
const DESCRIPTION = "Qué es el BIM, cómo la coordinación digital entre arquitectura e ingeniería reduce errores y sobrecostos, y qué documentan los estudios de la industria.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "article",
        publishedTime: "2026-07-15T00:00:00.000Z",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: "2026-07-15",
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
