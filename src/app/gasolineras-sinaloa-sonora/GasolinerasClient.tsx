"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import DimensionDivider from "@/components/DimensionDivider";
import AnimatedCounter from "@/components/AnimatedCounter";

const FAQS = [
    {
        q: "¿SAVI gestiona los permisos ASEA/CRE de la gasolinera?",
        a: "Sí. Nuestro esquema Llave en Mano incluye el dictamen técnico y la gestión de permisos ante ASEA y CRE, además de la ejecución civil y mecánica, hasta la entrega documental as-built.",
    },
    {
        q: "¿Solo construyen gasolineras nuevas o también modernizan existentes?",
        a: "Ambos. Ejecutamos proyectos nuevos completos y programas de modernización de imagen para estaciones ya operando, minimizando el tiempo de interrupción del servicio.",
    },
    {
        q: "¿En qué estados operan para este tipo de proyecto?",
        a: "Sinaloa y Sonora son nuestra base operativa, pero tenemos movilidad nacional para ejecutar estaciones de servicio en cualquier punto de la República bajo el mismo esquema Turnkey.",
    },
];

export default function GasolinerasClient() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding min-h-[55vh]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="flex flex-col gap-6"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_0_6px_rgba(29,78,216,.10)]" />
                            Infraestructura Crítica · Sinaloa y Sonora
                        </motion.span>

                        <h1 className="text-[clamp(3rem,7.5vw,6.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase">
                            Gasolineras en<br />
                            <span className="opacity-40 italic">Sinaloa y Sonora.</span>
                        </h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="mt-2 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65]"
                        >
                            Construcción y modernización de estaciones de servicio bajo esquema Llave en Mano: dictamen técnico, permisos ASEA/CRE, obra civil y mecánica, y entrega documentada.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="mt-6 flex flex-wrap items-center gap-5 relative z-20"
                        >
                            <Magnetic>
                                <Link href="/contacto" className="btn-apple">
                                    Solicitar Evaluación Técnica
                                </Link>
                            </Magnetic>
                            <Link href="/proyectos" className="btn-ghost text-gray-500 hover:text-ink">
                                Ver Portafolio
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <DimensionDivider />

            <section className="section-padding pt-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-4">
                            Certeza normativa en infraestructura de alto riesgo
                        </h2>
                        <p className="max-w-2xl text-gray-500 text-[17px] font-light leading-relaxed mb-12">
                            El manejo de fluidos peligrosos exige cumplimiento absoluto — protegemos tu licencia y tu concesión mercantil desde el primer trazo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Normativo</div>
                                <h3 className="text-xl font-bold tracking-tight text-ink mb-3">Gestión ASEA / CRE</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    Desde el dictamen técnico hasta los permisos de operación, gestionamos la parte regulatoria para que tu proyecto no quede detenido por trámites.
                                </p>
                            </div>
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Ejecución</div>
                                <h3 className="text-xl font-bold tracking-tight text-ink mb-3">Llave en Mano</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    Un solo responsable para proyecto ejecutivo, obra civil y mecánica — sin fragmentar la responsabilidad entre múltiples contratistas.
                                </p>
                            </div>
                            <div className="glass p-9 border border-accent/20 bg-gradient-to-br from-white/70 to-blue-50/30">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3">Continuidad</div>
                                <h3 className="text-xl font-bold tracking-tight text-ink mb-3">Modernización de Imagen</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                    Renovamos estaciones en operación minimizando el tiempo de interrupción del servicio y la afectación a tu flujo de clientes.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass px-8 py-10 md:px-12 border border-black/5">
                            {[
                                { value: "20+", label: "Estaciones Edificadas" },
                                { value: "25+", label: "Modernización & Rebrand" },
                                { value: "2", label: "Sedes: Los Mochis y Navojoa" },
                                { value: "100%", label: "Gestión Documentada" },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col items-center md:items-start">
                                    <span className="text-4xl md:text-5xl font-black text-ink tracking-[-0.05em]">
                                        <AnimatedCounter value={s.value} />
                                    </span>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-2 text-center md:text-left">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding pt-0 pb-24">
                <div className="w-full max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-8">
                            Preguntas frecuentes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {FAQS.map((item) => (
                                <div key={item.q} className="glass p-8 border border-black/5">
                                    <h3 className="font-bold text-[17px] text-ink mb-3">{item.q}</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 glass p-12 text-center flex flex-col items-center justify-center border border-black/5">
                            <div className="text-2xl font-black text-ink tracking-tight mb-4">
                                ¿Tienes un proyecto de estación de servicio?
                            </div>
                            <p className="text-gray-500 font-light max-w-xl mx-auto mb-8">
                                Aísla riesgos normativos y operativos desde el primer trazo con nuestra Dirección de Obra.
                            </p>
                            <Magnetic>
                                <Link href="/contacto" className="btn-apple">
                                    Evaluar Mi Proyecto
                                </Link>
                            </Magnetic>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
