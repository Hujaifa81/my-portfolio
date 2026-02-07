"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowUpRight, Cpu } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";

interface BlogTimelineProps {
  posts: BlogPost[];
}

// Glitch text component
const GlitchText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block">
      <span className="glitch-text" data-text={children}>
        {children}
      </span>
    </span>
  );
};

// Neural connection line between timeline items
const NeuralConnection = ({ index }: { index: number }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <svg
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 w-[600px] z-0 pointer-events-none hidden lg:block"
      style={{
        top: "50%",
        height: "calc(100% + 6rem)",
      }}
      viewBox="0 0 600 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`neuralGradient-${index}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.8" />
        </linearGradient>
        <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main neural path */}
      <motion.path
        d={
          isEven
            ? "M 300,0 C 300,25 450,40 450,50 C 450,70 380,85 320,95 C 310,97 305,99 300,100"
            : "M 300,0 C 300,25 150,40 150,50 C 150,70 220,85 280,95 C 290,97 295,99 300,100"
        }
        fill="none"
        stroke={`url(#neuralGradient-${index})`}
        strokeWidth="2"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Start node */}
      <motion.circle
        cx="300"
        cy="0"
        r="4"
        fill="#00F0FF"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.circle
        cx="300"
        cy="0"
        r="8"
        fill="#00F0FF"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* End node */}
      <motion.circle
        cx="300"
        cy="100"
        r="4"
        fill="#7C3AED"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      />
      <motion.circle
        cx="300"
        cy="100"
        r="8"
        fill="#7C3AED"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      />

      {/* Traveling particle */}
      <motion.circle
        r="5"
        fill="#00F0FF"
        filter={`url(#glow-${index})`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="2s"
          begin={`${0.5}s`}
          fill="freeze"
        />
        <animateMotion
          dur="2s"
          begin={`${0.5}s`}
          fill="freeze"
          path={
            isEven
              ? "M 300,0 C 300,25 450,40 450,50 C 450,70 380,85 320,95 C 310,97 305,99 300,100"
              : "M 300,0 C 300,25 150,40 150,50 C 150,70 220,85 280,95 C 290,97 295,99 300,100"
          }
        />
      </motion.circle>
    </svg>
  );
};

// Timeline card component
const TimelineCard = ({
  post,
  index,
  isLast,
}: {
  post: BlogPost;
  index: number;
  isLast: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div className="relative" ref={cardRef}>
      {/* Neural connection to next item */}
      {!isLast && <NeuralConnection index={index} />}

      {/* Timeline center line node */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
        />
        <motion.div
          className="absolute inset-0 w-4 h-4 rounded-full bg-neon-cyan/50 blur-md"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 2, opacity: 0.5 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
        />
      </div>

      {/* Card container with alternating layout */}
      <motion.div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Card */}
        <Link
          href={`/blog/${post.slug}`}
          className={`group block ${isEven ? "lg:pr-12" : "lg:pl-12 lg:[direction:ltr]"}`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-neon-cyan/30 hover:bg-white/[0.05]">
            {/* Cover image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/50 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-full backdrop-blur-sm">
                  <Cpu className="w-3 h-3" />
                  {post.category}
                </span>
              </div>

              {/* Featured badge */}
              {post.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-bold bg-neon-violet/20 border border-neon-violet/40 text-neon-violet rounded backdrop-blur-sm">
                    FEATURED
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-clash text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt with inline Read More */}
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {post.excerpt.length > 80 ? post.excerpt.slice(0, 80).trim() : post.excerpt}
                <span className="text-neon-cyan font-medium group-hover:text-white transition-colors duration-300">
                  {" "}... Read More <ArrowUpRight className="inline w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-white/40 border border-white/10 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-violet/5" />
            </div>
          </div>
        </Link>

        {/* Date indicator (opposite side) */}
        <div
          className={`hidden lg:flex flex-col ${
            isEven ? "items-start pl-12" : "items-end pr-12 [direction:ltr]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-6xl font-bold font-clash text-white/5">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="text-sm text-white/30 mt-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function BlogTimeline({ posts }: BlogTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-neon-cyan/60 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            [ Neural Feed ]
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash text-white mb-6">
            <GlitchText>Digital Thoughts</GlitchText>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Transmissions from the frontier of technology, design, and digital craft.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (visible on lg+) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

          {/* Posts */}
          <div className="space-y-24 lg:space-y-32">
            {posts.map((post, index) => (
              <TimelineCard
                key={post.slug}
                post={post}
                index={index}
                isLast={index === posts.length - 1}
              />
            ))}
          </div>
        </div>

        {/* View all link */}
        {posts.length > 4 && (
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white/60 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
            >
              <span>View All Posts</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
