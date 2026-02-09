"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Home, User, Briefcase, Layers, Mail, Code, FileText, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Trigger line: section that contains this Y (viewport-relative) is considered active. 25% from top.
const VIEWPORT_TRIGGER_Y_RATIO = 0.25;
const SECTION_IDS = ["home", "about", "services", "experience", "skills", "work", "achievements", "education", "process", "blog", "contact"];

export default function FloatingDock() {
    const [activeHash, setActiveHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : "");
    const ignoreScrollUntilRef = useRef<number>(0);
    const rafRef = useRef<number>(0);

    const handleNavClick = (hash: string) => {
        setActiveHash(hash);
        ignoreScrollUntilRef.current = Date.now() + 1200;
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const updateActiveSection = () => {
            if (Date.now() < ignoreScrollUntilRef.current) return;
            const triggerY = window.innerHeight * VIEWPORT_TRIGGER_Y_RATIO;
            let activeId: string | null = null;
            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= triggerY && rect.bottom >= triggerY) {
                    activeId = id;
                    break;
                }
            }
            if (window.scrollY < 60) {
                setActiveHash("");
                return;
            }
            if (activeId) {
                setActiveHash(`#${activeId}`);
                return;
            }
            // Trigger line is between sections or past last section: use last section whose top is above trigger
            for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTION_IDS[i]);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= triggerY) {
                    setActiveHash(`#${SECTION_IDS[i]}`);
                    break;
                }
            }
        };
        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateActiveSection);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        updateActiveSection();
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    // For route navigation (home)
    const pathname = typeof window !== 'undefined' ? window.location.pathname : "/";

    const links = [
        { href: "/", icon: <Home className="size-full" />, label: "Home", match: () => pathname === "/" && (!activeHash || activeHash === "" || activeHash === "#home") },
        { href: "#about", icon: <User className="size-full" />, label: "About", match: () => activeHash === "#about" },
        { href: "#experience", icon: <Briefcase className="size-full" />, label: "Experience", match: () => activeHash === "#experience" },
        { href: "#skills", icon: <Code className="size-full" />, label: "Skills", match: () => activeHash === "#skills" },
        { href: "#work", icon: <Layers className="size-full" />, label: "Projects", match: () => activeHash === "#work" },
        { href: "#achievements", icon: <Trophy className="size-full" />, label: "Achievements", match: () => activeHash === "#achievements" },
        { href: "#blog", icon: <FileText className="size-full" />, label: "Blog", match: () => activeHash === "#blog" },
        { href: "#contact", icon: <Mail className="size-full" />, label: "Contact", match: () => activeHash === "#contact" },
    ];

    return (
        <nav
            aria-label="Main navigation"
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
            <motion.ul
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="flex items-end gap-3 rounded-2xl border border-white/20 bg-white/10 bg-clip-padding p-3 shadow-xl backdrop-blur-2xl backdrop-saturate-150"
                style={{ boxShadow: "0 8px 32px 0 rgba(0,255,255,0.10), 0 1.5px 8px 0 rgba(124,58,237,0.10)" }}
            >
                {links.map((link, i) => (
                    <li key={link.label} className="relative">
                        <DockIcon
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                            active={link.match()}
                            onNavClick={handleNavClick}
                        />
                    </li>
                ))}
            </motion.ul>
        </nav>
    );
}

function DockIcon({ href, icon, label, active, onNavClick }: { href: string; icon: React.ReactNode; label: string; active?: boolean; onNavClick: (hash: string) => void }) {
    const onClick = (e: React.MouseEvent) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
            if (typeof window !== 'undefined' && window.history && window.history.pushState) {
                window.history.pushState(null, '', href);
            }
            onNavClick(href);
        } else if (href === "/") {
            e.preventDefault();
            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', window.location.pathname);
            }
            onNavClick("");
        }
    };
    return (
        <Link
            href={href}
            aria-label={label}
            tabIndex={0}
            data-dock-link
            onClick={onClick}
            className={
                "group flex items-center gap-2 px-4 py-2 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan " +
                (active ? "bg-neon-cyan/80 text-black shadow-[0_0_16px_0_#00F0FF55]" : "bg-white/10 text-white hover:bg-neon-violet/80 hover:text-white")
            }
        >
            <motion.span
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={active ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center"
            >
                <span className="size-4 mr-1 flex items-center justify-center">{icon}</span>
            </motion.span>
            <span className={
                "text-xs font-semibold font-mono tracking-wide transition-colors " +
                (active ? "text-neon-cyan" : "text-white/80 group-hover:text-white")
            }>
                {label}
            </span>
        </Link>
    );
}
