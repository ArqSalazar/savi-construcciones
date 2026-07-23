"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Stylized coverage diagram (not a literal cartographic map) — keeps the
// blueprint visual language and avoids implying geographic precision we
// can't back with real map data.
const NODES = [
    { x: 90, y: 130, label: "Los Mochis", sub: "Sinaloa · Matriz Corporativa" },
    { x: 270, y: 65, label: "Navojoa", sub: "Sonora · Sucursal Estratégica" },
];

export default function CoverageMap() {
    const ref = useRef<SVGSVGElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

    return (
        <div className="flex flex-col items-center">
            <svg
                ref={ref}
                viewBox="0 0 360 200"
                fill="none"
                className="w-full max-w-md h-auto"
                aria-hidden="true"
            >
                <motion.ellipse
                    cx="180" cy="100" rx="155" ry="85"
                    stroke="rgba(29,78,216,0.15)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.line
                    x1={NODES[0].x} y1={NODES[0].y} x2={NODES[1].x} y2={NODES[1].y}
                    stroke="rgba(29,78,216,0.4)"
                    strokeWidth="1.3"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                {NODES.map((n, i) => (
                    <g key={n.label}>
                        <circle cx={n.x} cy={n.y} r="6" fill="none" stroke="#1d4ed8" strokeWidth="1" opacity="0.4">
                            <animate attributeName="r" values="6;18;6" dur="2.6s" repeatCount="indefinite" begin={`${1 + i * 0.3}s`} />
                            <animate attributeName="opacity" values="0.45;0;0.45" dur="2.6s" repeatCount="indefinite" begin={`${1 + i * 0.3}s`} />
                        </circle>
                        <motion.circle
                            cx={n.x} cy={n.y} r="5" fill="#1d4ed8"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 + i * 0.2 }}
                            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                        />
                    </g>
                ))}
            </svg>

            <div className="grid grid-cols-2 gap-6 md:gap-10 mt-4">
                {NODES.map((n) => (
                    <div key={n.label} className="text-center">
                        <div className="font-bold text-ink text-[15px]">{n.label}</div>
                        <div className="text-gray-500 text-[12px] font-light mt-0.5">{n.sub}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
