'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

// Form Validation Schema
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  inquiry: z.enum(["General", "Real Estate", "Energy", "Retail"]),
  message: z.string().min(10, "Message too short"),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: any) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  return (
    <section id="contact-form" className="relative w-full bg-brand-black py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Initiate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                Corporate Inquiry.
              </span>
            </h2>
            <p className="text-brand-silver/70 text-lg">
              Our executive team reviews all partnerships and project inquiries within 24 hours. Let us architect the future together.
            </p>
          </div>

          {/* Form Container */}
          <div className="relative bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[400px] flex flex-col items-center justify-center text-center space-y-4"
                >
                  <CheckCircle className="w-20 h-20 text-[#D4AF37]" />
                  <h3 className="text-2xl font-bold text-white">Inquiry Dispatched</h3>
                  <p className="text-brand-silver">We will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {['name', 'email', 'message'].map((field, i) => (
                    <motion.div 
                      key={field}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      {field === 'message' ? (
                        <textarea 
                          {...register(field as any)}
                          placeholder="Project Details"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                        />
                      ) : (
                        <input 
                          {...register(field as any)}
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      )}
                      {errors[field as keyof typeof errors] && (
                        <p className="text-red-400 text-xs mt-1">{(errors[field as keyof typeof errors] as any).message}</p>
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    disabled={isSubmitting}
                    className="w-full mt-8 bg-[#D4AF37] text-brand-black font-bold py-4 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <>Dispatch Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}