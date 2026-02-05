"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code2, Cpu, Globe, Layers } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}

export default function ProjectDetails({ isOpen, onClose, project }: ProjectDetailsProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-4 md:inset-10 z-[51] flex items-center justify-center pointer-events-none"
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl max-h-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="size-5" />
                            </button>

                            {/* Left: Image / Visuals */}
                            <div className="w-full md:w-1/2 bg-neutral-900 relative min-h-[300px] md:min-h-full">
                                {/* Placeholder Gradient (Replace with Image) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white/10 font-display text-4xl font-bold uppercase rotate-12">
                                        Project Preview
                                    </h3>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Right: Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">

                                {/* Header */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono font-bold tracking-wider">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
                                            {project.year || "2024"}
                                        </span>
                                    </div>
                                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-zinc-400 text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mb-10">
                                    <a
                                        href={project.links?.demo || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn-primary text-center justify-center"
                                    >
                                        <ExternalLink className="size-4 mr-2" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.links?.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 btn-secondary text-center justify-center"
                                    >
                                        <Github className="size-4 mr-2" />
                                        Source Code
                                    </a>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-10">
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                                        <Cpu className="size-4 text-neon-violet" />
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech?.map((tech: string, i: number) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-300 text-sm hover:border-neon-violet/30 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-10">
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                                        <Layers className="size-4 text-neon-cyan" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features?.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-zinc-400 group">
                                                <span className="mt-1.5 size-1.5 rounded-full bg-neon-cyan/50 group-hover:bg-neon-cyan transition-colors" />
                                                <span className="text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Challenges */}
                                {project.challenges && (
                                    <div>
                                        <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                                            <Code2 className="size-4 text-red-500" />
                                            Challenges Solved
                                        </h3>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                            <p className="text-sm text-zinc-400 leading-relaxed italic">
                                                "{project.challenges}"
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
