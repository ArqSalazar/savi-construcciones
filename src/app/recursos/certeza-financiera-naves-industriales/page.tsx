"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function IndustrialArticle() {
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
                                División Industrial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 4 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Certeza Financiera:<br />
                            Eficiencia en Naves<br />
                            Industriales.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            La construcción de infraestructura industrial de gran escala demanda una gestión de recursos milimétrica para evitar la erosión del retorno de inversión.
                        </p>
                    </motion.div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 md:p-16 border border-black/5 shadow-soft2 rounded-[2.5rem] relative overflow-hidden"
                    >
                        <div className="flex flex-col gap-16">

                            {/* Point 1 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    1. Ingeniería de Valor en Cimentaciones
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    En proyectos industriales de miles de metros cuadrados, el diseño de la cimentación representa una de las variables críticas de costo. Un sobrediseño eleva el presupuesto innecesariamente, mientras que una omisión técnica genera fisuras costosas por el tránsito de carga pesada.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    En SAVI Construcciones rediseñamos estructuras para optimizar el peso sin sacrificar la seguridad, logrando una entrega operativa más rápida y rentable.
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Precisión en Pisos Industriales
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La planicidad de un piso industrial es determinante para la eficiencia logística. Errores mínimos en el acabado del concreto pueden causar vibraciones excesivas en montacargas, incrementando costos de mantenimiento en maquinaria y reduciendo la velocidad de operación.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        Utilizamos tecnología de nivelación avanzada para asegurar que cada metro cuadrado cumpla con los estándares internacionales de planicidad exigidos por la industria moderna.
                                    </p>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Control de Obra y Trazabilidad
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    El cumplimiento de cronogramas en el sector industrial es innegociable. Cada día de retraso representa una pérdida de lucro cesante para la empresa. Nuestra gestión se basa en una trazabilidad total del suministro de materiales y mano de obra calificada.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">Rentabilidad desde el cimiento.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    Minimizar riesgos financieros no es una cuestión de suerte, sino de ingeniería aplicada con rigor. En SAVI Construcciones, gestionamos su proyecto para asegurar que cada peso invertido genere valor operativo inmediato.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-12 !py-6 text-lg">
                                        Solicitar consultoría industrial
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
