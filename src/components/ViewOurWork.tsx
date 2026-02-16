"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ViewOurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [40, -20]);

  return (
    <section id="work" ref={ref} className="pb-14 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Section Heading */}
        <motion.div style={{ y: headerY }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center tracking-[-0.02em] mb-3"
          >
            View Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-500 text-[14px] md:text-[15px] max-w-[480px] mx-auto mb-8 md:mb-10 leading-[1.7]"
          >
            A selection of projects where strategy met craft — identities built
            to perform, not just to look pretty.
          </motion.p>
        </motion.div>

      </div>

      {/* 2-column Project Grid — wider, edge-to-edge feel */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: {
    slug: string;
    thumbnail: string;
    title: string;
    tag: string;
    year: string;
    category: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-gray-900">
          {/* Background Image with parallax */}
          <motion.div style={{ y: imgY }} className="absolute inset-[-20px]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Permanent dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Hover: stronger overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

          {/* Top row: Tag + Year */}
          <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-5 md:p-7">
            <span className="px-3 py-1.5 bg-white text-dark text-[11px] md:text-[12px] font-medium tracking-wide">
              {project.tag}
            </span>
            <span className="text-white/80 text-[12px] md:text-[13px] font-medium">
              /{project.year}
            </span>
          </div>

          {/* Bottom: Title + Description on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            {/* Project name */}
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-[1.1] group-hover:-translate-y-2 transition-transform duration-500">
              {project.title}.
            </h3>

            {/* Description — reveals on hover */}
            <div className="max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-500 ease-out">
              <div className="w-full h-px bg-white/20 mt-4 mb-3" />
              <p className="text-[13px] md:text-[14px] text-white/75 leading-[1.65] line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
