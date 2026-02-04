"use client";

import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Target, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Achievements() {
    return (
        <section className="relative w-full py-32 bg-void-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-4">
                            Achievement <span className="text-neon-violet">Registry</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Unlocked milestones from the academic battleground.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ACHIEVEMENTS.map((achievement, i) => (
                        <AchievementCard key={i} data={achievement} index={i} />
                    ))}
                </div>
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20" />
        </section>
    );
}

function AchievementCard({ data, index }: { data: any, index: number }) {
    const Icon = data.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group relative h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#050505] p-8 overflow-hidden"
        >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/0 via-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Holographic Scan Line */}
            <motion.div
                className="absolute inset-x-0 h-1 bg-neon-cyan/30 blur-sm"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
            />

            {/* Top Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-violet/30 group-hover:border-neon-cyan/50 transition-colors" />

            {/* Icon Badge */}
            <motion.div
                className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-violet/10 border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:border-neon-cyan/60 group-hover:from-neon-cyan/30 group-hover:to-neon-violet/30 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300"
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: [0, -8, 8, -8, 0], scale: 1.15 }}
            >
                <Icon className="size-8 text-neon-cyan drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,1)] transition-all" />

                {/* Pulsing Glow Ring */}
                <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-neon-cyan/0 group-hover:border-neon-cyan/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                />

                {/* Sparkle Effect on Hover */}
                <motion.div
                    className="absolute -top-1 -right-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                >
                    <Sparkles className="size-4 text-neon-cyan" />
                </motion.div>
            </motion.div>

            <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold uppercase bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent group-hover:from-neon-cyan group-hover:via-neon-violet group-hover:to-neon-cyan transition-all duration-500 mb-2 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    {data.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {data.description}
                </p>

                {/* Year Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md group-hover:border-neon-violet/30 transition-colors"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                >
                    <Star className="size-3 text-neon-violet" />
                    <span className="font-mono text-xs text-zinc-300">{data.year}</span>
                </motion.div>
            </div>

            {/* Bottom Corner Accent */}
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-violet/30 group-hover:border-neon-cyan/50 transition-colors" />
        </motion.div>
    )
}

const ACHIEVEMENTS = [
    {
        title: "Dean's List",
        description: "Recognized for exceptional academic performance with a place on the Dean's List of Distinguished Students.",
        icon: Award,
        year: "University"
    },
    {
        title: "Summa Cum Laude Candidate",
        description: "On track for highest honors graduation, maintaining top-tier GPA throughout academic career.",
        icon: GraduationCap,
        year: "University"
    },
    {
        title: "70% Academic Scholarship",
        description: "Awarded merit-based scholarship covering 70% of tuition fees in recognition of academic excellence.",
        icon: Trophy,
        year: "University"
    },
    {
        title: "Perfect Attendance",
        description: "Achieved flawless attendance record throughout college, demonstrating commitment and discipline.",
        icon: Target,
        year: "College"
    }
];
