import React, { useState, useEffect } from "react";
import { Flame, Sparkles, Timer, ArrowRight } from "lucide-react";

interface PromoBannerProps {
  onApplyClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onApplyClick }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 45, seconds: 30 });
  const [seatsLeft, setSeatsLeft] = useState(4);

  useEffect(() => {
    // Persistent Countdown Timer in LocalStorage
    const STORAGE_KEY = "skillforge_promo_timer_end";
    const SEATS_KEY = "skillforge_promo_seats_left";
    
    // Setup seats left dynamic fluctuation (to look alive and ticking!)
    const savedSeats = localStorage.getItem(SEATS_KEY);
    let initialSeats = 4;
    if (savedSeats) {
      initialSeats = parseInt(savedSeats, 10);
    } else {
      localStorage.setItem(SEATS_KEY, "4");
    }
    setSeatsLeft(initialSeats);

    // Fluctuate seats randomly over time to simulate active enrollment
    const seatsInterval = setInterval(() => {
      setSeatsLeft((prev) => {
        if (prev <= 2) {
          // Reset to 5 or 4 to keep it fresh
          localStorage.setItem(SEATS_KEY, "4");
          return 4;
        }
        const nextSeats = prev - 1;
        localStorage.setItem(SEATS_KEY, nextSeats.toString());
        return nextSeats;
      });
    }, 45000); // changes every 45 seconds to keep it incredibly dynamic

    // Setup timer
    const now = Date.now();
    let endTimestamp = localStorage.getItem(STORAGE_KEY);
    
    if (!endTimestamp || parseInt(endTimestamp, 10) < now) {
      // Set new countdown for 1 hour, 45 minutes, 30 seconds
      const newEndTime = now + (1 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000);
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      endTimestamp = newEndTime.toString();
    }

    const timerInterval = setInterval(() => {
      const currentNow = Date.now();
      const difference = parseInt(endTimestamp!, 10) - currentNow;

      if (difference <= 0) {
        // Reset to a new 1h 45m 30s countdown when it hits zero to keep the urgency alive!
        const resetEndTime = currentNow + (1 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000);
        localStorage.setItem(STORAGE_KEY, resetEndTime.toString());
        endTimestamp = resetEndTime.toString();
        
        // Calculate immediately so it shows new numbers instead of blank zeros
        const newDiff = resetEndTime - currentNow;
        const hrs = Math.floor((newDiff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((newDiff / 1000 / 60) % 60);
        const secs = Math.floor((newDiff / 1000) % 60);
        setTimeLeft({ hours: hrs, minutes: mins, seconds: secs });
      } else {
        const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / 1000 / 60) % 60);
        const secs = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours: hrs, minutes: mins, seconds: secs });
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(seatsInterval);
    };
  }, []);

  // Format numbers with leading zeros
  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <div 
      id="promo-banner"
      className="bg-zinc-950/80 backdrop-blur-md text-white py-3.5 px-5 border border-amber-500/20 rounded-2xl shadow-xl relative z-10 overflow-hidden max-w-3xl w-full ml-0 mr-auto"
    >
      {/* Background visual element for high-tech premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />
      
      <div className="max-w-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-3 lg:gap-6 text-left relative z-10">
        
        {/* Badge & Promo Message */}
        <div className="flex items-center gap-2 flex-wrap justify-start text-xs sm:text-sm text-left">
          <span className="inline-flex items-center gap-1 bg-[#F5B400] text-black font-extrabold font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-bounce">
            <Flame size={12} className="fill-current" />
            Limited Offer
          </span>
          <span className="font-sans font-medium text-zinc-200">
            Current Cohort is <span className="text-amber-400 font-bold">94% filled</span>. Only{" "}
            <span className="font-extrabold text-white underline decoration-amber-500 decoration-2 underline-offset-2">
              {seatsLeft} seats left!
            </span>
          </span>
        </div>

        {/* Dynamic Live Ticking Timer Visual with Elegant Digits */}
        <div className="flex items-center gap-2 text-xs sm:text-sm bg-zinc-900/90 border border-zinc-800 px-3 py-1 rounded-md font-mono shadow-inner">
          <Timer size={14} className="text-amber-400 animate-pulse" />
          <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] mr-1 hidden sm:inline">
            Offer Ends In:
          </span>
          <div className="flex items-center gap-1 text-amber-400 font-bold text-xs sm:text-sm">
            <span className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[11px] sm:text-xs">
              {formatNum(timeLeft.hours)}
            </span>
            <span className="text-zinc-600 font-sans font-light animate-pulse">:</span>
            <span className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[11px] sm:text-xs">
              {formatNum(timeLeft.minutes)}
            </span>
            <span className="text-zinc-600 font-sans font-light animate-pulse">:</span>
            <span className="bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[11px] sm:text-xs">
              {formatNum(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* Call to Action Trigger link */}
        <button
          onClick={onApplyClick}
          className="group flex items-center gap-1 font-sans font-extrabold text-xs text-[#F5B400] hover:text-white transition-all cursor-pointer uppercase tracking-wider"
        >
          <span>Apply Now & Secure Seat</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </button>

      </div>
    </div>
  );
};
