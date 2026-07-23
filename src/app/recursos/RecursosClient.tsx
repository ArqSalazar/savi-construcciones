"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const ARTICLES = [
    {
        title: "Pasos fundamentales para tu patrimonio residencial",
        description: "Una guía esencial sobre los elementos críticos que aseguran la rentabilidad y seguridad de tu inversión antes de iniciar la obra.",
        category: "Residencial",
        date: "Marzo 2026",
        readTime: "3 min",
        slug: "pasos-criticos-construccion-residencial",
    },
    {
        title: "Optimización financiera en infraestructura industrial",
        description: "Cómo la precisión técnica y el control de obra eliminan los sobrecostos inesperados en proyectos de gran escala.",
        category: "Industrial",
        date: "Febrero 2026",
        readTime: "4 min",
        slug: "certeza-financiera-naves-industriales",
    },
    {
        title: "Ingeniería de estructura y valor patrimonial",
        description: "El impacto de la ingeniería de precisión en la durabilidad y valor de mercado de un edificio profesional.",
        category: "Ingeniería",
        date: "Enero 2026",
        readTime: "3 min",
        slug: "valor-ingenieria-oculta-obras",
    },
    {
        title: "Etapas de una obra: de la excavación a la entrega",
        description: "Guía completa de las fases de una construcción profesional: preliminares, cimentación, estructura, instalaciones y entrega documentada.",
        category: "Proceso Constructivo",
        date: "Julio 2026",
        readTime: "5 min",
        slug: "etapas-de-una-obra-de-principio-a-fin",
    },
    {
        title: "Concreto aparente: ventajas reales y sus límites",
        description: "Qué gana tu proyecto con concreto aparente frente a un acabado tradicional, y qué exige en ejecución técnica.",
        category: "Materiales",
        date: "Julio 2026",
        readTime: "4 min",
        slug: "concreto-aparente-ventajas-y-limitaciones",
    },
    {
        title: "BIM: la tecnología que reduce errores en construcción",
        description: "Cómo la coordinación digital entre arquitectura e ingeniería blinda el presupuesto y los tiempos de un proyecto.",
        category: "Tecnología",
        date: "Julio 2026",
        readTime: "4 min",
        slug: "bim-tecnologia-que-reduce-errores-en-construccion",
    },
    {
        title: "Las decisiones invisibles del éxito de un proyecto",
        description: "Por qué el estudio de suelo, la coordinación entre disciplinas y la documentación técnica definen una obra exitosa.",
        category: "Filosofía de Obra",
        date: "Julio 2026",
        readTime: "3 min",
        slug: "decisiones-invisibles-exito-de-un-proyecto",
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
                                    staggerChildren: 0.08,
                                    delayChildren: 0,
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
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            RECURSOS<br />
                            <span className="opacity-40 italic">ESTRATÉGICOS.</span>
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
                            <ScrollReveal key={article.slug} delay={0.1 * idx}>
                                <Link href={`/recursos/${article.slug}`} className="group glass p-8 h-full flex flex-col transition-all duration-500 hover:shadow-soft2 hover:-translate-y-2 border border-black/5 block">
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
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* SEO Footer for the page */}
                    <div className="mt-24 glass p-10 bg-gradient-to-br from-blue-50/30 to-white/30 border border-accent/5">
                        <div className="max-w-3xl">
                            <h3 className="text-xl font-black italic tracking-tighter text-ink mb-4">
                                SAVI <span className="text-accent">CONSTRUCCIONES.</span> <span className="opacity-50 text-sm uppercase tracking-[0.3em] font-bold ml-2">Cultura de Ingeniería</span>
                            </h3>
                            <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                                Nuestra sección de recursos no es solo un blog; es un compromiso con la transparencia. Creemos que un cliente informado es un aliado estratégico. Aquí compartiremos nuestra experiencia acumulada en más de 20 años de obra con SAVI Construcciones, desde la optimización de procesos hasta la prevención de riesgos patrimoniales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
