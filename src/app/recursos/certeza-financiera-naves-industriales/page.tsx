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
                                Industrial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">Febrero 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-ink">
                            Certeza Financiera: ¿Cómo evitar sobrecostos en Naves Industriales?
                        </h1>

                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Análisis estratégico sobre la planeación presupuestal y el control de obra en proyectos de gran escala.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10">
                <div className="w-full max-w-[800px] mx-auto prose prose-lg prose-blue">
                    <div className="glass p-8 md:p-12 border border-black/5">
                        <h2 className="text-2xl font-bold text-ink mb-4">La Problemática de la Fluctuación Volumétrica</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Los desarrollos industriales enfrentan una alta volatilidad presupuestal si no se establece un Catálogo de Conceptos "Cerrado" o meticulosamente valorado. Un error milimétrico en el espesor del pavimento de concreto en una nave de 10,000 metros cuadrados o un cálculo deficitario en la tonelada de acero (marco rígido), puede representar desviaciones financieras catastróficas.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">1. Pisos (Slab) Súper Planos: Medición de Tolerancia F-Min</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Cualquier nave logística de clase mundial necesita pisos certificados. La rectificación láser no es opcional, es el diferencial entre operar montacargas trilaterales a máxima velocidad o tener incidencias en la cadena de suministro por fisuras o hundimientos. Invertir en ingeniería de nivelación desde el colado evita reparaciones millonarias ex-post.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">2. Estructura e Ingeniería de Valor (Value Engineering)</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            En SAVI, practicamos la ingeniería de valor. Esto implica revisar el cálculo estructural para optimizar el peso del acero por metro cuadrado sin sacrificar el factor de seguridad estructural frente al viento, sismo y carga de techumbres. Un esqueleto pesado no siempre es el más seguro, un esqueleto inteligente reduce costos y tiempo.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">3. Logística Fast-Track y Flujo de Inversión</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            El ROI (Retorno de Inversión) del cliente industrial comienza el día 1 de operación. Retrasar una semana la entrega de un cross-dock disminuye directamente los ingresos previstos. La metodología fast-track entrelaza diseño de la superestructura fabricada en taller de la mano con las terracerías simultáneas en sitio.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">Auditoria Continua en Campo</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Un presupuesto cerrado depende estrictamente de que las mediciones en obra (estimaciones) coincidan con el avance proyectado en primavera. SAVI aplica métricas de valor ganado para asegurar a nuestros clientes industriales total apego al flujo de la inversión.
                        </p>

                        <div className="flex justify-center mt-12">
                            <Link href="/contacto" className="btn-apple">
                                Cotizar Obra Industrial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
