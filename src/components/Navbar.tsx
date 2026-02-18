"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Work" },
    { href: "/digital-marketing", label: "Digital Marketing" },
    { href: "/insights", label: "Insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-5">
      <div className="liquid-glass max-w-[1280px] mx-auto rounded-full">
        <div className="px-6 lg:px-10 flex items-center justify-between h-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[22px] font-bold tracking-[-0.02em] text-foreground">
              Grownex
            </span>
            <svg width="12" height="12" viewBox="0 0 37 37" className="-mt-2.5 ml-[1px]">
              <polygon fill="#F15A24" points="37,37 24.5,37 24.5,12.5 0,12.5 0,0 37,0" />
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center px-6 py-2 bg-foreground text-white text-[14px] font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get In Touch
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-foreground origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-foreground origin-center"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/30"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[17px] text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[17px] text-foreground"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-white text-[14px] font-medium rounded-full mt-2 w-fit"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
