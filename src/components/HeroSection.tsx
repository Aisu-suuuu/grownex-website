"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const stripImages = [
    { src: "/images/projects/sowjanya/01.jpg", alt: "Sowjanya Studios" },
    { src: "/images/projects/mayu-infra/01.jpg", alt: "Mayu Infra" },
    { src: "/images/projects/mastersabroad/01.jpg", alt: "MastersAbroad" },
    { src: "/images/projects/c2a/01.jpg", alt: "C2A" },
    { src: "/images/projects/sowjanya/04.jpg", alt: "Sowjanya Brand" },
    { src: "/images/projects/mayu-infra/03.jpg", alt: "Mayu Billboard" },
    { src: "/images/projects/c2a/02.jpg", alt: "C2A Brand" },
    { src: "/images/projects/mastersabroad/03.jpg", alt: "MastersAbroad Brand" },
  ];

  return (
    <section id="home" ref={sectionRef} className="pt-[90px] overflow-hidden">
      {/* Hero Content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-[1280px] mx-auto px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-accent text-[13px] md:text-[14px] font-medium tracking-[0.08em] uppercase mb-5"
        >
          Branding &amp; Marketing Consultancy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-[1.08] tracking-[-0.02em]"
        >
          Creators of purposeful,{" "}
          <span className="text-accent">Enduring brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-[15px] md:text-[17px] text-gray-500 max-w-[520px] leading-[1.7]"
        >
          We build brands that shape perception, drive preference, and create
          lasting commercial value — from strategy through to market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 border border-foreground text-foreground text-[14px] font-medium rounded-full hover:bg-foreground hover:text-white transition-all duration-300"
          >
            Start a conversation
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-7 py-3 bg-accent border border-accent text-white text-[14px] font-medium rounded-full hover:bg-accent/90 transition-all duration-300"
          >
            View our work
          </a>
        </motion.div>
      </motion.div>

      {/* Auto-scrolling Image Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ y: marqueeY }}
        className="overflow-hidden pb-6"
      >
        <div className="marquee-strip flex gap-4">
          {stripImages.map((img, index) => (
            <div
              key={`a-${index}`}
              className="relative flex-shrink-0 w-[280px] md:w-[340px] lg:w-[400px] aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          ))}
          {stripImages.map((img, index) => (
            <div
              key={`b-${index}`}
              className="relative flex-shrink-0 w-[280px] md:w-[340px] lg:w-[400px] aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
