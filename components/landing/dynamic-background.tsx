'use client';

import { motion } from 'framer-motion';

type Theme = 'magma' | 'emerald' | 'blue';

interface DynamicBackgroundProps {
    theme: Theme;
}

const themes = {
    magma: {
        primary: '#dc2626', // Red-600
        secondary: '#ea580c', // Orange-600
        accent: '#7f1d1d', // Red-900
    },
    emerald: {
        primary: '#059669', // Emerald-600
        secondary: '#10b981', // Emerald-500
        accent: '#064e3b', // Emerald-900
    },
    blue: {
        primary: '#2563eb', // Blue-600
        secondary: '#0ea5e9', // Sky-500
        accent: '#1e3a8a', // Blue-900
    }
};

export const DynamicBackground = ({ theme }: DynamicBackgroundProps) => {
    const colors = themes[theme];

    return (
        <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none transition-colors duration-1000">
            {/* Primary Orb (Top Left) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    backgroundColor: colors.primary,
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    backgroundColor: { duration: 1.5 } // Smooth color transition
                }}
                className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-40 mix-blend-screen"
            />

            {/* Secondary Orb (Bottom Right) */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                    backgroundColor: colors.secondary,
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                    backgroundColor: { duration: 1.5 }
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[100px] opacity-30 mix-blend-screen"
            />

            {/* Accent Center Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                    backgroundColor: colors.accent,
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                    backgroundColor: { duration: 1.5 }
                }}
                className="absolute top-[30%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-20 mix-blend-screen"
            />
        </div>
    );
};
