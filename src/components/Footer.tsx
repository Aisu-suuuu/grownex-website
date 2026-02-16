"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "#work", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", label: "Linkedin" },
    { href: "#", label: "Facebook" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "Youtube" },
  ];

  const contactInfo = [
    { label: "PHONE", value: "+91 98765 43210", icon: Phone },
    { label: "EMAIL", value: "hello@grownex.in", icon: Mail },
    { label: "ADDRESS", value: "Hyderabad, Telangana, India", icon: MapPin },
    { label: "OPENING HOURS", value: "Mon to Sat: 9:00am - 7:00pm", icon: Clock },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-[#141010] text-white rounded-t-3xl"
    >
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-16 md:pt-20 pb-12 md:pb-16 flex flex-col md:flex-row justify-between gap-12"
        >
          {/* Left — Brand */}
          <div className="flex-1">
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] font-bold text-accent leading-[1] -skew-x-6 inline-block">
              Grownex
            </h2>
            <p className="mt-4 text-[14px] text-white/50 max-w-[340px] leading-[1.6]">
              The next big thing starts here — drop us a line and let&apos;s get
              creating!
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-white/70 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-t border-white/[0.08] py-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.label}>
                <span className="flex items-center gap-2 text-accent text-[11px] font-medium tracking-[0.1em] uppercase">
                  <info.icon className="w-3.5 h-3.5" />
                  {info.label}
                </span>
                <p className="mt-1 text-[13px] text-white/60">{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white/[0.08] py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} Grownex. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30">
            Built with purpose &amp; precision
          </p>
        </div>
      </div>
    </footer>
  );
}
