"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    Code,
    Palette,
    Layers,
    Zap,
    Smartphone,
    Globe,
    Cpu,
} from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-12 w-full bg-void-black relative">
            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    className="text-center mb-12"
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
                        <Cpu className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Skills</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Technical <span className="text-neon-cyan">Arsenal</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 max-w-xl mx-auto text-lg"
                    >
                        The architectural pillars and specialized tools of my craft.
                    </motion.p>
                </motion.div>
            </div>

            <BentoGrid className="max-w-6xl mx-auto px-4">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 animate-pulse border border-white/10" />
);

const items = [
    {
        title: "Fullstack Engineering",
        description: "Next.js, React, Node.js, Postgres, TypeScript.",
        header: <Skeleton />,
        icon: <Code className="h-4 w-4 text-neon-cyan" />,
    },
    {
        title: "UI/UX Design",
        description: "Figma, Framer, Motion Design principles.",
        header: <Skeleton />,
        icon: <Palette className="h-4 w-4 text-neon-violet" />,
    },
    {
        title: "Animation & 3D",
        description: "Framer Motion, GSAP, React Three Fiber.",
        header: <Skeleton />,
        icon: <Layers className="h-4 w-4 text-neon-cyan" />,
    },
    {
        title: "Performance Optimization",
        description: "Core Web Vitals, Lazy loading, Code splitting.",
        header: <Skeleton />,
        icon: <Zap className="h-4 w-4 text-neon-cyan" />,
    },
    {
        title: "Mobile First",
        description: "Responsive layouts that work on any device.",
        header: <Skeleton />,
        icon: <Smartphone className="h-4 w-4 text-neon-violet" />,
    },
    {
        title: "Backend Architecture",
        description: "API Design, Serverless, Database Modeling.",
        header: <Skeleton />,
        icon: <Globe className="h-4 w-4 text-neon-cyan" />,
    },
];
