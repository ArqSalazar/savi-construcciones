import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
    title: "Servicios de Construcción | Residencial, Industrial y Gasolineras",
    description: "Diseño y construcción llave en mano: residencias de alta gama, naves industriales, desarrollos comerciales y estaciones de servicio en Sinaloa y Sonora.",
    alternates: {
        canonical: "https://www.saviconstrucciones.com/servicios",
    },
    openGraph: {
        title: "Servicios de Construcción | SAVI Construcciones",
        description: "Diseño y construcción llave en mano: residencias de alta gama, naves industriales, desarrollos comerciales y estaciones de servicio en Sinaloa y Sonora.",
        url: "https://www.saviconstrucciones.com/servicios",
        type: "website",
    },
};

export default function Page() {
    return <ServiciosClient />;
}
