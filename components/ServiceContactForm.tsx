"use client";

import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Landmark, ChevronDown } from 'lucide-react';

interface ServiceContactFormProps {
  defaultService?: string;
  title?: string;
}

const ServiceContactForm = ({ 
  defaultService = "Mainland Setup",
  title = "Quick Enquiry" 
}: ServiceContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [service, setService] = useState(defaultService);

  React.useEffect(() => {
    setService(defaultService);
  }, [defaultService]);

  const allServices = [
    "Mainland Company Formation in Dubai",
    "LLC Company Formation in Dubai",
    "Professional License (Main Land / Civil Company)",
    "IFZA Dubai Business Set-up",
    "DMCC Free Zone Company Setup",
    "Sharjah Media City (Shams) Free Zone Business Setup",
    "Fujairah Free Zone Company Formation",
    "Meydan Free Zone",
    "RAKEZ Company Formation",
    "Offshore Company Formation in Dubai",
    "RAK Offshore Company Formation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[32px] border border-gold/20 text-center space-y-4">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
          <Send className="text-gold" size={24} />
        </div>
        <h4 className="text-xl font-black text-black">Request Received</h4>
        <p className="text-gray-500 text-sm">One of our elite consultants will contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-gold text-xs font-bold uppercase tracking-widest mt-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl relative overflow-hidden group">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full -mr-12 -mt-12 transition-all group-hover:bg-gold/10"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="space-y-1">
          <h4 className="text-xl font-black text-black uppercase tracking-tighter">{title}</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Start your {defaultService.split(' ')[0]} setup</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                required
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-gold/40 focus:ring-1 focus:ring-gold/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-gold/40 focus:ring-1 focus:ring-gold/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                required
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-gold/40 focus:ring-1 focus:ring-gold/20 outline-none transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-gold/40 focus:ring-1 focus:ring-gold/20 outline-none transition-all font-medium appearance-none cursor-pointer"
              >
                {!allServices.includes(defaultService) && (
                  <option value={defaultService}>{defaultService}</option>
                )}
                <optgroup label="Mainland">
                  <option value="Mainland Company Formation in Dubai">Mainland Setup</option>
                  <option value="LLC Company Formation in Dubai">LLC Formation</option>
                  <option value="Professional License (Main Land / Civil Company)">Professional License</option>
                </optgroup>
                <optgroup label="Free Zone">
                  <option value="IFZA Dubai Business Set-up">IFZA Dubai</option>
                  <option value="DMCC Free Zone Company Setup">DMCC Dubai</option>
                  <option value="Sharjah Media City (Shams) Free Zone Business Setup">Shams Sharjah</option>
                  <option value="Fujairah Free Zone Company Formation">Fujairah Free Zone</option>
                  <option value="Meydan Free Zone">Meydan Free Zone</option>
                  <option value="RAKEZ Company Formation">RAKEZ RAK</option>
                </optgroup>
                <optgroup label="Offshore">
                  <option value="Offshore Company Formation in Dubai">Offshore Setup</option>
                  <option value="RAK Offshore Company Formation">RAK Offshore</option>
                </optgroup>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
              <textarea 
                placeholder="Special Requirements..." 
                rows={3}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm text-black focus:bg-white focus:border-gold/40 focus:ring-1 focus:ring-gold/20 outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>
          </div>

          {/* Hidden field for service context */}
          <input type="hidden" value={defaultService} />

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="btn-premium w-full py-4 !rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:shadow-gold/20"
          >
            {status === 'sending' ? 'Processing...' : 'Request Consultation'}
            <Send size={14} />
          </button>
        </form>
        
        <p className="text-[9px] text-gray-400 text-center font-bold uppercase tracking-tighter">
          Response within 2 business hours
        </p>
      </div>
    </div>
  );
};

export default ServiceContactForm;
