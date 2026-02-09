"use client";

import { useRef } from "react";
import ProjectCard from "@/components/ui/project-card";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const Card = ({
    i,
    project,
    progress,
    range,
    targetScale,
    isLast,
}: {
    i: number;
    project: any;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    isLast: boolean;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={cn(
            "flex items-start justify-center sticky top-12 transition-all duration-500",
            isLast ? "h-[500px]" : "h-[80vh]"
        )}>
            <motion.div
                style={{
                    scale,
                    top: `${i * 25}px`,
                }}
                className="relative h-[450px] w-full max-w-[1000px] origin-top"
            >
                <ProjectCard {...project} index={i} />
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="work" ref={container} className="relative w-full bg-void-black py-12">
            {/* Unified Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
            <div className="px-4 container mx-auto max-w-6xl text-center relative z-10">
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
                        <Folder className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Portfolio</span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6"
                    >
                        Featured <span className="text-neon-cyan">Projects</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="text-white/50 max-w-2xl mx-auto text-lg"
                    >
                        A selection of my recent works and experimental deployments.
                    </motion.p>
                </motion.div>
            </div>

            <div className="w-full relative px-4 mt-12">
                {PROJECTS.map((project, i) => {
                    const targetScale = 1 - ((PROJECTS.length - i) * 0.05);
                    return (
                        <Card
                            key={project.slug}
                            i={i}
                            project={project}
                            progress={scrollYProgress}
                            range={[i * 0.15, 1]}
                            targetScale={targetScale}
                            isLast={i === PROJECTS.length - 1}
                        />
                    );
                })}
            </div>
        </section>
    );
}
