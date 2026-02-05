"use client";

import { motion, useMotionValue, useTransform, animate, useMotionTemplate, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "@/components/ui/magnetic-button";
import { ArrowRight, Download, Code, Sparkles, Zap } from "lucide-react";

const ROLES = ["Fullstack Developer", "UI/UX Engineer", "Creative Thinker", "Problem Solver"];

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-void-black text-white px-4 md:px-10"
            onMouseMove={handleMouseMove}
        >
            <div className="mask-spotlight absolute inset-0 pointer-events-none z-10 select-none">
                <Spotlight mouseX={mouseX} mouseY={mouseY} />
            </div>

            <div className="container relative z-20 flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-0">

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[60%]">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan"></span>
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                            Available for Work
                        </span>
                    </motion.div>

                    <h1 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-5xl lg:text-6xl">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="block mb-2"
                        >
                            I Am A
                        </motion.span>
                        <div className="w-full min-h-[1.2em]">
                            <Typewriter roles={ROLES} />
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 max-w-lg text-lg text-zinc-400 font-light leading-relaxed"
                    >
                        I craft high-performance digital experiences with a focus on motion, aesthetics, and engineering excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-6 flex flex-wrap gap-4"
                    >
                        <MagneticButton className="group relative z-20 flex items-center gap-2 rounded-full bg-neon-violet px-8 py-4 text-black font-bold transition-all hover:bg-neon-cyan hover:shadow-[0_0_30px_-5px_var(--color-neon-cyan)]">
                            <span>View Projects</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </MagneticButton>

                        <MagneticButton className="group relative z-20 flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-white font-medium transition-all hover:bg-white/10 hover:border-white">
                            <span>Resume</span>
                            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right Side: Image/Visual */}
                <div className="relative flex justify-center lg:w-[40%] lg:justify-end">
                    <HeroImage />
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-neon-violet/20 blur-[120px]" />
                <div className="absolute -left-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-neon-cyan/20 blur-[120px]" />
            </div>
        </section>
    );
}

function Typewriter({ roles }: { roles: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000); // Wait before deleting
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100); // Typing speed vs deleting speed

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, roles]);

    return (
        <span className="block bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
            {`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
    );
}

function HeroImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
        >
            {/* Rotating Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/20"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dotted border-white/10"
            />

            {/* Main Image Container */}
            <div className="absolute inset-8 overflow-hidden rounded-full border-2 border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-[0_0_50px_-10px_var(--color-neon-violet)]">
                {/* Fallback Placeholder (User image goes here) */}
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                    alt="Hero Portrait"
                    className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                />

                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent mix-blend-overlay" />
            </div>

            {/* Orbiting Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            >
                <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-void-black border border-neon-cyan flex items-center justify-center shadow-[0_0_20px_var(--color-neon-cyan)]">
                    <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
                </div>
            </motion.div>

            {/* Floating Tooltips */}
            <FloatingBadge
                text="Tech Enthusiast"
                icon={<Code className="h-3 w-3 text-neon-cyan" />}
                className="absolute -right-4 top-10"
                delay={0}
            />
            <FloatingBadge
                text="Creative"
                icon={<Sparkles className="h-3 w-3 text-neon-violet" />}
                className="absolute -left-8 bottom-20"
                delay={1}
            />
            <FloatingBadge
                text="Clean Code"
                icon={<Zap className="h-3 w-3 text-acid-green" />}
                className="absolute -bottom-4 right-10"
                delay={2}
            />
        </motion.div>
    )
}

function Spotlight({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
    const maskImage = useMotionTemplate`radial-gradient(500px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            className="absolute inset-0 z-10 opacity-40 mix-blend-soft-light"
            style={style}
        >
            <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"></div>
        </motion.div>
    );
}

function FloatingBadge({ text, icon, className, delay }: { text: string; icon: React.ReactNode; className?: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay: delay * 0.5 + 1 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }
            }}
            className={`flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md shadow-lg ${className}`}
        >
            {icon}
            <span className="text-xs font-medium text-white/90">{text}</span>
        </motion.div>
    );
}
