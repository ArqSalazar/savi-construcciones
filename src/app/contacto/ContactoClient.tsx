"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { FormEvent, FocusEvent, useState } from "react";

type FieldName = "nombre" | "telefono" | "correo" | "tipo" | "mensaje";

const VALIDATORS: Record<FieldName, (value: string) => string | null> = {
    nombre: (v) => (v.trim().length < 3 ? "Ingresa tu nombre completo." : null),
    telefono: (v) => (v.replace(/\D/g, "").length < 10 ? "Ingresa un teléfono a 10 dígitos." : null),
    correo: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Ingresa un correo válido."),
    tipo: (v) => (v ? null : "Selecciona una especialidad."),
    mensaje: (v) => (v.trim().length < 10 ? "Cuéntanos un poco más sobre tu proyecto." : null),
};

const fieldClass = (hasError: boolean) =>
    `w-full rounded-[1rem] border bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400 placeholder:font-light ${hasError
        ? "border-red-300 focus:ring-red-200 focus:border-red-300"
        : "border-black/10 focus:ring-accent/40 focus:border-accent/30"
    }`;

export default function Contacto() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

    const validateField = (name: FieldName, value: string) => {
        const message = VALIDATORS[name](value);
        setErrors((prev) => ({ ...prev, [name]: message ?? undefined }));
        return message;
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name in VALIDATORS) validateField(name as FieldName, value);
    };

    const handleLead = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formArgs = e.currentTarget;
        const formData = new FormData(formArgs);

        const nextErrors: Partial<Record<FieldName, string>> = {};
        (Object.keys(VALIDATORS) as FieldName[]).forEach((name) => {
            const message = VALIDATORS[name](String(formData.get(name) ?? ""));
            if (message) nextErrors[name] = message;
        });
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setIsSubmitting(true);

        // Configuración de Web3Forms API
        formData.append("access_key", "f3ced7a1-4811-42b7-8cb5-772388f0dbea");
        formData.append("subject", `[SAVI Web] Nuevo prospecto: ${formData.get("nombre")} - ${formData.get("tipo")}`);
        formData.append("from_name", "SAVI Construcciones Web");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                formArgs.reset();
            } else {
                console.error("Error sending form:", data);
                alert("Hubo un error al procesar la solicitud. Por favor, intenta por WhatsApp o correo.");
            }
        } catch (error) {
            console.error("Error enviando el formulario:", error);
            alert("Ocurrió un error de red. Por favor, verifica tu conexión e intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pb-6 min-h-[50vh]">
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
                            Consultoría & Ingeniería de Alta Gama
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-ink uppercase"
                        >
                            Construye<br />
                            <span className="opacity-40 italic">Tu Proyecto.</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="mt-2 max-w-2xl text-gray-700/80 text-[18px] md:text-[21px] font-light leading-[1.65] tracking-[-0.01em]"
                        >
                            Inicia con la seguridad de un equipo que cuida tu patrimonio. Platícanos tu visión y estructuraremos una ruta técnica que garantice la certeza absoluta de tu inversión.
                        </motion.p>
                    </motion.div>

                    {/* Protocolo de Asistencia (Priorizado para Conversión) */}
                    <div className="mt-12 w-full max-w-4xl">
                        <ScrollReveal>
                            <div className="glass p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-blue-50/50 to-white/70 border border-accent/15 shadow-xl shadow-accent/5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-accent">Protocolo de Asistencia Técnica</div>
                                            <div className="h-px flex-1 bg-accent/10"></div>
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 tracking-tight">Análisis de Viabilidad & Confidencialidad</h2>
                                        <p className="text-[15px] md:text-[16px] text-gray-600 font-light leading-relaxed">
                                            Analizamos cada solicitud con <strong className="font-semibold text-ink">absoluta confidencialidad</strong>. Si tu proyecto es viable y entra en nuestro rango de especialidad, agendaremos una <strong className="text-accent underline decoration-accent/20">videollamada técnica de 20 minutos</strong> con nuestra Dirección de Obra para aislar riesgos operativos y delinear los siguientes pasos firmes.
                                        </p>
                                    </div>
                                    <div className="hidden lg:flex flex-col items-center justify-center p-6 border-l border-black/5 min-w-[180px]">
                                        <div className="text-4xl font-black text-accent/20 flex items-baseline gap-1 mb-2">
                                            20<span className="text-xs uppercase font-bold tracking-widest text-accent/40">min</span>
                                        </div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 text-center leading-tight">Sesión Inicial<br />Ejecutiva</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 pb-24">
                        {/* Form Container */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="glass p-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-black/5 bg-white/60"
                                    >
                                        <form onSubmit={handleLead}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Nombre Completo</label>
                                                    <input
                                                        required
                                                        name="nombre"
                                                        onBlur={handleBlur}
                                                        aria-invalid={!!errors.nombre}
                                                        className={fieldClass(!!errors.nombre)}
                                                        placeholder="Ing. Juan Pérez"
                                                    />
                                                    {errors.nombre && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.nombre}</p>}
                                                </div>
                                                <div>
                                                    <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Organización</label>
                                                    <input
                                                        name="empresa"
                                                        className="w-full rounded-[1rem] border border-black/10 bg-white/70 px-5 py-3.5 text-[15px] font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/30 transition-all placeholder:text-gray-400 placeholder:font-light"
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
                                                        onBlur={handleBlur}
                                                        aria-invalid={!!errors.telefono}
                                                        className={fieldClass(!!errors.telefono)}
                                                        placeholder="WhatsApp o Móvil"
                                                    />
                                                    {errors.telefono && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.telefono}</p>}
                                                </div>
                                                <div>
                                                    <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Correo Electrónico</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        name="correo"
                                                        onBlur={handleBlur}
                                                        aria-invalid={!!errors.correo}
                                                        className={fieldClass(!!errors.correo)}
                                                        placeholder="contacto@empresa.com"
                                                    />
                                                    {errors.correo && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.correo}</p>}
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Tipología del Proyecto</label>
                                                <div className="relative group/select">
                                                    <select
                                                        name="tipo"
                                                        required
                                                        defaultValue=""
                                                        onBlur={handleBlur}
                                                        aria-invalid={!!errors.tipo}
                                                        className={`${fieldClass(!!errors.tipo)} appearance-none cursor-pointer pr-12`}
                                                    >
                                                        <option value="" disabled>Seleccione Especialidad</option>
                                                        <option value="Estación de Servicio">Estación de Servicio (Gasolinera)</option>
                                                        <option value="Nave Industrial">Nave Industrial / Bodega</option>
                                                        <option value="Residencia">Residencia de Alta Gama</option>
                                                        <option value="Comercial">Desarrollo Comercial / Oficial</option>
                                                        <option value="Otro">Otro Proyecto de Ingeniería</option>
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover/select:text-accent transition-colors">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {errors.tipo && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.tipo}</p>}
                                            </div>

                                            <div className="mt-6">
                                                <label className="text-[10px] uppercase font-bold tracking-[0.35em] text-gray-500 mb-2 block">Contexto & Estatus</label>
                                                <textarea
                                                    required
                                                    name="mensaje"
                                                    onBlur={handleBlur}
                                                    aria-invalid={!!errors.mensaje}
                                                    className={`${fieldClass(!!errors.mensaje)} min-h-[140px] resize-none leading-relaxed`}
                                                    placeholder="Describe tu visión. ¿Cuentas con terreno? ¿Tienes planos ejecutivos o es un proyecto desde cero? Ayúdanos a preparar la videollamada de 20min."
                                                />
                                                {errors.mensaje && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.mensaje}</p>}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`btn-apple mt-8 w-full py-[1.15rem] shadow-lg shadow-accent/15 transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Procesando Evaluación...
                                                    </>
                                                ) : (
                                                    "Enviar Solicitud de Evaluación"
                                                )}
                                            </button>
                                            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
                                                <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                                </svg>
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Gestión de datos bajo cifrado SSL · SAVI Direct</span>
                                            </div>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="glass p-12 flex flex-col items-center text-center justify-center min-h-[500px] border-accent/20 bg-accent/[0.02]"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                                            <svg className="w-10 h-10 text-accent animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-black text-ink tracking-tight mb-4 uppercase italic">Solicitud Recibida</h3>
                                        <p className="text-gray-600 text-[18px] max-w-sm leading-relaxed font-light mb-10">
                                            Nuestra Dirección de Obra ha sido notificada. Iniciaremos el proceso de triage para estructurar tu videollamada técnica.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-[11px] uppercase font-bold tracking-[0.3em] text-accent hover:opacity-70 transition-opacity"
                                        >
                                            Nueva Consulta ←
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Aside Contact Info */}
                        <aside className="glass p-9 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-black/5 bg-white/40">
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-6 font-bold italic">Enlaces Corporativos</div>
                                <div className="grid gap-6">
                                    {/* Dirección General */}
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Dirección Corporativa</div>
                                        <a className="text-[15px] font-bold text-ink hover:text-accent transition-colors flex items-center gap-2" href="mailto:direccion@saviconstrucciones.com">
                                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                                            direccion@saviconstrucciones.com
                                        </a>
                                    </div>

                                    {/* Ventas & Leads */}
                                    <div className="flex flex-col gap-3 pt-2">
                                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Atención Inmediata</div>
                                        <div className="grid gap-3">
                                            <a className="text-[15px] font-bold text-ink hover:text-accent transition-colors flex items-center gap-2" href="mailto:ventas@saviconstrucciones.com">
                                                <div className="w-1 h-1 rounded-full bg-accent"></div>
                                                ventas@saviconstrucciones.com
                                            </a>
                                            <a
                                                href="https://wa.me/5216682228008?text=Hola,%20solicito%20evaluación%20técnica%20para%20un%20proyecto"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-between w-full p-3.5 rounded-xl border border-black/5 bg-white/70 hover:bg-green-50/10 hover:border-green-500/20 transition-all duration-300 group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <svg className="w-4 h-4 fill-green-600 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
                                                    </svg>
                                                    <span className="text-[13px] font-bold text-ink tracking-tight italic">Atención Inmediata WhatsApp</span>
                                                </div>
                                                <svg className="w-4 h-4 text-gray-300 group-hover:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Arquitectura & Proyectos */}
                                    <div className="flex flex-col gap-2 pt-2">
                                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Ingeniería & Proyectos</div>
                                        <a className="text-[15px] font-bold text-ink hover:text-accent transition-colors flex items-center gap-2" href="mailto:proyectos@saviconstrucciones.com">
                                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                                            proyectos@saviconstrucciones.com
                                        </a>
                                    </div>

                                    {/* Administración */}
                                    <div className="flex flex-col gap-2 pt-2">
                                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Administración & Finanzas</div>
                                        <a className="text-[15px] font-bold text-ink hover:text-accent transition-colors flex items-center gap-2" href="mailto:administracion@saviconstrucciones.com">
                                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                                            administracion@saviconstrucciones.com
                                        </a>
                                    </div>

                                    {/* Sedes */}
                                    <div className="flex flex-col gap-5 border-t border-black/5 pt-6 mt-2">
                                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Sedes de Operación</div>
                                        <div className="grid gap-6">
                                            {/* Los Mochis */}
                                            <div className="group/loc">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent opacity-80 italic">Corporativo Los Mochis</div>
                                                    <a
                                                        href="https://www.google.com/maps/search/?api=1&query=Cjon.+Domingo+Rubi+517,+La+Cuchilla,+81250+Los+Mochis,+Sin."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-accent transition-colors"
                                                    >
                                                        Mapa
                                                    </a>
                                                </div>
                                                <div className="text-[14px] text-ink font-medium leading-relaxed mb-3">
                                                    Cjon. Domingo Rubi 517, La Cuchilla,<br />
                                                    81250 Los Mochis, Sin.
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <a href="tel:+526688155975" className="text-[13px] text-gray-600 hover:text-accent flex items-center gap-2 transition-colors">
                                                        <span className="opacity-40 font-bold uppercase text-[9px]">Oficina.</span> <span className="font-bold">+52 668 815 5975</span>
                                                    </a>
                                                    <a href="tel:+526682228008" className="text-[13px] text-gray-600 hover:text-accent flex items-center gap-2 transition-colors">
                                                        <span className="opacity-40 font-bold uppercase text-[9px]">Directo.</span> <span className="font-bold">+52 668 222 8008</span>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Navojoa */}
                                            <div className="group/loc">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="text-[10px] uppercase font-bold tracking-[0.35em] text-accent opacity-80 italic">Sucursal Navojoa</div>
                                                    <a
                                                        href="https://www.google.com/maps/search/?api=1&query=C.+Sociedad+Mutualista+1312,+Deportiva,+85860+Navojoa,+Son."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-accent transition-colors"
                                                    >
                                                        Mapa
                                                    </a>
                                                </div>
                                                <div className="text-[14px] text-ink font-medium leading-relaxed mb-3">
                                                    C. Sociedad Mutualista 1312, Deportiva,<br />
                                                    85860 Navojoa, Son.
                                                </div>
                                                <a href="tel:+526424273489" className="text-[13px] text-gray-600 hover:text-accent flex items-center gap-2 transition-colors">
                                                    <span className="opacity-40 font-bold uppercase text-[9px]">Central.</span> <span className="font-bold">+52 642 427 3489</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-black/5">
                                        <div className="text-[12px] text-gray-500 font-medium">Asistencia Ejecutiva</div>
                                        <div className="text-[13px] font-bold text-ink text-right italic">Lun–Vie · 09:00–18:00 hr</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 pt-2">
                                <Link href="/servicios" className="text-[11px] uppercase font-black tracking-widest text-gray-400 hover:text-accent transition-colors">Especialidades</Link>
                                <div className="w-1 h-1 rounded-full bg-gray-200 mt-1.5"></div>
                                <Link href="/proyectos" className="text-[11px] uppercase font-black tracking-widest text-gray-400 hover:text-accent transition-colors">Portafolio</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
