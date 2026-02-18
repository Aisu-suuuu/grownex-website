"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface BrandColor {
  name: string;
  hex: string;
  gradient?: string;
}

interface Project {
  slug: string;
  title: string;
  tag: string;
  year: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  aboutBrand: string;
  brandColors: BrandColor[];
  brandFonts: {
    primary: { name: string; style: string };
    secondary: { name: string; style: string };
  };
  logoConcept: string;
  heroGradient: string;
  brandStory?: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function CaseStudyPage({ project }: { project: Project }) {
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
            <svg width="14" height="14" viewBox="0 0 37 37" fill="none" className="-mt-3">
              <polygon fill="#F15A24" points="37,37 24.5,37 24.5,12.5 0,12.5 0,0 37,0" />
            </svg>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-accent transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* ============ HERO — Immersive gradient + image ============ */}
      <div id="cs-hero" ref={heroRef} className="relative min-h-[75vh] overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: project.heroGradient }}
        />
        {/* Hero image overlay */}
        <motion.div style={{ scale: heroImgScale }} className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover mix-blend-overlay opacity-30"
            priority
            sizes="100vw"
          />
        </motion.div>
        {/* Dark overlay for text readability */}
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
            <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase rounded-full border border-white/20">
              {project.tag}
            </span>
            <span className="text-white/60 text-[13px]">/{project.year}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-[-0.03em] leading-[0.95]"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/70 text-[15px] md:text-[17px] max-w-xl leading-[1.7]"
          >
            {project.category}
          </motion.p>
        </motion.div>
      </div>

