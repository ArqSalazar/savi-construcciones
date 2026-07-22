"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import type Lenis from "lenis";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[89] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full glass shadow-xl border border-black/5 backdrop-blur-xl bg-white/40 hover:bg-white/70 transition-colors duration-300 pb-[env(safe-area-inset-bottom)]"
                    aria-label="Volver arriba"
                >
                    <ArrowUp className="w-5 h-5 text-ink" strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
