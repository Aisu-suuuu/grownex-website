"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/insights";

export default function InsightsPageContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-[3px] h-5 bg-accent rounded-full" />
          <span className="text-accent text-[13px] font-medium tracking-wide">
            Blog
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] mb-4"
        >
          Insights<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-gray-500 max-w-[560px] leading-[1.7] mb-10 md:mb-14"
        >
          Thoughts on branding, digital marketing, and building businesses that
          last — from the Grownex team.
        </motion.p>

        {/* Featured Post */}
        {insights[0] && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10 md:mb-14"
          >
            <Link
              href={`/insights/${insights[0].slug}`}
              className="group block"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={insights[0].image}
                    alt={insights[0].title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-[12px] font-medium rounded-full">
                      {insights[0].category}
                    </span>
                    <span className="text-[12px] text-gray-400">
                      {insights[0].date}
                    </span>
                  </div>
                  <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] mb-3 group-hover:text-accent transition-colors duration-300">
                    {insights[0].title}
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.7] mb-4">
                    {insights[0].excerpt}
                  </p>
                  <span className="text-[13px] text-gray-400">
                    {insights[0].readTime}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* All Posts Grid — only show if more than 1 insight */}
        {insights.length > 1 && (
          <>
            <div className="h-px bg-gray-200 mb-10 md:mb-14" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {insights.slice(1).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[12px] text-gray-400">
                        {post.date}
                      </span>
                      <span className="text-[12px] text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.25] mb-2 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-500 leading-[1.7] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
