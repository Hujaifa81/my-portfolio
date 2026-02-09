"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal, Cpu, Clock, Code, Coffee, Rocket, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutTerminal() {
    return (
        <section id="about" className="relative w-full pt-0 pb-12 bg-void-black flex items-center justify-center overflow-hidden">
            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6 backdrop-blur-sm"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, rotate: -15 },
                            visible: { opacity: 1, scale: 1, rotate: 0 }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Terminal className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">System Profile</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        System <span className="text-neon-cyan">Identity</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 max-w-xl mx-auto text-lg"
                    >
                        Bridging the gap between robust architecture and fluid motion.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Left: Terminal Info */}
                    <div className="order-2 lg:order-1 w-full rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl overflow-hidden relative group h-full flex flex-col">
                        {/* Glow Effect behind terminal */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Terminal Chrome */}
                        <div className="relative flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/5 z-10 backdrop-blur-md shrink-0">
                            <div className="size-3 rounded-full bg-red-500/80" />
                            <div className="size-3 rounded-full bg-yellow-500/80" />
                            <div className="size-3 rounded-full bg-green-500/80" />
                            <div className="ml-4 font-mono text-xs text-zinc-500">user@portfolio:~/bio</div>
                        </div>

                        {/* Terminal Content */}
                        <div className="relative p-6 font-mono text-sm md:text-base text-zinc-300 space-y-6 z-10 bg-[#050505]/90 flex-1 flex flex-col">
                            <div className="space-y-2 flex-1">
                                <div className="flex gap-2 text-acid-green">
                                    <span>➜</span>
                                    <span className="text-neon-cyan">~</span>
                                    <span>whoami</span>
                                </div>
                                <TypewriterText
                                    text="I'm a Fullstack Developer obsessed with building digital experiences that feel alive. Bridging the gap between robust backend architecture and fluid frontend motion."
                                    delay={0.5}
                                />
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
                                <div className="text-zinc-500 text-xs uppercase tracking-widest mb-4"> // System Metrics</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <StatMetric label="Uptime" value="5" suffix=" Years" icon={Clock} color="text-neon-cyan" />
                                    <StatMetric label="Projects" value="40" suffix="+" icon={Code} color="text-neon-violet" />
                                    <StatMetric label="Availability" value="100" suffix="%" icon={Activity} color="text-neon-cyan" />
                                    <StatMetric label="Perf Score" value="100" suffix="" icon={Zap} color="text-neon-cyan" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: System Specs / Code Panel */}
                    <div className="order-1 lg:order-2 w-full h-full">
                        <SystemSpecs />
                    </div>

                </div>
            </div>
        </section>
    );
}

