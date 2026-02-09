"use client";

import { motion } from "framer-motion";
import { PenTool, Laptop, Server, Zap, Globe, Layers, Cpu } from "lucide-react";

export default function WhatIDo() {
    return (
        <section id="services" className="relative w-full py-12 bg-void-black overflow-hidden">
            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    className="mb-12 text-center relative z-10"
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
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Services</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Operational <span className="text-neon-cyan">Capabilities</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 max-w-xl mx-auto text-lg"
                    >
                        Deploying advanced solutions across the digital spectrum.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <ServiceCard key={i} index={i} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ title, description, icon: Icon, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative h-64 w-full rounded-2xl bg-void-black border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-colors"
        >
            {/* Animated Background Glow */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), rgba(0, 240, 255, 0.1), transparent)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Scan Line */}
            <motion.div
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
            />

            {/* Icon with Animation */}
            <motion.div
                className="relative z-10 mb-6 flex size-14 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-neon-cyan/50 group-hover:from-neon-cyan/20 group-hover:to-neon-violet/20 transition-all duration-300"
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
            >
                <Icon className="size-7 text-zinc-400 group-hover:text-neon-cyan transition-colors drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />

                {/* Icon Glow Ring */}
                <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-neon-cyan/0 group-hover:border-neon-cyan/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            <motion.h3
                className="relative z-10 mb-2 font-display text-xl font-bold uppercase bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent group-hover:from-neon-cyan group-hover:via-neon-violet group-hover:to-neon-cyan transition-all duration-500 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.15 }}
            >
                {title}
            </motion.h3>
            <motion.p
                className="relative z-10 text-sm text-zinc-400 leading-relaxed"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
            >
                {description}
            </motion.p>

            {/* Corner Accents */}
            <motion.div
                className="absolute top-4 right-4 h-3 w-3 border-t border-r border-white/20 group-hover:border-neon-cyan transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
            />
            <motion.div
                className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/20 group-hover:border-neon-cyan transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
            />
        </motion.div>
    )
}

const SERVICES = [
    {
        title: "Frontend Architecture",
        description: "Building scalable, component-driven UI systems with Next.js, React, and Tailwind. Focusing on performance and maintainability.",
        icon: Laptop
    },
    {
        title: "Backend Engineering",
        description: "Designing robust APIs and microservices using Node.js, Postgres, and Serverless infrastructure.",
        icon: Server
    },
    {
        title: "UI/UX Engineering",
        description: "Bridging the gap between design and code. Implementing complex motion and interaction using Framer Motion.",
        icon: PenTool
    },
    {
        title: "Performance",
        description: "Optimizing Core Web Vitals, reducing bundle sizes, and ensuring sub-second load times.",
        icon: Zap
    },
    {
        title: "3D & WebGL",
        description: "Creating immersive 3D experiences with React Three Fiber and Shaders for next-level visual impact.",
        icon: Globe
    },
    {
        title: "Design Systems",
        description: "Establishing consistent visual languages and token-based themes for unified brand experiences.",
        icon: Layers
    }
];
