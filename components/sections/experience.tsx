"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Server, Layout, GitMerge, Terminal, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Experience() {
    return (
        <section id="experience" className="relative w-full py-12 bg-void-black text-white overflow-hidden">
            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
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
                        <Briefcase className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Experience</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Deployment <span className="text-neon-cyan">Status</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 max-w-xl mx-auto text-lg"
                    >
                        Tracing the timeline of professional deployments and key missions.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Main "Active Mission" Card */}
                    <MissionCard />
                </div>
            </div>
        </section>
    );
}

function MissionCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.01, y: -5 }}
            className="relative w-full rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden"
        >
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), rgba(124, 58, 237, 0.15), transparent)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Top Bar: Status */}
            <motion.div
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 bg-white/5 px-8 py-4 backdrop-blur-md relative z-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center gap-3">
                    <div className="relative size-3 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                    <span className="font-mono text-sm uppercase tracking-widest text-neon-cyan">
                        Mission Completed
                    </span>
                    <span className="h-4 w-[1px] bg-white/10 mx-2" />
                    <span className="font-mono text-sm text-zinc-400">
                        2025
                    </span>
                </div>
                <motion.div
                    className="flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <Briefcase className="size-4 text-neon-cyan" />
                    <span className="text-sm font-bold text-neon-cyan uppercase tracking-wide">Junior Web Developer</span>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x lg:divide-white/5 relative z-10">

                {/* Left: Role Info */}
                <motion.div
                    className="col-span-1 p-8 bg-gradient-to-br from-white/5 to-transparent"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="font-display text-3xl font-bold uppercase text-white mb-2">
                        TechNova <span className="text-zinc-500">Corp</span>
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                        Deployed as a key operative in frontend architecture and system optimization throughout 2025.
                    </p>

                    <div className="space-y-4">
                        <div className="text-xs uppercase tracking-widest text-zinc-500">Tech Arsenal</div>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "Tailwind"].map((t, i) => (
                                <motion.span
                                    key={t}
                                    className="rounded border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-mono text-neon-violet hover:bg-neon-violet/10 hover:border-neon-violet/50 transition-colors cursor-default"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Objectives / Achievements Grid */}
                <motion.div
                    className="col-span-2 p-8 bg-[#0a0a0a]"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                        <Terminal className="size-4" />
                        Mission Objectives
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ObjectiveCard
                            icon={Layout}
                            title="UI Architecture"
                            desc="Refactored legacy codebase into modular, reusable components using Atomic Design principles."
                            index={0}
                        />
                        <ObjectiveCard
                            icon={Server}
                            title="API Integration"
                            desc="Developed robust data fetching layers with React Query, improving visual sync by 40%."
                            index={1}
                        />
                        <ObjectiveCard
                            icon={GitMerge}
                            title="CI/CD Pipelines"
                            desc="Streamlined deployment workflows, reducing build times from 15m to 4m."
                            index={2}
                        />
                        <ObjectiveCard
                            icon={CheckCircle}
                            title="Accessibility"
                            desc="Achieved WCAG 2.1 AA compliance across core product dashboard."
                            index={3}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Progress Bar Decoration */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-violet to-neon-cyan"
                initial={{ width: "0%" }}
                whileInView={{ width: "65%" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
        </motion.div>
    )
}

function ObjectiveCard({ icon: Icon, title, desc, index }: any) {
    return (
        <motion.div
            className="group rounded-xl border border-white/5 bg-white/5 p-4 hover:border-neon-cyan/30 hover:bg-white/10 transition-all duration-300 cursor-default relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            whileHover={{ y: -3, scale: 1.02 }}
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start gap-3 relative z-10">
                <motion.div
                    className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-neon-cyan/50 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="size-4 text-zinc-400 group-hover:text-neon-cyan transition-colors" />
                </motion.div>
                <div>
                    <h4 className="font-bold text-white text-sm mb-1 group-hover:text-neon-cyan transition-colors">{title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    )
}
