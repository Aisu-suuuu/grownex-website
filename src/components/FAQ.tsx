"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full spectrum of branding and marketing services — from brand strategy, identity design, and positioning to digital marketing, performance campaigns, web design, app development, and content ecosystems. Every engagement is tailored to your business goals.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "Timelines vary based on scope and complexity. A focused landing page can be delivered in 2–3 weeks, while a full brand website typically takes 6–10 weeks from strategy through launch. We'll define a clear timeline during our discovery phase.",
  },
  {
    question: "Do you work with small businesses or just big brands?",
    answer:
      "We work with ambitious companies at every stage — from startups building their first brand to established businesses ready to scale. What matters most is a shared commitment to quality and growth.",
  },
  {
    question: "Can I customize the packages you offer?",
    answer:
      "Absolutely. Every engagement is built around your specific needs and objectives. We don't believe in one-size-fits-all solutions — we craft bespoke strategies and deliverables that align with your market reality.",
  },
  {
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "We establish clear KPIs at the outset — whether that's lead generation, conversion rates, brand awareness, or revenue growth. We provide transparent reporting and ongoing optimization to ensure measurable market impact.",
  },
  {
    question: "What if I don't like the designs or strategies?",
    answer:
      "Our process is collaborative. We present strategic rationale behind every creative decision and build in structured review rounds. Your feedback shapes the outcome — we iterate until the work meets both strategic objectives and your vision.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start a conversation. Reach out through our contact form or drop us an email at hello@grownex.in. We'll schedule a discovery call to understand your goals and outline how we can help.",
  },
  {
    question:
      "Do you provide support after launching my website or campaign?",
    answer:
      "Yes. We offer ongoing partnership packages that include maintenance, performance monitoring, content updates, and strategic counsel. We're invested in your long-term success, not just the launch.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => {
    setExpanded((prev) => (prev === i ? null : i));
  };

  return (
    <section ref={ref} className="py-14 md:py-20">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 md:gap-16"
        >
          {/* Left — Sticky heading */}
          <div className="md:w-[380px] flex-shrink-0">
            <div className="sticky top-[120px]">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-[11px]">
                  ?
                </span>
                <span className="text-[13px] md:text-[14px] font-medium text-foreground tracking-wide">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] mb-5">
                FAQ It Up! Your curiosity meets our expertise —let&apos;s clear
                things up!
              </h2>

              <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.7] max-w-[400px]">
                We&apos;ve gathered all the important info right here. Explore
                our FAQs and find the answers you need.
              </p>
            </div>
          </div>

          {/* Right — Accordion items */}
          <div className="flex-1 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="bg-gray-100/80 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <span className="text-[15px] md:text-[17px] font-semibold text-foreground pr-4 leading-[1.35]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: expanded === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[24px] leading-none text-gray-400 group-hover:text-accent transition-colors flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-[13px] md:text-[14px] text-gray-500 leading-[1.7]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
