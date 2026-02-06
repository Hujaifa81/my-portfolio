"use client";

import { useRef } from "react";
import ProjectCard from "@/components/ui/project-card";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PROJECTS } from "@/lib/projects";

const Card = ({
    i,
    project,
    progress,
    range,
    targetScale,
}: {
    i: number;
    project: any;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="relative -top-[25%] h-[450px] w-full max-w-[1000px] origin-top"
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
        <section id="work" ref={container} className="relative w-full bg-neutral-950">
            <div className="pt-32 pb-10 px-4 container mx-auto text-center">
                <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6">
                    Selected <span className="text-neutral-600">Works</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    A collection of digital experiences designed to push boundaries.
                </p>
            </div>

            <div className="w-full relative px-4 pb-20 mt-10">
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
                        />
                    );
                })}
            </div>
        </section>
    );
}
