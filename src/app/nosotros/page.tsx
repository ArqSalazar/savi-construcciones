"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nosotros() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pb-12 min-h-[70vh]">
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
                        className="flex flex-col gap-6 md:gap-7"
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_0_6px_rgba(29,78,216,.10)]"></span>
                            Trayectoria & Legado SAVI
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            HISTORIA.<br />
                            <span className="opacity-90">VISIÓN.</span><br />
                            <span className="opacity-20 italic">COMPROMISO.</span>
                        </motion.h1>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-4 items-start">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                                className="max-w-3xl"
                            >
                                <p className="text-gray-700/80 text-[19px] md:text-[22px] font-light leading-[1.65] tracking-tight">
                                    Fundada en 2001, <strong className="font-semibold text-ink">SAVI CONSTRUCCIONES</strong> ha evolucionado de una visión familiar a una infraestructura corporativa de alto alcance. No solo edificamos estructuras; garantizamos la <strong className="font-medium text-ink">supervivencia de tu inversión</strong> mediante un rigor técnico que define cada etapa de nuestro proceso.
                                </p>
                                <p className="mt-6 text-gray-500 text-[17px] font-light leading-relaxed">
                                    Operamos bajo un principio innegociable: el respeto al patrimonio ajeno. Desde la concepción de los primeros planos arquitectónicos y gestión de permisos, hasta el control total de la ingeniería de campo con transparencia absoluta.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                                }}
                                className="glass p-10 w-full lg:max-w-md border-l-4 border-accent relative"
                            >
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 blur-3xl rounded-full"></div>
                                <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent block mb-4">Filosofía de Autor</span>
                                <p className="text-[15px] text-gray-600 italic leading-[1.8] relative z-10">
                                    &quot;Entendemos que el éxito de una obra no se mide en el día de la entrega, sino en la paz mental del cliente durante todo el proceso y la durabilidad de la estructura décadas después.&quot;
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="w-10 h-[1px] bg-accent/30"></div>
                                    <span className="text-[11px] font-bold text-ink uppercase tracking-wider">Dirección General</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Impact Metrics Section */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
                            }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-y border-black/5"
                        >
                            <div className="flex flex-col items-center md:items-start group">
                                <span className="text-5xl md:text-6xl font-black text-ink tracking-[-0.05em] group-hover:text-accent transition-colors duration-500">23+</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-3 text-center md:text-left">Años de Trayectoria</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start group">
                                <span className="text-5xl md:text-6xl font-black text-ink tracking-[-0.05em] group-hover:text-accent transition-colors duration-500">45+</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-3 text-center md:text-left">Proyectos Críticos</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start group">
                                <span className="text-5xl md:text-6xl font-black text-ink tracking-[-0.05em] group-hover:text-accent transition-colors duration-500">2</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-3 text-center md:text-left">Centros Operativos</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start group">
                                <span className="text-5xl md:text-6xl font-black text-accent tracking-[-0.05em]">100%</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mt-3 text-center md:text-left">Certeza Contractual</span>
                            </div>
                        </motion.div>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-10">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                                className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10"
                            >
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Pilar I</div>
                                <div className="mt-3 text-2xl font-black tracking-tight text-ink">Transparencia Total</div>
                                <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65]">
                                    Cuidamos tu patrimonio como si fuera propio. Eliminamos la incertidumbre financiera mediante una comunicación clara y una gestión honesta de cada recurso, asegurando que tu inversión se traduzca en valor real.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                                }}
                                className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 h-full flex flex-col border border-black/5 hover:border-black/10"
                            >
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Pilar II</div>
                                <div className="mt-3 text-2xl font-black tracking-tight text-ink">Ingeniería con Propósito</div>
                                <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65]">
                                    Unimos la visión arquitectónica con un sustento técnico inquebrantable. Diseñamos espacios que no solo son bellos, sino seguros, eficientes y construidos para trascender generaciones.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                                }}
                                className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-accent/20 hover:border-accent/40 bg-gradient-to-br from-white/70 to-blue-50/30 h-full flex flex-col"
                            >
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent">Pilar III</div>
                                <div className="mt-3 text-2xl font-black tracking-tight text-ink">Compromiso Real</div>
                                <p className="mt-4 text-gray-500 text-[15px] font-light leading-[1.65]">
                                    Respetamos tu tiempo y tus planes. Nuestra logística y experiencia en el Noroeste nos permiten cumplir con cronogramas estrictos, garantizando que puedas disfrutar de tu espacio o iniciar tu negocio en la fecha pactada.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
                            }}
                            className="mt-16 flex flex-wrap items-center gap-5 relative z-20"
                        >
                            <Link href="/contacto" className="btn-apple">
                                Agendar Evaluación de Proyecto
                            </Link>
                            <Link href="/proyectos" className="btn-ghost">
                                Ver Casos de Éxito
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
