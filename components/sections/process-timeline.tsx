"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Pencil, Code, Rocket, RotateCw, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStage {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    duration: string;
    output: string;
    tags: string[];
}

export default function ProcessTimeline() {
    return (
        <section
            id="process"
            className="relative w-full py-20 md:py-32 bg-void-black overflow-hidden"
        >
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6 backdrop-blur-sm"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    >
                        <Zap className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Workflow</span>
                    </motion.div>
                    
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-6 relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-cyan to-white">
                            Process Timeline
                        </span>
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        From ideation to evolution, each phase connects to create digital excellence.
                    </p>
                </motion.div>

                {/* Timeline items with card-to-card connections */}
                <div className="relative space-y-24 md:space-y-32">
                    {PROCESS_STAGES.map((stage, index) => (
                        <TimelineItem
                            key={index}
                            stage={stage}
                            index={index}
                            total={PROCESS_STAGES.length}
                        />
                    ))}
                </div>
            </div>

            {/* Ambient glow effects */}
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]"
                animate={{ 
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]"
                animate={{ 
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1.2, 1, 1.2]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
}

// Timeline Item Component
function TimelineItem({ stage, index, total }: { stage: ProcessStage; index: number; total: number }) {
    const Icon = stage.icon;
    const isLeft = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) * 0.02);
        mouseY.set((e.clientY - centerY) * 0.02);
    };
    
    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };
    
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
    
    const progress = (index + 1) / total;
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
        >
            {/* Smooth curved connecting line like neural map */}
            {index < total - 1 && (
                <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10"
                    style={{
                        top: '50%',
                        width: '600px',
                        height: 'calc(100% + 6rem)'
                    }}
                >
                    <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id={`flowGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
                                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#00F0FF" stopOpacity="1" />
                            </linearGradient>
                            <filter id={`flowGlow-${index}`}>
                                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Smooth flowing curved path connecting center nodes */}
                        <motion.path
                            d={isLeft 
                                ? "M 300,0 C 300,25 150,40 150,50 C 150,70 220,85 280,95 C 290,97 295,99 300,100"
                                : "M 300,0 C 300,25 450,40 450,50 C 450,70 380,85 320,95 C 310,97 305,99 300,100"
                            }
                            stroke={`url(#flowGradient-${index})`}
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            filter={`url(#flowGlow-${index})`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 2, 
                                ease: "easeInOut" 
                            }}
                        />
                        
                        {/* Connection nodes along the path */}
                        {[
                            { x: 300, y: 25 },
                            { x: isLeft ? 150 : 450, y: 50 }
                        ].map((pos, i) => (
                            <motion.g key={`node-${i}`}>
                                <motion.circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    
                                    fill="#00F0FF"
                                    filter={`url(#flowGlow-${index})`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ 
                                        delay: 0.5 + i * 0.3,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                />
                                {/* Node glow effect */}
                                <motion.circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r="8"
                                    fill="none"
                                    stroke="#00F0FF"
                                    strokeWidth="2"
                                    opacity="0.3"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ 
                                        scale: [0.5, 1.5, 1.5],
                                        opacity: [0.6, 0, 0]
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        delay: 0.5 + i * 0.3,
                                        duration: 1.2
                                    }}
                                />
                            </motion.g>
                        ))}
                        
                        {/* Flowing particle traveling along the path */}
                        <motion.circle
                            r="5"
                            fill="#00F0FF"
                            filter={`url(#flowGlow-${index})`}
                            initial={{ 
                                offsetDistance: "0%",
                                opacity: 0 
                            }}
                            whileInView={{
                                offsetDistance: ["0%", "100%"],
                                opacity: [0, 1, 1, 1, 0],
                                scale: [0.5, 1.3, 1, 1, 0.5]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut"
                            }}
                            style={{
                                offsetPath: isLeft 
                                    ? `path('M 300,0 C 300,25 150,40 150,50 C 150,70 220,85 280,95 C 290,97 295,99 300,100')`
                                    : `path('M 300,0 C 300,25 450,40 450,50 C 450,70 380,85 320,95 C 310,97 305,99 300,100')`
                            } as any}
                        />
                        
                        {/* Additional subtle trail particles */}
                        {[0.3, 0.6].map((offset, i) => (
                            <motion.circle
                                key={`trail-${i}`}
                                r="3"
                                fill="#7C3AED"
                                opacity="0.6"
                                filter={`url(#flowGlow-${index})`}
                                initial={{ 
                                    offsetDistance: `${offset * 100}%`,
                                    opacity: 0 
                                }}
                                whileInView={{
                                    offsetDistance: [`${offset * 100}%`, `${(offset + 0.3) * 100}%`],
                                    opacity: [0, 0.6, 0.6, 0],
                                    scale: [0.5, 1, 1, 0.5]
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    delay: 0.2 + i * 0.3,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    offsetPath: isLeft 
                                        ? `path('M 300,0 C 300,25 150,40 150,50 C 150,70 220,85 280,95 C 290,97 295,99 300,100')`
                                        : `path('M 300,0 C 300,25 450,40 450,50 C 450,70 380,85 320,95 C 310,97 305,99 300,100')`
                                } as any}
                            />
                        ))}
                    </svg>
                </motion.div>
            )}

            <div className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                !isLeft && "lg:grid-flow-dense"
            )}>
            {/* Center Node */}
            <div className={cn(
                "hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            )}>
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: index * 0.15,
                        duration: 0.8 
                    }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="relative group cursor-pointer"
                >
                    <div className="relative w-16 h-16 rounded-full border-2 border-neon-cyan bg-void-black flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.5)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] transition-all">
                        {/* Rotating ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-violet border-r-neon-cyan"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        
                        <span className="font-display text-xl font-bold text-white z-10 group-hover:text-neon-cyan transition-colors">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        
                        {/* Pulse rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                            animate={{ 
                                scale: [1, 1.6, 1.6],
                                opacity: [0.6, 0, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    
                    {/* Progress ring */}
                    <svg className="absolute -inset-2 w-20 h-20 -rotate-90">
                        <motion.circle
                            cx="40"
                            cy="40"
                            r="38"
                            fill="none"
                            stroke="#00F0FF"
                            strokeWidth="1"
                            strokeDasharray="240"
                            initial={{ strokeDashoffset: 240 }}
                            whileInView={{ strokeDashoffset: 240 - (240 * progress) }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: index * 0.2 }}
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
                ref={cardRef}
                initial={{ 
                    opacity: 0, 
                    x: isLeft ? -100 : 100,
                    y: 50
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: springX,
                    y: springY
                }}
                className={cn(
                    "relative group",
                    !isLeft && "lg:col-start-2"
                )}
            >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-8 transition-all duration-500 hover:border-neon-cyan/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                    {/* Animated gradient overlay */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            background: `radial-gradient(600px circle at ${isHovered ? 'var(--mouse-x, 50%)' : '50%'} ${isHovered ? 'var(--mouse-y, 50%)' : '50%'}, rgba(0,240,255,0.1), transparent 40%)`
                        }}
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-neon-cyan/30 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neon-cyan/30 rounded-br-2xl" />
                    
                    {/* Mobile number badge */}
                    <div className="lg:hidden absolute -top-4 -left-4 w-12 h-12 rounded-full border-2 border-neon-cyan bg-void-black flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                        <span className="font-display text-lg font-bold text-white">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    
                    <div className="relative z-10 space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-start gap-6">
                            <motion.div
                                className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-neon-cyan/50 transition-colors"
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                                <Icon className="w-8 h-8 text-neon-cyan relative z-10" />
                            </motion.div>
                            
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                        {stage.title}
                                    </h3>
                                    <ArrowRight className="w-5 h-5 text-neon-cyan opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                                
                                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                                    <span className="uppercase tracking-wider">{stage.duration}</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                            {stage.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {stage.tags.map((tag: string, i: number) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:border-neon-cyan/50 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all cursor-default"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        
                        {/* Output indicator */}
                        <div className="pt-4 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-zinc-600">Output</span>
                                <motion.div 
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neon-violet/30 bg-neon-violet/10"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-sm font-mono text-neon-violet">{stage.output}</span>
                                    <motion.div
                                        className="w-1.5 h-1.5 rounded-full bg-neon-violet"
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Background icon */}
                    <Icon className="absolute -bottom-8 -right-8 w-40 h-40 text-white/[0.02] group-hover:text-neon-cyan/[0.05] transition-all duration-700" />
                </div>
            </motion.div>

            {/* Empty column for spacing on desktop */}
            <div className={cn("hidden lg:block", isLeft && "lg:col-start-2")} />
            </div>
        </motion.div>
    );
}


