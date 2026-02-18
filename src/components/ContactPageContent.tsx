"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Office",
    lines: ["Hyderabad, Telangana", "India"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 98765 43210"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@grownex.in"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Sat: 9:00 am – 7:00 pm"],
  },
];

export default function ContactPageContent() {
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
            Contact
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.08] tracking-[-0.02em] mb-4"
        >
          Let&apos;s talk<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-gray-500 max-w-[520px] leading-[1.7] mb-10 md:mb-14"
        >
          Have a project in mind? Reach out and let&apos;s discover how Grownex
          can help elevate your brand to new heights.
        </motion.p>

        {/* Main Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Form (3 cols) */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-[20px] md:text-[22px] font-bold mb-6">
              Send us a message
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none">
                  <option value="">Select a topic</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="app-design">App Design & Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[13px] font-medium text-foreground mb-1.5">
                Your Message *
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-white text-[14px] font-medium px-7 py-3 rounded-full hover:bg-accent/90 transition-all duration-300"
            >
              Send Message
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-[12px] text-gray-400 mt-3">
              By submitting, you agree to our Terms and Privacy Policy.
            </p>
          </motion.form>

          {/* Right — Contact Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Info Cards */}
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-foreground mb-1">
                    {item.label}
                  </h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-[14px] text-gray-500 leading-[1.6]">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Quick CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-gray-900 rounded-2xl p-6 md:p-8 mt-2"
            >
              <h3 className="text-[18px] font-bold text-white mb-2">
                Prefer a quick chat?
              </h3>
              <p className="text-[13px] text-gray-400 leading-[1.7] mb-4">
                Schedule a 15-minute discovery call and let&apos;s explore
                how we can help your brand grow.
              </p>
              <a
                href="mailto:hello@grownex.in"
                className="inline-flex items-center gap-2 text-accent text-[14px] font-medium hover:underline"
              >
                hello@grownex.in
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
