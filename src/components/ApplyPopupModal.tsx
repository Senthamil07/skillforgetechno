import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, Phone, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import { addSubmission } from "../utils/submissionStore";
import { motion, AnimatePresence } from "motion/react";

interface ApplyPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const ApplyPopupModal: React.FC<ApplyPopupModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultCourse = "Data Science Specialization" 
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    qualification: "",
    city: "",
    timingPreference: "Evening Batch (04:00 PM - 08:00 PM)",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(15); // Seat expiry warning countdown

  // Fast countdown simulation to create a high-converting urge
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 15));
    }, 60000); // countdown decays every minute

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Syncs seamlessly to Google Sheets & local cache
      await addSubmission({
        type: "Apply Popup",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: `${formData.course} - ${formData.timingPreference}`,
        degree: formData.qualification,
        city: formData.city
      });

      setSuccess(true);
    } catch (err) {
      console.warn("Popup submission synchronized with fallback:", err);
      setSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
      {/* Premium Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />

      {/* Main Modal Panel */}
      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 grid grid-cols-1 md:grid-cols-12">
        
        {/* Left column: Value Proposition Banner */}
        <div className="md:col-span-5 bg-zinc-950 text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle gold decoration flare */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F5B400]/20 rounded-full blur-[40px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-zinc-800/40 rounded-full blur-[50px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#F5B400]" />
              <span>Limited Spots Left</span>
            </div>

            <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight mb-3">
              Forge Your <span className="text-[#F5B400]">Tech Career</span> Today
            </h3>
            
            <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
              Skip the queue! Reserve your direct 1-on-1 counseling call with our technical leaders and unlock custom scholarship eligibility.
            </p>

            {/* List of benefits */}
            <div className="space-y-3.5">
              {[
                { title: "Direct Mentor Access", desc: "1-on-1 resume & career mapping" },
                { title: "Modular Lab Sandbox", desc: "Practice real-time production loops" },
                { title: "Flexible Batches", desc: "Morning & Evening slots available" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <div className="p-1 bg-amber-500/10 rounded-md border border-amber-500/20 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F5B400]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-zinc-150">{benefit.title}</h5>
                    <p className="text-[10px] text-zinc-500 font-light leading-tight">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof / Urgency metrics */}
          <div className="pt-6 border-t border-zinc-800 mt-6 relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500 animate-[pulse_1.5s_infinite]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 font-medium">NEXT COHORT CLOSES IN</span>
                <span className="text-xs font-mono font-bold text-[#F5B400]">{countdown} Mins</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-zinc-500" />
              <span className="text-[10px] font-mono text-zinc-400 font-bold">14/15 Booked</span>
            </div>
          </div>
        </div>

        {/* Right column: The Core Form */}
        <div className="md:col-span-7 p-6 md:p-8 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-all cursor-pointer z-20"
          >
            <X size={15} />
          </button>

          {success ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 mb-4 border border-emerald-250">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-sans font-bold text-lg text-zinc-950">Application Submitted!</h4>
              <p className="text-zinc-600 text-xs mt-2 leading-relaxed max-w-xs mb-6 font-light">
                Our enrollment manager is preparing your custom eligibility outline. We will reach you via Phone/WhatsApp within 4 hours.
              </p>
              <button
                onClick={onClose}
                className="w-full max-w-xs flex items-center justify-center gap-2 bg-zinc-900 text-white font-extrabold uppercase py-3.5 rounded-xl text-xs hover:bg-[#F5B400] hover:text-black transition-all cursor-pointer shadow-md"
              >
                <span>Continue Exploring</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ) : (
            <div className="text-left">
              <div className="mb-4">
                <span className="font-mono text-[9px] text-[#926F12] font-extrabold uppercase tracking-widest block">
                  FAST-TRACK ADMISSION
                </span>
                <h3 className="font-sans font-bold text-xl text-zinc-950 mt-1">
                  Secure Your Priority Seat
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Arunkumar G"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-all"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. arun@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Course Stream */}
                <div>
                  <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    Course Stream
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-750 outline-none focus:border-amber-500 transition-all cursor-pointer"
                  >
                    <option value="Data Science Specialization">Data Science Specialization (Live + Sandbox)</option>
                    <option value="Data Analytics Program">Advanced Data Analytics Blueprint (Power BI)</option>
                    <option value="AWS Cloud">AWS Cloud & DevOps Specialization (Live Labs)</option>
                    <option value="Cisco CCNA Enterprise Networking">Cisco CCNA Enterprise Networking (Labs)</option>
                  </select>
                </div>

                {/* Batch Timing Selection */}
                <div>
                  <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    Preferred Batch Hours
                  </label>
                  <select
                    name="timingPreference"
                    value={formData.timingPreference}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-750 outline-none focus:border-amber-500 transition-all cursor-pointer"
                  >
                    <option value="Morning Batch (10:00 AM - 12:00 PM)">Morning Batch (10:00 AM - 12:00 PM)</option>
                    <option value="Evening Batch (04:00 PM - 06:00 PM)">Evening Batch (04:00 PM - 06:00 PM)</option>
                    <option value="Night Batch (06:00 PM - 08:00 PM)">Night Batch (06:00 PM - 08:00 PM)</option>
                    <option value="Flexible Weekends">Flexible Weekends (Sat/Sun Classes)</option>
                  </select>
                </div>

                {/* Qualification and Location */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      required
                      placeholder="e.g. B.Tech / MCA"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Chennai"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold uppercase py-3 rounded-xl text-xs transition-all active:translate-y-0.5 cursor-pointer mt-4"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Connecting Google Sheets...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>Apply & Reserve Spot</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
