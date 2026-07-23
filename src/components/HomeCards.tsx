"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SpotlightCard from "@/components/SpotlightCard";

export default function HomeCards() {
    return (
        <section className="flex flex-col justify-center section-padding pb-4">
            <div className="w-full max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 items-stretch">
                        {/* Card 1: Alcance/Costo */}
                        <SpotlightCard className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Certidumbre Técnica
                            </div>
                            <h3 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Ingeniería Presupuestal
                            </h3>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Blindamos tu capital. Aplicamos <strong className="font-medium text-ink">análisis de costos milimétricos</strong> para eliminar sorpresas financieras y garantizar la viabilidad desde el primer trazo.
                            </p>
                        </SpotlightCard>

                        {/* Card 2: Gestión */}
                        <SpotlightCard className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Integridad
                            </div>
                            <h3 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Ejecución Estructural
                            </h3>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Cimientos inquebrantables. Fusionamos <strong className="font-medium text-ink">supervisión de campo</strong> con estrictos protocolos para asegurar que la obra terminada proteja la vida humana y tu inversión.
                            </p>
                        </SpotlightCard>

                        {/* Card 3: Confianza */}
                        <SpotlightCard className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Ética Profesional
                            </div>
                            <h3 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Transparencia Operativa
                            </h3>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Sin sorpresas de última hora. Mantienes el control financiero mediante un <strong className="font-medium text-ink">sistema de reporte cerrado</strong> que audita cada peso de avance y suministro.
                            </p>
                        </SpotlightCard>
                    </div>

                    <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
                        {/* Segment 1 */}
                        <SpotlightCard className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 flex items-center">
                                Identidad & Hábitat
                            </div>
                            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Proyectos de Alta Gama
                            </h2>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Elevamos tu patrimonio. Traducimos tu estilo de vida en hogares que garantizan no solo confort y diseño, sino alta <strong className="font-medium text-ink">plusvalía garantizada</strong> con el paso del tiempo.
                            </p>
                        </SpotlightCard>

                        {/* Segment 2 */}
                        <SpotlightCard className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 flex items-center">
                                Sectores Productivos
                            </div>
                            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Comercial & Industrial
                            </h2>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Minimiza tu costo de oportunidad. Coordinamos cada frente de obra para que tu negocio <strong className="font-medium text-ink">abra sus puertas y empiece a facturar</strong> en la fecha pactada, sin demoras que no viste venir.
                            </p>
                        </SpotlightCard>

                        {/* Segment 3 (Highlight) */}
                        <SpotlightCard className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-accent/20 hover:border-accent/40 bg-gradient-to-br from-white/70 to-blue-50/30">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent flex items-center">
                                Misión Crítica
                            </div>
                            <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Infraestructura Técnica
                            </h2>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Cero atajos regulatorios. Aseguramos el cumplimiento innegociable de regulaciones en proyectos de riesgo como <strong className="font-semibold text-ink">Estaciones de Servicio</strong>, protegiendo tus licencias y concesiones mercantiles.
                            </p>
                        </SpotlightCard>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
