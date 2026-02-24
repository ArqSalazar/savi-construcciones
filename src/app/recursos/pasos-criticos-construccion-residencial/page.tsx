"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticlePage() {
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
                                División Residencial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 3 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Seguridad Patrimonial:<br />
                            Pasos críticos antes<br />
                            de construir.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            La construcción de una residencia premium requiere una planeación estratégica que proteja tu capital desde el primer día. Analizamos los pilares fundamentales para una obra exitosa.
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
                                    1. Topografía y Mecánica de Suelos
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    El error más costoso en la construcción residencial ocurre antes de verter el primer metro cúbico de concreto. Asumir la resistencia del terreno sin un estudio de geotecnia riguroso compromete la integridad estructural a largo plazo.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        En SAVI Construcciones, diseñamos cada cálculo estructural basado estrictamente en la capacidad de carga real del polígono, eliminando cualquier margen de incertidumbre.
                                    </p>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Proyecto Ejecutivo Integral
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Un diseño arquitectónico visual no es un documento apto para la construcción. Se requiere un Proyecto Ejecutivo que detalle con precisión milimétrica las instalaciones hidrosanitarias, eléctricas y estructurales.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La ausencia de este documento deriva en improvisaciones en campo que elevan los costos finales y comprometen la calidad de los acabados.
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Gestión Normativa y Certeza Legal
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Iniciar una obra sin las licencias de construcción y permisos correspondientes pone en riesgo tu patrimonio ante posibles clausuras o multas administrativas. La gestión legal es el primer escudo protector de tu inversión.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">Certeza desde la base.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones entendemos que el éxito de una residencia no se mide solo en su estética, sino en la paz mental de saber que ha sido construida bajo los estándares técnicos más rigurosos.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Iniciar evaluación técnica
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
