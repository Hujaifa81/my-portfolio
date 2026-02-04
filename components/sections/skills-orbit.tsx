"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useTime, useMotionTemplate } from "framer-motion";
import {
    Code, Database, Server, Globe, Cpu, Smartphone,
    Terminal, Shield, GitBranch, Cloud, Layers, Zap,
    Atom, Container, Workflow, Lock, Layout, Network
} from "lucide-react";

export default function SkillsOrbit() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-void-black py-24"
        >
            <div className="container relative z-10 mx-auto px-4 text-center mb-16">
                <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl">
                    Orbital <span className="text-neon-cyan">Tech Stack</span>
                </h2>
                <p className="mt-4 text-zinc-400">
                    The ecosystem of modern technologies I command.
                </p>
            </div>

            {/* Mobile: Horizontal Scroll (Visible < md) */}
            <div className="md:hidden w-full overflow-x-auto pb-8 scrollbar-hide">
                <div className="flex gap-4 px-8 min-w-max">
                    {ALL_SKILLS.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                            <skill.icon className="size-8 text-neon-violet" />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Orbital System (Visible >= md) */}
            <div className="hidden md:flex relative h-[800px] w-full max-w-[800px] items-center justify-center">
                {/* Central Core */}
                <div className="absolute z-20 flex size-32 items-center justify-center rounded-full bg-void-black/80 backdrop-blur-xl border border-neon-violet/30 shadow-[0_0_80px_rgba(124,58,237,0.3)]">
                    <span className="font-display text-sm font-bold text-white uppercase tracking-wider">FullStack</span>
                </div>

                <OrbitSystem />
            </div>
        </section>
    );
}

function OrbitSystem() {
    const time = useTime();

    // Slow down time for rings
    const rotate1 = useTransform(time, [0, 20000], [0, 360], { clamp: false });
    const rotate2 = useTransform(time, [0, 35000], [0, -360], { clamp: false });
    const rotate3 = useTransform(time, [0, 50000], [0, 360], { clamp: false });

    return (
        <>
            <OrbitRing rotate={rotate1} radius={180}>
                <SkillItem icon={Atom} name="React" count={4} index={0} radius={180} parentRotate={rotate1} />
                <SkillItem icon={Zap} name="Next.js" count={4} index={1} radius={180} parentRotate={rotate1} />
                <SkillItem icon={Layers} name="Tailwind" count={4} index={2} radius={180} parentRotate={rotate1} />
                <SkillItem icon={Smartphone} name="React Native" count={4} index={3} radius={180} parentRotate={rotate1} />
            </OrbitRing>

            <OrbitRing rotate={rotate2} radius={280}>
                <SkillItem icon={Server} name="Node.js" count={4} index={0} radius={280} parentRotate={rotate2} />
                <SkillItem icon={Database} name="Postgres" count={4} index={1} radius={280} parentRotate={rotate2} />
                <SkillItem icon={Globe} name="GraphQL" count={4} index={2} radius={280} parentRotate={rotate2} />
                <SkillItem icon={Lock} name="Auth" count={4} index={3} radius={280} parentRotate={rotate2} />
            </OrbitRing>

            <OrbitRing rotate={rotate3} radius={380}>
                <SkillItem icon={Cloud} name="AWS" count={5} index={0} radius={380} parentRotate={rotate3} />
                <SkillItem icon={Container} name="Docker" count={5} index={1} radius={380} parentRotate={rotate3} />
                <SkillItem icon={Workflow} name="CI/CD" count={5} index={2} radius={380} parentRotate={rotate3} />
                <SkillItem icon={Cpu} name="Arch" count={5} index={3} radius={380} parentRotate={rotate3} />
                <SkillItem icon={Shield} name="Security" count={5} index={4} radius={380} parentRotate={rotate3} />
            </OrbitRing>
        </>
    )
}

function OrbitRing({ rotate, radius, children }: { rotate: any, radius: number, children: React.ReactNode }) {
    return (
        <motion.div
            style={{ rotate }}
            className="absolute rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.05)] pointer-events-none"
        >
            <div style={{ width: radius * 2, height: radius * 2 }} className="relative rounded-full pointer-events-none">
                {children}
            </div>
        </motion.div>
    )
}

function SkillItem({ icon: Icon, name, count, index, radius, parentRotate }: { icon: any, name: string, count: number, index: number, radius: number, parentRotate: any }) {
    const angle = (360 / count) * index;
    const rotate = useTransform(parentRotate, (v: any) => -v); // Counter-rotate to stay upright

    return (
        <div
            className="absolute left-1/2 top-1/2 -ml-6 -mt-6 flex size-12 items-center justify-center pointer-events-auto"
            style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
            }}
        >
            <motion.div style={{ rotate }}>
                <div className="group relative flex size-14 items-center justify-center rounded-full bg-void-black border border-white/10 shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-125 hover:border-neon-cyan hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] z-10 cursor-pointer">
                    <Icon className="size-6 text-white transition-colors" />
                </div>
                {/* Persistent Label */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="whitespace-nowrap px-2 py-1 text-xs font-bold text-zinc-300">
                        {name}
                    </span>
                </div>

            </motion.div >
        </div >
    )
}

const ALL_SKILLS = [
    { name: "React", icon: Atom }, { name: "Next.js", icon: Zap }, { name: "Tailwind", icon: Layers },
    { name: "Node.js", icon: Server }, { name: "Postgres", icon: Database }, { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Container }, { name: "GraphQL", icon: Globe }, { name: "React Native", icon: Smartphone }
];
