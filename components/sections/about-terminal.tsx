"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal, Cpu, Clock, Code, Coffee, Rocket, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutTerminal() {
    return (
        <section id="about" className="relative w-full py-32 bg-void-black flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <GlitchTitle text="System Identity" />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Terminal Info */}
                    <div className="order-2 lg:order-1 w-full rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl overflow-hidden relative group">
                        {/* Glow Effect behind terminal */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Terminal Chrome */}
                        <div className="relative flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/5 z-10 backdrop-blur-md">
                            <div className="size-3 rounded-full bg-red-500/80" />
                            <div className="size-3 rounded-full bg-yellow-500/80" />
                            <div className="size-3 rounded-full bg-green-500/80" />
                            <div className="ml-4 font-mono text-xs text-zinc-500">user@portfolio:~/bio</div>
                        </div>

                        {/* Terminal Content */}
                        <div className="relative p-6 font-mono text-sm md:text-base text-zinc-300 space-y-6 z-10 bg-[#050505]/90">
                            <div className="space-y-2">
                                <div className="flex gap-2 text-green-400">
                                    <span>➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span>whoami</span>
                                </div>
                                <TypewriterText
                                    text="I'm a Fullstack Developer obsessed with building digital experiences that feel alive. Bridging the gap between robust backend architecture and fluid frontend motion."
                                    delay={0.5}
                                />
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <div className="text-zinc-500 text-xs uppercase tracking-widest mb-4"> // System Metrics</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <StatMetric label="Uptime" value="5" suffix=" Years" icon={Clock} color="text-neon-cyan" />
                                    <StatMetric label="Projects" value="40" suffix="+" icon={Code} color="text-neon-violet" />
                                    <StatMetric label="Availability" value="100" suffix="%" icon={Activity} color="text-acid-green" />
                                    <StatMetric label="Perf Score" value="100" suffix="" icon={Zap} color="text-neon-cyan" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Cyber Portrait */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <CyberPortrait />
                    </div>

                </div>
            </div>
        </section>
    );
}

function CyberPortrait() {
    return (
        <div className="relative w-full max-w-md aspect-square group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-violet to-neon-cyan rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

            {/* Frame */}
            <div className="relative h-full w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm overflow-hidden">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-neon-cyan z-20" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-neon-violet z-20" />

                {/* Image Container */}
                <div className="relative h-full w-full rounded-xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-[filter] duration-500">
                    <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />

                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

                    {/* Scanning Bar Animation */}
                    <motion.div
                        className="absolute inset-x-0 h-1 bg-neon-cyan/50 z-20 shadow-[0_0_20px_rgba(0,240,255,0.8)]"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Glitch Overlay on Hover */}
                    <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                </div>

                {/* Floating "Status" Tags */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <div className="px-2 py-1 bg-black/50 backdrop-blur border border-neon-cyan/30 rounded text-[10px] font-mono text-neon-cyan uppercase">
                        Status: Online
                    </div>
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
            }, 30);
            return timer;
        }

        const timeout = setTimeout(() => {
            const timer = interval(setDisplayedText);
            return () => clearInterval(timer);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [isInView, text, delay]);

    return (
        <div ref={ref} className="min-h-[3rem]">
            <span>{displayedText}</span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-5 bg-neon-cyan align-middle ml-1"
            />
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
