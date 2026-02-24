"use client";

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import type { DMCaseStudy } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numericStr = value.replace(/[^0-9.]/g, "");
  const prefix = value.replace(/[0-9.]/g, "");
  const numeric = parseFloat(numericStr);
  const isDecimal = numericStr.includes(".");

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(isDecimal ? latest.toFixed(1) : String(Math.round(latest)));
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(numeric);
    }
  }, [isInView, numeric, motionVal]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function ResultCard({
  result,
  index,
}: {
  result: DMCaseStudy["results"][0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Calculate bar width for visual effect
  const barWidth =
    result.suffix === "%"
      ? parseFloat(result.value.replace(/[^0-9.]/g, ""))
      : 85 - index * 10;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.12}
      variants={fadeUp}
      className="relative bg-white rounded-2xl p-6 md:p-8 overflow-hidden group hover:shadow-lg transition-shadow duration-500"
    >
      {/* Background accent bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-100 w-full">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${Math.min(barWidth, 100)}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeOut" }}
        />
      </div>

      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400 block mb-3">
        {result.metric}
      </span>

      <div className="flex items-end gap-2 mb-3">
        <span className="text-[40px] md:text-[48px] font-bold text-foreground leading-none tracking-tight">
          <AnimatedCounter
            value={result.value}
            suffix={result.suffix}
            duration={1.5 + index * 0.2}
          />
        </span>
        {result.previousValue && (
          <span className="text-[13px] text-gray-400 mb-2 flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            from {result.previousValue}
          </span>
        )}
      </div>

      <p className="text-[13px] text-gray-500 leading-[1.6]">
        {result.description}
      </p>

      {/* Decorative circle */}
      <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
    </motion.div>
  );
}

export default function DMCaseStudyPage({
  caseStudy,
}: {
  caseStudy: DMCaseStudy;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Grownex
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 37 37"
              fill="none"
              className="-mt-3"
            >
              <polygon
                fill="#F15A24"
                points="37,37 24.5,37 24.5,12.5 0,12.5 0,0 37,0"
              />
            </svg>
          </Link>
          <Link
            href="/digital-marketing"
            className="text-sm text-gray-500 hover:text-accent transition-colors"
          >
            &larr; Back to Digital Marketing
          </Link>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <div ref={heroRef} className="relative min-h-[75vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: caseStudy.heroGradient }}
        />
        <motion.div style={{ scale: heroImgScale }} className="absolute inset-0">
          <Image
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-end min-h-[75vh] max-w-7xl mx-auto px-6 lg:px-12 pb-12 md:pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="px-3 py-1.5 bg-accent/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase rounded-full">
              {caseStudy.tag}
            </span>
            <span className="text-white/60 text-[13px]">
              {caseStudy.location} &middot; {caseStudy.duration}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-[-0.03em] leading-[0.95]"
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/70 text-[15px] md:text-[17px] max-w-xl leading-[1.7]"
          >
            {caseStudy.category}
          </motion.p>
        </motion.div>
      </div>

      {/* ============ PROJECT OVERVIEW ============ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-4 block">
              Project Overview
            </span>
            <div className="space-y-4 text-[13px] text-gray-400">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Client
                </span>
                <span className="text-foreground text-[15px] font-medium">
                  {caseStudy.client}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Location
                </span>
                <span className="text-foreground text-[15px] font-medium">
                  {caseStudy.location}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Duration
                </span>
                <span className="text-foreground text-[15px] font-medium">
                  {caseStudy.duration}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Services
                </span>
                <span className="text-foreground text-[15px] font-medium">
                  {caseStudy.category}
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.15}
            variants={fadeUp}
          >
            <p className="text-[18px] md:text-[22px] text-foreground leading-[1.7] font-light">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ THE CHALLENGE ============ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 md:mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-3 block">
              The Challenge
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8]">
              {caseStudy.challenge}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============ STRATEGY ============ */}
      <section className="bg-gray-950 py-14 md:py-20 mb-14 md:mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="mb-10 md:mb-14"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-4 block">
              The Strategy
            </span>
            <p className="text-[18px] md:text-[22px] text-white/80 leading-[1.7] font-light max-w-3xl">
              {caseStudy.strategyOverview}
            </p>
          </motion.div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
            {caseStudy.strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1 + index * 0.1}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-[15px] md:text-[17px] font-bold text-white mb-4">
                  {strategy.title}
                </h3>
                <ul className="space-y-2.5">
                  {strategy.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13px] md:text-[14px] text-white/60 leading-[1.6]"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Content Strategy */}
          {caseStudy.contentStrategy && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="mb-10"
            >
              <h3 className="text-[17px] md:text-[20px] font-bold text-white mb-2">
                {caseStudy.contentStrategy.title}
              </h3>
              <p className="text-[13px] text-white/40 mb-6">
                {caseStudy.contentStrategy.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.contentStrategy.types.map((type, i) => (
                  <motion.div
                    key={type.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3 + i * 0.1}
                    variants={fadeUp}
                    className="bg-accent/10 border border-accent/20 rounded-xl p-5 md:p-6"
                  >
                    <span className="text-accent font-bold text-[14px] block mb-2">
                      {type.name}
                    </span>
                    <p className="text-[13px] text-white/60 leading-[1.6]">
                      {type.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Tactics */}
          {caseStudy.additionalTactics && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              variants={fadeUp}
            >
              <h3 className="text-[15px] font-bold text-white mb-4">
                SMM & GMB
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.additionalTactics.map((tactic, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[13px] text-white/70"
                  >
                    {tactic}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============ RESULTS — Visual metrics ============ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 md:mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-3 block">
            The Results
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em]">
            Measurable Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
          {caseStudy.results.map((result, index) => (
            <ResultCard key={result.metric} result={result} index={index} />
          ))}
        </div>

        {/* Highlights strip */}
        {(caseStudy.topPerformers || caseStudy.contentHighlight) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {caseStudy.topPerformers && (
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-3 block">
                  Top Performers
                </span>
                <p className="text-[14px] md:text-[15px] text-foreground leading-[1.7]">
                  {caseStudy.topPerformers}
                </p>
              </div>
            )}
            {caseStudy.contentHighlight && (
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-3 block">
                  Content Highlight
                </span>
                <p className="text-[14px] md:text-[15px] text-foreground leading-[1.7]">
                  {caseStudy.contentHighlight}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </section>

      {/* ============ CREATIVE GALLERY ============ */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-14 md:mb-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="text-[28px] md:text-[36px] font-bold mb-10 px-2 tracking-[-0.02em]"
        >
          Creative Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {caseStudy.images.map((img, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1 + index * 0.1}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={img}
                alt={`${caseStudy.client} — Creative ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ CLOSING CTA BANNER ============ */}
      <section className="mb-14 md:mb-20">
        <div
          className="relative py-14 md:py-20 overflow-hidden"
          style={{ background: caseStudy.heroGradient }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-5 block">
                Results that speak
              </span>
              <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-[-0.02em] mb-6 max-w-3xl mx-auto leading-[1.15]">
                Precision targeting. Real business outcomes.
              </h2>
              <p className="text-white/60 text-[15px] max-w-lg mx-auto leading-[1.7]">
                Every campaign we build is designed to deliver qualified leads
                and measurable growth for {caseStudy.client}.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BACK CTA ============ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-14 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/digital-marketing"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white text-[14px] font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            View More Case Studies
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gray-100 text-foreground text-[14px] font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
