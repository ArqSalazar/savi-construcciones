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
                                División Industrial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">LECTURA DE 4 MIN</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Adiós a los <span className="text-accent italic">Sobrecostos</span>: <br />
                            El Secreto de las <br />
                            Naves Exitosas.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l-4 border-accent pl-6 py-2">
                            ¿Sabías que un milímetro de error puede costar millones? Descubre cómo controlamos cada centavo en proyectos de gran escala. 🏗️💰
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10 !pt-0">
                <div className="w-full max-w-[800px] mx-auto">
                    <div className="glass p-8 md:p-12 border border-black/5 flex flex-col gap-12">

                        {/* Point 1 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">📏</span>
                                <span className="text-accent font-black text-6xl opacity-10">01</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                El Piso: Donde el dinero se "hunde"
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                En una nave de 10,000m², un error de espesor de solo 1cm en el concreto significa <strong>100 metros cúbicos de desperdicio</strong>. Multiplica eso por los precios actuales... 😱.
                                <br /><br />
                                Usamos tecnología láser para asegurar que el piso sea "Súper Plano", permitiendo que tus montacargas vuelen sin vibraciones y tu inversión no se agriete.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">🏗️</span>
                                <span className="text-accent font-black text-6xl opacity-10">02</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                Ingeniería de Valor (Ahorro Inteligente)
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                ¿Poner más acero hace la nave más segura? <strong>FALSO</strong>. Poner el acero donde se necesita es lo inteligente.
                                <br /><br />
                                En SAVI Construcciones rediseñamos estructuras para optimizar el peso sin sacrificar ni un gramo de seguridad. Menos peso = menos costo = entrega más rápida.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">⚡</span>
                                <span className="text-accent font-black text-6xl opacity-10">03</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                Metodología Fast-Track
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                El tiempo es dinero, especialmente cuando esperas el ROI de una nave logística. Mientras excavamos en sitio, ya estamos fabricando la estructura en taller.
                                <br /><br />
                                Este solape de procesos reduce el tiempo de entrega hasta en un 30%. Si no estás operando, estás perdiendo.
                            </p>
                        </div>

                        <div className="mt-6 p-10 bg-ink text-white rounded-3xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">💰</div>
                            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Métrica de Oro</p>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">"Lo que no se mide, no se controla."</h3>
                            <p className="text-gray-400 font-light text-lg">
                                Aplicamos auditorías continuas en campo para asegurar que cada peso que inviertes esté exactamente donde dice el plano. Certeza total.
                            </p>
                        </div>

                        <div className="mt-6 p-8 bg-accent/5 rounded-2xl border border-accent/10">
                            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Conclusión SAVI Construcciones</p>
                            <h3 className="text-xl font-bold text-ink mb-2 italic">"La rentabilidad de tu nave se construye desde el cimiento."</h3>
                            <p className="text-gray-500 font-light">
                                Minimizar riesgos no es suerte, es ingeniería. Deja tu proyecto en manos de expertos que cuiden tu ROI tanto como tú.
                            </p>
                        </div>

                        <div className="flex justify-center mt-6">
                            <Link href="/contacto" className="btn-apple !bg-accent !text-white !px-12 !py-6 text-lg">
                                Optimizar mi Presupuesto Industrial →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
