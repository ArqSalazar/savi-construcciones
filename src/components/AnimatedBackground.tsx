"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-55">
            <motion.div
                animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, 15, -15, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    rotate: [0, -10, 10, 0],
                    y: [0, -20, 20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-sky-500/5 rounded-full blur-[120px]"
            />
        </div>
    );
}
