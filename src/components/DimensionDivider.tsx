export default function DimensionDivider() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-[8%] py-2" aria-hidden="true">
            <div className="flex items-center gap-2 text-accent/20">
                <span className="w-px h-2.5 bg-current shrink-0" />
                <span className="flex-1 h-px bg-current" />
                <span className="text-[9px] font-mono tracking-[0.3em] px-3 whitespace-nowrap text-gray-300">
                    · SAVI ·
                </span>
                <span className="flex-1 h-px bg-current" />
                <span className="w-px h-2.5 bg-current shrink-0" />
            </div>
        </div>
    );
}
