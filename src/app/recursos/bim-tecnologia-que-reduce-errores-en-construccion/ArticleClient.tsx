"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BimArticle() {
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
                                Tecnología
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 4 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            BIM: La Tecnología<br />
                            que Reduce Errores<br />
                            en Construcción.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            Coordinar el proyecto digitalmente antes de tocar tierra es una de las herramientas más efectivas para blindar presupuesto y tiempos de entrega.
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
                                    1. ¿Qué es el BIM?
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Building Information Modeling es la práctica de coordinar arquitectura, ingeniería estructural e instalaciones en un solo modelo digital, en lugar de planos independientes que se cruzan (o chocan) hasta que alguien lo descubre en obra.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Lo que Documentan los Estudios de la Industria
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Reportes de consultoras como McKinsey y de firmas de investigación como Dodge Data &amp; Analytics han documentado mejoras de productividad de hasta 25% y reducciones de costo cercanas al 10% en empresas que adoptan una coordinación digital previa, junto con ahorros reportados en el tiempo de entrega de los proyectos.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        La cifra exacta varía por proyecto y mercado, pero la tendencia es consistente: detectar un conflicto en pantalla cuesta una fracción de lo que cuesta descubrirlo con una retroexcavadora.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Menor Incertidumbre en Presupuesto
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Al detectar interferencias entre disciplinas antes de la ejecución — una tubería que cruza una viga, una instalación que no cabe en el plafón — se eliminan cambios de alcance sobre la marcha, que son la causa más común de sobrecostos no previstos.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">La coordinación previa es la inversión más rentable de una obra.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones aplicamos este mismo principio: arquitectura e ingeniería se coordinan bajo una sola responsabilidad desde el anteproyecto, precisamente para detectar en el papel lo que de otra forma se descubriría — y se pagaría — en obra.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Hablar sobre la coordinación de mi proyecto
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
