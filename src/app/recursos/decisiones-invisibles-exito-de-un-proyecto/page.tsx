import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

const URL = "https://www.saviconstrucciones.com/recursos/decisiones-invisibles-exito-de-un-proyecto";
const TITLE = "Las Decisiones Invisibles que Definen el Éxito de un Proyecto";
const DESCRIPTION = "Por qué el éxito de una obra depende de decisiones que el cliente nunca ve: el estudio de suelo, la coordinación entre disciplinas y la documentación técnica.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "article",
        publishedTime: "2026-07-20T00:00:00.000Z",
    },
};

export default function Page() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: "2026-07-20",
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
