export default function Marquee({ text }: { text: string }) {
    const content = Array.from({ length: 6 }, () => text);

    return (
        <div className="relative w-full overflow-hidden border-y border-black/5 bg-white/40 backdrop-blur-sm py-4 z-10">
            <div className="flex w-max animate-marquee">
                {[0, 1].map((dup) => (
                    <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
                        {content.map((t, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-8 px-8 text-[11px] font-bold uppercase tracking-[0.35em] text-gray-400 whitespace-nowrap"
                            >
                                {t}
                                <span className="text-accent text-[8px]">✦</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
