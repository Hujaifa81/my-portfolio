"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, User, Layers, Mail, Code } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FloatingDock() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-end gap-3 rounded-2xl border border-glass-border bg-void/50 p-3 backdrop-blur-xl">
                <DockIcon href="/" icon={<Home className="size-full" />} label="Home" />
                <DockIcon href="#work" icon={<Layers className="size-full" />} label="Work" />
                <DockIcon href="#skills" icon={<Code className="size-full" />} label="Skills" />
                <DockIcon href="#about" icon={<User className="size-full" />} label="About" />
                <DockIcon href="#contact" icon={<Mail className="size-full" />} label="Contact" />
            </div>
        </div>
    );
}

function DockIcon({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(Infinity);

    // In a real implementation with mouse tracking on the parent, we'd pass mouseX down.
    // For simplicity here, we'll keep it static or add hover effects.
    // Let's add a simple scale effect on hover for now to ensure robustness without complex context.

    return (
        <Link href={href} className="group relative">
            <motion.div
                whileHover={{ scale: 1.2, y: -10 }}
                whileTap={{ scale: 0.9 }}
                className="flex aspect-square size-12 items-center justify-center rounded-xl bg-white/5 text-white transition-colors hover:bg-neon-violet hover:text-white"
            >
                <div className="size-6">{icon}</div>
            </motion.div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                {label}
            </span>
        </Link>
    );
}
