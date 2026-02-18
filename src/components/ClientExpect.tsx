"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ClientExpect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.6], [20, -8]);

  return (
    <section id="client-expect" ref={ref} className="pb-14 md:pb-20">
      <motion.div
        style={{ y }}
        className="max-w-[1280px] mx-auto px-8 lg:px-16 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-accent text-[13px] font-medium tracking-[0.08em] uppercase mb-5"
        >
          The Grownex Standard
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-[-0.02em] mb-6"
        >
          What Our Clients Can Expect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-[14px] md:text-[16px] text-gray-500 leading-[1.7] max-w-[620px] mx-auto"
        >
          Engagements led by senior practitioners who bring both strategic depth
          and practical experience. Work that reflects genuine expertise, not
          templated solutions. Outcomes measured by market performance, not
          creative awards. Partnership built on accountability, transparency, and
          shared commitment to growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
