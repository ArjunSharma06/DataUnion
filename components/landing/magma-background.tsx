'use client';

import { motion } from 'framer-motion';

export const MagmaBackground = () => {
    return (
        <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
            {/* Primary Red Orb (Top Left) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-red-600 rounded-full blur-[120px] opacity-40 mix-blend-screen"
            />

            {/* Secondary Orange Orb (Bottom Right) */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-orange-600 rounded-full blur-[100px] opacity-30 mix-blend-screen"
            />

            {/* Deep Red Center Accent */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-[30%] left-[20%] w-[60vw] h-[60vw] bg-red-900 rounded-full blur-[150px] opacity-20 mix-blend-screen"
            />
        </div>
    );
};
