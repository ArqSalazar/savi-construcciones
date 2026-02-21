"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { FormEvent } from "react";

export default function Contacto() {
    const handleLead = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Lead (demo):", data);
        alert("¡Evaluación solicitada! (demo) Nos comunicaremos en breve.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pb-12 min-h-[60vh]">
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
                            Confianza & Legado SAVI
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            Construye<br />
                            <span className="opacity-20 italic">Tu Proyecto.</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="mt-4 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                        >
                            Inicia con la seguridad de un equipo que cuida tu patrimonio. Platícanos tu visión y estructuraremos una ruta técnica y financiera que garantice la certeza absoluta de tu inversión.
                        </motion.p>
                    </motion.div>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        {/* Form */}
                        <div className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-black/5">
                            <form onSubmit={handleLead}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Nombre Completo</label>
                                        <input
                                            required
                                            name="nombre"
                                            className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
                                            placeholder="Ing. Juan Pérez"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Organización</label>
                                        <input
                                            name="empresa"
                                            className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
                                            placeholder="Grupo Corporativo (Opcional)"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Contacto Inmediato</label>
                                        <input
                                            required
                                            name="telefono"
                                            type="tel"
                                            className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
                                            placeholder="WhatsApp o Móvil"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            name="correo"
                                            className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
                                            placeholder="corporativo@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Tipología del Proyecto</label>
                                    <input
                                        name="tipo"
                                        className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
                                        placeholder="Estación de Servicio, Nave Industrial, Residencia..."
                                    />
                                </div>

                                <div className="mt-6">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Alcance & Estatus</label>
                                    <textarea
                                        required
                                        name="mensaje"
                                        className="w-full min-h-[140px] rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all resize-none placeholder:text-gray-400 placeholder:font-light leading-relaxed"
                                        placeholder="Describe tu visión. ¿Cuentas con terreno? ¿Tienes planos ejecutivos o es un proyecto desde cero? Entre más contexto (M2, ubicación), más precisa será nuestra evaluación."
                                    />
                                </div>

                                <button type="submit" className="btn-apple mt-8 w-full py-[1.15rem]">
                                    Solicitar Evaluación Técnica
                                </button>
                                <p className="mt-4 text-gray-400 text-[11px] uppercase tracking-widest font-bold text-center">
                                    Conexión Segura CRM/WhatsApp — Fase de demostración
                                </p>
                            </form>
                        </div>

                        {/* Aside Contact Info */}
                        <aside className="glass p-9 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-black/5">
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-6">
                                    Líneas Directas
                                </div>
                                <div className="grid gap-5">
                                    <div className="flex flex-col gap-3 border-b border-black/5 pb-5">
                                        <div className="text-[14px] text-gray-500 font-medium">Ejecutivo de Cuenta</div>
                                        <a
                                            href="https://wa.me/5215555555555?text=Hola,%20quisiera%20evaluar%20un%20proyecto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between w-full p-4 rounded-xl border border-black/5 bg-white/50 hover:bg-green-50/80 hover:border-green-500/30 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 fill-green-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
                                                </svg>
                                                <span className="text-[14px] font-bold text-ink">Chatear por WhatsApp</span>
                                            </div>
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-3 border-b border-black/5 pb-4">
                                        <div className="text-[14px] text-gray-500 font-medium">Dirección Técnica</div>
                                        <a className="text-[15px] font-bold text-ink hover:text-accent transition-colors" href="mailto:ingenieria@saviconstrucciones.com">
                                            ingenieria@saviconstrucciones.com
                                        </a>
                                    </div>
                                    <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-4">
                                        <div className="text-[14px] text-gray-500 font-medium py-1">Despliegue Físico</div>
                                        <div className="text-right flex flex-col gap-3">
                                            <div>
                                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-1">HUB Central</div>
                                                <span className="text-[15px] font-bold text-ink">Los Mochis, Sinaloa · MX</span>
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-1">Sucursal</div>
                                                <span className="text-[15px] font-bold text-ink">Navojoa, Sonora · MX</span>
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-1">Operaciones</div>
                                                <span className="text-[15px] font-bold text-ink">Noroeste de México</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-[14px] text-gray-500 font-medium">Disponibilidad</div>
                                        <div className="text-[15px] font-bold text-ink text-right">Lun–Vie · 09:00–18:00 hr</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 glass p-7 rounded-[1.5rem] bg-gradient-to-br from-blue-50/40 to-white/50 border border-accent/10">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-[16px] font-black tracking-tight text-ink">Protocolo de Asistencia</div>
                                    <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent text-right mt-1">
                                        Triage
                                    </div>
                                </div>
                                <p className="text-[14px] text-gray-600 font-light leading-relaxed">
                                    Analizamos cada solicitud con <strong className="font-semibold text-ink">absoluta confidencialidad</strong>. Si tu proyecto es viable y entra en nuestro rango de especialidad, agendaremos una videollamada de 20 minutos con Dirección de Obra para aislar riesgos y delinear los siguientes pasos firmes.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="/servicios" className="btn-ghost text-[14px]">Revisar Capacidades</Link>
                                <Link href="/proyectos" className="btn-ghost text-[14px]">Ver Histórico</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
