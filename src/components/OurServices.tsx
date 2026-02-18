"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { services } from "@/lib/data";

export default function OurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeNav, setActiveNav] = useState(0);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.4], [12, -4]);

  // Scroll-spy: update activeNav based on which card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setActiveNav(index);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (i: number) => {
    setActiveNav(i);
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="services" ref={ref} className="py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Heading */}
        <motion.div style={{ y: headerY }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center text-accent tracking-[-0.02em] mb-3"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-center text-gray-500 text-[13px] md:text-[15px] max-w-[560px] mx-auto mb-6 md:mb-8 leading-[1.7]"
          >
            Full-spectrum capabilities for ambitious companies — from brand
            architecture and identity systems to performance marketing and
            digital product design.
          </motion.p>
        </motion.div>

        {/* Layout: Sticky Sidebar + Scrolling Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12"
        >
          {/* Sticky Sidebar Nav */}
          <nav className="hidden md:block md:w-[260px] flex-shrink-0">
            <div className="sticky top-[120px] space-y-1">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollToCard(i)}
                  className={`text-left text-[14px] md:text-[15px] w-full py-2 transition-colors duration-200 flex items-center gap-2 ${
                    activeNav === i
                      ? "font-bold text-foreground"
                      : "text-gray-400 hover:text-foreground"
                  }`}
                >
                  {activeNav === i && (
                    <motion.span
                      layoutId="service-indicator"
                      className="text-accent text-[11px]"
                      transition={{ duration: 0.25 }}
                    >
                      &#9654;
                    </motion.span>
                  )}
                  {s.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Service Cards */}
          <div className="flex-1 space-y-5">
            {services.map((service, i) => (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-[18px] md:text-[20px] font-bold text-foreground mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 leading-[1.7] mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-[12px] md:text-[13px] text-foreground border border-gray-200/80"
                    >
                      <span className="text-[12px]">{tag.icon}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Accordion */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between pt-4 border-t border-gray-200/80 group"
                >
                  <span className="text-[15px] font-medium text-foreground group-hover:text-accent transition-colors">
                    View Details
                  </span>
                  <motion.span
                    animate={{ rotate: expanded.has(i) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[22px] leading-none text-gray-400 group-hover:text-accent transition-colors"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expanded.has(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[13px] text-gray-500 leading-[1.7]">
                        Our {service.title.toLowerCase()} services are tailored
                        to your unique business needs. We combine strategic
                        thinking with practical execution to deliver measurable
                        results that drive growth and strengthen market position.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
