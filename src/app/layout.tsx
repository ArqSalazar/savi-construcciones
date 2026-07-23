import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintBackground from "@/components/BlueprintBackground";
import Preloader from "@/components/Preloader";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import BackToTop from "@/components/BackToTop";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollRuler from "@/components/ScrollRuler";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const BASE_URL = "https://www.saviconstrucciones.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SAVI. Construcciones",
    template: "%s | SAVI Construcciones",
  },
  description: "Más de 20 años construyendo con honestidad y rigor técnico. Especialistas en residencias premium e infraestructura industrial que protege tu patrimonio y asegura tu inversión.",
  keywords: ["constructora sinaloa", "arquitectura integral sonora", "casas premium", "naves industriales", "estaciones de servicio noroeste", "seguridad patrimonial", "legado familiar", "savi construcciones"],
  robots: "index,follow,max-image-preview:large",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SAVI. Construcciones",
    description: "Diseño integral y ejecución de alta gama. Protegemos tu inversión con transparencia y excelencia técnica en cada proyecto.",
    url: "/",
    siteName: "SAVI. Construcciones",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaScript = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "SAVI. Construcciones",
    "url": "https://www.saviconstrucciones.com/",
    "image": "https://www.saviconstrucciones.com/opengraph-image",
    "telephone": "+52 668 222 8008",
    "email": "ventas@saviconstrucciones.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressRegion": "Sinaloa",
      "addressLocality": "Los Mochis"
    },
    "areaServed": [
      { "@type": "State", "name": "Sinaloa" },
      { "@type": "State", "name": "Sonora" },
      { "@type": "Region", "name": "Noroeste de México" },
      { "@type": "Country", "name": "Mexico" }
    ],
    "description": "Constructora líder en el noroeste de México especializada en la construcción de estaciones de servicio (gasolineras), obra industrial premium y desarrollos comerciales en Sinaloa y Sonora. Ofrecemos una gestión integral: proyecto ejecutivo, gestión de permisos, ejecución de obra civil y mecánica, y entrega documentada con trazabilidad total.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Construcción Estratégica",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construcción de Estaciones de Servicio (Gasolineras)", "description": "Proyecto integral, permisos y construcción de gasolineras en Sinaloa y Sonora." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Obra Industrial y Naves", "description": "Cimentaciones, estructuras y pavimentos industriales." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desarrollos Comerciales Premium", "description": "Oficinas, clínicas y retail con acabados de alta calidad." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residencial de Alta Gama", "description": "Construcción de residencias con método y transparencia total." } }
      ]
    }
  };

  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased text-ink bg-paper min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaScript).replace(/</g, '\\u003c') }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JGSEPQ655N"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JGSEPQ655N');
          `}
        </Script>
        <Preloader />
        <LenisProvider>
          <BlueprintBackground />
          <NoiseOverlay />
          <Navbar />
          <main className="flex-1 flex flex-col pt-24 z-10 w-full relative">
            {children}
          </main>
          <Footer />
          <WhatsAppFloating />
          <BackToTop />
          <ScrollRuler />
        </LenisProvider>
      </body>
    </html>
  );
}
