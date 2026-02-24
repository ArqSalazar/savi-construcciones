"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EngineeringArticle() {
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
                                Ingeniería y Valor
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 3 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Ingeniería:<br />
                            La Garantía del<br />
                            Activo Inmobiliario.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            Un edificio es, ante todo, una solución de ingeniería. La estructura es el componente que determina la longevidad y la plusvalía real de su patrimonio.
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
                                    1. Estructura como Activo Financiero
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Mientras que los acabados estéticos se devalúan con el tiempo, una estructura diseñada con rigor técnico preserva la integridad del inmueble y su valor de mercado. Un mal cálculo estructural puede devaluar una propiedad significativamente debido a fallos técnicos prematuros.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    En SAVI Construcciones, invertimos en longevidad mediante procesos de cálculo avanzados que aseguran que su obra trascienda generaciones.
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Rigor Técnico y Normatividad
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    El cumplimiento estricto de las normativas estructurales nacionales e internacionales no es una opción, sino una obligación ética y técnica. El diseño basado en reglamentos actualizados garantiza la seguridad de los usuarios frente a fenómenos naturales imprevistos.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        Nuestra dirección técnica se apega estrictamente a la normativa estructural más rigurosa de México, proporcionando un respaldo sólido a cada proyecto ejecutado.
                                    </p>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Eficiencia en el Uso de Materiales
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La ingeniería moderna permite optimizar el consumo de concreto y acero a través de simulaciones precisas. Esto no solo reduce los costos de construcción, sino que impacta positivamente en la sostenibilidad y huella ambiental del edificio.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">Seguridad a largo plazo.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones no solo edificamos estructuras; fabricamos activos inmobiliarios seguros y eficientes. La ingeniería es, y siempre será, nuestro pilar fundamental.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Agendar consulta técnica
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
