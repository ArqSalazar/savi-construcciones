"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DecisionesArticle() {
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
                                Filosofía de Obra
                            </span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">Lectura de 3 min</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Las Decisiones<br />
                            Invisibles del Éxito<br />
                            de un Proyecto.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-accent/30 pl-8">
                            Una obra bien ejecutada no se nota en lo que ves. Se nota en todo lo que nunca tuviste que preocuparte.
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
                                    1. La Decisión que Nadie Ve: Investigar el Suelo
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Nadie visita una obra terminada y piensa en el estudio de mecánica de suelos que se hizo meses antes. Pero esa decisión —hacerlo o saltárselo— determina si la estructura envejece con certeza o con fisuras inexplicables una década después.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    2. La Coordinación Silenciosa Entre Disciplinas
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    Cuando arquitectura, ingeniería y construcción responden a un solo equipo en lugar de tres contratos independientes, la fricción entre disciplinas se resuelve en una junta de trabajo, no en obra con material ya comprado y cuadrillas esperando instrucciones.
                                </p>
                                <div className="p-6 bg-gray-50/50 border-l border-accent/30">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        El cliente nunca ve esas juntas. Solo ve que la obra avanzó sin sorpresas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                    3. Documentar lo que Probablemente Nunca se Revise
                                </h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light">
                                    La mayoría de los expedientes de obra se archivan y no se vuelven a abrir. Pero el día que algo debe verificarse —una garantía, una remodelación futura, una venta del inmueble— esa documentación es la diferencia entre una respuesta clara y una reconstrucción de memoria.
                                </p>
                            </div>

                            <div className="mt-8 pt-12 border-t border-black/5">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent block mb-4">Conclusión</span>
                                <h3 className="text-2xl font-bold text-ink mb-4 italic tracking-tight">Lo que no se nota es, casi siempre, lo que más importa.</h3>
                                <p className="text-gray-500 font-light text-[17px] leading-relaxed max-w-2xl">
                                    En SAVI Construcciones medimos el éxito de un proyecto por las decisiones invisibles que tomamos a tiempo, no solo por el resultado visible el día de la entrega.
                                </p>
                                <div className="mt-12">
                                    <Link href="/contacto" className="btn-apple !px-10 !py-4 text-sm font-bold uppercase tracking-widest">
                                        Platicar sobre mi proyecto
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
