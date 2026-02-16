"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

const socialIconMap: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  Linkedin,
};

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
    { href: "#", label: "Linkedin", icon: Linkedin },
    { href: "#", label: "Facebook", icon: Facebook },
    { href: "#", label: "Instagram", icon: Instagram },
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
      className="bg-[#141010] text-white rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.4)]"
    >
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="pt-16 md:pt-18 pb-10 md:pb-14 flex flex-col md:flex-row justify-between gap-10"
          >
            {/* Left — Brand Logo + Tagline */}
            <div className="flex-1">
              <Image
                src="/images/grownex-logo-white.svg"
                alt="Grownex"
                width={700}
                height={130}
                className="w-[350px] md:w-[520px] lg:w-[700px] h-auto"
                priority
              />
              <p className="mt-3 text-[15px] text-white/70 max-w-[380px] leading-[1.6]">
                The next big thing starts here —{" "}
                drop us a line and let&apos;s get creating!
              </p>
            </div>

            {/* Right — Links */}
            <div className="flex gap-16 md:gap-24">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[16px] text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-[16px] text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <link.icon className="w-4 h-4" />
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
                  <span className="flex items-center gap-2.5 text-accent text-[13px] font-semibold tracking-[0.1em] uppercase">
                    <info.icon className="w-4 h-4" />
                    {info.label}
                  </span>
                  <p className="mt-1.5 text-[15px] text-white/60">{info.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-white/[0.08] py-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-[13px] text-white/30">
              &copy; {new Date().getFullYear()} Grownex. All rights reserved.
            </p>
            <p className="text-[13px] text-white/30">
              Built with purpose &amp; precision
            </p>
          </div>
        </div>
    </footer>
  );
}
