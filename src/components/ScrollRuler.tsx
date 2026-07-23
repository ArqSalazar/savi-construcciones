"use client";

import { useEffect, useState } from "react";

export default function ScrollRuler() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className="fixed left-5 top-0 h-screen z-[70] pointer-events-none hidden lg:flex items-center"
            aria-hidden="true"
        >
            <div className="relative h-[62vh] w-px bg-black/[0.14]">
                {Array.from({ length: 11 }).map((_, i) => (
                    <span
                        key={i}
                        className={`absolute left-0 h-px bg-black/25 ${i % 5 === 0 ? "w-3.5" : "w-2"}`}
                        style={{ top: `${i * 10}%` }}
                    />
                ))}
                <div
                    className="absolute top-0 left-0 w-[2px] -translate-x-px bg-accent shadow-[0_0_8px_rgba(29,78,216,0.5)] transition-[height] duration-150 ease-out"
                    style={{ height: `${progress * 100}%` }}
                />
                <div
                    className="absolute left-2.5 -translate-y-1/2 text-[9px] font-mono font-bold text-accent tabular-nums transition-[top] duration-150 ease-out"
                    style={{ top: `${progress * 100}%` }}
                >
                    {Math.round(progress * 100)}%
                </div>
            </div>
        </div>
    );
}
