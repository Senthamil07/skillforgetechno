import React, { useState, useEffect } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "motion/react";
import { PromoBanner } from "./PromoBanner";
import { LargeSquareLogoSymbol } from "./ForgeIcons";
import graduationBg from "../assets/images/regenerated_image_1782727744643.png";

interface HeroProps {
  onApplyClick: () => void;
  onBrochureClick: () => void;
}

const ROTATING_PHRASES = [
  "Data Science",
  "Data Analytics",
  "AWS Cloud",
  "Networking",
  "Python",
  "AI & Machine Learning"
];

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onBrochureClick }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = ROTATING_PHRASES[currentPhraseIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 100); // speed of backspacing
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
      }, 200); // speed of typing
    }

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500); // pause duration when fully typed
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden flex items-center min-h-screen bg-[#0b0b09] text-white"
    >
      {/* Cinematic Background Image with Multi-layer Gradient Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden hidden md:block">
        <img
          src={graduationBg}
          alt="Skill Forge Graduation Day"
          className="w-full h-full object-cover object-center md:object-right scale-[1.01]"
          referrerPolicy="no-referrer"
        />
        {/* Layered overlays designed specifically to keep graduation image clear on mobile while preserving pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/85 sm:via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b09] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/10 sm:bg-black/35" />
        {/* Subtle glowing ambient overlay */}
        <div className="absolute inset-0 bg-radial-gradient(circle at left, rgba(245,180,0,0.06) 0%, rgba(9,9,11,0.2) 60%, rgba(9,9,11,0.6) 100%)" />
      </div>

      {/* Mobile-only Premium Logo Watermark in background */}
      <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.22] pointer-events-none z-10 flex items-center justify-center overflow-hidden">
        <LargeSquareLogoSymbol size={340} glow={true} />
      </div>

      {/* Dynamic tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b09] to-transparent pointer-events-none z-10" />
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#F5B400]/3 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl pointer-events-none z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-zinc-900/90 border border-amber-500/35 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(245,180,0,0.1)]"
          >
            <Award size={14} className="text-[#F5B400]" />
            <span className="font-mono text-xs text-amber-400 font-bold tracking-wider uppercase">
              Premier Technology Institute
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-extrabold text-[2.85rem] xs:text-[3.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6 uppercase flex flex-col text-shadow-md"
          >
            <span>FORGE YOUR FUTURE IN</span>
            <span className="relative inline-block min-h-[1.2em] bg-gradient-to-r from-[#F5B400] via-amber-400 to-yellow-500 bg-clip-text text-transparent font-black mt-2">
              {displayedText}
              <span className="inline-block w-[3px] h-[0.85em] bg-[#F5B400] ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xl sm:text-xl md:text-2xl text-zinc-200 leading-relaxed mb-8 max-w-2xl font-light text-shadow-sm"
          >
            Industry-focused training with live projects, expert mentors, and placement assistance.
          </motion.p>

          {/* Premium Integrated Promo Card with Live Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-2xl mb-8"
          >
            <PromoBanner onApplyClick={onApplyClick} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={onApplyClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F5B400] hover:bg-[#E0A300] text-zinc-950 text-base sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all font-sans"
            >
              <span>Apply For Career Counseling</span>
              <ArrowUpRight size={18} className="stroke-[2.5]" />
            </button>
            
            <button
              onClick={onBrochureClick}
              className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900/60 hover:bg-zinc-900 hover:text-white text-zinc-300 border border-zinc-800 hover:border-zinc-700 text-base sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all font-sans"
            >
              Download Brochure
            </button>
          </motion.div>

          {/* Dynamic floating placement badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="bg-zinc-900/90 backdrop-blur-md border border-amber-500/30 px-5 py-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex items-center gap-4 hover:border-amber-500/50 transition-colors self-center md:self-start text-left"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Verified Placement</p>
              <p className="text-base font-sans font-black text-[#F5B400] uppercase tracking-wide">94.2% Tracked Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

