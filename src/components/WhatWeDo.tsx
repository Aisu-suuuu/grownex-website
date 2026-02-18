"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { serviceTags } from "@/lib/data";

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [10, -8]);

  return (
    <section id="what-we-do" ref={ref} className="py-10 md:py-14">
      <motion.div style={{ y }} className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-[3px] h-5 bg-accent rounded-full" />
          <span className="text-accent text-[13px] font-medium tracking-wide">
            What we do
          </span>
        </motion.div>

        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[24px] md:text-[32px] lg:text-[40px] leading-[1.3] text-center max-w-[800px] mx-auto"
        >
          We combine <strong className="font-bold">strategic clarity</strong>{" "}
          with executional{" "}
          <strong className="font-bold text-accent">precision</strong> to move{" "}
          <strong className="font-bold">brands</strong> from insight to{" "}
          <strong className="font-bold text-accent">market impact</strong>.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center text-gray-500 text-[14px] md:text-[15px] max-w-[520px] mx-auto mt-5 leading-[1.7]"
        >
          Every engagement starts with deep research and ends with measurable
          market outcomes — no fluff, no filler.
        </motion.p>

        {/* Service Tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {serviceTags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.4 + index * 0.06 }}
              className="px-5 py-2 border border-dashed border-accent/40 rounded-full text-[13px] md:text-[14px] text-foreground hover:border-accent hover:text-accent transition-colors duration-250 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
