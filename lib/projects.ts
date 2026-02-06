// Project data with slugs - centralized for use across the app
export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    image: string;
    year: string;
    role: string;
    color: string;
    links: { demo: string; github: string };
    features: string[];
    challenges: string;
}

export const PROJECTS: Project[] = [
    {
        slug: "neon-nexus",
        title: "Neon Nexus",
        category: "Fintech Dashboard",
        description: "A high-frequency trading dashboard with real-time data visualization and biometric authentication integration. Designed for institutions requiring split-second decision making capabilities.",
        tech: ["Next.js", "TypeScript", "WebSockets", "D3.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
        year: "2024",
        role: "Lead Frontend Engineer",
        color: "#7a4bfb",
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
        slug: "aura-stream",
        title: "Aura Stream",
        category: "Music Platform",
        description: "A decentralized music streaming platform empowering artists with NFT-based ownership and direct-to-fan monetization. Features a spatial audio player and immersive 3D visualizer.",
        tech: ["React", "Solidity", "IPFS", "Three.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
        year: "2023",
        role: "Full Stack Developer",
        color: "#00f0ff",
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
        slug: "vertex-edge",
        title: "Vertex Edge",
        category: "3D Portfolio",
        description: "An interactive 3D portfolio experience allowing users to navigate a virtual gallery of work. Built to demonstrate proficiency in WebGL and creative frontend development.",
        tech: ["React Three Fiber", "Blender", "GSAP", "Zustand"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
        year: "2023",
        role: "Creative Developer",
        color: "#ff0099",
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
        slug: "cipher-vault",
        title: "Cipher Vault",
        category: "Crypto Wallet",
        description: "A non-custodial crypto wallet focused on security and user experience. Supports multi-chain transactions, hardware wallet connection, and fiat on-ramp integration.",
        tech: ["Rust", "Tauri", "React", "Ethers.js"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
        year: "2022",
        role: "Security Engineer",
        color: "#39ff14",
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

export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return PROJECTS.map(p => p.slug);
}
