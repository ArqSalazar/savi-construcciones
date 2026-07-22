"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0.2, filter: "blur(4px)", y: 18 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom ease similar to the original CSS
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
