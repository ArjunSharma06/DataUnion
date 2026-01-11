'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NoiseOverlay } from '@/components/ui/noise-overlay';
import { Github, Mail } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-red-500/30">
            <NoiseOverlay />

            {/* Background Image */}
            <div className="absolute inset-0 z-0 fixed">
                <Image
                    src="/assets/contact-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-black/10">
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.png"
                        alt="DataUnion Logo"
                        width={32}
                        height={32}
                        className="rounded-md group-hover:opacity-80 transition-opacity"
                    />
                    <span className="text-lg font-bold tracking-tighter text-white mix-blend-difference">DataUnion</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide opacity-90 mix-blend-difference">
                    <Link href="/about" className="hover:text-white/80 transition-colors">ABOUT</Link>
                    <Link href="/research" className="hover:text-white/80 transition-colors">RESEARCH</Link>
                    <Link href="/contact" className="text-white hover:text-white/80 transition-colors">CONTACT</Link>
                </nav>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

                {/* Main Text */}
                <div className="space-y-2 mb-16 animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-light tracking-tighter leading-none text-white mix-blend-difference">
                        With <span className="text-red-600 font-normal italic">Love</span> From
                    </h1>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-bold tracking-tighter leading-none text-white mix-blend-difference">
                        Waystar RoyCo
                    </h1>
                </div>

                {/* Contact Box */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 max-w-md mx-auto">
                        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Contact Developers</h3>

                        <div className="space-y-4">
                            <a href="mailto:thedakshjaitly@gmail.com" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-5 h-5 text-white/70" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Email Us</div>
                                    <div className="text-xs text-white/40 font-mono">thedakshjaitly@gmail.com</div>
                                </div>
                            </a>

                            <a href="https://github.com/theDakshJaitly/DataUnion.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                    <Github className="w-5 h-5 text-white/70" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">GitHub Repo</div>
                                    <div className="text-xs text-white/40 font-mono">theDakshJaitly/DataUnion</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
