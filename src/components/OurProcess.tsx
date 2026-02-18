"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { processSteps } from "@/lib/data";

export default function OurProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [12, -4]);

  return (
    <section id="process" ref={ref} className="py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Section Heading */}
        <motion.div style={{ y: headerY }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center text-accent tracking-[-0.02em] mb-3"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-center text-gray-500 text-[14px] md:text-[15px] max-w-[460px] mx-auto mb-6 md:mb-8 leading-[1.7]"
          >
            Four phases, zero guesswork. Every step is designed to move your
            brand from insight to measurable market impact.
          </motion.p>
        </motion.div>

        {/* Process Cards — flex row, active card grows to fill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 md:gap-4"
          style={{ minHeight: "420px" }}
        >
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <motion.div
                key={step.number}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  opacity: { duration: 0.45, delay: 0.25 + index * 0.08 },
                  y: { duration: 0.45, delay: 0.25 + index * 0.08 },
                  layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                }}
                onClick={() => setActiveStep(index)}
                className={`rounded-[32px] cursor-pointer transition-colors duration-500 ease-out flex flex-col overflow-hidden ${
                  isActive
                    ? "flex-1 bg-dark p-8 md:p-10"
                    : "w-[70px] md:w-[100px] flex-shrink-0 bg-gray-100 p-5 md:p-7 hover:bg-gray-200/70"
                }`}
              >
                {isActive ? (
                  <>
                    {/* Top row: number + title */}
                    <div className="flex items-start gap-6 md:gap-8">
                      <span className="text-[64px] md:text-[80px] font-bold leading-none text-white/90">
                        {step.number}
                      </span>
                      <motion.h3
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-[20px] md:text-[24px] font-bold text-white pt-3 md:pt-4"
                      >
                        {step.title}
                      </motion.h3>
                    </div>

                    {/* Bottom: description */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="mt-auto text-[14px] md:text-[16px] text-gray-400 leading-[1.65] max-w-[560px]"
                    >
                      {step.description}
                    </motion.p>
                  </>
                ) : (
                  <span className="text-[48px] md:text-[64px] font-bold leading-none text-accent">
                    {step.number}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
