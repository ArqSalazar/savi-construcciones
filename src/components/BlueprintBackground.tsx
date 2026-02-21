"use client";

import React from "react";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./BlueprintScene'), { ssr: false });



export default function BlueprintBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-white">
            {/* Exact base gradient from original HTML */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "radial-gradient(1100px 700px at 15% 0%, rgba(29,78,216,.08), transparent 55%), radial-gradient(900px 600px at 85% 15%, rgba(2,132,199,.06), transparent 55%), linear-gradient(180deg, #ffffff 0%, #fbfbfc 60%, #ffffff 100%)",
                    backgroundAttachment: "fixed"
                }}
            />
            {/* The 3D Canvas rendering is lazy-loaded with SSR disabled */}
            <Scene />
        </div>
    );
}


