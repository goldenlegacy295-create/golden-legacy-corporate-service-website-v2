"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#030303]"></div> */}
        
        {/* Subtle Decorative Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[130px] rounded-full opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[130px] rounded-full opacity-20 -ml-48 -mb-48"></div>
      </div>

      {/* Modern Background Branding */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] z-0">
        <h2 className="text-[20vw] font-black text-white whitespace-nowrap leading-none tracking-tighter">
          GOLDEN LEGACY
        </h2>
      </div>

      {/* Main Content Container with Navbar Offset */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 md:space-y-6"
          >
            {/* The "Golden Legacy" Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-gold text-xl md:text-3xl font-black tracking-[0.6em] uppercase">
                GOLDEN LEGACY
              </h3>
              <div className="w-16 h-[1px] bg-gold/40"></div>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white">
              BUILDING <br />
              <span className="text-gradient-gold">LEGACIES</span>
            </h1>
            
            <p className="text-base md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-xl px-4">
              Strategic business formation and elite banking solutions in Dubai for <span className="text-white font-medium">visionary entrepreneurs</span>.
            </p>

          </motion.div>
        </div>
      </div>

      {/* Bottom CTA & Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-4 flex flex-col items-center justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="hidden xl:block">
              <Link href="/cost-calculator" className="btn-premium !px-8 !py-3 !text-xs !rounded-full uppercase tracking-[0.2em] font-black">
                Calculate Setup Cost
              </Link>
            </div>
            <div className="hidden xl:block">
              <Link href="/services" className="btn-outline-gold !px-8 !py-3 !text-xs !rounded-full uppercase tracking-[0.2em] font-black backdrop-blur-sm">
               Services
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase font-bold">Scroll to Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-gold/40 via-gold/5 to-transparent"></div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;




