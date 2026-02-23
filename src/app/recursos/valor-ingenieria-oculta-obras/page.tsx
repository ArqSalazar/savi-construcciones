"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticlePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex flex-col justify-center section-padding pt-32 pb-16">
                <div className="w-full max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                                Ingeniería
                            </span>
                            <span className="text-[11px] font-medium text-gray-400">Enero 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-ink">
                            El valor de la Estructura: Ingeniería que protege tu Patrimonio
                        </h1>

                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Por qué el rigor técnico en la fase oculta de la obra es la mejor garantía de longevidad para tu edificio.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding py-10">
                <div className="w-full max-w-[800px] mx-auto prose prose-lg prose-blue">
                    <div className="glass p-8 md:p-12 border border-black/5">
                        <h2 className="text-2xl font-bold text-ink mb-4">Lo que no se ve, es lo que importa</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            En un proyecto arquitectónico, los acabados de lujo captan la atención inmediata, pero es la "Ingeniería Oculta" —cimentaciones, acero de refuerzo, hidro-sanitario y eléctrico— lo que garantiza que esa inversión sobreviva décadas sin depreciación acelerada.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">El Peligro del Acero Ahorrado en Estructuras</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Disminuir los factores de seguridad del acero de refuerzo para recortar presupuesto inicial es el error estructural más silencioso de la construcción no profesional. En el Noroeste de México (Sinaloa, Sonora) que pertenece a la faja sísmica o de huracanes, las columnas, riostras y trabes deben ser calculadas de manera asimétrica para contrarrestar esfuerzos y fuerzas de torsión. Fallar aquí puede comprometer vidas.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">1. Estaciones de Servicio: Riesgo Tolerancia Cero</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Construir unidades para la industria del Oil & Gas exige estándares impecables. No basta un conocimiento empírico sobre cómo colar hormigón; la hermeticidad de las redes de hidrocarburos, la separación en las redes pluviales-sanitarias-aceitosas, y el aislamiento por anillos de descarga estática implican un grado de precisión que trasciende la albañilería tradicional convirtiéndose en un protocolo industrial.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">2. Patologías Superficiales</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Agrietamientos de muros o desniveles suelen deberse a una mecánica de suelos omitida (terrenos expansivos) o curados del concreto a destiempo bajo el clima árido del norte del país. Prevenirlas implica procesos que retrasan visualmente una obra pero resultan en durabilidad monumental.
                        </p>

                        <h2 className="text-2xl font-bold text-ink mb-4">La Postura de SAVI Construcciones</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            La tranquilidad del desarrollador a largo plazo proviene exclusivamente de una dirección técnica rigurosa y apegada estrictamente a la normativa estructural mexicana. Construir es una responsabilidad legal mayor; proteger a nuestro cliente, nuestra misión.
                        </p>

                        <div className="flex justify-center mt-12">
                            <Link href="/contacto" className="btn-apple">
                                Consultoría en Ingeniería de Proyectos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
