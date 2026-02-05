"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FolderOpen, Github } from "lucide-react";
import { useRef } from "react";

export default function ProjectCard({
    title,
    category,
    image,
    onClick,
    tech = []
}: {
    title: string;
    category: string;
    image: string;
    onClick: () => void;
    tech?: string[];
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current!.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onClick={onClick}
            className="group relative h-[450px] w-full rounded-3xl bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:border-neon-violet/50 cursor-pointer"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 flex flex-col justify-end rounded-2xl bg-[#0F0F0F] overflow-hidden shadow-2xl"
            >
                {/* Image Placeholder */}
                <div className="absolute inset-x-0 top-0 h-2/3 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out">
                    {/* Placeholder Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-80" />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/90 to-transparent pt-20">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-neon-cyan text-xs font-mono tracking-wider uppercase mb-1 block">
                                {category}
                            </span>
                            <h3 className="text-2xl font-bold uppercase text-white group-hover:text-neon-violet transition-colors">
                                {title}
                            </h3>
                        </div>
                        <div className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-violet group-hover:text-black transition-all">
                            <ArrowUpRight className="size-5" />
                        </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] uppercase font-bold text-zinc-500 bg-white/5 rounded border border-white/5 group-hover:border-white/20 transition-colors">
                                {t}
                            </span>
                        ))}
                        {tech.length > 3 && (
                            <span className="px-2 py-1 text-[10px] text-zinc-600">+{tech.length - 3}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Glow Element */}
            <div className="absolute inset-0 -z-10 bg-neon-violet/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </motion.div>
    );
}
