import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintBackground from "@/components/BlueprintBackground";
import Preloader from "@/components/Preloader";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAVI Construcciones | Arquitectura & Ingeniería con Legado Familiar",
  description: "Más de 20 años construyendo con honestidad y rigor técnico. Especialistas en residencias premium e infraestructura industrial que protege tu patrimonio y asegura tu inversión.",
  keywords: ["constructora sinaloa", "arquitectura integral sonora", "casas premium", "naves industriales", "estaciones de servicio noroeste", "seguridad patrimonial", "legado familiar", "savi construcciones"],
  robots: "index,follow,max-image-preview:large",
  openGraph: {
    title: "SAVI Construcciones | Arquitectura, Ingeniería & Legado Familiar",
    description: "Diseño integral y ejecución de alta gama. Protegemos tu inversión con transparencia y excelencia técnica en cada proyecto.",
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
