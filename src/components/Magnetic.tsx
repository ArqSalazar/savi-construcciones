"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function Magnetic({
    children,
    strength = 0.35,
    className = "",
}: {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPos({ x: x * strength, y: y * strength });
    };

    const reset = () => setPos({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.15 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
