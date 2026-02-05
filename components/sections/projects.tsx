"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import ProjectDetails from "@/components/ui/project-details";
import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Neon Nexus",
        category: "Fintech Dashboard",
        description: "A high-frequency trading dashboard with real-time data visualization and biometric authentication integration. Designed for institutions requiring split-second decision making capabilities.",
        tech: ["Next.js", "TypeScript", "WebSockets", "D3.js", "Tailwind"],
        image: "",
        year: "2024",
        links: { demo: "#", github: "#" },
        features: [
            "Real-time market data streaming via WebSockets",
            "Biometric login integration (Fingerprint/FaceID)",
            "Custom interactive charts with D3.js",
            "Dark mode optimized for low-light trading environments"
        ],
        challenges: "Handling thousands of data points per second without performance degradation was a major hurdle. I implemented a custom virtualized list and optimized React re-renders to maintain a silky smooth 60fps."
    },
    {
        title: "Aura Stream",
        category: "Music Platform",
        description: "A decentralized music streaming platform empowering artists with NFT-based ownership and direct-to-fan monetization. Features a spatial audio player and immersive 3D visualizer.",
        tech: ["React", "Solidity", "IPFS", "Three.js", "Node.js"],
        image: "",
        year: "2023",
        links: { demo: "#", github: "#" },
        features: [
            "Smart contract based royalty distribution",
            "3D Audio Visualizer using Three.js",
            "IPFS decentralized storage for media files",
            "Artist dashboard for analytics and NFT minting"
        ],
        challenges: "Integrating a WebGL visualizer alongside a heavy audio processing engine caused memory leaks. I solved this by offloading audio analysis to a Web Worker and optimizing the Three.js render loop."
    },
    {
        title: "Vertex Edge",
        category: "3D Portfolio",
        description: "An interactive 3D portfolio experience allowing users to navigate a virtual gallery of work. Built to demonstrate proficiency in WebGL and creative frontend development.",
        tech: ["React Three Fiber", "Blender", "GSAP", "Zustand"],
        image: "",
        year: "2023",
        links: { demo: "#", github: "#" },
        features: [
            "Fully navigable 3D environment",
            "Baked lighting and realistic PBR textures",
            "Optimized for mobile devices",
            "Interactive physics-based elements"
        ],
        challenges: "Baking high-quality lighting textures while keeping the bundle size small was difficult. I used DRACO compression for geometry and Basis Universal texture compression to reduce load times by 70%."
    },
    {
        title: "Cipher Vault",
        category: "Crypto Wallet",
        description: "A non-custodial crypto wallet focused on security and user experience. Supports multi-chain transactions, hardware wallet connection, and fiat on-ramp integration.",
        tech: ["Rust", "Tauri", "React", "Ethers.js"],
        image: "",
        year: "2022",
        links: { demo: "#", github: "#" },
        features: [
            "Hardware wallet support (Ledger/Trezor)",
            "Cross-chain atomic swaps",
            "Seed phrase encryption with AES-256",
            "Integrated portfolio tracker"
        ],
        challenges: "Ensuring security while maintaining a simple UI was key. I spent weeks auditing the key generation process and implementing a secure enclave integration for private key storage."
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section id="work" className="relative w-full py-32 bg-neutral-950">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-20">
                    <h2 className="font-display text-5xl font-bold uppercase text-white md:text-7xl mb-6">
                        Selected <span className="text-neutral-600">Works</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        A collection of digital experiences designed to push boundaries.
                        Click on any project to explore the architecture and engineering behind it.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {PROJECTS.map((project, i) => (
                        <div key={i} className={i % 2 === 1 ? "md:mt-24" : ""}>
                            <ProjectCard
                                {...project}
                                onClick={() => setSelectedProject(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ProjectDetails
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}
