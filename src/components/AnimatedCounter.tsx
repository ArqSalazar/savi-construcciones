"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
    value,
    duration = 1.4,
}: {
    value: string;
    duration?: number;
}) {
    const match = value.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : value;

    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const [display, setDisplay] = useState(0);

    const hasMatch = !!match;

    useEffect(() => {
        // `match` itself isn't a dependency: RegExpMatchArray is a new object
        // reference on every render, which would restart this effect (and the
        // rAF loop) on every setDisplay() call before the count ever finished.
        if (!isInView || !hasMatch) return;
        let start: number | null = null;
        let raf: number;

        const step = (ts: number) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));
            if (progress < 1) raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [isInView, target, duration, hasMatch]);

    if (!match) {
        return <span ref={ref}>{value}</span>;
    }

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}
