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
                                Cultura de Ingeniería
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">LECTURA DE 3 MIN</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Ingeniería <br />
                            <span className="text-accent italic">"Invisible"</span>: <br />
                            Los huesos del éxito.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l-4 border-accent pl-6 py-2">
                            Tu edificio se ve bien por fuera, pero ¿qué hay de los huesos? Aprende por qué la estructura es tu mejor seguro de vida. 🦴🏙️
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10 !pt-0">
                <div className="w-full max-w-[800px] mx-auto">
                    <div className="glass p-8 md:p-12 border border-black/5 flex flex-col gap-12">

                        {/* Point 1 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">🌑</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                Lo que no se ve, importa más
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                Los acabados de lujo venden casas, pero la <strong>Ingeniería Oculta</strong> (cimentación, acero, ductos) es lo que las mantiene en pie.
                                <br /><br />
                                ¿Sabías que un mal cálculo estructural puede devaluar tu propiedad un 30% en solo 5 años por grietas "inexplicables"? En SAVI Construcciones, invertimos en longevidad.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">🌪️</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                Blindaje contra la naturaleza
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                En el Noroeste de México, los huracanes and sismos no avisan. Una columna no es solo "concreto con varilla"; es una pieza de ingeniería calculada para torsión and esfuerzos extremos.
                                <br /><br />
                                💡 <strong>Curiosidad:</strong> Ahorrar en acero en la estructura es como ahorrar en paracaídas. Solo te das cuenta del error cuando ya es tarde.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">🛡️</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                Estaciones de Servicio: Tolerancia 0
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                En el sector Oil & Gas, la precisión es vital. Una fuga no es un "detalle", es una catástrofe. Aplicamos protocolos industriales de hermeticidad and descarga estática que trascienden la albañilería tradicional. Somos cirujanos de la construcción.
                            </p>
                        </div>

                        <div className="mt-6 p-8 bg-accent/5 rounded-2xl border border-accent/10">
                            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Conclusión SAVI Construcciones</p>
                            <h3 className="text-xl font-bold text-ink mb-2 italic">"Tu patrimonio merece ingeniería de verdad."</h3>
                            <p className="text-gray-500 font-light">
                                En SAVI Construcciones no solo construimos edificios; fabricamos seguridad a largo plazo. Nuestra dirección técnica se apega estrictamente a la normativa estructural más rigurosa de México.
                            </p>
                        </div>

                        <div className="flex justify-center mt-6">
                            <Link href="/contacto" className="btn-apple !px-12 !py-6 text-lg">
                                Consultar con un Experto Técnico →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

