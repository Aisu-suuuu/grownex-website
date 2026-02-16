"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [30, -10]);

  return (
    <section ref={ref} className="py-14 md:py-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div style={{ y: headerY }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center tracking-[-0.02em] mb-3"
          >
            Digital Marketing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-center text-gray-500 text-[14px] md:text-[15px] max-w-[540px] mx-auto mb-7 md:mb-9 leading-[1.7]"
          >
            Performance-driven campaigns that connect your brand with the right
            audience, at the right moment — across every channel that matters.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-[-40px]">
            <Image
              src="/images/projects/sowjanya/04.jpg"
              alt="Outdoor billboard showcase — Sowjanya Studios"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
