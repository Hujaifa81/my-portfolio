"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Check } from "lucide-react";
import { useState } from "react";
import type { BlogPostWithContent } from "@/lib/blog-types";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostContentProps {
  post: BlogPostWithContent;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Minimal background accent */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-b from-neon-cyan/[0.02] to-transparent" />
      </div>

      {/* Top navigation */}
      <motion.header
        className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[700px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-acid-green" />
                <span className="text-acid-green">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </motion.header>

      {/* Article content */}
      <article className="relative z-10">
        {/* Article header */}
        <motion.div
          className="max-w-[700px] mx-auto px-6 pt-16 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Meta row */}
          <div className="flex items-center gap-3 text-sm text-white/40 mb-6">
            <span className="text-neon-cyan font-medium">{post.category}</span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] font-bold font-clash text-white leading-[1.2] mb-5">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-white/50 leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Cover image */}
        <motion.div
          className="max-w-[900px] mx-auto px-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Article body */}
        <motion.div
          className="max-w-[700px] mx-auto px-6 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Content */}
          <div className="article-content">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-white/[0.06]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm text-white/50 bg-white/[0.04] rounded-lg hover:bg-white/[0.08] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              Thanks for reading. Share if you found this useful.
            </p>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              More articles
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
