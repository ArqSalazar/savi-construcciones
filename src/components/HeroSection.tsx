"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center section-padding min-h-[60vh]">
            <div className="w-full max-w-[1400px] mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0,
                            }
                        }
                    }}
                    className="flex flex-col gap-6 max-w-[90%] xl:max-w-5xl relative"
                >
                    {/* Subtle background glow to improve readability over the grid pattern */}
                    <div className="absolute -inset-10 bg-white/40 blur-3xl -z-10 rounded-full pointer-events-none"></div>

                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-accent font-semibold tracking-[0.42em] text-[10px] md:text-[11px] uppercase inline-flex items-center gap-3 mb-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_0_6px_rgba(29,78,216,.10)]"></span>
                        </span>
                        Construcciones de Precisión · Est. 2001
                    </motion.span>

                    <h1 className="text-[clamp(3rem,6.5vw,6rem)] font-black tracking-[-0.04em] text-ink uppercase">
                        <span className="block overflow-hidden pt-[0.15em] pb-[0.2em]">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                                className="block leading-[0.85]"
                            >
                                Creamos espacios.
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden pt-[0.15em] pb-[0.2em]">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="block leading-[0.85]"
                            >
                                <span className="opacity-90">Construimos</span> <span className="opacity-40 italic">Certeza.</span>
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="mt-2 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                    >
                        Donde la <strong className="font-semibold text-ink">visión arquitectónica</strong> se encuentra con el <strong className="font-semibold text-ink">legado de la ingeniería</strong>. En SAVI CONSTRUCCIONES, protegemos tu patrimonio con la honestidad de una empresa familiar y la excelencia técnica de un socio estratégico.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95, y: 10 },
                            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="mt-6 flex flex-wrap items-center gap-3 glass px-5 md:px-7 py-3.5 w-full md:w-max shadow-soft2 border border-black/[0.03]"
                    >
                        <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Alcance Total</span>
                        <div className="hidden sm:block w-[1px] h-4 bg-gray-200 mx-2"></div>
                        <span className="text-[12px] sm:text-sm font-semibold tracking-tight text-gray-800">
                            Arquitectura Ejecutiva · Ingeniería Especializada · Construcción Llave en Mano
                        </span>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="mt-8 flex flex-wrap items-center gap-5 relative z-20"
                    >
                        <Magnetic>
                            <Link href="/contacto" className="btn-apple">
                                Solicitar Evaluación Técnica
                            </Link>
                        </Magnetic>
                        <Link href="/proyectos" className="btn-ghost text-gray-500 hover:text-ink">
                            Conocer nuestro trabajo
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
