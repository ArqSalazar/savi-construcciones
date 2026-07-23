"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Building2, Home, Factory, Fuel, ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import Magnetic from "@/components/Magnetic";

const CATEGORY_STYLE: Record<string, { icon: typeof Building2; gradient: string; tint: string }> = {
    "Comercial": { icon: Building2, gradient: "from-blue-50 to-slate-50", tint: "text-blue-900/10" },
    "Residencial": { icon: Home, gradient: "from-amber-50 to-stone-50", tint: "text-amber-900/10" },
    "Industrial": { icon: Factory, gradient: "from-slate-100 to-zinc-50", tint: "text-slate-900/10" },
    "Misión Crítica": { icon: Fuel, gradient: "from-blue-100 to-cyan-50", tint: "text-accent/10" },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
};

const PROJECTS = [
    {
        id: "01",
        category: "Comercial · Oficinas",
        title: "Corporativo Valle",
        description: "Remodelación en operación. Coordinación MEP de alta densidad bajo esquema fast-track sin interrupciones operativas.",
        span: "lg:col-span-2",
        placeholderPath: "/projects/comercial/corporativo-valle.webp"
    },
    {
        id: "02",
        category: "Residencial · Premium",
        title: "Casa Pedregal",
        description: "Estructura de concreto aparente con claros monumentales. Tolerancia milimétrica en acabados.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/residencial/casa-pedregal.webp"
    },
    {
        id: "03",
        category: "Industrial · Distribución",
        title: "Nave Logística",
        description: "Pisos súper planos y andenes de alta resistencia para operación 24/7.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/industrial/nave-logistica.webp"
    },
    {
        id: "04",
        category: "Misión Crítica · Energía",
        title: "Estación Flagship",
        description: "Cumplimiento normativo sin atajos. Almacenamiento y manejo de fluidos peligrosos bajo estándar ASEA/CRE.",
        span: "lg:col-span-2",
        placeholderPath: "/projects/mision-critica/estacion-flagship.webp"
    },
    {
        id: "05",
        category: "Comercial · Retail",
        title: "Plaza Norte",
        description: "Optimización estructural que redujo el gramaje de acero en un 15% sin comprometer claros arquitectónicos.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/comercial/plaza-norte.webp"
    },
    {
        id: "06",
        category: "Residencial · Vertical",
        title: "Torre Hábitat",
        description: "Control logístico masivo en espacio reducido. Cimentación profunda y entrega de 80 unidades.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/residencial/torre-habitat.webp"
    },
    {
        id: "07",
        category: "Industrial · Especialidad",
        title: "Planta Alimentaria",
        description: "Control sanitario (TIF) y cuartos fríos. Aislamiento térmico garantizado.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/industrial/planta-alimentaria.webp"
    },
    {
        id: "08",
        category: "Misión Crítica · Salud",
        title: "Clínica Quirúrgica",
        description: "Instalaciones de soporte vital, gases medicinales y quirófanos bajo estándar hospitalario C.",
        span: "lg:col-span-2",
        placeholderPath: "/projects/mision-critica/clinica-quirurgica.webp"
    },
    {
        id: "09",
        category: "Comercial · Restauración",
        title: "Intervención Patrimonial",
        description: "Ingeniería inversa. Refuerzo estructural respetando íntegramente la fachada histórica protegida.",
        span: "lg:col-span-1",
        placeholderPath: "/projects/comercial/intervencion-patrimonial.webp"
    }
];

export default function Proyectos() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pb-16 min-h-[60vh]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col gap-6"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_0_6px_rgba(29,78,216,.10)]"></span>
                            Proyectos Destacados
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            RESULTADOS.<br />
                            <span className="opacity-40 italic">VISIBLES.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="max-w-3xl mt-4 text-gray-500 text-[19px] md:text-[22px] font-light leading-[1.65] tracking-tight"
                        >
                            No vendemos renders ni promesas. Este es el registro de soluciones arquitectónicas e ingeniería ejecutada al más alto rigor técnico y normativo.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                    >
                        {PROJECTS.map((project) => {
                            const categoryKey = project.category.split(" · ")[0];
                            const style = CATEGORY_STYLE[categoryKey] ?? CATEGORY_STYLE["Comercial"];
                            const Icon = style.icon;

                            return (
                                <motion.div key={project.id} variants={itemVariants} className={project.span}>
                                <SpotlightCard
                                    tiltStrength={4}
                                    className="glass p-8 group cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300 flex justify-between items-center">
                                            <span>Caso {project.id}</span>
                                            <span className="opacity-50 font-medium tracking-widest">{project.category}</span>
                                        </div>
                                        <div className="mt-4 text-2xl lg:text-3xl font-black tracking-tight text-ink group-hover:text-accent transition-colors duration-300">
                                            {project.title}
                                        </div>
                                        <p className="mt-4 text-gray-500 font-light leading-relaxed max-w-lg">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className={`mt-10 h-[280px] w-full rounded-2xl bg-gradient-to-br ${style.gradient} border border-black/5 relative overflow-hidden group-hover:border-black/10 transition-colors`}>
                                        {/* Marca de agua tipográfica de la categoría */}
                                        <span className={`absolute -bottom-4 -right-2 text-[92px] font-black uppercase tracking-tighter leading-none select-none ${style.tint}`}>
                                            {categoryKey}
                                        </span>

                                        {/* Ícono y badge de vista previa */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                            <div className="w-14 h-14 rounded-full bg-white/70 border border-black/5 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                                <Icon className="w-6 h-6 text-ink/60" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
                                                Fotografía Próximamente
                                            </span>
                                        </div>

                                        {/* Overlay de hover: micro-interacción */}
                                        <div className="absolute inset-0 flex items-end justify-end p-5 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500">
                                            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-ink/70 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                                Ver caso completo
                                                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="mt-20 glass p-12 text-center flex flex-col items-center justify-center border border-black/5"
                    >
                        <div className="text-2xl font-black text-ink tracking-tight mb-4">¿Listo para estructurar la viabilidad de tu obra?</div>
                        <p className="text-gray-500 font-light max-w-xl mx-auto mb-8">
                            Aplica nuestro mismo rigor técnico a tu inversión. Habla con un especialista y asegura el destino de tu capital.
                        </p>
                        <Magnetic>
                            <Link href="/contacto" className="btn-apple">
                                Evaluar Viabilidad de Proyecto
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