function SystemSpecs() {
    return (
        <div className="relative w-full rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl overflow-hidden group h-full flex flex-col">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-l from-neon-violet to-neon-cyan opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

            {/* Header / Tabs */}
            <div className="relative flex items-center justify-between bg-white/5 px-4 py-3 border-b border-white/5 z-10 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 opacity-50">
                        <div className="size-2.5 rounded-full bg-zinc-600" />
                        <div className="size-2.5 rounded-full bg-zinc-600" />
                        <div className="size-2.5 rounded-full bg-zinc-600" />
                    </div>
                    <div className="ml-4 flex gap-1">
                        <div className="px-3 py-1 bg-[#0d0d0d] border border-white/5 rounded-t-lg text-xs font-mono text-neon-cyan border-b-black -mb-[13px] z-20">
                            config.json
                        </div>
                        {/* <div className="px-3 py-1 text-xs font-mono text-zinc-600">
                            skills.ts
                        </div> */}
                    </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500">READ ONLY</div>
            </div>

            {/* Code Content */}
            <div className="relative p-6 font-mono text-sm overflow-hidden bg-[#050505]/95 flex-1">
                {/* Line Numbers and Code Grid */}
                <div className="flex gap-4">
                    <div className="flex flex-col text-right text-zinc-700 select-none">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <span key={i} className="leading-relaxed">{i + 1}</span>
                        ))}
                    </div>
                    <div className="flex-1 text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
                        <div><span className="text-neon-violet">const</span> <span className="text-white">USER_PROFILE</span> = {"{"}</div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">name</span>: <span className="text-acid-green">"Md Abu Hujaifa"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">role</span>: <span className="text-acid-green">"Full Stack Developer"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">location</span>: <span className="text-acid-green">"Dhaka, Bangladesh"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">status</span>: <span className="text-acid-green">"Available for Hire"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">traits</span>: [
                        </div>
                        <div className="pl-8">
                            <span className="text-acid-green">"Creative"</span>, <span className="text-acid-green">"Pixel-Perfect"</span>, <span className="text-acid-green">"Fast"</span>
                        </div>
                        <div className="pl-4">],</div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">hireable</span>: <span className="text-neon-violet">true</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">workMode</span>: <span className="text-acid-green">"Remote / Hybrid"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">currentFocus</span>: <span className="text-acid-green">"Interactive UI / 3D"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-neon-cyan">languages</span>: [
                        </div>
                        <div className="pl-8">
                            <span className="text-acid-green">"TypeScript"</span>, <span className="text-acid-green">"Python"</span>, <span className="text-acid-green">"C++"</span>,<span className="text-acid-green">"C#"</span>,<span className="text-acid-green">"Java"</span>,<span className="text-acid-green">"JavaScript"</span>
                        </div>
                        <div className="pl-4">],</div>
                        <div>{"}"};</div>
                        <motion.div
                            className="w-2.5 h-5 bg-neon-cyan mt-1"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="relative flex items-center justify-between bg-white/5 px-4 py-1.5 border-t border-white/5 z-10">
                <div className="flex gap-4 text-[10px] text-zinc-500 font-mono">
                    <span>UTF-8</span>
                    <span>JSON</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-neon-cyan animate-pulse" />
                    <span className="text-[10px] text-neon-cyan font-mono">Ln 12, Col 1</span>
                </div>
            </div>
        </div>
    )
}

function GlitchTitle({ text }: { text: string }) {
    return (
        <div className="relative group inline-block">
            <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl relative z-10">
                {text} <span className="text-neon-cyan">.USR</span>
            </h2>
            <motion.div
                className="absolute inset-0 text-neon-violet opacity-50 z-0 mix-blend-screen"
                animate={{
                    x: [-2, 2, -1, 0],
                    y: [1, -1, 0]
                }}
                transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror", repeatDelay: 3 }}
            >
                <h2 className="font-display text-5xl font-bold uppercase md:text-7xl truncate">{text} .USR</h2>
            </motion.div>
        </div>
    )
}

function TypewriterText({ text, delay = 0 }: { text: string, delay?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let i = 0;
        const interval = (callback: (update: (prev: string) => string) => void) => {
            const timer = setInterval(() => {
                if (i < text.length) {
                    const char = text.charAt(i);
                    callback(prev => prev + char);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 30); // Speed
            return timer;
        }

        const timeout = setTimeout(() => {
            const timer = interval(setDisplayedText);
            return () => clearInterval(timer);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [isInView, text, delay]);

    return (
        <div ref={ref} className="relative min-h-[3rem]">
            {/* Invisible full text to reserve space */}
            <span className="opacity-0 select-none block">{text}</span>

            {/* Visible typing overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
                <span>{displayedText}</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-5 bg-neon-cyan align-middle ml-1"
                />
            </div>
        </div>
    );
}

function StatMetric({ label, value, suffix, icon: Icon, color }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(count, parseInt(value), { duration: 2, ease: "easeOut" });
        }
    }, [isInView, count, value]);

    return (
        <div ref={ref} className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider">
                <Icon className={cn("size-4", color)} />
                {label}
            </div>
            <div className="flex items-baseline gap-1 font-mono text-2xl font-bold text-white">
                <motion.span>{rounded}</motion.span>
                <span className={cn("text-base", color)}>{suffix}</span>
            </div>
        </div>
    )
}
