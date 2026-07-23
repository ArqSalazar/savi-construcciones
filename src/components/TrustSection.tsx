"use client";

import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import BlueprintSketch from "@/components/BlueprintSketch";

const STATS = [
    { value: "23+", label: "Años de Trayectoria" },
    { value: "45+", label: "Proyectos Críticos" },
    { value: "2", label: "Centros Operativos" },
    { value: "100%", label: "Certeza Contractual" },
];

export default function TrustSection() {
    return (
        <section className="section-padding pt-0 pb-4">
            <div className="w-full max-w-[1400px] mx-auto">
                <ScrollReveal variant="cut">
                    <div className="glass px-8 py-10 md:px-12 md:py-12 border border-black/5 relative">
                        {/* overflow-hidden lives on this inner layer, not the card itself, so the card's own box-shadow isn't clipped */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ borderRadius: "inherit" }}>
                            <BlueprintSketch className="hidden md:block absolute -bottom-4 -right-4 w-40 h-32 opacity-60" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-2">
                                    Confianza Verificable
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-ink">
                                    Rigor técnico, no promesas.
                                </h2>
                            </div>
                            <p className="text-gray-500 text-[15px] font-light leading-relaxed max-w-md">
                                Más de dos décadas de operación continua en Sinaloa y Sonora respaldan cada proyecto que ejecutamos.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-8 relative z-10">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center md:items-start">
                                    <span className="text-4xl md:text-5xl font-black text-ink tracking-[-0.05em]">
                                        <AnimatedCounter value={stat.value} />
                                    </span>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-2 text-center md:text-left">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
