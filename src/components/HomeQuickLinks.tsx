"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeQuickLinks() {
    return (
        <section className="section-padding pb-16 pt-8 relative z-10 w-full">
            <div className="w-full max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <div className="glass p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-shadow duration-500 hover:shadow-soft2 border border-black/5">
                        <div>
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">
                                Siguientes Pasos
                            </div>
                            <div className="mt-2 text-2xl font-black tracking-tight text-ink">
                                Estructura tu Proyecto
                            </div>
                            <p className="mt-2 text-gray-500 font-light text-[15px] max-w-lg leading-relaxed">
                                ¿Aún no tienes planos o necesitas auditar tu ingeniería? Contáctanos para diseñar desde cero su visión o definir la viabilidad técnica y financiera de su obra.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto mt-6 md:mt-0">
                            <Link href="/contacto" className="btn-apple w-full md:w-auto text-center py-[1.15rem] px-8">
                                Solicitar Diagnóstico de Viabilidad
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
