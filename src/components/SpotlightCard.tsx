"use client";

import { useRef, useState, MouseEvent, CSSProperties } from "react";

export default function SpotlightCard({
    children,
    className = "",
    tiltStrength = 5,
}: {
    children: React.ReactNode;
    className?: string;
    tiltStrength?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [vars, setVars] = useState<CSSProperties>({});

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const cx = px / rect.width - 0.5;
        const cy = py / rect.height - 0.5;

        setVars({
            "--spot-x": `${px}px`,
            "--spot-y": `${py}px`,
            "--spot-opacity": 1,
            transform: `perspective(900px) rotateX(${-cy * tiltStrength}deg) rotateY(${cx * tiltStrength}deg)`,
        } as CSSProperties);
    };

    const handleLeave = () => {
        setVars({
            "--spot-opacity": 0,
            transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
        } as CSSProperties);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ ...vars, transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)", willChange: "transform" }}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    opacity: "var(--spot-opacity, 0)",
                    background:
                        "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(29,78,216,0.14), transparent 70%)",
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}
