"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Only the founding year and "today" are stated as hard dates — the
// intermediate milestones are real but undated to avoid fabricating
// precision we can't verify.
const MILESTONES = [
    { year: "2001", title: "Fundación", desc: "SAVI nace como una empresa familiar en Los Mochis, Sinaloa." },
    { year: "", title: "Expansión Industrial", desc: "Incorporamos naves industriales y obra civil de gran escala." },
    { year: "", title: "Apertura Navojoa", desc: "Consolidamos presencia en Sonora con una sucursal estratégica." },
    { year: "", title: "Infraestructura Crítica", desc: "Especialización en estaciones de servicio, esquema Llave en Mano." },
    { year: "Hoy", title: "23+ Años", desc: "45+ proyectos ejecutados en el Noroeste de México." },
];

export default function CompanyTimeline() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

    return (
        <div ref={ref} className="relative py-4">
            <div className="hidden md:block absolute top-3 left-[6%] right-[6%] h-px bg-black/[0.08]" />
            <div className="md:hidden absolute left-3 top-3 bottom-3 w-px bg-black/[0.08]" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                {MILESTONES.map((m, i) => (
                    <motion.div
                        key={m.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="flex md:flex-col items-start gap-4 md:gap-0 pl-8 md:pl-0 relative"
                    >
                        <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 md:top-0 w-2.5 h-2.5 rounded-full bg-accent border-2 border-white shadow-[0_0_0_3px_rgba(29,78,216,.12)]" />
                        <div className="md:text-center md:mt-6">
                            {m.year && (
                                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-1">
                                    {m.year}
                                </div>
                            )}
                            <div className="font-bold text-ink text-[15px]">{m.title}</div>
                            <p className="text-gray-500 text-[13px] font-light leading-relaxed mt-1 max-w-[180px] md:mx-auto">
                                {m.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
