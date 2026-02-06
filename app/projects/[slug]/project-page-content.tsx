"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Cpu, Layers, Sparkles, ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectPageContentProps {
    project: Project;
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Back Button - Fixed */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                className="fixed top-6 left-6 z-50"
            >
                <Link
                    href="/#work"
                    className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </motion.div>

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                {/* Background Image */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `radial-gradient(ellipse at center, ${project.color}40, transparent 70%)`
                            }}
                        />
                    )}
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
                    <div className="max-w-7xl mx-auto">
                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-3 mb-6"
                        >
                            <span
                                className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md border"
                                style={{
                                    backgroundColor: `${project.color}20`,
                                    borderColor: `${project.color}50`,
                                    color: project.color
                                }}
                            >
                                {project.category}
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm font-mono">
                                {project.year}
                            </span>
                            {project.role && (
                                <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm">
                                    {project.role}
                                </span>
                            )}
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-[0.9]"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/60 text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed mb-10"
                        >
                            {project.description}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href={project.links?.demo || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-current/20"
                                style={{ backgroundColor: project.color }}
                            >
                                <span>View Live Site</span>
                                <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a
                                href={project.links?.github || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold transition-all hover:bg-white/10 hover:scale-105"
                            >
                                <Github className="size-5" />
                                <span>Source Code</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Tech Stack - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-8 group hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="p-3 rounded-xl"
                                style={{ backgroundColor: `${project.color}20` }}
                            >
                                <Cpu className="size-6" style={{ color: project.color }} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.tech?.map((tech: string, i: number) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-8 group hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="p-3 rounded-xl"
                                style={{ backgroundColor: `${project.color}20` }}
                            >
                                <Sparkles className="size-6" style={{ color: project.color }} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Highlights</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Year</span>
                                <span className="text-white font-bold">{project.year}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Category</span>
                                <span className="text-white font-bold">{project.category}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-white/50 text-sm">Technologies</span>
                                <span className="text-white font-bold">{project.tech?.length || 0}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Features - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 p-8 group hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="p-3 rounded-xl"
                                style={{ backgroundColor: `${project.color}20` }}
                            >
                                <Layers className="size-6" style={{ color: project.color }} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Key Features</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features?.map((feature: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                                >
                                    <div
                                        className="mt-1 size-2 rounded-full shrink-0"
                                        style={{ backgroundColor: project.color }}
                                    />
                                    <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Challenges Card */}
                    {project.challenges && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-red-500/5 to-orange-500/5 backdrop-blur-sm rounded-3xl border border-red-500/10 p-8 group hover:border-red-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-red-500/10">
                                    <Code2 className="size-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Challenges</h3>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed italic">
                                "{project.challenges}"
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Screenshot Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Screenshots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Screenshot 1`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <ExternalLink className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} Screenshot 2`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <ExternalLink className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <Link
                        href="/#work"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold transition-all hover:bg-white/10 hover:scale-105"
                    >
                        <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Projects</span>
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
