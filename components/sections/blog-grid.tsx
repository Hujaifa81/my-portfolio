"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowUpRight, Cpu, Zap } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";

interface BlogGridProps {
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

// Neural connection lines that appear on hover between cards
const NeuralLines = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="neuralGradientGrid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glowGrid" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated neural paths */}
      <motion.path
        d="M 0,50 Q 25,30 50,50 T 100,50"
        fill="none"
        stroke="url(#neuralGradientGrid)"
        strokeWidth="1"
        filter="url(#glowGrid)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isActive ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6 }}
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d="M 50,0 Q 70,25 50,50 T 50,100"
        fill="none"
        stroke="url(#neuralGradientGrid)"
        strokeWidth="1"
        filter="url(#glowGrid)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isActive ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

// Blog card component
const BlogCard = ({
  post,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  post: BlogPost;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isFeatured = post.featured && index < 2;

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Neural connection overlay */}
      <NeuralLines isActive={hoveredIndex === index} />

      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div
          className={`relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-neon-cyan/40 hover:bg-white/[0.05] ${
            isFeatured ? "min-h-[450px] md:min-h-[520px]" : "min-h-[380px]"
          }`}
        >
          {/* Cover image */}
          <div className={`relative ${isFeatured ? "h-56 md:h-72" : "h-44 md:h-48"} flex-shrink-0 overflow-hidden`}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/60 to-transparent" />

            {/* Scan line effect on hover */}
            <motion.div
              className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.03)_2px,rgba(0,240,255,0.03)_4px)] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <motion.span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="w-3 h-3" />
                {post.category}
              </motion.span>
            </div>

            {/* Featured badge */}
            {post.featured && (
              <div className="absolute top-4 right-4 z-10">
                <motion.span
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-neon-violet/20 border border-neon-violet/40 text-neon-violet rounded backdrop-blur-sm"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-3 h-3" />
                  FEATURED
                </motion.span>
              </div>
            )}

            {/* Index number overlay */}
            <div className="absolute bottom-4 right-4 z-10">
              <span className="text-5xl md:text-6xl font-bold font-clash text-white/10 group-hover:text-neon-cyan/20 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 pt-4 pb-4 md:px-6 md:pt-5 md:pb-5 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-white/40 mb-2">
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
            <h3
              className={`font-bold font-clash text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2 ${
                isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
              }`}
            >
              {post.title}
            </h3>

            {/* Excerpt with inline Read More */}
            <p
              className={`text-white/50 leading-relaxed ${
                isFeatured ? "text-sm md:text-base" : "text-sm"
              }`}
            >
              {post.excerpt.length > (isFeatured ? 120 : 80) 
                ? post.excerpt.slice(0, isFeatured ? 120 : 80).trim() 
                : post.excerpt}
              <span className="text-neon-cyan font-medium group-hover:text-white transition-colors duration-300">
                {" "}... Read More <ArrowUpRight className="inline w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-3">
              {post.tags.slice(0, isFeatured ? 4 : 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs text-white/40 border border-white/10 rounded-full group-hover:border-neon-violet/30 group-hover:text-white/60 transition-all duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-neon-cyan/50 transition-colors duration-500 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-neon-violet/50 transition-colors duration-500 rounded-br-2xl" />

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-violet/5 rounded-2xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-violet/20 rounded-2xl blur-xl opacity-50" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogGrid({ posts }: BlogGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Grid background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
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

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* View all link */}
        {posts.length > 6 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white/60 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 group"
            >
              <span>View All Posts</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
