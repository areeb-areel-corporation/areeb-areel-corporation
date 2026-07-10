"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const developments = [
  {
    id: "01",
    title: "Naseeb Homes",
    category: "Residential Real Estate",
    src: "/images/housing-society.png",
    url: "/naseeb-homes",
    description:
      "Thoughtfully planned 3.5 and 5 Marla homes created for modern family life. Naseeb Homes brings together contemporary architecture, practical layouts and structured ownership options within a community-focused residential environment.",
  },
  {
    id: "02",
    title: "Areeb Areel Filling Station",
    category: "Energy & Mobility",
    src: "/images/petrol pump.png",
    url: "/filling-station",
    description:
      "A convenient travel destination combining fuel services, an express mart, food and refreshments, prayer facilities and essential vehicle support.",
  },
  {
    id: "03",
    title: "Sentosa Square",
    category: "Residential Real Estate",
    src: "/images/sentosa-1.jpeg",
    url: "/sentosa-square",
    description:
      "Sentosa Square is a contemporary commercial development created for retailers, service providers, professionals and growing businesses.",
  }
];

export default function SignatureDevelopments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This only runs on the client, preventing hydration mismatch
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 overflow-hidden">
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
                className="relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex-none border border-white/5 hover:border-[#D4AF37]/30"
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
                      : "scale-100 grayscale opacity-50"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90" />

                <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-20">
                  {/* Styled the number to match the luxury aesthetic without heavy text-stroke */}
                  <span className="text-3xl lg:text-4xl font-black text-[#D4AF37] drop-shadow-md">
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
                    <p className="text-zinc-300 text-sm lg:text-base leading-relaxed max-w-md mb-6 whitespace-normal">
                      {project.description}
                    </p>

                    <Link
                      href={project.url}
                      className="flex w-fit items-center gap-3 group/btn text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300"
                    >
                      Explore Project
                      <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover/btn:bg-[#D4AF37] group-hover/btn:border-[#D4AF37] transition-all duration-300">
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
