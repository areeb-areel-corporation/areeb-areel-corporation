"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const developments = [
  {
    id: "01",
    title: "Housing Society",
    category: "Master-Planned Communities",
    src: "/images/housing-society.png",
    url: "/housing-society",
    description:
      "Ultra-luxury residential sectors featuring state-of-the-art security, green spaces, and modern architecture.",
  },
  {
    id: "02",
    title: "Total Parco Hubs",
    category: "Energy Networks",
    src: "/images/petrol pump.png",
    url: "/petrol-station",
    description:
      "High-capacity, AAA-standard petroleum stations strategically developed across key logistical routes.",
  },
  {
    id: "03",
    title: "Infrastructure Projects",
    category: "Retail Integration",
    src: "/images/mart.png",
    url: "/infrastructure",
    description:
      "Premium retail experiences built directly into our energy hubs for unmatched consumer convenience.",
  },
];

export default function SignatureDevelopments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false); // Default to false to match desktop

  useEffect(() => {
    // This only runs on the client, preventing hydration mismatch
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full bg-brand-black py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-12 lg:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[1px] bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
            Visual Proof
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
          Signature{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
            Developments.
          </span>
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] gap-4 lg:gap-2">
          {developments.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            const getWidth = () => {
              if (isMobile) return "100%";
              if (isHovered) return "60%";
              if (isAnyHovered) return "20%";
              return "33.33%";
            };

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex-none"
                style={{
                  width: getWidth(),
                  height: isMobile ? "400px" : "100%", // Fixed height for mobile
                }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-[800ms] ease-out ${
                    isHovered || isMobile
                      ? "scale-105 grayscale-0"
                      : "scale-100 grayscale opacity-60"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-90" />

                <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20">
                  <span className="text-3xl lg:text-4xl font-black text-transparent text-stroke-gold">
                    {project.id}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 z-20 flex flex-col justify-end h-full">
                  <div className="transition-all duration-500">
                    <span className="text-[#D4AF37] text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-4xl font-bold text-white tracking-tight mb-4 whitespace-nowrap">
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isHovered || isMobile
                        ? "max-h-[200px] opacity-100 mt-2"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-brand-silver/80 text-sm lg:text-base leading-relaxed max-w-md mb-6">
                      {project.description}
                    </p>

                    <Link
                      href={project.url}
                      className="flex items-center gap-3 group/btn text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300"
                    >
                      Explore Division
                      <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover/btn:bg-[#D4AF37] group-hover/btn:border-[#D4AF37] transition-all duration-300">
                        {/* Fixed text-[#D4AF37] group-hover/btn:text-black to ensure the arrow icon changes color correctly when hovering anywhere on the link */}
                        <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:text-black transition-colors" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
