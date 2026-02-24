"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { dmCaseStudies } from "@/lib/data";

const dmServices = [
  {
    title: "SEO & Organic Growth",
    description:
      "Technical SEO, content strategy, and link building that compounds over time. We build organic visibility that generates traffic and leads without paying for every click.",
    icon: "01",
  },
  {
    title: "PPC & Paid Advertising",
    description:
      "Surgical paid campaigns across Google, Meta, and LinkedIn. Every dollar tracked, optimized, and tied to a business outcome — not vanity metrics.",
    icon: "02",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic social presence that builds brand equity and drives engagement. Content calendars, community management, and paid amplification working as one system.",
    icon: "03",
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Nurture sequences, drip campaigns, and lifecycle marketing that convert subscribers into customers and customers into advocates.",
    icon: "04",
  },
  {
    title: "Content Marketing",
    description:
      "Blog posts, thought leadership, video content, and content ecosystems designed to educate, engage, and convert your ideal audience.",
    icon: "05",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards, attribution modeling, and performance analysis that give you clarity on what's working and where to invest next.",
    icon: "06",
  },
];

export default function DigitalMarketingContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-[3px] h-5 bg-accent rounded-full" />
          <span className="text-accent text-[13px] font-medium tracking-wide">
            Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] mb-4"
        >
          Digital Marketing<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-gray-500 max-w-[600px] leading-[1.7] mb-10 md:mb-14"
        >
          Performance-driven campaigns that connect your brand with the right
          audience, at the right moment — across every channel that matters.
        </motion.p>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl mb-14 md:mb-20"
        >
          <Image
            src="/images/projects/sowjanya/04.jpg"
            alt="Digital Marketing — Performance campaigns"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="text-white text-[20px] md:text-[28px] font-bold leading-[1.2]">
              Strategy meets execution.
            </p>
            <p className="text-white/70 text-[14px] md:text-[16px] mt-1">
              Every campaign built for measurable impact.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={gridRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-3"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-[14px] md:text-[15px] max-w-[520px] leading-[1.7] mb-8 md:mb-10"
          >
            Full-spectrum digital marketing services designed to generate
            awareness, drive consideration, and accelerate pipeline.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {dmServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 group hover:bg-gray-900 transition-colors duration-500"
              >
                <span className="text-[32px] font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-500">
                  {service.icon}
                </span>
                <h3 className="text-[17px] md:text-[18px] font-bold text-foreground group-hover:text-white mt-4 mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 group-hover:text-gray-400 leading-[1.7] transition-colors duration-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-14 md:mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[24px] md:text-[32px] font-bold tracking-[-0.02em] mb-3"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-[14px] md:text-[15px] max-w-[520px] leading-[1.7] mb-8 md:mb-10"
          >
            Real campaigns. Real results. See how we&apos;ve delivered measurable
            growth for our clients.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {dmCaseStudies.map((cs, index) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={`/digital-marketing/${cs.slug}`}
                  className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cs.thumbnail}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2.5 py-1 bg-accent/90 text-white text-[10px] font-medium tracking-wider uppercase rounded-full">
                        {cs.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-[16px] md:text-[18px] font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {cs.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-[1.6] line-clamp-2 mb-4">
                      {cs.description}
                    </p>
                    <div className="flex items-center gap-4">
                      {cs.results.slice(0, 2).map((r) => (
                        <span
                          key={r.metric}
                          className="text-[12px] text-gray-400"
                        >
                          <span className="font-bold text-foreground">
                            {r.value}
                            {r.suffix}
                          </span>{" "}
                          {r.metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 md:mt-20 bg-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-2">
              Ready to grow?
            </h3>
            <p className="text-white/80 text-[14px] md:text-[16px] max-w-[400px] leading-[1.6]">
              Let&apos;s build a digital marketing engine that generates real
              business results.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center px-7 py-3 bg-white text-foreground text-[14px] font-medium rounded-full hover:bg-white/90 transition-all duration-300 flex-shrink-0"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
