"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import DimensionDivider from "@/components/DimensionDivider";
import AnimatedCounter from "@/components/AnimatedCounter";

const FAQS = [
    {
        q: "¿SAVI construye naves industriales en todo Sonora o solo en Navojoa?",
        a: "Nuestra sucursal está en Navojoa (C. Sociedad Mutualista 1312, Deportiva, 85860), pero tenemos movilidad operativa para ejecutar proyectos en cualquier punto de Sonora, incluyendo corredores logísticos e industriales del estado.",
    },
    {
        q: "¿Qué incluye el servicio de construcción de una nave industrial?",
        a: "Terracerías, cimentación de especialidad, estructura metálica, piso súper plano de alta resistencia y, cuando aplica, instalaciones especializadas para sector alimentario o logístico — con gestión de proyecto y documentación de entrega.",
    },
    {
        q: "¿Cuánto tarda en construirse una nave industrial?",
        a: "Depende del alcance y superficie, pero nuestra planificación predictiva y control de suministro están orientados a evitar los retrasos que sí generan lucro cesante en operaciones industriales.",
    },
];

export default function NavesClient() {
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
                            Infraestructura Industrial · Sonora
                        </motion.span>

                        <h1 className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase">
                            Naves Industriales<br />
                            <span className="opacity-40 italic">en Sonora.</span>
                        </h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="mt-2 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65]"
                        >
                            Cimentaciones, estructura metálica y pisos súper planos, ejecutados desde nuestra sucursal en Navojoa con la misma disciplina que aplicamos a proyectos de gran escala en todo el Noroeste.
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
                            Ingeniería de valor para infraestructura industrial
                        </h2>
                        <p className="max-w-2xl text-gray-500 text-[17px] font-light leading-relaxed mb-12">
                            En naves industriales, cada decisión de diseño impacta directamente el costo por metro cuadrado y el tiempo de arranque operativo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Estructura</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Cimentaciones de Especialidad</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Rediseñamos estructuras para optimizar el peso sin sacrificar seguridad, evitando tanto el sobrediseño como las fisuras por tránsito de carga pesada.
                                </p>
                            </div>
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Operación</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Pisos Súper Planos</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Nivelación de alta precisión para operación de montacargas 24/7, reduciendo vibración, desgaste de maquinaria y tiempos muertos.
                                </p>
                            </div>
                            <div className="glass p-9 border border-accent/20 bg-gradient-to-br from-white/70 to-blue-50/30">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3">Control</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Trazabilidad Total</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Control de suministro y mano de obra calificada para cumplir cronogramas — cada día de retraso es lucro cesante en operación industrial.
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
                                { value: "23+", label: "Años de Experiencia" },
                                { value: "45+", label: "Proyectos Críticos" },
                                { value: "2", label: "Sedes: Navojoa y Los Mochis" },
                                { value: "100%", label: "Certeza Contractual" },
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
                                    <p className="text-gray-500 text-[15px] font-light leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 glass p-12 text-center flex flex-col items-center justify-center border border-black/5">
                            <div className="text-2xl font-black text-ink tracking-tight mb-4">
                                ¿Necesitas construir una nave industrial en Sonora?
                            </div>
                            <p className="text-gray-500 font-light max-w-xl mx-auto mb-8">
                                Habla con nuestra Dirección de Obra y define el alcance técnico sin compromiso.
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
