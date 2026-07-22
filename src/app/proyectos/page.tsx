import type { Metadata } from "next";
import ProyectosClient from "./ProyectosClient";

export const metadata: Metadata = {
    title: "Proyectos y Obras Ejecutadas | Portafolio SAVI Construcciones",
    description: "Conoce los casos de éxito de SAVI Construcciones: residencias premium, naves industriales, estaciones de servicio y desarrollos comerciales en el noroeste de México.",
    alternates: {
        canonical: "https://www.saviconstrucciones.com/proyectos",
    },
    openGraph: {
        title: "Proyectos y Obras Ejecutadas | SAVI Construcciones",
        description: "Casos de éxito reales: residencias premium, naves industriales, estaciones de servicio y desarrollos comerciales ejecutados por SAVI Construcciones.",
        url: "https://www.saviconstrucciones.com/proyectos",
        type: "website",
    },
};

export default function Page() {
    return <ProyectosClient />;
}
