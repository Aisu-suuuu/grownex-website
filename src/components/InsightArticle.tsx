"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { InsightPost } from "@/lib/insights";

export default function InsightArticle({ post }: { post: InsightPost }) {
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
