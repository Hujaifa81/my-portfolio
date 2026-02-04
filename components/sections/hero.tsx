"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-void-black text-white"
            onMouseMove={handleMouseMove}
        >
            <div className="mask-spotlight absolute inset-0 pointer-events-none z-10 select-none">
                <Spotlight mouseX={mouseX} mouseY={mouseY} />
            </div>

            <div className="z-20 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8 font-sans text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
                >
                    Fullstack Developer & UI Engineer
                </motion.p>

                <h1 className="relative font-display text-7xl font-bold uppercase leading-[0.9] tracking-tighter md:text-9xl lg:text-[12rem]">
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-transparent stroke-white"
                            style={{ WebkitTextStroke: "1px white", color: "transparent" }}
                        >
                            Digital
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
                        >
                            Craftsman
                        </motion.span>
                    </span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <span className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent"></span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
                </motion.div>
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-violet blur-[120px]" />
                <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-acid-green blur-[100px]" />
            </div>
        </section>
    );
}

function Spotlight({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
    const maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            className="absolute inset-0 z-10 opacity-30 mix-blend-soft-light"
            style={style}
        >
            <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"></div>
        </motion.div>
    );
}
