"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Show modal on every page load/navigation as requested
  useEffect(() => {
    // Small delay to allow the new page content to settle or strictly on mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay feels natural

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call)
    // For now, just close the modal
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#0a0a0a] border border-gold/20 rounded-[2rem] shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full pointer-events-none -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full pointer-events-none -ml-10 -mb-10" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 relative z-10">
              <div className="text-center space-y-2 mb-8">
                <span className="text-gold text-xs font-black uppercase tracking-[0.2em]">Welcome to Golden Legacy</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Start Your Journey</h2>
                <p className="text-gray-400 text-sm font-light">Enter your details to receive a personalized consultation.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-gold hover:bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-none hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Get Started <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
