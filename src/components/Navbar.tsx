"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Recursos", href: "/recursos" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="fixed top-0 inset-x-0 w-full flex justify-center z-[115] px-3 py-3 md:px-6 md:py-5 lg:px-8 pointer-events-none transition-all duration-300">
                <nav className="w-full max-w-[1400px] pointer-events-auto flex items-center justify-between gap-2 md:gap-6 px-5 md:px-7 py-3 md:py-3.5 glass shadow-soft transition-all duration-300">
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0" aria-label="Ir al inicio" onClick={() => setIsMenuOpen(false)}>
                        <div className="text-xl md:text-2xl font-black tracking-tighter italic group-hover:translate-x-1 transition-transform duration-300">
                            SAVI<span className="text-accent">.</span>
                        </div>
                        <div className="text-[7.5px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.4em] font-medium text-gray-500 group-hover:text-ink transition-colors duration-300 pt-1 md:pt-0.5">
                            Arquitectura & Construcción
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div
                        className="hidden lg:flex items-center space-x-1 relative shrink-0"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {NAV_LINKS.map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 xl:px-5 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.28em] transition-colors duration-300 z-10 ${hoveredIndex === idx ? "text-accent" : "text-ink opacity-55 hover:opacity-100"
                                    }`}
                                onMouseEnter={() => setHoveredIndex(idx)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {hoveredIndex === idx && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        className="absolute inset-0 bg-accent/[0.06] rounded-full -z-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                        <Link href="/contacto" className="btn-apple hidden sm:inline-flex text-[9px] md:text-[10px] uppercase tracking-widest px-5 py-2.5 shadow-md shadow-accent/20">
                            Evaluar Proyecto
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            className="lg:hidden p-2 text-ink hover:text-accent transition-colors z-[110]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Abrir menú"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[105] bg-white lg:hidden flex flex-col pt-32 px-10 gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-black text-ink tracking-tight hover:text-accent transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pb-12 flex flex-col gap-4 border-t border-black/5 pt-8">
                            <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-bold">Consulta Profesional</span>
                            <Link
                                href="/contacto"
                                className="text-xl font-bold text-accent"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Agendar Evaluación →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
