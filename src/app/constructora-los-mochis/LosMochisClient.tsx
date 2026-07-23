"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import DimensionDivider from "@/components/DimensionDivider";
import AnimatedCounter from "@/components/AnimatedCounter";

const FAQS = [
    {
        q: "¿SAVI Construcciones tiene oficina física en Los Mochis?",
        a: "Sí. Nuestra matriz corporativa está en Cjon. Domingo Rubi 517, La Cuchilla, 81250 Los Mochis, Sinaloa — no operamos a distancia desde otro estado. Puedes visitarnos o agendar una reunión presencial antes de iniciar tu proyecto.",
    },
    {
        q: "¿Qué ventaja tiene contratar una constructora local en vez de una de fuera?",
        a: "Conocemos el tipo de suelo, el clima costero y los tiempos reales de trámites municipales y estatales de Los Mochis y la región del Évora. Eso se traduce en menos sorpresas técnicas y menos retrasos por desconocimiento del terreno.",
    },
    {
        q: "¿Qué tipo de proyectos ejecutan en Los Mochis?",
        a: "Residencias de alta gama, desarrollos comerciales, naves industriales y estaciones de servicio, con gestión integral desde el proyecto ejecutivo hasta la entrega documentada.",
    },
];

export default function LosMochisClient() {
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
                            Matriz Corporativa · Sinaloa
                        </motion.span>

                        <h1 className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase">
                            Constructora en<br />
                            <span className="opacity-40 italic">Los Mochis.</span>
                        </h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="mt-2 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65]"
                        >
                            Más de 23 años construyendo en Sinaloa desde nuestra matriz en Los Mochis. Conocemos el suelo, el clima y los tiempos reales de la región — no llegamos a improvisar.
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

            <section className="section-padding">
                <div className="w-full max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass px-8 py-10 md:px-12 border border-black/5">
                            {[
                                { value: "23+", label: "Años en Sinaloa" },
                                { value: "45+", label: "Proyectos Ejecutados" },
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

            <section className="section-padding pt-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink mb-4">
                            ¿Por qué contratar una constructora con base en Los Mochis?
                        </h2>
                        <p className="max-w-2xl text-gray-500 text-[17px] font-light leading-relaxed mb-12">
                            Una constructora foránea cotiza sobre planos; nosotros cotizamos conociendo el terreno.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Presencia Real</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Oficina en La Cuchilla</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Nuestra matriz corporativa está en Cjon. Domingo Rubi 517, La Cuchilla, 81250 Los Mochis, Sin. Puedes visitarnos antes de firmar cualquier contrato.
                                </p>
                            </div>
                            <div className="glass p-9 border border-black/5">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Conocimiento Local</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Suelo y Clima Costero</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Diseñamos cimentaciones considerando las condiciones reales del Valle del Fuerte y la costa de Sinaloa, no tablas genéricas de un manual nacional.
                                </p>
                            </div>
                            <div className="glass p-9 border border-accent/20 bg-gradient-to-br from-white/70 to-blue-50/30">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3">Respuesta Rápida</div>
                                <h3 className="text-2xl font-black tracking-tight text-ink mb-3">Sin Tiempos de Traslado</h3>
                                <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                                    Al estar en Los Mochis, la supervisión de obra y la atención a imprevistos no dependen de vuelos ni logística de otra ciudad.
                                </p>
                            </div>
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
                                ¿Tienes un proyecto en Los Mochis o la región?
                            </div>
                            <p className="text-gray-500 font-light max-w-xl mx-auto mb-8">
                                Agenda una evaluación técnica con nuestra Dirección de Obra, sin costo ni compromiso.
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
