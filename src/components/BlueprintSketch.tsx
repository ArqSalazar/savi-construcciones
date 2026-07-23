"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlueprintSketch({ className = "" }: { className?: string }) {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

    return (
        <svg
            ref={ref}
            viewBox="0 0 240 170"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            {/* Building footprint */}
            <motion.path
                d="M20 20 L220 20 L220 140 L20 140 Z"
                stroke="rgba(29,78,216,0.4)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Interior partitions */}
            <motion.path
                d="M95 20 L95 140 M150 60 L150 140 M150 60 L220 60"
                stroke="rgba(29,78,216,0.3)"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Door leaf + swing arc — standard floor-plan notation */}
            <motion.path
                d="M95 140 L95 114 M71 140 A24 24 0 0 1 95 116"
                stroke="rgba(29,78,216,0.35)"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Dimension line */}
            <motion.path
                d="M20 156 L20 150 M20 156 L220 156 M220 156 L220 150"
                stroke="rgba(29,78,216,0.22)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
            />
        </svg>
    );
}
