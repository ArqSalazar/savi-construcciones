"use client";

import { motion } from "framer-motion";

const VARIANTS = {
    // Default: soft blur/fade rise
    fade: {
        hidden: { opacity: 0.2, filter: "blur(4px)", y: 18 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
    // "Blueprint cut": the section unveils left-to-right, like lifting a sheet off a plan
    cut: {
        hidden: { opacity: 1, clipPath: "inset(0 0 0 100%)" },
        visible: { opacity: 1, clipPath: "inset(0 0 0 0%)" },
    },
};

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    variant = "fade",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    variant?: "fade" | "cut";
}) {
    const v = VARIANTS[variant];

    return (
        <motion.div
            initial={v.hidden}
            whileInView={v.visible}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
                duration: variant === "cut" ? 0.9 : 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom ease similar to the original CSS
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
