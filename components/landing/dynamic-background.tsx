'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'magma' | 'emerald' | 'blue';

interface DynamicBackgroundProps {
    theme: Theme;
}

export const DynamicBackground = ({ theme }: DynamicBackgroundProps) => {
    return (
        <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
            {/* Static Background Image */}
            <Image
                src="/assets/landing-bg-fractal.jpg"
                alt="Background"
                fill
                className="object-cover opacity-60"
                priority
            />

            {/* Gradient Overlay for general readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

            {/* Dynamic Color Overlays */}
            <AnimatePresence>
                {theme === 'emerald' && (
                    <motion.div
                        key="emerald"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-emerald-900/40 mix-blend-overlay"
                    />
                )}
                {theme === 'blue' && (
                    <motion.div
                        key="blue"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"
                    />
                )}
                {theme === 'magma' && (
                    <motion.div
                        key="magma"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-red-900/20 mix-blend-overlay"
                    />
                )}
            </AnimatePresence>

            {/* Additional Vignette for focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
        </div>
    );
};
