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
            className="fixed left-3 top-0 h-screen z-[70] pointer-events-none hidden lg:flex items-center"
            aria-hidden="true"
        >
            <div className="relative h-[55vh] w-px bg-black/[0.07]">
                {Array.from({ length: 11 }).map((_, i) => (
                    <span
                        key={i}
                        className="absolute left-0 w-2 h-px bg-black/[0.12]"
                        style={{ top: `${i * 10}%` }}
                    />
                ))}
                <div
                    className="absolute top-0 left-0 w-px bg-accent/50 transition-[height] duration-150 ease-out"
                    style={{ height: `${progress * 100}%` }}
                />
            </div>
        </div>
    );
}
