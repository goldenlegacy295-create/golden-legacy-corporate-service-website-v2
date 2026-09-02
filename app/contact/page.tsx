"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/goldenlegacy295@gmail.com", {
        method: "POST",
        body: formData,
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };
  return (
    <div className="flex flex-col w-full bg-[#030303] overflow-x-hidden pt-20">
      {/* Hero Header */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -mr-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-gold font-black tracking-[0.5em] uppercase text-xs">Get In Touch</span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Let's Start Your <br />
              <span className="text-gradient-gold">UAE Journey</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Our consultants are ready to assist you with elite business setup solutions. Connect with us to architect your corporate future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-white">Direct <span className="text-gold">Contact</span></h3>
                <p className="text-gray-400 font-light">Visit our headquarters in the heart of Dubai or reach out through our digital channels.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Headquarters</p>
                    <p className="text-white text-lg font-medium">M 06, Emgate Building, Near Bank of Baroda, Sheikh Zayed Road, Dubai, UAE<br/>PO BOX 415227</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Call Us</p>
                    <a href="tel:+971556656007" className="text-white text-lg font-medium hover:text-gold transition-colors">+971 55 665 6007</a>
                    <br />
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Email Us</p>
                    <a href="mailto:info@goldenlegacy.ae" className="text-white text-lg font-medium hover:text-gold transition-colors italic">info@goldenlegacy.ae</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-black uppercase text-xs tracking-widest opacity-50">Office Hours</p>
                    <div className="flex flex-col">
                      <p className="text-white text-lg font-medium">Monday to Saturday | 9:30 AM – 6:30 PM</p>
                      <p className="text-white/50 text-sm font-medium">Closed on 1st and 2nd Saturdays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social or Badge area could go here */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl relative overflow-hidden group">
                {/* Decorative Pattern inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-black">Inquiry <span className="text-gold">Form</span></h3>
                    <p className="text-gray-500 text-sm">Fill out the details below and our experts will contact you shortly.</p>
                  </div>

                  {status === 'success' ? (
                    <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 text-center space-y-6">
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                        <Send className="text-gold" size={32} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black text-black uppercase tracking-tight">Form Submitted Successfully!</h4>
                        <p className="text-gray-500">We have received your secure message. Our experts will contact you shortly.</p>
                      </div>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="text-gold text-sm font-bold uppercase tracking-widest mt-4 hover:text-black transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          placeholder="John Doe" 
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="john@example.com" 
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+971" 
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Service Type</label>
                        <select name="service" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium appearance-none">
                          <option value="Mainland Setup">Mainland Setup</option>
                          <option value="Free Zone Setup">Free Zone Setup</option>
                          <option value="Offshore Setup">Offshore Setup</option>
                          <option value="Banking Assistance">Banking Assistance</option>
                          <option value="Other Consultations">Other Consultations</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-black/40 ml-2">Your Message</label>
                      <textarea 
                        rows={5}
                        name="message"
                        required
                        placeholder="Tell us about your business vision..." 
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:border-gold/50 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" disabled={status === 'sending'} className="btn-premium w-full py-5 !rounded-2xl text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(212,175,55,0.2)] disabled:opacity-50">
                      {status === 'sending' ? 'Sending...' : 'Send Secure Message'} <Send size={20} />
                    </button>
                  </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section or bottom highlight */}
      <section className="bg-white py-1 relative">
         <div className="h-[400px] w-full bg-gray-100 relative">
            {/* Visual Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                     <MapPin className="text-gold" size={32} />
                  </div>
                  <p className="text-black font-black uppercase tracking-[0.3em] text-sm italic">Sheikh Zayed Road HQ</p>
               </div>
            </div>
            {/* You can add real iframe here if desired */}
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