const PROCESS_STAGES = [
    {
        title: "Ideation",
        description: "Mapping requirements into core digital concepts. Identifying project goals and user needs to forge a solid strategic foundation.",
        icon: Lightbulb,
        duration: "01:00",
        output: "Neural Map",
        tags: ["Research", "Strategy", "Analysis"]
    },
    {
        title: "Architecture",
        description: "Building the digital skeleton. Engineering high-fidelity prototypes and design systems optimized for rapid scaling.",
        icon: Pencil,
        duration: "02:00",
        output: "System Blueprint",
        tags: ["Design", "UX/UI", "Prototyping"]
    },
    {
        title: "Development",
        description: "Hard-coding the vision. Iterative sprints focusing on performance, modularity, and pixel-perfect UI/UX implementation.",
        icon: Code,
        duration: "03:00 - 06:00",
        output: "Executable Binary",
        tags: ["Coding", "Testing", "Optimization"]
    },
    {
        title: "Deployment",
        description: "Igniting the boosters. Automated CI/CD pipelines pushing synchronized updates to globally distributed edge nodes.",
        icon: Rocket,
        duration: "07:00",
        output: "Live Protocol",
        tags: ["CI/CD", "Cloud", "Launch"]
    },
    {
        title: "Evolution",
        description: "Perpetual refinement. Analyzing metrics and feedback loops to evolve the platform beyond its initial requirements.",
        icon: RotateCw,
        duration: "∞",
        output: "Optimization cycle",
        tags: ["Monitoring", "Iteration", "Scaling"]
    }
];

