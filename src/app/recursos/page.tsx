"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const ARTICLES = [
    {
        title: "Pasos Críticos antes de iniciar una Construcción Residencial",
        description: "Una hoja de ruta técnica para asegurar que tu inversión patrimonial inicie con bases sólidas y sin riesgos legales o técnicos.",
        category: "Residencial",
        date: "Marzo 2026",
        readTime: "5 min",
    },
    {
        title: "Certeza Financiera: ¿Cómo evitar sobrecostos en Naves Industriales?",
        description: "Análisis estratégico sobre la planeación presupuestal y el control de obra en proyectos de gran escala.",
        category: "Industrial",
        date: "Febrero 2026",
        readTime: "8 min",
    },
    {
        title: "El valor de la Estructura: Ingeniería que protege tu Patrimonio.",
        description: "Por qué el rigor técnico en la fase oculta de la obra es la mejor garantía de longevidad para tu edificio.",
        category: "Ingeniería",
        date: "Enero 2026",
        readTime: "6 min",
    }
];

export default function Guia() {
    return (
        <div className="flex flex-col min-h-screen pb-24">
            {/* Hero Section Guía */}
            <section className="flex flex-col justify-center section-padding min-h-[50vh]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3,
                                }
                            }
                        }}
                        className="flex flex-col gap-6"
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_0_6px_rgba(29,78,216,.10)]"></span>
                            Centro de Conocimiento
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            RECURSOS<br />
                            <span className="opacity-20 italic">ESTRATÉGICOS.</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="mt-4 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                        >
                            Documentación técnica y herramientas diseñadas para aportar claridad, seguridad y valor real a tu proceso de construcción e inversión patrimonial.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section-padding !pt-0">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ARTICLES.map((article, idx) => (
                            <ScrollReveal key={idx} delay={0.1 * idx}>
                                <div className="group glass p-8 h-full flex flex-col transition-all duration-500 hover:shadow-soft2 hover:-translate-y-2 border border-black/5">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                                            {article.category}
                                        </span>
                                        <span className="text-[10px] uppercase font-medium tracking-widest text-gray-400">
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold tracking-tight text-ink mb-4 group-hover:text-accent transition-colors duration-300">
                                        {article.title}
                                    </h2>

                                    <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-auto">
                                        {article.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                                        <span className="text-[11px] font-medium text-gray-400">{article.date}</span>
                                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform duration-300">
                                            Leer Artículo <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* SEO Footer for the page */}
                    <div className="mt-24 glass p-10 bg-gradient-to-br from-blue-50/30 to-white/30 border border-accent/5">
                        <div className="max-w-3xl">
                            <h3 className="text-xl font-black italic tracking-tighter text-ink mb-4">
                                SAVI<span className="text-accent">.</span> <span className="opacity-50 text-sm uppercase tracking-[0.3em] font-bold ml-2">Cultura de Ingeniería</span>
                            </h3>
                            <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                                Nuestra sección de recursos no es solo un blog; es un compromiso con la transparencia. Creemos que un cliente informado es un aliado estratégico. Aquí compartiremos nuestra experiencia acumulada en más de 20 años de obra, desde la optimización de procesos hasta la prevención de riesgos patrimoniales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
