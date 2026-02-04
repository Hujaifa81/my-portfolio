"use client";

import MagneticButton from "@/components/ui/magnetic-button";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-void-black text-white py-24">
            <div className="container mx-auto px-4 max-w-7xl text-center">
                <h2 className="mb-8 font-display text-5xl font-bold uppercase md:text-8xl">
                    Let's <span className="text-stroke-white text-transparent" style={{ WebkitTextStroke: "1px white" }}>Create</span><br />
                    <span className="bg-gradient-to-r from-neon-violet to-neon-cyan bg-clip-text text-transparent">Something Real</span>
                </h2>

                <p className="mb-12 text-zinc-400 max-w-xl mx-auto text-lg">
                    Open for freelance projects, collaborations, and new opportunities.
                </p>

                <MagneticButton className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-void-black transition-colors hover:bg-neon-cyan hover:text-white">
                    <span className="relative z-10 flex items-center gap-2 text-lg font-bold uppercase tracking-wide">
                        Start a Project <ArrowUpRight className="size-5 transition-transform group-hover:bg-transparent" />
                    </span>
                </MagneticButton>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neon-violet/10 to-transparent pointer-events-none" />
        </section>
    );
}
