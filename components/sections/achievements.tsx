"use client";

import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Target, Star, Sparkles, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";

const RARITY_COLORS = {
    legendary: "from-neon-cyan to-neon-violet border-neon-cyan/50 shadow-neon-cyan/20 text-neon-cyan",
    epic: "from-neon-violet to-neon-cyan border-neon-violet/50 shadow-neon-violet/20 text-neon-violet",
    rare: "from-neon-cyan to-neon-violet border-neon-cyan/50 shadow-neon-cyan/20 text-neon-cyan",
};

const RARITY_BG = {
    legendary: "bg-neon-cyan/10 hover:bg-neon-cyan/20",
    epic: "bg-neon-violet/10 hover:bg-neon-violet/20",
    rare: "bg-neon-cyan/10 hover:bg-neon-cyan/20",
}

export default function Achievements() {
    return (
        <section id="achievements" className="relative w-full py-12 bg-void-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
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
                        <Trophy className="size-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Hall of Fame</span>
                    </motion.div>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Trophy <span className="text-neon-cyan">Registry</span>
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto"
                    >
                        Unlocked milestones from the academic battleground and professional quests.
                    </motion.p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {ACHIEVEMENTS.map((achievement, i) => (
                        <AchievementCard key={i} data={achievement} index={i} />
                    ))}
                </div>
            </div>

            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}

function AchievementCard({ data, index }: { data: any, index: number }) {
    const Icon = data.icon;
    const rarityColor = RARITY_COLORS[data.rarity as keyof typeof RARITY_COLORS];
    const rarityBg = RARITY_BG[data.rarity as keyof typeof RARITY_BG];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-full min-h-[200px] rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden flex flex-col md:flex-row"
        >
            {/* Rarity Glow Border on Hover */}
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 rounded-2xl pointer-events-none", rarityColor.split(" ")[2])} />

            {/* Icon Section */}
            <div className={cn("relative w-full md:w-1/3 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5", rarityBg)}>
                <div className="relative">
                    {/* Animated Ring */}
                    <motion.div
                        className={cn("absolute inset-0 rounded-full border-2 border-dashed opacity-50", rarityColor.split(" ").pop())}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    <div className={cn("relative z-10 size-16 rounded-xl flex items-center justify-center bg-black/50 border border-white/10 shadow-lg", rarityColor.split(" ")[2])}>
                        <Icon className={cn("size-8", rarityColor.split(" ").pop())} />
                    </div>

                    {/* Rarity Badge */}
                    <div className={cn("absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0d0d0d] border border-white/10 text-white shadow-xl z-20")}>
                        {data.rarity}
                    </div>
                </div>

                {/* XP / Score */}
                <div className="mt-6 font-mono text-xs text-zinc-500 flex items-center gap-1.5 code-text">
                    <Star className="size-3 text-neon-cyan filled" />
                    <span>+{data.xp} XP</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-neon-cyan transition-colors">
                            {data.title}
                        </h3>
                        <div className="text-zinc-600">
                            <Unlock className="size-4" />
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {data.description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="font-mono text-xs text-zinc-500 space-x-2">
                            <span>UNLOCKED</span>
                            <span className="text-zinc-700">|</span>
                            <span>{data.date}</span>
                        </span>
                    </div>
                    <div className="font-mono text-xs text-zinc-600 bg-white/5 px-2 py-1 rounded">
                        #{data.id}
                    </div>
                </div>
            </div>

            {/* Scanline Effect */}
            <motion.div
                className="absolute inset-x-0 h-[2px] bg-white/20 blur-sm pointer-events-none z-30"
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.7 }}
            />
        </motion.div>
    )
}

const ACHIEVEMENTS = [
    {
        id: "ACH-001",
        title: "Summa Cum Laude",
        description: "Graduated with highest honors, maintaining a perfect 4.0 GPA throughout the entire academic tenure.",
        icon: Award,
        rarity: "legendary",
        xp: 5000,
        date: "2023.12.15"
    },
    {
        id: "ACH-002",
        title: "Dean's List Elite",
        description: "Consecutively awarded Dean's List recognition for 8 semesters for exceptional academic performance.",
        icon: GraduationCap,
        rarity: "epic",
        xp: 2500,
        date: "2019 - 2023"
    },
    {
        id: "ACH-003",
        title: "Global Scholar",
        description: "Awarded the prestigious 70% Merit Scholarship for outstanding entrance examination results.",
        icon: Trophy,
        rarity: "epic",
        xp: 3000,
        date: "2019.01.10"
    },
    {
        id: "ACH-004",
        title: "Iron Attendance",
        description: "Achieved a 100% attendance record across all major courses, demonstrating unwavering discipline.",
        icon: Target,
        rarity: "rare",
        xp: 1000,
        date: "2023.11.30"
    }
];
