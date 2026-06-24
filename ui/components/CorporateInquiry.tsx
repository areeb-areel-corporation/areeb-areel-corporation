"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Send,
  CheckCircle,
  Loader2,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

export default function CorporateInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "General Corporate",
    message: "",
  });
  
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          division: "General Corporate",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- STRICT TYPESCRIPT ANIMATION VARIANTS ---
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const formContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0a0a0a] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: Contact Information --- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="w-full lg:w-5/12 space-y-10 pt-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  Corporate Enquiries
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-6">
                Connect &nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  With Us.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Whether you are inquiring about a property in Naseeb Homes, looking to partner with our filling stations, or seeking corporate consulting in Dubai, our executive team is ready to assist you.
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              {/* 1. Global Headquarters */}
              <div className="flex items-start gap-5 group p-4 rounded-xl border border-transparent hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-xl">
                  <Building2 className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-[#D4AF37]">
                    Corporate Headquarters
                  </h4>
                  <p className="text-zinc-300 group-hover:text-white text-sm md:text-base transition-colors duration-300 leading-relaxed">
                    Areeb & Areel Corporation
                    <br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              {/* 2. Corporate Email */}
              <a
                href="mailto:contact@areebareel.com"
                className="flex items-start gap-5 group p-4 rounded-xl border border-transparent hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-xl">
                  <Mail className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-[#D4AF37]">
                    Direct Email
                  </h4>
                  <p className="text-zinc-300 group-hover:text-white text-sm md:text-base transition-colors duration-300 font-medium">
                    contact@areebareel.com
                  </p>
                </div>
              </a>

              {/* 3. Corporate Switchboard */}
              <a
                href="tel:+9242111222333"
                className="flex items-start gap-5 group p-4 rounded-xl border border-transparent hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-xl">
                  <Phone className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-[#D4AF37]">
                    Corporate Line
                  </h4>
                  <p className="text-zinc-300 group-hover:text-white text-sm md:text-base transition-colors duration-300 font-medium font-mono">
                    +92 (42) 111-222-333
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: The Animated Form --- */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#111111]/90 backdrop-blur-xl border hover:border-[#D4AF37] transition-all duration-500 border-white/5 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-8"
                variants={formContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Name Input */}
                  <motion.div variants={inputVariants} className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-zinc-400"
                    >
                      Full Name
                    </label>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={inputVariants} className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-zinc-400"
                    >
                      Email Address
                    </label>
                  </motion.div>
                </div>

                {/* Division Select */}
                <motion.div variants={inputVariants} className="relative group">
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Corporate" className="bg-[#111] text-white">General Inquiry</option>
                    <option value="Naseeb Homes" className="bg-[#111] text-white">Naseeb Homes (Real Estate)</option>
                    <option value="Filling Station" className="bg-[#111] text-white">Areeb Areel Filling Station</option>
                    <option value="Architecture" className="bg-[#111] text-white">Architecture & Construction</option>
                    <option value="Dubai Consulting" className="bg-[#111] text-white">Dubai Corporate Consulting</option>
                  </select>
                  <label className="absolute left-0 -top-3 text-zinc-500 text-xs">
                    Target Division
                  </label>
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={inputVariants} className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 text-zinc-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-zinc-400"
                  >
                    How can we help you?
                  </label>
                </motion.div>

                {/* Submit Button & Feedback - Shutter Effect Added */}
                <motion.div variants={inputVariants} className="pt-4 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="relative cursor-pointer overflow-hidden group border border-[#D4AF37] bg-transparent text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                  >
                    {/* The Golden Shutter */}
                    <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                    
                    {/* Text & Icons (Transitions to black on hover) */}
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                      {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Submit Inquiry"}
                      {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                      {status === "success" && <CheckCircle className="w-4 h-4" />}
                      {status === "idle" && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                  </button>

                  {/* Error Message */}
                  {status === "error" && (
                    <p className="text-red-400 text-sm font-medium">
                      Failed to send. Please try again.
                    </p>
                  )}
                </motion.div>
              </motion.form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}