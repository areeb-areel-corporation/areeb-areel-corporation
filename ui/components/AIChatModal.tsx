"use client";

import React, { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import Image from "next/image";
import { 
  SendHorizonal, 
  Sparkles, 
  User, 
  X, 
  Phone,
  Mail,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "Tell me about Sentosa Square",
  "Naseeb Homes payment plans",
  "Pakistan-UAE advisory services",
  "Where are your filling stations?"
];

export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isWaitingForFirstByte = status === "submitted";
  const isProcessing = status === "submitted" || status === "streaming";

  // FIX 2: Prevent scroll jitter. "smooth" causes stuttering if fired 20x a second during streaming.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ 
        behavior: status === "streaming" ? "auto" : "smooth" 
      });
    }
  }, [messages, status]);

  // Initial welcome message
  useEffect(() => {
    if (!isOpen || messages.length > 0) return;
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Welcome to Areeb & Areel Corporation. I am your customer support representative. I can guide you through Sentosa Square, Naseeb Homes, our filling station network, architecture and construction, and Pakistan-UAE business advisory. How may I assist you today?",
            /*
            text: "Welcome to Areeb & Areel Corporation. I’m your customer support representative. I can guide you through Sentosa Square, Naseeb Homes, our filling station network, and corporate consulting. How may I assist you today?",
            */
          },
        ],
      },
    ]);
  }, [isOpen, messages.length, setMessages]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim() || isProcessing) return;
    sendMessage({ text: input.trim() });
    setInput("");
  };

  const handleSuggestion = (query: string) => {
    if (isProcessing) return;
    sendMessage({ text: query });
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Global Floating Trigger Button ── */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3 text-white shadow-[0_0_30px_rgba(212,175,55,0.15)] transition duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_45px_rgba(212,175,55,0.3)]"
        aria-label="Open AI assistant"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F1E5AC] text-[#050505] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <Bot className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
        </span>
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] sm:block">
          AI Assistant
        </span>
      </motion.button>

      {/* ── Global Full-Screen Modal Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#050505]/80 backdrop-blur-sm">
            
            {/* Modal Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[95vh] bg-[#0A0A0A] border border-white/10 rounded-[20px] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Background Glows */}
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none z-0" />

              {/* ── Premium Slim Header ── */}
              <div className="px-4 py-3 sm:px-5 border-b border-white/10 bg-[#111111]/80 backdrop-blur-md flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-lg border border-[#D4AF37]/30 bg-black/40 flex items-center justify-center shadow-md p-1.5">
                    <Image 
                      src="/images/Asset 1.png" 
                      alt="Areeb Areel Logo" 
                      fill 
                      className="object-contain p-1.5 opacity-90"
                    />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] leading-none mb-1">
                      Executive Hub
                    </p>
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5 leading-none">
                      Areeb & Areel AI
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/20 animate-pulse" />
                    </h2>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-white/10 bg-white/[0.02] hover:bg-[#D4AF37]/10 text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 rounded-full transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* ── Maximized Chat Messages Area ── */}
              <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-4 z-10 custom-scrollbar">
                
                {messages.length === 1 && !isProcessing && (
                  <div className="w-full flex justify-center py-6">
                    <div className="text-center opacity-80 px-4">
                      <div className="relative w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                        <Image 
                          src="/images/Asset 1.png" 
                          alt="Areeb Areel Logo" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                      <p className="text-xs sm:text-[13px] font-medium text-zinc-400 max-w-sm mx-auto leading-relaxed">
                        Inquire about our developments, corporate divisions, or request a callback from our team.
                      </p>
                    </div>
                  </div>
                )}

                {messages.map((msg, i) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "flex items-start gap-2.5 sm:gap-3 w-full",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {/* Bot Avatar (Left) */}
                    {msg.role !== "user" && (
                      <div className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-lg shrink-0 flex items-center justify-center shadow-sm bg-white/[0.03] border border-white/10">
                        <Image 
                          src="/images/Asset 1.png" 
                          alt="AI" 
                          fill 
                          className="object-contain p-1.5"
                        />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div className={cn(
                      "px-3.5 py-2.5 text-[13px] sm:text-[14px] font-medium leading-[1.6] max-w-[85%] sm:max-w-[75%]",
                      msg.role === "user" 
                        ? "bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 text-[#fcedc0] rounded-[18px] rounded-tr-sm shadow-sm" 
                        : "bg-[#111111]/90 border border-white/10 text-zinc-200 rounded-[18px] rounded-tl-sm shadow-sm"
                    )}>
                      {msg.parts.map((part, index) =>
                        part.type === "text" ? <span key={`${msg.id}-${index}`}>{part.text}</span> : null,
                      )}
                    </div>

                    {/* User Avatar (Right) */}
                    {msg.role === "user" && (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shrink-0 flex items-center justify-center shadow-sm bg-[#D4AF37] text-black">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Slim Loading Skeleton - ONLY shows when waiting for first byte */}
                {isWaitingForFirstByte && (
                  <div className="flex items-start gap-2.5 sm:gap-3 max-w-[80%]">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg shrink-0 flex items-center justify-center shadow-sm bg-white/[0.03] border border-white/10">
                      <Image 
                        src="/images/Asset 1.png" 
                        alt="AI Loading" 
                        fill 
                        className="object-contain p-1.5 opacity-40 animate-pulse"
                      />
                    </div>
                    <div className="px-4 py-2.5 bg-[#111111]/90 border border-white/10 rounded-[18px] rounded-tl-sm shadow-sm w-24 flex items-center h-[40px]">
                      <span className="flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" />
                      </span>
                    </div>
                  </div>
                )}
                
                <div ref={scrollRef} className="h-px w-full shrink-0" />
              </div>

              {/* ── Slim Footer / Input Area ── */}
              <div className="px-4 py-3 sm:px-5 sm:py-4 border-t border-white/10 bg-[#0A0A0A] shrink-0 z-10">
                
                {/* Contact Info Chips */}
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <Phone className="h-3 w-3 text-[#D4AF37]" /> Direct Line
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <a href="mailto:contact@areebareel.com" className="inline-flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                    <Mail className="h-3 w-3 text-[#D4AF37]" /> contact@areebareel.com
                  </a>
                </div>

                {/* Suggestions */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {SUGGESTIONS.map(s => (
                      <button 
                        key={s} onClick={() => handleSuggestion(s)}
                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] sm:text-[11px] font-bold tracking-wide text-zinc-400 hover:border-[#D4AF37]/50 hover:text-white hover:bg-[#D4AF37]/10 transition-all active:scale-95"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Box */}
                <form onSubmit={onSubmit} className="relative group mx-auto">
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Inquire about properties..."
                    className="w-full pl-4 pr-12 py-3 bg-[#111111] border border-white/10 rounded-xl outline-none focus:bg-[#1a1a1a] focus:border-[#D4AF37]/50 transition-all text-[13px] sm:text-sm text-white font-medium placeholder:text-zinc-600 shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim() || isProcessing}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#D4AF37] to-[#F1E5AC] text-black rounded-lg hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all shadow-md active:scale-95 flex items-center justify-center"
                  >
                    <SendHorizonal className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
