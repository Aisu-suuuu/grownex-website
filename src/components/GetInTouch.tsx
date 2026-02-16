"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function GetInTouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-accent text-white py-20 md:py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-[1.05] mb-16 md:mb-20"
        >
          Get in <span className="italic font-normal">/touch/</span>.
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-between"
          >
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/80 max-w-[420px] mb-12">
              Reach out to discover how Grownex can support your digital goals
              and help elevate your brand to new heights.
            </p>

            <div className="flex flex-col gap-8">
              {/* Office */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <h3 className="text-[18px] font-bold">Office</h3>
                </div>
                <div className="pl-8 text-[15px] leading-[1.7] text-white/80">
                  <p>Hyderabad, Telangana</p>
                  <p>India</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-white" />
                  <h3 className="text-[18px] font-bold">Contact</h3>
                </div>
                <div className="pl-8 text-[15px] leading-[1.7] text-white/80">
                  <p>+91 98765 43210</p>
                  <p>hello@grownex.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Your name *"
                required
                className="w-full bg-transparent border-b border-white/30 py-4 text-[16px] text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="w-full bg-transparent border-b border-white/30 py-4 text-[16px] text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full bg-transparent border-b border-white/30 py-4 text-[16px] text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors resize-y"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-white text-black text-[16px] font-medium px-8 py-4 rounded-sm hover:bg-white/90 transition-colors"
              >
                Get in touch
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[13px] text-white/60 mt-2">
              By submitting, you agree to our{" "}
              <span className="underline cursor-pointer text-white/80">Terms</span> and{" "}
              <span className="underline cursor-pointer text-white/80">Privacy Policy</span>.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
