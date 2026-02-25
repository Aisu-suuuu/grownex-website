"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const column1 = [
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=850&fit=crop",
];

const column2 = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop",
];

const column3 = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600&h=850&fit=crop",
];

const column4 = [
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=850&fit=crop",
  "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&h=850&fit=crop",
];

type ColumnDirection = "up" | "down";

function ImageCard({ src, index }: { src: string; index: number }) {
  return (
    <div style={{ flexShrink: 0, padding: "6px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#f3f4f6",
        }}
      >
        <Image
          src={src}
          alt={`Creative work ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized
        />
      </div>
    </div>
  );
}

function MarqueeColumn({
  images,
  direction,
}: {
  images: string[];
  direction: ColumnDirection;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Use Web Animations API — not affected by React re-renders
    const keyframes =
      direction === "up"
        ? [
            { transform: "translateY(0)" },
            { transform: "translateY(-50%)" },
          ]
        : [
            { transform: "translateY(-50%)" },
            { transform: "translateY(0)" },
          ];

    const anim = el.animate(keyframes, {
      duration: 30000,
      iterations: Infinity,
      easing: "linear",
    });

    // Pause on hover
    const onEnter = () => anim.pause();
    const onLeave = () => anim.play();
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      anim.cancel();
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [direction]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flexDirection: "column",
          willChange: "transform",
        }}
      >
        {images.map((src, i) => (
          <ImageCard key={`a-${i}`} src={src} index={i} />
        ))}
        {images.map((src, i) => (
          <ImageCard key={`b-${i}`} src={src} index={i} />
        ))}
      </div>

      {/* White fade overlays */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "120px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          zIndex: 10,
        }}
      />
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "120px",
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          zIndex: 10,
        }}
      />
    </div>
  );
}

export default function CreativeWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [12, -6]);

  return (
    <section ref={ref} style={{ overflow: "hidden", paddingTop: "40px", paddingBottom: "56px" }}>
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
        <motion.div style={{ y: headerY }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center tracking-[-0.02em] mb-3"
          >
            Our Creative Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-500 text-[14px] md:text-[15px] max-w-[520px] mx-auto mb-6 md:mb-8 leading-[1.7]"
          >
            A glimpse into the bold visuals and campaigns we craft for brands
            that dare to stand out.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[1440px] mx-auto px-3 md:px-6"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4px",
            height: "850px",
            overflow: "hidden",
          }}
          className="md:!grid-cols-4"
        >
          <div style={{ minHeight: 0, overflow: "hidden" }}>
            <MarqueeColumn images={column1} direction="up" />
          </div>
          <div style={{ minHeight: 0, overflow: "hidden" }}>
            <MarqueeColumn images={column2} direction="down" />
          </div>
          <div className="hidden md:block" style={{ minHeight: 0, overflow: "hidden", height: "100%" }}>
            <MarqueeColumn images={column3} direction="up" />
          </div>
          <div className="hidden md:block" style={{ minHeight: 0, overflow: "hidden", height: "100%" }}>
            <MarqueeColumn images={column4} direction="down" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
