// context/ComingSoonContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X } from 'lucide-react';

// Define the shape of our context
interface ComingSoonContextType {
  showComingSoon: () => void;
}

// Create the Context
const ComingSoonContext = createContext<ComingSoonContextType | undefined>(undefined);

// Create the Provider Component
export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  // Auto-hide logic handled globally
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [isVisible]);

  // The function we will expose to the rest of the app
  const showComingSoon = () => {
    setIsVisible(true);
  };

  return (
    <ComingSoonContext.Provider value={{ showComingSoon }}>
      {/* Render the rest of the website */}
      {children}

      {/* Render the Global Toast on top of everything */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-10 right-6 md:right-10 z-[100] flex items-start gap-4 bg-[#111111]/90 backdrop-blur-xl border border-[#D4AF37]/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-[320px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wide text-sm mb-1">Feature Locked</h4>
              <p className="text-brand-silver/70 text-xs leading-relaxed">
                This corporate module is currently under development. Access will be granted in the next system update.
              </p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-brand-silver/50 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Animated Bottom Progress Bar */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] rounded-b-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ComingSoonContext.Provider>
  );
}

// Create the custom hook for easy importing
export const useComingSoon = () => {
  const context = useContext(ComingSoonContext);
  if (context === undefined) {
    throw new Error('useComingSoon must be used within a ComingSoonProvider');
  }
  return context;
};