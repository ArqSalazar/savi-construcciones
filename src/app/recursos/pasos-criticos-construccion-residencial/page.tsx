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
                                Especial Residencial
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">LECTURA DE 3 MIN</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-ink uppercase">
                            Evita Pesadillas: <br />
                            <span className="text-accent italic">3 Pasos de Oro</span> <br />
                            antes de construir.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l-4 border-accent pl-6 py-2">
                            No construyas sobre arena (literalmente). Lo que nadie te dice sobre el terreno y cómo blindar tu inversión. 🛡️
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10 !pt-0">
                <div className="w-full max-w-[800px] mx-auto">
                    <div className="glass p-8 md:p-12 border border-black/5 flex flex-col gap-12">

                        {/* Point 1 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">🧪</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                1. Topografía y Mecánica de Suelos
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                El error más costoso en la construcción residencial premium ocurre antes de verter el primer centímetro cúbico de concreto. Asumir la resistencia del terreno sin un estudio de mecánica de suelos (geotecnia) riguroso compromete la integridad estructural.
                                <br /><br />
                                💡 <strong>La clave SAVI:</strong> En <strong>SAVI Construcciones</strong>, obligamos a que el cálculo estructural esté estrictamente diseñado sobre la capacidad de carga real del polígono. No adivinamos, medimos.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">📐</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                2. Render vs. Realidad (Evita el "ahí vemos")
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                Un render bonito es solo un dibujo. Para construir necesitas un <strong>Proyecto Ejecutivo</strong>. Es el manual de instrucciones exacto de tu casa: tuberías, cables, vigas y hasta el último tornillo.
                                <br /><br />
                                Sin planos ejecutivos, la obra se vuelve una improvisación constante que drena tu cartera. El orden es: Ingeniería primero, acabados después.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="flex flex-col gap-4">
                            <span className="text-5xl">⚖️</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight uppercase">
                                3. Blindaje Legal (Duerma tranquilo)
                            </h2>
                            <p className="text-gray-600 text-[17px] leading-relaxed">
                                Una clausura puede detener tu sueño por meses o años. Permisos, licencias y el DRO (Director Responsable de Obra) no son "trámites", son tu escudo legal.
                                <br /><br />
                                💡 <strong>ProTip:</strong> Asegúrate de que quien construya sea una empresa legalmente constituida que proteja tu capital ante cualquier inspección.
                            </p>
                        </div>

                        <div className="mt-6 p-8 bg-accent/5 rounded-2xl border border-accent/10">
                            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Conclusión SAVI Construcciones</p>
                            <h3 className="text-xl font-bold text-ink mb-2 italic">"Construir bien sale más barato que reparar siempre."</h3>
                            <p className="text-gray-500 font-light">
                                La pre-construcción es donde se gana o se pierde el dinero. Dedícale tiempo a estos 3 pasos y disfruta ver cómo tu patrimonio crece sobre bases sólidas.
                            </p>
                        </div>

                        <div className="flex justify-center mt-6">
                            <Link href="/contacto" className="btn-apple !px-12 !py-6 text-lg">
                                Quiero iniciar mi proyecto con certeza →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

