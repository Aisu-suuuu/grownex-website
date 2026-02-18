"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const capabilities = [
  {
    title: "Brand Strategy & Identity",
    description:
      "Comprehensive brand development from strategic foundation through visual and verbal identity systems. We define positioning, articulate differentiation, establish messaging architecture, and create identity systems built for consistency and scale across all market touchpoints.",
    image: "/images/capabilities/strategy.jpg",
  },
  {
    title: "Market Positioning & Messaging",
    description:
      "Strategic frameworks that clarify what you stand for, who you serve, and why you win. We develop positioning platforms, messaging hierarchies, value propositions, and narrative structures that drive alignment internally and resonance externally.",
    image: "/images/capabilities/discovery.jpg",
  },
  {
    title: "Go-to-Market Strategy",
    description:
      "Full-spectrum GTM planning and execution spanning market assessment, audience definition, channel strategy, campaign architecture, and launch orchestration. We build programs designed to generate awareness, drive consideration, and accelerate pipeline.",
    image: "/images/capabilities/development.jpg",
  },
  {
    title: "Integrated Marketing & Growth",
    description:
      "End-to-end marketing systems combining brand-building with performance marketing. Our work includes acquisition strategy, demand generation, content ecosystems, digital campaigns, marketing automation, and full-funnel optimization.",
    image: "/images/capabilities/design.jpg",
  },
  {
    title: "Marketing Infrastructure",
    description:
      "Scalable systems and processes that enable consistent execution: marketing ops, technology selection and implementation, analytics frameworks, team structure design, and process optimization.",
    image: "/images/capabilities/infrastructure.jpg",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const capRef = useRef(null);
  const capInView = useInView(capRef, { once: true, margin: "-60px" });
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const goTo = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActiveSlide((prev) =>
        dir === 1
          ? prev === capabilities.length - 1
            ? 0
            : prev + 1
          : prev === 0
            ? capabilities.length - 1
            : prev - 1
      );
    },
    []
  );

  return (
    <section id="about" ref={ref} className="py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">

        {/* ===== Hero: About Us heading + Team Image ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-[3px] h-5 bg-accent rounded-full" />
              <span className="text-accent text-[13px] font-medium tracking-wide">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] mb-5"
            >
              Crafting Brands That{" "}
              <span className="text-accent">Matter</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[14px] md:text-[16px] text-gray-500 leading-[1.8] mb-6"
            >
              We exist to create brands that matter and marketing that moves
              markets. Not brands that exist only in guidelines, but identities
              that shape perception, drive preference, and create commercial
              value. Not marketing that looks impressive in decks, but systems
              that generate pipeline, acquire customers, and accelerate growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[14px] md:text-[16px] text-gray-500 leading-[1.8]"
            >
              With a team of skilled professionals and a commitment to quality,
              we work hand-in-hand with our clients to bring their ideas to life.
              Together, we create brands and solutions that stand the test of time.
            </motion.p>
          </div>

          {/* Right — Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <Image
                src="/images/projects/mayu-infra/03.jpg"
                alt="Grownex team — outdoor branding showcase"
                width={640}
                height={640}
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ===== Our Capabilities — Dark Carousel ===== */}
      </div>

      <div ref={capRef} className="py-10 md:py-14 mb-12 md:mb-16">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-14">
            {/* Left label */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={capInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 md:w-[180px] flex-shrink-0"
            >
              <div className="w-[3px] h-8 bg-accent rounded-full" />
              <div>
                <span className="text-accent text-[13px] font-medium block">Our</span>
                <span className="text-foreground text-[13px] font-medium">Capabilities</span>
              </div>
            </motion.div>

            {/* Center heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={capInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1] md:flex-1 md:text-center text-foreground"
            >
              Capabilities<span className="text-accent">.</span>
            </motion.h3>

            {/* Right description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={capInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[13px] md:text-[14px] text-gray-500 leading-[1.7] md:w-[280px] flex-shrink-0 md:text-right"
            >
              See how our full-spectrum capabilities transform your brand with custom solutions that deliver measurable impact from day one.
            </motion.p>
          </div>

          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[340px] md:min-h-[400px]">
            {/* Left — Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl max-h-[360px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSlide}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={capabilities[activeSlide].image}
                    alt={capabilities[activeSlide].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSlide}
                  custom={direction}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Number */}
                  <div className="text-[14px] md:text-[16px] text-gray-400 mb-4 tracking-wide">
                    {String(activeSlide + 1).padStart(3, "0")}
                    <span className="text-accent ml-1">/</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.1] mb-5 text-foreground">
                    {capabilities[activeSlide].title}
                  </h4>

                  {/* Description */}
                  <p className="text-[14px] md:text-[16px] text-gray-500 leading-[1.8] max-w-[480px]">
                    {capabilities[activeSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom: Nav */}
              <div className="mt-8 md:mt-10">
                <div className="border-t border-foreground/10 pt-6 flex justify-end">
                  {/* Navigation arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => goTo(-1)}
                      className="w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-200"
                      aria-label="Previous capability"
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4L6 9l5 5" />
                      </svg>
                    </button>
                    <button
                      onClick={() => goTo(1)}
                      className="w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-200"
                      aria-label="Next capability"
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 4l5 5-5 5" />
                      </svg>
                    </button>

                    {/* Slide indicators */}
                    <div className="flex items-center gap-1.5 ml-3">
                      {capabilities.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDirection(i > activeSlide ? 1 : -1);
                            setActiveSlide(i);
                          }}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === activeSlide
                              ? "w-6 bg-accent"
                              : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">

        {/* ===== Mission & Vision ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-5 bg-accent rounded-full" />
              <span className="text-accent text-[13px] font-medium tracking-wide">
                Our Mission
              </span>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] mb-4">
              Building brands that drive growth
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.8] mb-6">
              To deliver exceptional branding and marketing solutions that exceed
              client expectations through innovation, quality craftsmanship, and a
              commitment to measurable results. We aim to build lasting
              relationships and create brands that enhance communities.
            </p>
            <ul className="space-y-3">
              {[
                "Strategic clarity in every engagement",
                "Innovation-driven creative solutions",
                "Customer-centric approach",
                "Building stronger market presence",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] md:text-[14px] text-foreground">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path d="M2 8.5L6 12.5L14 4.5" stroke="#F15A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-5 bg-accent rounded-full" />
              <span className="text-accent text-[13px] font-medium tracking-wide">
                Our Vision
              </span>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] mb-4">
              Redefining the future of branding
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.8] mb-6">
              To redefine the future of branding and marketing through innovation,
              sustainability, and excellence. We aim to create identities that not
              only inspire but also contribute to the growth of businesses and the
              well-being of communities.
            </p>
            <ul className="space-y-3">
              {[
                "Inspiring modern brand architecture",
                "Pioneering digital-first strategies",
                "Championing measurable outcomes",
                "Empowering ambitious businesses",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] md:text-[14px] text-foreground">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path d="M2 8.5L6 12.5L14 4.5" stroke="#F15A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
