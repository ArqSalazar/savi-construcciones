"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EtapasArticle() {
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
                                Proceso Constructivo
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 5 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Etapas de una Obra:<br />
                            de la Excavación<br />
                            a la Entrega.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            Cada construcción profesional sigue una secuencia técnica precisa. Conocerla te permite anticipar tiempos, costos y los puntos donde una obra suele complicarse.
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
                                    1. Preliminares y Control Topográfico
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Antes de mover un metro cúbico de tierra, una obra profesional limpia el terreno, instala cercado perimetral y servicios provisionales, y establece los controles topográficos que servirán de referencia durante todo el proyecto.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Un error de trazo en esta fase es difícil y costoso de corregir después — es la etapa que más se apresura y la que menos debería apresurarse.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. Cimentación
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La excavación es el primer paso crítico de cualquier proyecto: crea el espacio para cimentaciones, instalaciones subterráneas y estructuras bajo nivel de piso. Le sigue la colocación de acero de refuerzo y el colado de zapatas y vigas de cimentación.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        Esta es, sin excepción, la fase donde un estudio de suelo omitido se convierte en el problema estructural más caro de toda la obra.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Estructura y Obra Gris
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Con la cimentación resuelta, se levanta la estructura: columnas, muros, losas y, en su caso, estructura metálica. Es la etapa más visible del avance de obra, pero también la que más depende de que las dos fases anteriores se hayan ejecutado bien.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    4. Instalaciones y Acabados
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Instalaciones hidrosanitarias, eléctricas y especiales se integran antes de cerrar muros y aplicar acabados finales. Coordinar esta secuencia mal es la causa más común de retrabajos: romper un muro recién terminado para pasar una tubería olvidada.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    5. Entrega Documentada
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La etapa final no es solo estética: incluye los trámites legales y administrativos correspondientes y la entrega formal de la obra, con la documentación técnica que respalda cada decisión tomada durante el proceso.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">El orden de las fases no es negociable.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones documentamos cada una de estas etapas y las validamos antes de avanzar a la siguiente — la disciplina en la secuencia es lo que evita que un proyecto se vuelva impredecible.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Solicitar evaluación de mi proyecto
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
