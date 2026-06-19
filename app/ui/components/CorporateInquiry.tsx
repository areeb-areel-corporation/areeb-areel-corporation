"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        // Reset success state after 5 seconds
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



  // Staggered animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-brand-black text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* --- LEFT SIDE: Contact Information --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12 space-y-10 pt-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  Secure Channel
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-6">
                Initiate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Dialogue.
                </span>
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed max-w-md">
                Whether you are seeking strategic partnerships, premium real
                estate acquisitions, or franchise opportunities within our
                energy network, our executive team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8 max-w-md">
              {/* 1. Global Headquarters Node */}
              <div className="flex items-start gap-5 group p-3 -m-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <Building2 className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-brand-silver/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Global Headquarters
                  </h4>
                  <p className="text-brand-silver/80 group-hover:text-white text-sm md:text-base transition-colors duration-300 leading-relaxed">
                    Areeb & Areel Tower, Corporate District
                    <br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              {/* 2. Corporate Email Node */}
              <a
                href="mailto:executive@areebareel.com"
                className="flex items-start gap-5 group p-3 -m-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300 w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <Mail className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-brand-silver/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Secure Desk Email
                  </h4>
                  <p className="text-brand-silver/80 group-hover:text-[#D4AF37] text-sm md:text-base transition-colors duration-300 font-medium">
                    executive@areebareel.com
                  </p>
                </div>
              </a>

              {/* 3. Corporate Switchboard (Landline Telephone) */}
              <a
                href="tel:+9242111222333"
                className="flex items-start gap-5 group p-3 -m-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300 w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <Phone className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-brand-silver/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Make a Call
                  </h4>
                  <p className="text-brand-silver/80 group-hover:text-white text-sm md:text-base transition-colors duration-300 font-medium font-mono">
                    +92 (42) 111-222-333
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: The Animated Form --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <motion.div
                    variants={itemVariants as any}
                    className="relative group"
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-4 text-brand-silver/50 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-silver/80"
                    >
                      Full Name
                    </label>
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    variants={itemVariants as any}
                    className="relative group"
                  >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent"
                      placeholder="Corporate Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-4 text-brand-silver/50 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-silver/80"
                    >
                      Corporate Email
                    </label>
                  </motion.div>
                </div>

                {/* Division Select */}
                <motion.div
                  variants={itemVariants as any}
                  className="relative group"
                >
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                  >
                    <option
                      value="General Corporate"
                      className="bg-[#111111] text-white"
                    >
                      General Corporate Inquiry
                    </option>
                    <option
                      value="AAA Developments"
                      className="bg-[#111111] text-white"
                    >
                      AAA Developments (Real Estate)
                    </option>
                    <option
                      value="Total Parco Hubs"
                      className="bg-[#111111] text-white"
                    >
                      Energy Hubs & Petrol Pumps
                    </option>
                    <option
                      value="Express Smart Mart"
                      className="bg-[#111111] text-white"
                    >
                      Retail & Smart Marts
                    </option>
                  </select>
                  <label className="absolute left-0 -top-3 text-brand-silver/80 text-xs">
                    Target Division
                  </label>
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  variants={itemVariants as any}
                  className="relative group"
                >
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 text-brand-silver/50 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-silver/80"
                  >
                    Detailed Proposal or Message
                  </label>
                </motion.div>

                {/* Submit Button & Feedback */}
                <motion.div
                  variants={itemVariants as any}
                  className="pt-4 flex items-center justify-between"
                >
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="relative group overflow-hidden bg-[#D4AF37] text-black px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transition-transform active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading"
                        ? "Transmitting..."
                        : status === "success"
                          ? "Received"
                          : "Submit Inquiry"}
                      {status === "loading" && (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      )}
                      {status === "success" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {status === "idle" && (
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </span>
                    {/* Hover Sweep Animation */}
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                  </button>

                  {/* Error Message */}
                  {status === "error" && (
                    <p className="text-red-400 text-sm font-medium">
                      Transmission failed. Please try again.
                    </p>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
