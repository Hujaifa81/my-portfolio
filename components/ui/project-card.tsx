"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ProjectCard({
    title,
    category,
    image,
    href,
}: {
    title: string;
    category: string;
    image: string;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
        <Link href={href} className="group relative block h-[400px] w-full">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-3xl bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-neon-violet/50"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-void shadow-2xl"
                >
                    {/* Abstract Placeholder Art */}
                    <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950 opacity-50" />
                    <div className="relative z-10 p-6">
                        <h3 className="text-3xl font-bold uppercase text-white group-hover:text-neon-cyan transition-colors">{title}</h3>
                        <p className="mt-2 text-sm text-neutral-400">{category}</p>
                    </div>
                </div>

                {/* Glow Element */}
                <div className="absolute inset-0 -z-10 bg-neon-violet/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </motion.div>
        </Link>
    );
}
