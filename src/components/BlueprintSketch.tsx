"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlueprintSketch({ className = "" }: { className?: string }) {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

    return (
        <svg
            ref={ref}
            viewBox="0 0 240 180"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            {/* Roofline + walls */}
            <motion.path
                d="M20 160 L20 90 L120 30 L220 90 L220 160"
                stroke="rgba(29,78,216,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Door */}
            <motion.path
                d="M60 160 L60 110 L95 110 L95 160"
                stroke="rgba(29,78,216,0.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Window */}
            <motion.path
                d="M140 130 L140 100 L175 100 L175 130 Z"
                stroke="rgba(29,78,216,0.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Baseline */}
            <motion.path
                d="M5 160 L235 160"
                stroke="rgba(29,78,216,0.25)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
        </svg>
    );
}
