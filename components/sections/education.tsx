"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";

export default function Education() {
    return (
        <section className="relative w-full py-32 bg-void-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="font-display text-5xl font-bold uppercase md:text-7xl bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                        Academic <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-cyan bg-clip-text">Protocol</span>
                    </h2>
                </motion.div>

                {/* Single Featured Education Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative"
                >
                    {/* Hexagon Frame Container */}
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#050505] p-12 overflow-hidden group">

                        {/* Animated Rotating Background */}
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                background: "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.2), rgba(124, 58, 237, 0.2), transparent)"
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />



                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                            {/* Left: Hexagon Badge */}
                            <div className="flex justify-center lg:justify-start">
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Hexagon Shape */}
                                    <div className="relative w-48 h-48 flex items-center justify-center">
                                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                                            <motion.polygon
                                                points="50 1 95 25 95 75 50 99 5 75 5 25"
                                                className="fill-none stroke-neon-cyan"
                                                strokeWidth="0.5"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                            />
                                            <motion.polygon
                                                points="50 1 95 25 95 75 50 99 5 75 5 25"
                                                className="fill-neon-cyan/10"
                                                animate={{ opacity: [0.1, 0.3, 0.1] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                        </svg>

                                        {/* Center Icon */}
                                        <motion.div
                                            className="relative z-10 flex flex-col items-center gap-2"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <GraduationCap className="size-16 text-neon-cyan drop-shadow-[0_0_20px_rgba(0,240,255,1)]" />
                                            <div className="font-mono text-xs text-neon-violet uppercase tracking-wider">BSc</div>
                                        </motion.div>

                                        {/* Orbiting Particles */}
                                        {[0, 120, 240].map((angle, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute size-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                                                style={{
                                                    top: "50%",
                                                    left: "50%",
                                                }}
                                                animate={{
                                                    x: [
                                                        Math.cos((angle * Math.PI) / 180) * 60,
                                                        Math.cos(((angle + 360) * Math.PI) / 180) * 60,
                                                    ],
                                                    y: [
                                                        Math.sin((angle * Math.PI) / 180) * 60,
                                                        Math.sin(((angle + 360) * Math.PI) / 180) * 60,
                                                    ],
                                                }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right: Details */}
                            <div>
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="font-display text-3xl font-bold uppercase bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent group-hover:from-neon-cyan group-hover:via-neon-violet group-hover:to-neon-cyan transition-all duration-500 mb-3 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                        Computer Science
                                    </h3>
                                    <p className="text-neon-violet font-bold mb-4 text-xl">
                                        University of Technology
                                    </p>

                                    {/* Duration Badge */}
                                    <div className="flex items-center gap-2 mb-6 inline-flex rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2">
                                        <Calendar className="size-4 text-neon-cyan" />
                                        <span className="font-mono text-sm text-white">2021 - 2025</span>
                                    </div>

                                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                        Specialized in full-stack development, algorithms, and distributed systems. Completed thesis on 'Performance Optimization in Modern Web Applications'.
                                    </p>

                                    {/* Stats Row */}
                                    <div className="flex flex-wrap gap-4">
                                        <motion.div
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="p-2 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20">
                                                <Award className="size-5 text-neon-cyan" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">CGPA</div>
                                                <div className="font-mono text-white font-bold text-lg">3.8/4.0</div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-violet/50 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="p-2 rounded-lg bg-gradient-to-br from-neon-violet/20 to-neon-cyan/20">
                                                <BookOpen className="size-5 text-neon-violet" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Major</div>
                                                <div className="text-white font-medium">Software Eng.</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>


                        {/* Bottom Gradient Bar */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20" />
        </section>
    );
}
