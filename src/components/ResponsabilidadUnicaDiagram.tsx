"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PenTool, Compass, HardHat, PackageCheck } from "lucide-react";

const STEPS = [
    { icon: PenTool, label: "Arquitectura", desc: "Diseño y anteproyecto" },
    { icon: Compass, label: "Ingeniería", desc: "Cálculo estructural y de valor" },
    { icon: HardHat, label: "Construcción", desc: "Ejecución bajo un solo equipo" },
    { icon: PackageCheck, label: "Entrega", desc: "Documentación as-built" },
];

export default function ResponsabilidadUnicaDiagram() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

    return (
        <div ref={ref} className="relative py-4">
            {/* Connector — desktop (horizontal) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] pointer-events-none">
                <svg width="100%" height="2" className="overflow-visible" preserveAspectRatio="none">
                    <motion.line
                        x1="0" y1="1" x2="100%" y2="1"
                        stroke="rgba(29,78,216,0.35)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                </svg>
            </div>

            {/* Connector — mobile (vertical) */}
            <div className="md:hidden absolute left-8 top-8 bottom-8 w-px bg-accent/20 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
                {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="flex md:flex-col items-center gap-4 md:gap-0 md:text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white border border-accent/20 shadow-soft flex items-center justify-center md:mb-4 shrink-0 relative z-10">
                                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="font-bold text-ink text-[15px]">{step.label}</div>
                                <div className="text-gray-500 text-[13px] font-light mt-1">{step.desc}</div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
