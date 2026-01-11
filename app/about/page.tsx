import Image from 'next/image';
import Link from 'next/link';
import { NoiseOverlay } from '@/components/ui/noise-overlay';

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-emerald-500/30">
            <NoiseOverlay />

            {/* Background Image - Full Screen with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/fractal-maze.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
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
                    <Link href="/about" className="text-white hover:text-white/80 transition-colors">ABOUT</Link>
                    <Link href="/research" className="hover:text-white/80 transition-colors">RESEARCH</Link>
                    <Link href="/contact" className="hover:text-white/80 transition-colors">CONTACT</Link>
                </nav>
            </header>

            {/* Main Content - Bottom Aligned Layout */}
            <main className="relative z-10 flex flex-col justify-end min-h-screen px-6 pb-12 md:px-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full max-w-[1600px] mx-auto">

                    {/* Left Side: Massive Headline */}
                    <div className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase border border-white/20 rounded-full text-white/70 backdrop-blur-sm">
                                Manifesto
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-light tracking-tighter leading-[0.9] text-white">
                            The Sovereign<br />
                            <span className="text-white/60">Data Crisis.</span>
                        </h1>
                    </div>

                    {/* Right Side: Description & Context */}
                    <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                        <div className="space-y-6 backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/5">
                            <p className="text-xl md:text-2xl font-space-grotesk font-light text-white/90 leading-relaxed">
                                The era of "scrape everything" is over.
                            </p>
                            <p className="text-base md:text-lg font-light text-white/70 leading-relaxed font-inter">
                                We are building the infrastructure for the next generation of AI—one that is legal, ethical, and sustainable. By institutionalizing consent and ensuring immutable provenance, we solve the validity crisis of modern AI.
                            </p>

                            <div className="pt-4 flex items-center gap-6">
                                <Link href="/research" className="group flex items-center gap-2 text-white hover:text-emerald-400 transition-colors">
                                    <span className="text-sm font-medium tracking-widest uppercase border-b border-transparent group-hover:border-emerald-400 pb-0.5">Read the Report</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
