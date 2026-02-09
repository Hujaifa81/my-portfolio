"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, MapPin, Code, Trophy } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="relative w-full py-12 bg-void-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
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
                        <GraduationCap className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Education</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Academic <span className="text-neon-cyan">Protocol</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 max-w-xl mx-auto text-lg"
                    >
                        Academic certifications and specialized training protocols.
                    </motion.p>
                </motion.div>

                {/* Education Card - Centered Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative group max-w-4xl mx-auto"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 overflow-hidden hover:border-neon-cyan/30 transition-all duration-500">

                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
                        </div>

                        <div className="relative z-10">
                            {/* Header Row */}
                            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl border border-neon-cyan/30 bg-neon-cyan/5 flex items-center justify-center shrink-0"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <GraduationCap className="w-8 h-8 text-neon-cyan" />
                                </motion.div>

                                {/* Title & Info */}
                                <div className="flex-1">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-2">
                                        Computer Science & <span className="text-neon-cyan">Engineering</span>
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 text-zinc-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-neon-cyan" />
                                            <span>University of Technology, Dhaka</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                                            <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                                            <span className="font-mono text-sm">2021 - 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                Specialized in full-stack development, algorithms, and distributed systems.
                                Completed thesis on &apos;Performance Optimization in Modern Web Applications&apos;.
                                Focused on building scalable architectures and modern frontend frameworks.
                            </p>

                            {/* Stats Grid - 4 columns */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center hover:border-neon-cyan/30 transition-colors">
                                    <Award className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">CGPA</div>
                                    <div className="font-mono text-white font-bold">3.8/4.0</div>
                                </div>

                                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center hover:border-neon-violet/30 transition-colors">
                                    <BookOpen className="w-5 h-5 text-neon-violet mx-auto mb-2" />
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Major</div>
                                    <div className="font-mono text-white font-bold">Software</div>
                                </div>

                                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center hover:border-neon-cyan/30 transition-colors">
                                    <Code className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Projects</div>
                                    <div className="font-mono text-white font-bold">15+</div>
                                </div>

                                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center hover:border-neon-violet/30 transition-colors">
                                    <Trophy className="w-5 h-5 text-neon-violet mx-auto mb-2" />
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Awards</div>
                                    <div className="font-mono text-white font-bold">3</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
        </section>
    );
}
