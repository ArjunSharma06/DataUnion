'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NoiseOverlay } from '@/components/ui/noise-overlay';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const collapseData = [
    { generation: 'Gen 1', quality: 100, synthetic: 0 },
    { generation: 'Gen 2', quality: 92, synthetic: 10 },
    { generation: 'Gen 3', quality: 75, synthetic: 30 },
    { generation: 'Gen 4', quality: 45, synthetic: 60 },
    { generation: 'Gen 5', quality: 20, synthetic: 90 },
];

const regulations = [
    { region: 'EU', act: 'AI Act', penalty: '€35M+', desc: 'Mandatory provenance & copyright transparency.' },
    { region: 'USA', act: 'Copyright Law', penalty: '$1.5B', desc: 'Anthropic settlement sets liability at $3k/work.' },
    { region: 'Brazil', act: 'LGPD', penalty: 'Ban', desc: 'Meta banned from training on user data.' },
    { region: 'China', act: 'PIPL', penalty: 'Criminal', desc: 'Strict liability for training data sources.' },
];

export default function ResearchPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-blue-500/30">
            <NoiseOverlay />

            {/* Background Image */}
            <div className="absolute inset-0 z-0 fixed">
                <Image
                    src="/assets/research-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-black/20">
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
                    <Link href="/research" className="text-white hover:text-white/80 transition-colors">RESEARCH</Link>
                    <Link href="/contact" className="hover:text-white/80 transition-colors">CONTACT</Link>
                </nav>
            </header>

            <main className="relative z-10 container mx-auto px-6 pt-48 pb-20">

                {/* Hero Section */}
                <div className="mb-32 space-y-6 max-w-4xl">
                    <span className="px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase border border-blue-500/30 rounded-full text-blue-400 bg-blue-500/10 backdrop-blur-md">
                        Intelligence Report 2026
                    </span>
                    <h1 className="text-6xl md:text-8xl font-space-grotesk font-light tracking-tighter leading-none text-white">
                        The Validity<br />
                        <span className="text-white/50">Crisis.</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                        The global AI ecosystem is hitting a wall. Regulatory pincers, economic liability, and technical degradation are dismantling the "scrape-first" paradigm.
                    </p>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">

                    {/* Card 1: Regulatory Pincer */}
                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500">
                        <h3 className="text-2xl font-space-grotesk font-light mb-8 text-white">Global Regulatory Pincer</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {regulations.map((reg) => (
                                <div key={reg.region} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{reg.region}</span>
                                        <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">{reg.penalty}</span>
                                    </div>
                                    <div className="text-lg font-medium mb-1">{reg.act}</div>
                                    <p className="text-xs text-white/50 leading-relaxed">{reg.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Model Collapse Chart */}
                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 flex flex-col">
                        <h3 className="text-2xl font-space-grotesk font-light mb-2 text-white">Model Collapse</h3>
                        <p className="text-sm text-white/50 mb-8">Degradation of model quality when trained on synthetic data.</p>

                        <div className="flex-1 min-h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={collapseData}>
                                    <defs>
                                        <linearGradient id="colorQuality" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="generation" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area type="monotone" dataKey="quality" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorQuality)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Section: The Economic Reality */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-space-grotesk font-light text-white leading-tight">
                            The Hidden Cost<br />of "Free" Data.
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed font-light">
                            While scraping appears free, the Total Cost of Ownership tells a different story. Legal risks, cleaning costs, and hallucination mitigation make "dirty data" a liability.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">$67.4B</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest">Lost to Hallucinations</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">$1.5B</div>
                                <div className="text-xs text-white/40 uppercase tracking-widest">Copyright Settlements</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                            <div className="bg-black/80 backdrop-blur-xl rounded-[22px] p-8 border border-white/10">
                                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                    <span className="text-sm font-medium text-white/80">Cost Comparison (Annual)</span>
                                    <span className="text-xs text-white/40">Source: DataJournal 2025</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white">DIY Scraping Operation</span>
                                            <span className="text-red-400">$200k+ / year</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500/50 w-[85%]"></div>
                                        </div>
                                        <p className="text-xs text-white/40">Includes infra, proxies, engineering, and legal defense.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white">Data Union Licensing</span>
                                            <span className="text-emerald-400">$45k / year</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500/50 w-[20%]"></div>
                                        </div>
                                        <p className="text-xs text-white/40">Clean, consented, verified data with zero legal risk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-8 py-20 border-t border-white/10">
                    <h2 className="text-4xl md:text-6xl font-space-grotesk font-light text-white">
                        The Future is <span className="text-blue-500">Consented.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                        Join the Data Union. Secure your AI's future with the only sustainable, legal, and ethical data supply chain.
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                        <Link href="/company/login" className="px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:bg-white/90 transition-colors">
                            GET DATA
                        </Link>
                        <Link href="/contributor/login" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold tracking-wide hover:bg-white/10 transition-colors">
                            CONTRIBUTE DATA
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
