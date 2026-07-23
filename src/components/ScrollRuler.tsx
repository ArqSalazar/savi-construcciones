"use client";

import { useEffect, useRef } from "react";

export default function ScrollRuler() {
    const fillRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        // Direct DOM writes driven by rAF: skips React re-renders entirely on
        // scroll and uses a GPU-composited transform instead of animating
        // height (which forces layout), so this tracks scroll 1:1 with no jank.
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

            if (fillRef.current) {
                fillRef.current.style.transform = `scaleY(${progress})`;
            }
            if (labelRef.current) {
                labelRef.current.style.top = `${progress * 100}%`;
                labelRef.current.textContent = `${Math.round(progress * 100)}%`;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
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
                    ref={fillRef}
                    className="absolute top-0 left-0 h-full w-[2px] -translate-x-px origin-top bg-accent shadow-[0_0_8px_rgba(29,78,216,0.5)]"
                    style={{ transform: "scaleY(0)" }}
                />
                <div
                    ref={labelRef}
                    className="absolute left-2.5 -translate-y-1/2 text-[9px] font-mono font-bold text-accent tabular-nums"
                >
                    0%
                </div>
            </div>
        </div>
    );
}
