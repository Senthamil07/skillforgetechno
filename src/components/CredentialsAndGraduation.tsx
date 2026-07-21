import React from "react";
import { Award, ShieldCheck, Trophy, Sparkles, Calendar, Users, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import certificateImg from "../assets/images/regenerated_image_1782887287319.jpg";
import graduationImg from "../assets/images/regenerated_image_1782727744643.png";

export const CredentialsAndGraduation: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#fafafc] border-t border-b border-zinc-200 overflow-hidden font-sans">
      {/* Dynamic ambient lighting backdrop */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
            <Trophy className="w-3.5 h-3.5 text-[#B59110]" />
            <span className="font-mono text-[10px] sm:text-[11px] text-zinc-500 font-bold tracking-widest uppercase">
              Milestones & Recognition
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
            Industry Credentials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-[#B59110] to-[#D4AF37]">Graduation Day</span>
          </h2>

          <p className="text-zinc-500 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From your very first code repository block to the landmark moment you accept your certificate on stage in front of hiring managers, your hard work is backed by certified proof.
          </p>
        </div>

        {/* One-by-One Structured Showcase Layout */}
        <div className="flex flex-col gap-12 sm:gap-16 max-w-5xl mx-auto">
          
          {/* Column 1: Certificate Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-8 group relative overflow-hidden items-center"
          >
            
            {/* Premium high quality professional certificate image showcase */}
            <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-150">
              <img
                src={certificateImg}
                alt="Skill Forge Professional Certification"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-[#D4AF37] text-zinc-950 px-2.5 py-1 rounded-md shadow-sm">
                  SECURE DEFI REGISTERED
                </span>
                <span className="text-[10px] font-mono font-bold text-white drop-shadow-sm flex items-center gap-1 bg-zinc-900/85 px-2.5 py-1 rounded-md border border-zinc-700/30">
                  SF-904-8842-AX
                </span>
              </div>
            </div>

            {/* Title & info list wrapped in 7 cols */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-[#B59110]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#B59110] font-bold tracking-wider uppercase block">
                    VERIFIED CREDENTIALS
                  </span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-zinc-900 mt-0.5">
                    Skill Forge Professional Certification
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B59110] shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-950">Globally Sharable Credentials</h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">Integrates perfectly with your LinkedIn profiles, personal digital portfolios, and resume pipelines.</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#B59110] shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-950">Cryptographic Blockchain Verification</h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">Employers can verify your graduation details instantly via our secure registry, eliminating fake certifications.</p>
                  </div>
                </div>
              </div>

              {/* High-impact 'Grab Your Certificate' promo card */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500 text-black text-center flex items-center justify-center shrink-0 shadow-xs">
                    <Award className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-zinc-950 tracking-tight uppercase flex items-center gap-1.5">
                      Grab Your Professional Certificate! <span className="animate-pulse">🔥</span>
                    </h4>
                    <p className="text-xs text-zinc-600 font-medium mt-0.5">Get verified on graduation day and fast-track your profile past standard candidate screenings.</p>
                  </div>
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#B59110] hover:text-amber-600 transition-colors uppercase tracking-wider shrink-0"
                >
                  Apply & Claim <ArrowRight size={13} className="stroke-[2.5]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Graduation Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-8 group relative overflow-hidden items-center"
          >
            
            {/* Title & info list wrapped in 7 cols */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:order-1 order-2">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-wider uppercase block">
                    COHORT MILESTONE
                  </span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-zinc-900 mt-0.5">
                    Skill Forge Graduation Day
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0 mt-0.5">
                    <Users className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-950">Recruiter Meet & Greet Placement Mixers</h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">Meet directly with tech leads and recruiters during our physical graduation mixers. Walk away with immediate job opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-950">Keynotes & Capstone Showcase</h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">Top-performing student cohorts showcase their dynamic capstone systems on stage in front of leading regional software veterans.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* High quality Unsplash Graduation Photo */}
            <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-150 md:order-2 order-1">
              <img
                src={graduationImg}
                alt="Skill Forge Graduation Day Celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-955 via-transparent to-transparent opacity-65" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-white text-zinc-950 px-2.5 py-1 rounded-md shadow-sm">
                  ANNUAL EVENT
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-300 drop-shadow-sm flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Next Event: Sept 2026
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
