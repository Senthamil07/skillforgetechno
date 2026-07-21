import React from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-12 sm:py-20 lg:py-24 bg-white border-t border-zinc-200 overflow-hidden font-sans">
      {/* Premium subtle background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop"
          alt="Connect With Us Backdrop"
          className="w-full h-full object-cover opacity-[0.035] filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Absolute design accents */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Details */}
          <div className="text-left font-sans">
            <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3">
              Connect With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mt-1 relative">
              Start Your <span className="gold-gradient">Technical Upgrade</span>
            </h2>
            <p className="text-zinc-600 mt-4 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              Whether you are a parent reviewing potential tech careers for your ward, or an active software engineer aiming to specialize in AWS Cloud structures or Data Science pipelines—we are here to assist.
            </p>

            <div className="space-y-6">
              {/* Phone contact */}
              <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-250">
                <div className="flex gap-4 items-center mb-3">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-0.5">
                      Call Admissions Helpline
                    </span>
                    <span className="text-[11px] text-zinc-500 font-light">Direct connections are live & active</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  <a
                    href="tel:7010315493"
                    className="flex items-center justify-between px-4 py-3 bg-zinc-50 hover:bg-amber-50/40 hover:text-amber-700 border border-zinc-200 hover:border-amber-300 rounded-xl transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-mono font-bold text-zinc-800 group-hover:text-amber-700">70103 15493</span>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 bg-white px-2 py-0.5 rounded-md group-hover:border-amber-200 group-hover:bg-amber-100/30">Call Desk 1</span>
                  </a>
                  <a
                    href="tel:9344038554"
                    className="flex items-center justify-between px-4 py-3 bg-zinc-50 hover:bg-amber-50/40 hover:text-amber-700 border border-zinc-200 hover:border-amber-300 rounded-xl transition-all cursor-pointer group"
                  >
                    <span className="text-xs font-mono font-bold text-zinc-800 group-hover:text-amber-700">93440 38554</span>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 bg-white px-2 py-0.5 rounded-md group-hover:border-amber-200 group-hover:bg-amber-100/30">Call Desk 2</span>
                  </a>
                </div>
              </div>

              {/* Email contact */}
              <a
                href="mailto:sales@skillforge.in"
                className="group flex gap-4 items-center bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-250 cursor-pointer"
              >
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-[#F5B400]/10 transition-colors flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-0.5">
                    Corporate Email Desk
                  </span>
                  <span className="text-sm md:text-base font-bold text-zinc-900 group-hover:text-amber-700 transition-colors">
                    sales@skillforge.in
                  </span>
                </div>
              </a>

              {/* Physical Location info */}
              <div className="flex gap-4 items-start bg-white border border-zinc-200 p-5 rounded-2xl shadow-sm">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-605 mt-1 flex-shrink-0">
                  <MapPin size={20} className="text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-0.5">
                    Centralized Training Lab
                  </span>
                  <span className="text-xs md:text-sm font-bold text-zinc-900 block">
                    Skill Forge Technology, IT Corridor SEZ, Chennai, India.
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-1 block font-light">
                    Open for in-person counselor briefings & weekend virtual syncs.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary info card */}
          <div className="bg-[#fafafc] rounded-3xl border border-zinc-200 p-8 flex flex-col justify-between h-full relative overflow-hidden group font-sans shadow-md">
            {/* Absolute circuit overlay mockup */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-300" />
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  Live Operations Status
                </span>
              </div>

              <h3 className="font-sans font-bold text-xl md:text-2xl text-zinc-950 mb-4 leading-snug">
                Admissions are currently open for 2026 Batch
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6 font-light">
                Virtual tours, catalog counseling, and curriculum reviews are available immediately. Student seats are allocated sequentially following counseling checks.
              </p>

              <div className="border-t border-zinc-250/60 pt-6 space-y-4 text-left">
                <div className="flex items-center gap-3 text-xs text-zinc-600">
                  <Clock size={16} className="text-zinc-500 shrink-0" />
                  <span>Counselling Hours: 9:00 AM – 7:00 PM (IST), Mon – Sat</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-600">
                  <MessageSquare size={16} className="text-zinc-500 shrink-0" />
                  <span>Immediate response available on WhatsApp helpline</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="p-4 bg-white rounded-xl border border-zinc-150 text-center shadow-sm">
                <p className="text-[10px] font-mono text-zinc-500">
                  Secure admissions at our campus or opt for fully supported virtual remote hybrid modules.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
