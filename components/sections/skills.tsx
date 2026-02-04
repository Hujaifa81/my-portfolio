"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    Code,
    Palette,
    Layers,
    Zap,
    Smartphone,
    Globe,
} from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-24 w-full bg-void-black relative">
            <div className="container mx-auto px-4 max-w-7xl mb-12">
                <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
                    Technical <span className="text-neon-violet">Arsenal</span>
                </h2>
            </div>

            <BentoGrid className="max-w-7xl mx-auto px-4">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse border border-white/10" />
);

const items = [
    {
        title: "Fullstack Engineering",
        description: "Next.js, React, Node.js, Postgres, TypeScript.",
        header: <Skeleton />,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "UI/UX Design",
        description: "Figma, Framer, Motion Design principles.",
        header: <Skeleton />,
        icon: <Palette className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Animation & 3D",
        description: "Framer Motion, GSAP, React Three Fiber.",
        header: <Skeleton />,
        icon: <Layers className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Performance Optimization",
        description: "Core Web Vitals, Lazy loading, Code splitting.",
        header: <Skeleton />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mobile First",
        description: "Responsive layouts that work on any device.",
        header: <Skeleton />,
        icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Backend Architecture",
        description: "API Design, Serverless, Database Modeling.",
        header: <Skeleton />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
];
