"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";
import DimensionDivider from "@/components/DimensionDivider";

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
                                    staggerChildren: 0.08,
                                    delayChildren: 0,
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
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            DISEÑO &<br />
                            <span className="opacity-40 italic">CONSTRUCCIÓN.</span>
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="mt-4 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                        >
                            Desde el diseño de tu próximo hogar hasta el desarrollo de infraestructura técnica compleja. Acompañamos cada etapa de tu proyecto con una visión humana y el rigor técnico de la ingeniería, garantizando transparencia absoluta y honestidad en cada proceso.
                        </motion.p>
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
                        <Magnetic>
                            <Link href="/contacto" className="btn-apple">
                                Evaluar Proyecto
                            </Link>
                        </Magnetic>
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
                                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">Gestión integral desde el diseño hasta la entrega. Un solo equipo responsable de coordinar ingeniería de valor, diseño arquitectónico y ejecución técnica.</p>
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

            <DimensionDivider />

            <section className="flex items-center section-padding min-h-[60vh]">
                <div className="w-full">
                    <ScrollReveal>
                        <div className="flex items-end justify-between gap-6 flex-wrap">
                            <div>
                                <h2 className="text-4xl md:text-[3.5rem] font-black tracking-[-0.03em] leading-none mb-4">¿Qué Edificamos?</h2>
                                <p className="max-w-3xl text-gray-500 text-[18px] md:text-[20px] font-light leading-[1.65]">
                                    Cobertura técnica versátil: desde la comodidad del hogar hasta las exigencias logísticas empresariales.
                                </p>
                            </div>
                            <div className="glass px-5 py-3 text-[10px] uppercase font-bold tracking-[0.35em] text-accent mb-2">
                                Ejecución Plural
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h3 className="text-2xl font-black tracking-tight text-ink">Residencial de Alta Especificación</h3>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Trasladamos la disciplina de la gran infraestructura a tu hogar. Un mismo estándar de ejecución aplicado a residencias y remodelaciones para asegurar que el diseño se respete hasta el último detalle.</p>
                                <ul className="mt-6 text-[14px] font-medium text-gray-700 leading-relaxed list-none space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Alcance técnico firmado (Cero sorpresas)</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Presupuesto desglosado por partidas</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Checklists de calidad en acabados</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Expediente de entrega y garantías</li>
                                </ul>
                            </article>

                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h3 className="text-2xl font-black tracking-tight text-ink">Comercial & Corporativo</h3>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Especialistas en la habilitación de espacios de alta dinámica: oficinas corporativas, clínicas, restaurantes y unidades de retail. Implementamos logísticas de ejecución inteligente para asegurar la continuidad de tu negocio.</p>
                                <ul className="mt-6 text-[14px] font-medium text-gray-700 leading-relaxed list-none space-y-2">
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Ejecución sin Interrupción Operativa</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Ingeniería de Instalaciones Especializadas (MEP)</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Gestión Integral de Fit-outs y Acabados</li>
                                    <li className="flex items-center gap-2"><span className="text-accent">✓</span> Cumplimiento Estricto de Plazos de Apertura</li>
                                </ul>
                            </article>

                            <article className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:bg-white/80 border border-black/5 hover:border-black/10">
                                <h3 className="text-2xl font-black tracking-tight text-ink">Industrial & Infraestructura</h3>
                                <p className="mt-4 text-[15px] font-light text-gray-500 leading-relaxed">Experiencia en proyectos de gran escala: desde naves logísticas y urbanización hasta soporte técnico para el sector minero. Maximizamos la eficiencia mediante planificación predictiva y control riguroso en sitio. Conoce más sobre nuestra <Link href="/naves-industriales-sonora" className="text-accent underline decoration-accent/20 hover:decoration-accent/60 transition-colors">construcción de naves industriales en Sonora</Link>.</p>
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
                                    <h3 className="text-3xl font-black tracking-tight text-ink">Estaciones de Servicio</h3>
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
                                    <Link href="/gasolineras-sinaloa-sonora" className="mt-4 inline-block text-[13px] font-semibold text-accent underline decoration-accent/20 hover:decoration-accent/60 transition-colors">
                                        Ver detalle: gasolineras en Sinaloa y Sonora →
                                    </Link>
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
                                    <Link href="/constructora-los-mochis" className="glass p-5 border-l-4 border-accent hover:bg-white/80 transition-colors">
                                        <div className="font-bold text-ink text-sm md:text-base">Sede Central: Los Mochis</div>
                                        <div className="text-xs opacity-60 italic mt-1">Sinaloa · Matriz Corporativa</div>
                                    </Link>
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
                                    Estructura Técnica & FAQ
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿SAVI CONSTRUCCIONES ejecuta Estaciones de Servicio en todo el país?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Sí. Contamos con absoluta movilidad nacional para ejecutar proyectos llave en mano (Turnkey), desde la gestión normativa ante ASEA/CRE hasta la ingeniería civil y mecánica en cualquier punto de la República.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿Cómo integran la arquitectura y la ingeniería en sus proyectos?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Operamos bajo un esquema de responsabilidad única. Fusionamos el diseño arquitectónico con el rigor técnico de la ingeniería desde la fase de anteproyecto, garantizando presupuestos honestos y obras sin vicios técnicos.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[16px] text-ink mb-2">¿Qué sectores de infraestructura y edificación atienden a nivel nacional?</h4>
                                        <p className="text-[14px] text-gray-500 font-light leading-relaxed">Nuestra agilidad operativa nos permite atender proyectos Residenciales de alta gama, Naves Industriales, Infraestructura Minera, Restaurantes y Corporativos, adaptando la logística a las necesidades específicas de cada zona.</p>
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
