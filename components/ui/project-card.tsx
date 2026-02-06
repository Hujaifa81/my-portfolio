"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    year: string;
    index: number;
    color: string;
    links?: { demo: string; github: string };
}

export default function ProjectCard({
    slug,
    title,
    category,
    image,
    description,
    tech,
    year,
    index,
    color,
    links
}: ProjectCardProps) {
    return (
        <div className="flex flex-col h-full w-full bg-[#121212] rounded-3xl border border-white/5 overflow-hidden group shadow-2xl relative">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    />
                ) : (
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`
                        }}
                    />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 p-6 pb-8 md:p-8 md:pb-10 flex flex-col justify-between h-full">

                {/* Top Row - Year & Category */}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-zinc-400">{year}</span>
                    <div className="h-px w-8 bg-zinc-700" />
                    <span
                        className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10"
                        style={{ color: color, borderColor: `${color}33` }}
                    >
                        {category}
                    </span>
                </div>

                {/* Bottom Content */}
                <div className="mt-12">
                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl font-bold uppercase text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm md:text-lg max-w-xl line-clamp-2 md:line-clamp-3 mb-6">
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tech.slice(0, 4).map((t, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs uppercase font-bold text-zinc-400 bg-white/5 rounded-full border border-white/5"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center gap-4 relative z-20">
                        <Link
                            href={`/projects/${slug}`}
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all"
                            style={{ backgroundColor: color }}
                        >
                            <span>See Details</span>
                            <ArrowUpRight className="size-4" />
                        </Link>

                        {links?.demo && (
                            <a
                                href={links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                title="Live Demo"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="size-5" />
                            </a>
                        )}

                        {links?.github && (
                            <a
                                href={links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                title="Source Code"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="size-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