      {/* ============ PROJECT OVERVIEW — Two columns ============ */}
      <section id="cs-overview" className="max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20">
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
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Client</span>
                <span className="text-foreground text-[15px] font-medium">{project.title}</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Services</span>
                <span className="text-foreground text-[15px] font-medium">{project.category}</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1">Year</span>
                <span className="text-foreground text-[15px] font-medium">{project.year}</span>
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
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED IMAGE — Full-bleed laptop mockup ============ */}
      <motion.section
        id="cs-featured"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        variants={fadeUp}
        className="max-w-[1440px] mx-auto px-4 md:px-8 mb-14 md:mb-20"
      >
        <div className="relative bg-gray-950 rounded-2xl md:rounded-3xl p-6 md:p-12 overflow-hidden">
          {/* Subtle gradient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 blur-[100px]"
            style={{ background: project.heroGradient }}
          />
          {/* Laptop frame */}
          <div className="relative mx-auto max-w-4xl">
            {/* Screen */}
            <div className="relative bg-gray-800 rounded-t-xl overflow-hidden border-[6px] border-gray-700/60">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-4 text-[10px] text-gray-500 font-mono">{project.title.toLowerCase().replace(/\s/g, "")}.com</span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
            {/* Laptop base */}
            <div className="relative h-4 md:h-5 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg mx-[10%]" />
            <div className="h-1.5 bg-gray-700/40 rounded-b-2xl mx-[5%]" />
          </div>
        </div>
      </motion.section>

      {/* ============ ABOUT THE BRAND — Text section ============ */}
      <section id="cs-about-brand" className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 md:mb-20">
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
              About the Brand
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8]">
              {project.aboutBrand}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============ BRAND IDENTITY — Colors, Typography, Logo ============ */}
      <section id="cs-brand-identity" className="bg-gray-50 py-14 md:py-20 mb-14 md:mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-[28px] md:text-[36px] font-bold mb-14 tracking-[-0.02em]"
          >
            Brand Identity
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Color Palette Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden"
            >
              {/* Color swatches */}
              <div className="flex h-32 md:h-40">
                {project.brandColors.map((color, i) => (
                  <div
                    key={color.hex}
                    className="flex-1 relative group"
                    style={{ background: color.gradient || color.hex }}
                  >
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-mono text-white bg-black/60 px-1.5 py-0.5 rounded whitespace-nowrap">
                        {color.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-[13px] font-bold uppercase tracking-wider mb-4">Color Palette</h3>
                <div className="space-y-2.5">
                  {project.brandColors.map((color) => (
                    <div key={color.hex} className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 border border-gray-200"
                        style={{ background: color.hex }}
                      />
                      <span className="text-[13px] text-gray-600 flex-1">{color.name}</span>
                      <span className="text-[11px] font-mono text-gray-400">{color.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Typography Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.2}
              variants={fadeUp}
              className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-wider mb-6 text-white/60">Typography</h3>
              <div className="mb-8">
                <p className="text-[22px] md:text-[26px] font-bold mb-2 tracking-tight">
                  {project.brandFonts.primary.name}
                </p>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  {project.brandFonts.primary.style}
                </p>
                <p className="text-[14px] text-white/70 tracking-[0.08em] leading-[1.8]">
                  A B C D E F G H I J K L M N O<br />
                  P Q R S T U V W X Y Z
                </p>
                <p className="text-[13px] text-white/40 tracking-[0.08em] leading-[1.8] mt-1">
                  a b c d e f g h i j k l m n o<br />
                  p q r s t u v w x y z
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[18px] md:text-[20px] font-medium mb-2">
                  {project.brandFonts.secondary.name}
                </p>
                <p className="text-[12px] text-white/50 leading-[1.6]">
                  {project.brandFonts.secondary.style}
                </p>
              </div>
            </motion.div>

            {/* Logo Concept Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.3}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-wider mb-5">Logo Concept</h3>
              <p className="text-[14px] text-gray-500 leading-[1.8] mb-6">
                {project.logoConcept}
              </p>
              {/* Abstract logo placeholder — visual element */}
              <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-[48px] md:text-[56px] font-bold tracking-[-0.04em] leading-none mb-2"
                    style={{ color: project.brandColors[0]?.hex }}
                  >
                    {project.title.charAt(0)}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                    <span className="w-6 h-px bg-gray-300" />
                    Brand Mark
                    <span className="w-6 h-px bg-gray-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CHALLENGE & SOLUTION ============ */}
      <section id="cs-challenge" className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-4 block">
              The Challenge
            </span>
            <p className="text-[16px] md:text-[18px] text-foreground leading-[1.7]">
              {project.challenge}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.15}
            variants={fadeUp}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-4 block">
              The Solution
            </span>
            <p className="text-[16px] md:text-[18px] text-foreground leading-[1.7]">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ RESULTS / IMPACT ============ */}
      <section id="cs-results" className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 md:mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent mb-8 block">
            The Impact
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 md:p-8"
              >
                <span className="text-accent text-[32px] font-bold block mb-3">
                  0{index + 1}
                </span>
                <p className="text-[15px] text-foreground leading-[1.6]">{result}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ CREATIVE GALLERY — Mixed layouts ============ */}
      <section id="cs-gallery" className="max-w-[1440px] mx-auto px-4 md:px-8 mb-14 md:mb-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="text-[28px] md:text-[36px] font-bold mb-10 px-2 tracking-[-0.02em]"
        >
          Project Gallery
        </motion.h2>

        {/* Row 1: Full-width hero image */}
        {project.images[0] && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="mb-4 md:mb-6"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={project.images[0]}
                alt={`${project.title} - Featured`}
                width={1440}
                height={1440}
                className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}

        {/* Row 2: Two side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {project.images.slice(1, 3).map((img, index) => (
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
                alt={`${project.title} - Image ${index + 2}`}
                width={720}
                height={720}
                className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Row 3: Full-width image */}
        {project.images[3] && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="mb-4 md:mb-6"
          >
            <div className="overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={project.images[3]}
                alt={`${project.title} - Gallery`}
                width={1440}
                height={1440}
                className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}

        {/* Brand Story — Text card alongside remaining images */}
        {project.brandStory && project.brandStory.length > 0 && (
          <div className={`grid grid-cols-1 ${project.images.length > 4 ? "md:grid-cols-2" : ""} gap-4 md:gap-6 mb-4 md:mb-6`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.1}
              variants={fadeUp}
              className="rounded-2xl p-8 md:p-12 flex flex-col justify-center min-h-[320px]"
              style={{ background: project.heroGradient }}
            >
              <div className="space-y-5 text-center">
                {project.brandStory.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] md:text-[15px] text-white/90 leading-[1.8]"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                <div className="flex items-center justify-center gap-1 pt-2">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-white/40 rotate-45" />
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Companion image if available */}
            {project.images[4] && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.2}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={project.images[4]}
                  alt={`${project.title} - Gallery`}
                  width={720}
                  height={720}
                  className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            )}
          </div>
        )}

        {/* Row 4: Remaining images grid */}
        {project.images.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {project.images.slice(5).map((img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.1 + index * 0.08}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${index + 5}`}
                  width={480}
                  height={480}
                  className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ============ DETAILS THAT STAND OUT — Closing section ============ */}
      <section className="mb-14 md:mb-20">
        <div
          className="relative py-14 md:py-20 overflow-hidden"
          style={{ background: project.heroGradient }}
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
                Details that stand out
              </span>
              <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-[-0.02em] mb-6 max-w-3xl mx-auto leading-[1.15]">
                Every element, crafted with intent and precision
              </h2>
              <p className="text-white/60 text-[15px] max-w-lg mx-auto leading-[1.7]">
                From brand strategy to final deliverables, every touchpoint was
                designed to create lasting market impact for {project.title}.
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
        >
          <Link
            href="/#work"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white text-[14px] font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            View More Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

