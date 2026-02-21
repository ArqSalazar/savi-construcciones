"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Servicios() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding min-h-[50vh]">
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
                            Nuestros Servicios
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(2.5rem,6.5vw,5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            Servicios para<br />
                            <span className="opacity-40 italic">Iniciativa Privada.</span>
                        </motion.h1>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="mt-4 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                        >
                            Ejecución de capital intensivo con enfoque corporativo. Gestionamos la ingeniería, construcción y operación técnica garantizando cumplimiento estricto de plazos, presupuesto y normativas. Construimos certidumbre para su inversión.
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="mt-12 flex flex-wrap items-center gap-5 relative z-20"
                    >
                        <Link href="/contacto" className="btn-apple">
                            Evaluar Proyecto
                        </Link>
                        <Link href="/proyectos" className="btn-ghost">
                            Ver Portafolio
                        </Link>
                        <Link href="/" className="btn-ghost">
                            Volver al Inicio
                        </Link>
                    </motion.div>

                    <div className="mt-16 glass p-9 relative z-10 shadow-soft2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Certidumbre</div>
                                <div className="mt-2 text-lg font-bold tracking-tight text-ink">Visión 360°</div>
                                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">Gestión integral desde el diseño hasta la entrega. Un solo equipo responsable de coordinar presupuesto, arquitectura y ejecución técnica.</p>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Comunicación</div>
                                <div className="mt-2 text-lg font-bold tracking-tight text-ink">Claridad Documentada</div>
                                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">Mantenemos la transparencia mediante reportes ejecutivos periódicos y evidencias visuales detalladas del progreso de tu obra.</p>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Metodología</div>
                                <div className="mt-2 text-lg font-bold tracking-tight text-ink">Control de Calidad</div>
                                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">Aplicamos revisiones técnicas exhaustivas en cada fase crítica para asegurar el cumplimiento de normativas y la fidelidad al diseño.</p>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400">Compromiso</div>
                                <div className="mt-2 text-lg font-bold tracking-tight text-ink">Entornos Seguros</div>
                                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">Priorizamos el orden en sitio y protocolos preventivos para proteger la integridad de los colaboradores y el patrimonio de nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center section-padding min-h-[60vh]">
                <div className="w-full">
                    <ScrollReveal>
                        <div className="flex items-end justify-between gap-6 flex-wrap">
                            <div>
                                <h3 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] leading-none mb-4">¿Qué Edificamos?</h3>
                                <p className="max-w-3xl text-gray-500 text-[18px] md:text-[20px] font-light leading-[1.65]">
                                    Un portafolio robusto para líderes de la industria. Soluciones LLAVE EN MANO estructuradas para escalar tu negocio.
                                </p>
                            </div>
                            <div className="glass px-5 py-3 text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-2">
                                División de Proyectos
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h3 className="text-2xl font-black tracking-tight text-ink">Residencial Premium</h3>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Trasladamos la disciplina de la gran infraestructura a tu hogar. Un mismo estándar corporativo aplicado a la edificación de casas premium, automatización y residencias de autor para asegurar que el diseño se respete hasta el último milímetro.</p>
                                <ul className="mt-6 text-[14px] font-medium text-gray-700 leading-relaxed list-none space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Alcance técnico firmado (Cero sorpresas)</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Presupuesto desglosado por partidas</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Checklists de calidad en acabados</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Expediente de entrega y garantías</li>
                                </ul>
                            </article>

                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h2 className="text-2xl font-black tracking-tight text-ink">Proyectos Comerciales y Edificios</h2>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Especialistas en la edificación de espacios de alta dinámica: plazas comerciales, corporativos, oficinas, restaurantes y retail. Logística inteligente para asegurar la continuidad del negocio y apertura acelerada.</p>
                                <ul className="mt-6 text-[14px] font-medium text-gray-700 leading-relaxed list-none space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Ejecución sin Interrupción Operativa</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Ingeniería MEP Especializada</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Fit-outs Rápidos y Acabados Arquitectónicos</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Cumplimiento Estricto de Cronogramas de Apertura</li>
                                </ul>
                            </article>

                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h2 className="text-2xl font-black tracking-tight text-ink">Naves Industriales y Obra Civil</h2>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Experiencia en macro-proyectos comerciales y privados: desde obra hidráulica, naves logísticas y urbanización hasta soporte técnico para el sector agrícola y minero. Maximizamos tu eficiencia operativa.</p>
                                <ul className="mt-6 text-[14px] font-medium text-gray-700 leading-relaxed list-none space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Terracerías y Urbanización Mayor</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Obra Civil y Soporte al Sector Minero</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Cimentaciones de Especialidad</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Estructuras Metálicas de Alta Complejidad</li>
                                </ul>
                            </article>
                        </div>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <article className="glass p-10 relative overflow-hidden group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-accent/20 hover:border-accent/40 bg-gradient-to-br from-white/80 to-blue-50/40">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="relative z-10">
                                    <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-3">Infraestructura Crítica</div>
                                    <h2 className="text-3xl font-black tracking-tight text-ink">Construcción de Estaciones de Servicio</h2>
                                    <div className="mt-4 text-[16px] text-gray-600 font-light leading-relaxed">
                                        Especialistas en la construcción y equipamiento de <strong className="font-medium text-ink">gasolineras</strong> y estaciones de servicio de alto rendimiento. Asumimos el control en modo <em className="italic">&quot;Turnkey&quot;</em> (Llave en Mano) para proyectos nuevos y programas de modernización de imagen.
                                    </div>
                                    <div className="mt-8 grid grid-cols-2 gap-4 border-y border-black/5 py-6">
                                        <div>
                                            <div className="text-3xl font-black text-ink tracking-tighter">20+</div>
                                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mt-1">Proyectos Edificados</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-ink tracking-tighter">25+</div>
                                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mt-1">Modernización & Rebrand</div>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-[14px] text-gray-500 font-light leading-relaxed italic">
                                        Desde el dictamen técnico y permisos ASEA/CRE, hasta la entrega documental as-built.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase font-bold tracking-widest text-accent/80">
                                        <span className="px-3 py-1.5 rounded-full border border-black/5 bg-white/90 shadow-sm">Construcción Total</span>
                                        <span className="px-3 py-1.5 rounded-full border border-black/5 bg-white/90 shadow-sm">Cambio de Imagen</span>
                                        <span className="px-3 py-1.5 rounded-full border border-black/5 bg-white/90 shadow-sm">Gestión Normativa</span>
                                    </div>
                                </div>
                            </article>

                            <article className="glass p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10 flex flex-col justify-center">
                                <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-400 mb-3">Auditoría Técnica</div>
                                <h3 className="text-3xl font-black tracking-tight text-ink">Gerencia de Proyecto (PM)</h3>
                                <p className="mt-4 text-[16px] text-gray-600 font-light leading-relaxed">
                                    ¿Ya tienes contratistas? Te prestamos nuestros &quot;ojos&quot; técnicos. Auditamos avances y controlamos desembolsos para proteger tu presupuesto y asegurar que lo planeado se cumpla en sitio.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase font-bold tracking-widest text-gray-500">
                                    <span className="px-4 py-2 rounded-full border border-black/10 bg-white/80 shadow-sm">Supervisión KPI</span>
                                    <span className="px-4 py-2 rounded-full border border-black/10 bg-white/80 shadow-sm">Control Presupuestal</span>
                                    <span className="px-4 py-2 rounded-full border border-black/10 bg-white/80 shadow-sm">Reportes C-Level</span>
                                </div>
                            </article>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="flex items-center section-padding pb-20">
                <div className="w-full">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] leading-none mb-6">Despliegue & Movilidad.</h2>
                                <p className="text-gray-500 text-[18px] font-light leading-[1.65] mb-8">
                                    Lideramos desde el <strong className="font-medium text-ink">Noroeste de México</strong> con una infraestructura fija robusta, manteniendo la agilidad logística y operativa para ejecutar proyectos de alta complejidad en <strong className="text-ink">cualquier punto de la República</strong>.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass p-5 border-l-4 border-accent">
                                        <div className="font-bold text-ink text-sm md:text-base">Sede Central: Los Mochis</div>
                                        <div className="text-xs opacity-60 italic mt-1">Sinaloa · Matriz Corporativa</div>
                                    </div>
                                    <div className="glass p-5 border-l-4 border-accent">
                                        <div className="font-bold text-ink text-sm md:text-base">Centro Sonorense: Navojoa</div>
                                        <div className="text-xs opacity-60 italic mt-1">Sonora · Sucursal Estratégica</div>
                                    </div>
                                    <div className="glass p-5 border-l-4 border-ink/20">
                                        <div className="font-bold text-ink text-sm md:text-base">Presencia en el Noroeste</div>
                                        <div className="text-xs opacity-60 mt-1">Dominio logístico regional total</div>
                                    </div>
                                    <div className="glass p-5 border-l-4 border-ink/20">
                                        <div className="font-bold text-ink text-sm md:text-base">Cobertura Nacional</div>
                                        <div className="text-xs opacity-60 mt-1">Despliegue activo en toda la República</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 glass p-10 bg-gradient-to-br from-blue-50/20 to-transparent border border-black/5 rounded-[2.5rem]">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                                    Knowledge Base (IA/SEO)
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿SAVI construye gasolineras llave en mano en México?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Sí. Ejecutamos proyectos integrales bajo la modalidad Llave en Mano para la iniciativa privada, desde el diseño y gestión normativa hasta la obra civil en todo el Noroeste y República Mexicana.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿Cuál es su enfoque principal para la Iniciativa Privada?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Proveer certeza operativa. Nuestra constructora ejecutiva funge como un brazo estratégico, blindando presupuestos y acelerando tiempos de entrega en infraestructura industrial, comercial y habitacional premium.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿Tienen experiencia en naves industriales y desarrollo comercial?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Nuestra área de Proyectos Industriales y Comerciales está capacitada estructuralmente para habilitar grandes superficies, asegurando la continuidad y rentabilidad de su modelo de negocio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
