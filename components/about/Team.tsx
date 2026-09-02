"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Mail, PhoneCall } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-gold font-black tracking-[0.4em] uppercase text-xs">Our Experts</span>
          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">The Minds Behind <br /><span className="text-gradient-gold">Your Success</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Improved Responsive Mobile Grid (1 column) vs Desktop Grid */}
        <div className="space-y-8 md:space-y-16">
          {/* Line 1: Leadership (2 Members) */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.slice(0, 2).map((member, idx) => (
              <motion.div
                key={member.slug}
                className="w-full sm:w-[calc(50%-12px)] md:w-[230px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Line 2: Advisory (5 Members) */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.slice(2, 7).map((member, idx) => (
              <motion.div
                key={member.slug}
                className="w-full sm:w-[calc(50%-12px)] md:w-[230px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Line 3: Operations & PRO (4 Members) */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.slice(7, 11).map((member, idx) => (
              <motion.div
                key={member.slug}
                className="w-full sm:w-[calc(50%-12px)] md:w-[230px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }: { member: any }) => (
  <div className="relative group overflow-hidden rounded-[24px] border border-white/5 hover:border-gold/30 transition-all duration-700 bg-[#0a0a0a]">
    {/* Permanent LinkedIn Icon at Top Right */}
    {member.linkedin && (
      <a 
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-5 right-5 z-50 w-9 h-9 bg-[#0077b5]/80 backdrop-blur-md border border-[#0077b5]/30 rounded-full flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-white/50 transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_4px_20px_rgba(0,119,181,0.3)]"
        title="View LinkedIn Profile"
      >
        <Linkedin size={16} fill="currentColor" strokeWidth={0} />
      </a>
    )}

    <Link href={`/team/${member.slug}`} className="block relative w-full h-[380px]">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:object-top ${member.imageClass || 'group-hover:scale-105'}`}
      />
      
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
        <div className="space-y-3">
          <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
            <h4 className="text-xl md:text-lg font-bold text-white mb-1 leading-tight">{member.name}</h4>
            <div className="flex items-center gap-2">
              <div className="w-5 h-[1px] bg-gold"></div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-[11px] md:text-[10px] leading-tight">{member.role}</p>
            </div>
          </div>
          
          <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
            <p className="text-gray-300 text-[11px] md:text-[11px] leading-relaxed font-light line-clamp-2 mb-3">
              {member.bio}
            </p>
            <span className="text-gold text-[10px] font-black uppercase tracking-wider border-b border-gold/30 pb-0.5 inline-block">Explore Legacy →</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Team;
