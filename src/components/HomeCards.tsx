"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function HomeCards() {
    return (
        <section className="flex flex-col justify-center section-padding pb-4">
            <div className="w-full max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 items-stretch">
                        {/* Card 1: Alcance/Costo */}
                        <div className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Certidumbre Técnica
                            </div>
                            <div className="mt-3 text-xl font-bold tracking-tight text-ink">
                                Ingeniería Presupuestal
                            </div>
                            <div className="mt-4 text-gray-500 text-sm leading-[1.65] mt-auto">
                                Blindamos tu capital. Aplicamos <strong className="font-medium text-ink">análisis de costos milimétricos</strong> para eliminar sorpresas financieras y garantizar la viabilidad desde el primer trazo.
                            </div>
                        </div>

                        {/* Card 2: Gestión */}
                        <div className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Integridad
                            </div>
                            <div className="mt-3 text-xl font-bold tracking-tight text-ink">
                                Ejecución Estructural
                            </div>
                            <div className="mt-4 text-gray-500 text-sm leading-[1.65] mt-auto">
                                Cimientos inquebrantables. Fusionamos <strong className="font-medium text-ink">supervisión de campo</strong> con estrictos protocolos para asegurar que la obra terminada proteja la vida humana y tu inversión.
                            </div>
                        </div>

                        {/* Card 3: Confianza */}
                        <div className="glass p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col group border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 group-hover:text-accent transition-colors duration-300">
                                Ética Profesional
                            </div>
                            <div className="mt-3 text-xl font-bold tracking-tight text-ink">
                                Transparencia Operativa
                            </div>
                            <div className="mt-4 text-gray-500 text-sm leading-[1.65] mt-auto">
                                Paz mental absoluta. Mantienes el control financiero mediante un <strong className="font-medium text-ink">sistema de reporte cerrado</strong> que audita cada peso de avance y suministro.
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
                        {/* Segment 1 */}
                        <div className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 flex items-center">
                                Identidad & Hábitat
                            </div>
                            <div className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Arquitectura Residencial
                            </div>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Elevamos tu patrimonio. Traducimos tu estilo de vida en hogares que garantizan no solo confort y diseño, sino alta <strong className="font-medium text-ink">plusvalía garantizada</strong> con el paso del tiempo.
                            </p>
                        </div>

                        {/* Segment 2 */}
                        <div className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 flex items-center">
                                Sectores Productivos
                            </div>
                            <div className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Comercial & Industrial
                            </div>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Minimiza tu costo de oportunidad. Cerramos ciclos constructivos con una <strong className="font-medium text-ink">logística acelerada</strong> orientada a detonar la apertura e inicio de facturación de tu empresa sin demoras.
                            </p>
                        </div>

                        {/* Segment 3 (Highlight) */}
                        <div className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-accent/20 hover:border-accent/40 bg-gradient-to-br from-white/70 to-blue-50/30">
                            <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent flex items-center">
                                Misión Crítica
                            </div>
                            <div className="mt-3 text-2xl font-black tracking-tight text-ink">
                                Infraestructura Técnica
                            </div>
                            <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65] mt-auto">
                                Dominio normativo total. Aseguramos el cumplimiento innegociable de regulaciones en proyectos de riesgo como <strong className="font-semibold text-ink">Estaciones de Servicio</strong>, protegiendo tus licencias y concesiones mercantiles.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
