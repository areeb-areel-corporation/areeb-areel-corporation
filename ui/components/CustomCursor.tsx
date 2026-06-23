"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Disable custom cursor on touch devices (phones/tablets)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Automatically detect if hovering over ANY clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        'a, button, input, select, textarea, [role="button"]'
      );
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Prevent hydration errors and hide on mobile
  if (!isMounted || isTouchDevice) return null;

  return (
    <>
      {/* 1. The Fast Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D4AF37] rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4, // Center the 8px dot (8/2 = 4)
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1, // Shrinks to nothing when hovering
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      />

      {/* 2. The Smooth Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#D4AF37]/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20, // Center the 40px ring (40/2 = 20)
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1, // Expands when hovering a button
          backgroundColor: isHovering ? "rgba(212,175,55,0.1)" : "transparent",
          borderColor: isHovering ? "rgba(212,175,55,0.8)" : "rgba(212,175,55,0.5)",
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15, 
          mass: 0.5 
        }}
      />
    </>
  );
}