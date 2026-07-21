import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Trigger a soft notification indicator after 4 seconds to grab attention without being obtrusive
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleChatLaunch = (desk: "desk1" | "desk2" = "desk1") => {
    // Open a direct link to the selected admissions desk WhatsApp channel
    const number = desk === "desk1" ? "917010315493" : "919344038554";
    const whatsappUrl = `https://wa.me/${number}?text=Hi%21%20I%27m%20interested%20in%20the%20Skill%20Forge%20technology%20programs.%20I%27d%20love%20to%20get%20more%20details.`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {/* The expandable chat window popup */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-[330px] sm:w-[360px] bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden text-left"
          >
            {/* Header: Dark Gold theme branding */}
            <div className="bg-gradient-to-r from-zinc-900 to-[#926F12] p-5 text-white relative">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-300/30 flex items-center justify-center text-white">
                    {/* Inline custom WhatsApp SVG */}
                    <svg className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.419 5.422 0 12.083 0c3.229.001 6.262 1.258 8.543 3.541A11.974 11.974 0 0 1 24.167 12c-.003 6.64-5.42 12.039-12.077 12.039-2.001-.001-3.971-.497-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.3 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7c-5.3 0-9.7 4.3-9.7 9.7 0 1.9.5 3.7 1.5 5.3L2.3 21.7l4.35-1.146zm11.332-6.52c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.668.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347h.001z"/>
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight text-white mb-0.5">Admissions Hotline</h4>
                  <p className="text-[11px] text-amber-200/90 font-mono tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-ping" />
                    <span>ONLINE & ACTIVE</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Body message */}
            <div className="p-5 bg-zinc-50 border-b border-zinc-150">
              <div className="bg-white p-3.5 rounded-xl rounded-tl-none border border-zinc-200 shadow-sm relative text-xs text-zinc-700 leading-relaxed max-w-[90%]">
                <span className="absolute -left-2 top-0 border-t-8 border-t-white border-l-8 border-l-transparent" />
                <p className="mb-2">
                  Hello! 👋 Welcome to <strong className="font-semibold text-zinc-900">Skill Forge Technology</strong>.
                </p>
                <p className="mb-2">
                  Our coaching directors and tech mentors are active right now. Connect directly to construct your roadmap or apply for fast-track batch admissions.
                </p>
                <div className="text-[10px] text-amber-700 font-semibold bg-amber-50 rounded px-2 py-1 border border-amber-200 inline-block font-mono">
                  ⚡ Immediate callback reservation
                </div>
              </div>
            </div>

            {/* Interactive Chat Footer button */}
            <div className="p-4 bg-white flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleChatLaunch("desk1")}
                  className="bg-[#926F12] text-white hover:bg-zinc-900 py-3 px-2 rounded-xl font-bold text-[10px] tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
                >
                  {/* Embedded WhatsApp Vector graphic */}
                  <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.419 5.422 0 12.083 0c3.229.001 6.262 1.258 8.543 3.541A11.974 11.974 0 0 1 24.167 12c-.003 6.64-5.42 12.039-12.077 12.039-2.001-.001-3.971-.497-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.3 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7c-5.3 0-9.7 4.3-9.7 9.7 0 1.9.5 3.7 1.5 5.3L2.3 21.7l4.35-1.146zm11.332-6.52c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.668.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347h.001z"/>
                  </svg>
                  <span>Desk 1 Chat</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleChatLaunch("desk2")}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 py-3 px-2 rounded-xl font-bold text-[10px] tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
                >
                  {/* Embedded WhatsApp Vector graphic */}
                  <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.419 5.422 0 12.083 0c3.229.001 6.262 1.258 8.543 3.541A11.974 11.974 0 0 1 24.167 12c-.003 6.64-5.42 12.039-12.077 12.039-2.001-.001-3.971-.497-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.3 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7c-5.3 0-9.7 4.3-9.7 9.7 0 1.9.5 3.7 1.5 5.3L2.3 21.7l4.35-1.146zm11.332-6.52c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.668.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347h.001z"/>
                  </svg>
                  <span>Desk 2 Chat</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 text-center font-mono select-none">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>Verified Direct Desk SSL Endpoint</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="absolute right-16 bottom-2 bg-zinc-900 border border-[#926F12] text-white py-1.5 px-3.5 rounded-full text-[11px] font-medium whitespace-nowrap shadow-lg flex items-center gap-1.5 select-none"
            >
              <Heart size={11} className="text-amber-400 fill-amber-400 animate-pulse" />
              <span>Have a question? Ask here!</span>
              <div className="w-2.5 h-2.5 bg-zinc-900 border-r border-b border-[#926F12] rotate-45 absolute -right-1 top-1/2 -translate-y-1/2" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.93 }}
          onClick={handleOpenToggle}
          className={`h-14 w-14 rounded-full flex items-center justify-center shadow-xl text-white outline-none cursor-pointer relative transition-all ${
            isOpen 
              ? "bg-zinc-805 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700" 
              : "bg-emerald-600 hover:bg-emerald-500 border border-[#926F12] bg-gradient-to-tr from-emerald-600 via-emerald-700 to-[#926F12] shadow-emerald-500/10"
          }`}
          aria-label="WhatsApp Support Popup"
        >
          {isOpen ? (
            <X size={24} className="text-orange-400 animate-spin animate-once animate-duration-300" />
          ) : (
            <>
              {/* Pulsing glow ring */}
              <span className="animate-ping absolute inset-0 -m-1 rounded-full bg-emerald-500 opacity-20 pointer-events-none" />
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.419 5.422 0 12.083 0c3.229.001 6.262 1.258 8.543 3.541A11.974 11.974 0 0 1 24.167 12c-.003 6.64-5.42 12.039-12.077 12.039-2.001-.001-3.971-.497-5.727-1.439L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.3 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7c-5.3 0-9.7 4.3-9.7 9.7 0 1.9.5 3.7 1.5 5.3L2.3 21.7l4.35-1.146zm11.332-6.52c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.668.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347h.001z"/>
              </svg>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
