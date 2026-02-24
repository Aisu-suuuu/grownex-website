"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

/* ─── Sectioned Article with Side Nav + Accordion ─── */

function SectionedArticle({ post }: { post: InsightPost }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = post.sections!;

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

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

      {/* Two-column: Side Nav + Accordion */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Side Nav — Desktop only */}
          <nav className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-[100px]">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-4">
                Contents
              </p>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] leading-[1.4] transition-all duration-200 ${
                        openSection === section.id
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-gray-500 hover:text-foreground hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Accordion */}
          <div className="flex-1 min-w-0">
            <div className="divide-y divide-gray-200">
              {sections.map((section, index) => (
                <AccordionItem
                  key={section.id}
                  section={section}
                  isOpen={openSection === section.id}
                  onToggle={() => toggleSection(section.id)}
                  index={index}
                />
              ))}
            </div>
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

/* ─── Accordion Item ─── */

function AccordionItem({
  section,
  isOpen,
  onToggle,
  index,
}: {
  section: { id: string; title: string; content: string[] };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div id={section.id}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-[12px] text-gray-300 font-medium tabular-nums w-6">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            className={`text-[17px] md:text-[20px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
              isOpen
                ? "text-accent"
                : "text-foreground group-hover:text-accent"
            }`}
          >
            {section.title}
          </h2>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-4"
        >
          <ChevronRight
            size={18}
            className={`transition-colors duration-200 ${
              isOpen ? "text-accent" : "text-gray-400"
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 pr-4 space-y-5">
              {section.content.map((block, i) => {
                if (block.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-[15px] md:text-[16px] font-bold text-foreground mt-6 mb-1"
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
