"use client";

import Link from "next/link";
import { Home, Factory, Fuel, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const OPTIONS = [
    { icon: Home, label: "Residencial", desc: "Casas y desarrollos de alta gama", href: "/servicios" },
    { icon: Factory, label: "Industrial", desc: "Naves y obra civil de gran escala", href: "/naves-industriales-sonora" },
    { icon: Fuel, label: "Gasolinera", desc: "Estaciones de servicio Llave en Mano", href: "/gasolineras-sinaloa-sonora" },
    { icon: Building2, label: "Comercial", desc: "Oficinas, retail y corporativo", href: "/servicios" },
];

export default function ProjectTypeQuiz() {
    return (
        <section className="section-padding pt-0">
            <div className="w-full max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">
                            Empieza Aquí
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-ink">
                            ¿Qué tipo de proyecto tienes en mente?
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {OPTIONS.map((opt) => {
                            const Icon = opt.icon;
                            return (
                                <Link
                                    key={opt.label}
                                    href={opt.href}
                                    className="group glass p-6 md:p-8 flex flex-col items-center text-center gap-3 border border-black/5 hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                                        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                                    </div>
                                    <div className="font-bold text-ink text-[15px] md:text-base">{opt.label}</div>
                                    <div className="text-gray-500 text-[12px] md:text-[13px] font-light leading-snug hidden md:block">
                                        {opt.desc}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
