"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import About from '@/components/home/About';
import CoreServices from '@/components/home/CoreServices';
import VisionMission from '@/components/home/VisionMission';
import Stats from '@/components/home/Stats';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Team from '@/components/about/Team';
import ContactBanner from '@/components/home/ContactBanner';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      <Hero />
      <Reveal><TrustBadges /></Reveal>
      <Reveal><About /></Reveal>
      
      {/* Parallax Surprise Transition */}
      <div className="w-full h-[30vh] md:h-[50vh] bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('/images/mainland.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <Reveal><Team /></Reveal>
      <Reveal><CoreServices /></Reveal>
      
      {/* Parallax Surprise Transition */}
      <div className="w-full h-[30vh] md:h-[50vh] bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('/images/office.png')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <Reveal><VisionMission /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><ContactBanner /></Reveal>
    </div>
  );
}
