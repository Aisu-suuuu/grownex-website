"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, dmCaseStudies } from "@/lib/data";

export default function WorkPageContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<"branding" | "digital">(
    "branding"
  );

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
            Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] mb-4"
        >
          Our Work<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-gray-500 max-w-[560px] leading-[1.7] mb-8 md:mb-10"
        >
          A selection of projects where strategy met craft — identities built to
          perform, not just to look pretty.
        </motion.p>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-10 md:mb-14"
        >
          <button
            onClick={() => setActiveTab("branding")}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
              activeTab === "branding"
                ? "bg-foreground text-white"
                : "bg-transparent border border-gray-300 text-foreground hover:border-gray-400"
            }`}
          >
            Visual Branding
          </button>
          <button
            onClick={() => setActiveTab("digital")}
            className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
              activeTab === "digital"
                ? "bg-accent text-white"
                : "bg-transparent border border-gray-300 text-foreground hover:border-gray-400"
            }`}
          >
            Digital Marketing
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "branding" ? (
          <motion.div
            key="branding"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Branding Project Grid */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.1,
                    }}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-gray-900">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-5 md:p-7">
                          <span className="px-3 py-1.5 bg-white text-dark text-[11px] md:text-[12px] font-medium tracking-wide">
                            {project.tag}
                          </span>
                          <span className="text-white/80 text-[12px] md:text-[13px] font-medium">
                            /{project.year}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.1] group-hover:-translate-y-2 transition-transform duration-500">
                            {project.title}.
                          </h3>
                          <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-out">
                            <div className="w-full h-px bg-white/20 mt-4 mb-3" />
                            <p className="text-[13px] md:text-[14px] text-white/75 leading-[1.65] line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between mt-3 px-1">
                      <span className="text-[13px] text-gray-500">
                        {project.category}
                      </span>
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-[13px] font-medium text-accent hover:underline"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="digital"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* DM Header */}
            <div className="max-w-[1280px] mx-auto px-8 lg:px-16 mb-8 md:mb-10">
              <h2 className="text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-2">
                Digital Marketing
              </h2>
              <p className="text-gray-500 text-[14px] md:text-[15px] max-w-[520px] leading-[1.7]">
                We&apos;re a dynamic digital marketing agency committed to
                making your business thrive. Whether you&apos;re a seasoned
                player in the digital landscape or just stepping into it, we
                have the expertise and strategies to propel your brand.
              </p>
            </div>

            {/* DM Project Grid */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {dmCaseStudies.map((cs, index) => (
                  <motion.div
                    key={cs.slug}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.1,
                    }}
                  >
                    <Link
                      href={`/digital-marketing/${cs.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-gray-900">
                        <Image
                          src={cs.thumbnail}
                          alt={cs.title}
                          fill
                          className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-5 md:p-7">
                          <span className="px-3 py-1.5 bg-accent text-white text-[11px] md:text-[12px] font-medium tracking-wide">
                            {cs.tag}
                          </span>
                          <span className="text-white/80 text-[12px] md:text-[13px] font-medium">
                            /{cs.year}
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.1] group-hover:-translate-y-2 transition-transform duration-500">
                            {cs.title}.
                          </h3>
                          <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-out">
                            <div className="w-full h-px bg-white/20 mt-4 mb-3" />
                            <p className="text-[13px] md:text-[14px] text-white/75 leading-[1.65] line-clamp-3">
                              {cs.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between mt-3 px-1">
                      <span className="text-[13px] text-gray-500">
                        {cs.category}
                      </span>
                      <Link
                        href={`/digital-marketing/${cs.slug}`}
                        className="text-[13px] font-medium text-accent hover:underline"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
