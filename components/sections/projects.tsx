"use client";

import ProjectCard from "@/components/ui/project-card";

const PROJECTS = [
    {
        title: "Neon Nexus",
        category: "Fintech Dashboard",
        image: "",
        href: "#",
    },
    {
        title: "Aura Stream",
        category: "Music Platform",
        image: "",
        href: "#",
    },
    {
        title: "Vertex Edge",
        category: "3D Portfolio",
        image: "",
        href: "#",
    },
    {
        title: "Cipher Vault",
        category: "Crypto Wallet",
        image: "",
        href: "#",
    },
];

export default function Projects() {
    return (
        <section id="work" className="relative w-full py-32 bg-neutral-950">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="mb-20 font-display text-5xl font-bold uppercase text-white md:text-7xl">
                    Selected <span className="text-neutral-600">Works</span>
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {PROJECTS.map((project, i) => (
                        <div key={i} className={i % 2 === 1 ? "md:mt-24" : ""}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
