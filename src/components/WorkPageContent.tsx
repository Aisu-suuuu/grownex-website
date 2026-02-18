"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function WorkPageContent() {
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
          className="text-[15px] md:text-[17px] text-gray-500 max-w-[560px] leading-[1.7] mb-10 md:mb-14"
        >
          A selection of projects where strategy met craft — identities built to
          perform, not just to look pretty.
        </motion.p>
      </div>

      {/* Project Grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                  {/* Top row */}
                  <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-5 md:p-7">
                    <span className="px-3 py-1.5 bg-white text-dark text-[11px] md:text-[12px] font-medium tracking-wide">
                      {project.tag}
                    </span>
                    <span className="text-white/80 text-[12px] md:text-[13px] font-medium">
                      /{project.year}
                    </span>
                  </div>

                  {/* Bottom */}
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

              {/* Project meta below card */}
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
    </section>
  );
}
