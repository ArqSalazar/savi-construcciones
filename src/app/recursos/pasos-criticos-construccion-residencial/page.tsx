"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticlePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pt-32 pb-16">
                <div className="w-full max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                                Residencial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">Marzo 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-ink">
                            Pasos Críticos antes de iniciar una Construcción Residencial
                        </h1>

                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Una hoja de ruta técnica para asegurar que tu inversión patrimonial inicie con bases sólidas y sin riesgos legales o técnicos.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10">
                <div className="w-full max-w-[800px] mx-auto prose prose-lg prose-blue">
                    <div className="glass p-8 md:p-12 border border-black/5">
                        <h2 className="text-2xl font-bold text-ink mb-4">1. Topografía y Mecánica de Suelos</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            El error más costoso en la construcción residencial premium ocurre antes de verter el primer centímetro cúbico de concreto. Asumir la resistencia del terreno sin un estudio de mecánica de suelos (geotecnia) riguroso compromete la integridad estructural. En SAVI, obligamos a que el cálculo estructural esté estrictamente diseñado sobre la capacidad de carga real del polígono.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">2. Arquitectura Ejecutiva vs. Arquitectura Conceptual</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Un "render" o diseño conceptual no es apto para construir. Se requiere un Proyecto Ejecutivo Integral que incluya: planos estructurales, instalaciones hidrosanitarias, eléctricas, HVAC (climatización) y detalles constructivos milimétricos. Sin esto, la obra dependerá de la improvisación en campo, lo cual siempre eleva los costos exponencialmente.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">3. Gestión Normativa y Permisología</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Iniciar una obra sin las licencias de construcción aprobadas (Director Responsable de Obra, uso de suelo, impactos ambientales o de tráfico si aplica) pone en riesgo el capital mediante multas, suspensiones o clausuras definitivas. La gestión legal y administrativa es el escudo protector de tu inyección de capital inicial.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">Conclusión Técnica</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Delegar la fase de pre-construcción a una empresa con rigor estructural como SAVI garantiza que el diseño sea técnica y económicamente viable. No dejamos margen a la incertidumbre.
                        </p>

                        <div className="flex justify-center mt-12">
                            <Link href="/contacto" className="btn-apple">
                                Agendar Evaluación de Proyecto Residencial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
