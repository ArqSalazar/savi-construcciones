import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintBackground from "@/components/BlueprintBackground";
import Preloader from "@/components/Preloader";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Constructora Líder en Gasolineras e Iniciativa Privada | SAVI",
  description: "Líderes en construcción de gasolineras (20+ estaciones construidas). Especialistas en naves industriales, casas premium, oficinas, restaurantes, plazas y obra hidráulica en México.",
  keywords: ["constructora gasolineras", "construccion estaciones de servicio", "20+ gasolineras construidas", "constructora iniciativa privada", "edificación industrial sinaloa", "naves industriales sonora", "constructoras ejecutivas", "casas premium", "plazas comerciales", "oficinas", "restaurantes", "obra hidraulica", "edificios", "mexico", "noroeste"],
  robots: "index,follow,max-image-preview:large",
  openGraph: {
    title: "SAVI Construcciones | Líder en Gasolineras & Infraestructura Privada",
    description: "Con más de 20 gasolineras construidas, somos el socio estratégico B2B en México. Desarrollador llave en mano de naves industriales, casas premium, oficinas, restaurantes, plazas comerciales y edificios.",
    url: "https://www.saviconstrucciones.com/",
    siteName: "SAVI Construcciones",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.saviconstrucciones.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAVI Construcciones - Infraestructura Industrial y Gasolineras",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema JSON-LD exactly like original HTML
  const schemaScript = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "SAVI Construcciones",
    "url": "https://www.saviconstrucciones.com/",
    "image": "https://www.saviconstrucciones.com/og-image.jpg",
    "telephone": "+52-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressRegion": "Sinaloa",
      "addressLocality": "Los Mochis"
    },
    "areaServed": [
      { "@type": "State", "name": "Sinaloa" },
      { "@type": "State", "name": "Sonora" },
      { "@type": "State", "name": "Nayarit" },
      { "@type": "State", "name": "Baja California Sur" }
    ],
    "description": "Constructora ejecutiva líder en México. Con más de 20 estaciones de servicio construidas, somos la opción #1 en gasolineras. Desarrollamos para la Iniciativa Privada: casas premium, oficinas, restaurantes, plazas comerciales, obra hidráulica, naves industriales y edificios, garantizando certeza operativa llave en mano.",
    "hasOfferCatalog": {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Especialidades de Construcción B2B",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construcción de Gasolineras (Líderes con +20 Estaciones)", "description": "Líderes indiscutibles. Obra civil, permisos ASEA/CRE, integración mecánica y obra hidráulica especializada para estaciones de servicio a nivel nacional." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Naves Industriales y Edificios", "description": "Plataformas logísticas, pisos industriales, edificios y urbanización de gran escala." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desarrollo Comercial (Plazas, Oficinas, Restaurantes)", "description": "Habilitación y edificación de plazas comerciales, corporativos, oficinas y restaurantes llave en mano." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residencial Premium", "description": "Ejecución de casas premium y residencias de autor con acabados arquitectónicos bajo control riguroso." } }
      ]
    }
  };

  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaScript) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-ink bg-paper min-h-screen flex flex-col relative`}>
        <Preloader />
        <LenisProvider>
          <BlueprintBackground />
          <Navbar />
          <main className="flex-1 flex flex-col pt-24 z-10 w-full relative">
            {children}
          </main>
          <Footer />
          <WhatsAppFloating />
        </LenisProvider>
      </body>
    </html>
  );
}
