"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConcretoArticle() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pt-32 pb-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-8 mb-12"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                                Materiales
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 4 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Concreto Aparente:<br />
                            Ventajas Reales<br />
                            y Sus Límites.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            Antes de elegir concreto aparente sobre un acabado tradicional, conviene entender qué gana tu proyecto en durabilidad — y qué exige en ejecución.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 md:p-16 border border-black/5 shadow-soft2 rounded-[2.5rem] relative overflow-hidden"
                    >
                        <div className="flex flex-col gap-16">

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    1. Durabilidad sin Mantenimiento Constante
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    A diferencia de la pintura o el yeso, que exigen retoques periódicos, el concreto aparente resiste el paso del tiempo sin perder su carácter. No requiere un acabado adicional que aplicar ni renovar, lo que reduce el costo de mantenimiento a largo plazo del inmueble.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Un Beneficio que Pocos Consideran: Acústica
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Además de su resistencia estructural, el concreto utilizado en muros y paneles puede reducir considerablemente la transmisión de ruido comparado con sistemas más ligeros como madera o acero — una ventaja relevante en desarrollos comerciales o residenciales cercanos a zonas de tránsito.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        Es un criterio que rara vez se discute en la etapa de diseño, pero que impacta directamente la experiencia de quien habita o usa el espacio.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. La Exigencia Técnica que Pocos Anticipan
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    El concreto aparente no perdona errores de ejecución: exige personal capacitado, una selección cuidadosa de cemento y agregados, encofrado de buena calidad y una compactación completa. El tiempo de fraguado disponible es limitado, así que la cuadrilla debe trabajar con precisión desde el primer colado.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Un cierto agrietamiento superficial es parte natural de su comportamiento — el reto técnico es controlar que ese proceso no comprometa ni la estética ni la impermeabilidad del muro.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">El material correcto depende de la ejecución correcta.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones evaluamos si el concreto aparente responde realmente a las necesidades de tu proyecto — y si lo hace, garantizamos la mano de obra especializada que ese material exige para verse y comportarse como se espera durante décadas.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Consultar sobre materiales para mi proyecto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
