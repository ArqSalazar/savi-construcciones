"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        setMounted(true);

        const hasVisited = sessionStorage.getItem("savi_has_visited");

        if (!hasVisited) {
            setIsFirstVisit(true);
            sessionStorage.setItem("savi_has_visited", "true");

            // Prevent scrolling while preloader is active
            // Note: If using Lenis, we might need a more specific lock
            document.body.style.overflow = "hidden";

            const timer = setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = "";
            }, 2000);

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "";
            };
        } else {
            setIsLoading(false);
        }
    }, []);

    // Render nothing during SSR or initial hydration bypass
    if (!mounted || !isFirstVisit) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDFDFD]"
                >
                    <motion.div
                        className="flex items-center origin-left"
                        exit={{
                            x: "-40vw",
                            y: "-42vh",
                            scale: 0.4,
                            opacity: 0
                        }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic text-ink z-10"
                        >
                            SAVI<span className="text-accent">.</span>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden whitespace-nowrap flex items-end mb-[2px] md:mb-[4px] lg:mb-[6px] ml-1 md:ml-2"
                        >
                            <span className="text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-[0.35em] text-gray-400 font-bold block pt-2 md:pt-4">
                                Construcciones
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
