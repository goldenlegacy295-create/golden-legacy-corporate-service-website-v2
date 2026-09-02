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

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden">
      <Hero />
      <TrustBadges />
      <About />
      <Team />
      <CoreServices />
      <VisionMission />
      <Stats />
      <WhyChooseUs />
      <ContactBanner />
    </div>
  );
}
