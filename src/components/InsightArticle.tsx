"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { InsightPost } from "@/lib/insights";

export default function InsightArticle({ post }: { post: InsightPost }) {
  /* Sectioned layout (accordion + side nav) */
  if (post.sections && post.sections.length > 0) {
    return <SectionedArticle post={post} />;
  }

  /* Default simple layout */
  return (
    <article className="py-10 md:py-14">
      <div className="max-w-[800px] mx-auto px-8 lg:px-16">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/insights"
            className="text-[13px] text-gray-400 hover:text-accent transition-colors"
          >
            &larr; Back to Insights
          </Link>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mt-6 mb-4"
        >
          <span className="px-3 py-1 bg-accent/10 text-accent text-[12px] font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-[13px] text-gray-400">{post.date}</span>
          <span className="text-[13px] text-gray-400">{post.readTime}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[17px] md:text-[19px] text-gray-500 leading-[1.7] mb-8"
        >
          {post.excerpt}
        </motion.p>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-10"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="800px"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          {post.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em] mt-8 mb-2"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p
                key={i}
                className="text-[15px] md:text-[16px] text-gray-600 leading-[1.85]"
              >
                {block}
              </p>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] text-gray-500">
                Want to discuss this topic?
              </p>
              <p className="text-[13px] text-gray-400">
                We love talking strategy.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-accent text-white text-[14px] font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Sectioned Article with Side Nav + Content Panel ─── */

function SectionedArticle({ post }: { post: InsightPost }) {
  const sections = post.sections!;
  const [activeId, setActiveId] = useState(sections[0].id);

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <article className="py-10 md:py-14">
      {/* Hero */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/insights"
            className="text-[13px] text-gray-400 hover:text-accent transition-colors"
          >
            &larr; Back to Insights
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mt-6 mb-4"
        >
          <span className="px-3 py-1 bg-accent/10 text-accent text-[12px] font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-[13px] text-gray-400">{post.date}</span>
          <span className="text-[13px] text-gray-400">{post.readTime}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] mb-5 max-w-[900px]"
        >
          {post.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[15px] md:text-[17px] text-gray-500 leading-[1.7] mb-8 max-w-[720px]"
        >
          {post.excerpt}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-10 md:mb-14"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="1280px"
          />
        </motion.div>
      </div>

      {/* Two-column: Side Nav + Content Panel */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Side Nav */}
          <nav className="w-full lg:w-[280px] shrink-0">
            <div className="lg:sticky lg:top-[100px]">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-4">
                Contents
              </p>
              <ul className="space-y-0.5 max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveId(section.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] leading-[1.4] transition-all duration-200 flex items-center gap-3 ${
                        activeId === section.id
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-gray-500 hover:text-foreground hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-[11px] tabular-nums opacity-50 w-4 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Content Panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Section Title */}
                <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.02em] mb-6 text-foreground">
                  {activeSection.title}
                </h2>

                {/* Section Content */}
                <div className="space-y-5">
                  {activeSection.content.map((block, i) => {
                    if (block.startsWith("### ")) {
                      return (
                        <h3
                          key={i}
                          className="text-[16px] md:text-[17px] font-bold text-foreground mt-8 mb-1"
                        >
                          {block.replace("### ", "")}
                        </h3>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className="text-[14px] md:text-[15px] text-gray-600 leading-[1.85]"
                      >
                        {block}
                      </p>
                    );
                  })}
                </div>

                {/* Prev / Next navigation */}
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
                  {sections.indexOf(activeSection) > 0 ? (
                    <button
                      onClick={() =>
                        setActiveId(
                          sections[sections.indexOf(activeSection) - 1].id
                        )
                      }
                      className="text-[13px] text-gray-500 hover:text-accent transition-colors"
                    >
                      &larr;{" "}
                      {sections[sections.indexOf(activeSection) - 1].title}
                    </button>
                  ) : (
                    <span />
                  )}
                  {sections.indexOf(activeSection) < sections.length - 1 ? (
                    <button
                      onClick={() =>
                        setActiveId(
                          sections[sections.indexOf(activeSection) + 1].id
                        )
                      }
                      className="text-[13px] text-accent font-medium hover:underline transition-colors"
                    >
                      {sections[sections.indexOf(activeSection) + 1].title}{" "}
                      &rarr;
                    </button>
                  ) : (
                    <span />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] text-gray-500">
                Want results like these for your business?
              </p>
              <p className="text-[13px] text-gray-400">
                Let&apos;s discuss your growth strategy.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-accent text-white text-[14px] font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
