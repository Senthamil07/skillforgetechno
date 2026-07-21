import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("q1");

  const faqs: FAQItem[] = [
    {
      id: "q1",
      question: "What qualifications do the trainers hold?",
      answer: "All Skill Forge Technology instructors are senior practitioners actively working or consulting at global tech giants. They hold 9 to 15+ years of practical field experience in Data Science, Cloud architecture, and Business Intelligence, rather than just academic theories.",
    },
    {
      id: "q2",
      question: "Why did you replace standard week duration milestones in your brochures?",
      answer: "Because technology curricula update constantly, and static months or weeks are misleading. Instead, we commit 100% to our robust modular syllabus, real deployment labs, and student portfolio blocks. You progress based on practical milestone checkpoints of your code files.",
    },
    {
      id: "q3",
      question: "How was the student placement track record structured?",
      answer: "With genius-like technical grooming and portfolio alignment, our graduates are prepared to interview across the entire industry spectrum. We connect and refer you to elite networks ranging from top global MNCs to high-growth Tier-2 and Tier-3 enterprises, unlocking opportunities that perfectly match your individual career background and technical ambitions.",
    },
    {
      id: "q4",
      question: "Does Skill Forge Technology guarantee job placements?",
      answer: "We provide comprehensive placement assistance—including 1-on-1 resume grooming, interview drills with senior staff, and direct referral coordinates to our hiring partner networks. Getting a job depends ultimately on your capstone code quality, but we guide you relentlessly to ensure interviews.",
    },
    {
      id: "q5",
      question: "Is there support for working professionals?",
      answer: "Absolutely. Our hybrid learning templates, weekend syncups, and recorded lab checkpoints are explicitly designed to align with busy working, consulting, or scholastic responsibilities.",
    },
    {
      id: "q6",
      question: "Are there any eligibility requirements to apply?",
      answer: "No prior programming degrees are strictly mandatory, but basic analytical aptitude, willingness to work hard, and access to a reliable computer system are critical to withstand our intense practical training sessions.",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-12 sm:py-20 lg:py-24 bg-white border-t border-zinc-200 overflow-hidden">
      {/* Visual glowing accent */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-20 bg-[#F5B400]/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 font-sans">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 relative">
          <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase inline-flex items-center gap-1.5 mb-3">
            <HelpCircle size={13} /> Common Queries
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mt-3">
            Frequently Asked <span className="gold-gradient">Questions</span>
          </h2>
          <p className="text-zinc-650 mt-4 text-xs sm:text-sm leading-relaxed font-light">
            Have questions about admission processes, certifications, or mentoring? Explore our direct responses below.
          </p>
        </div>

        {/* Collapsible Panel List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-amber-50/20 border-amber-300/60 shadow-sm" 
                    : "bg-white border-zinc-200 shadow-sm hover:border-zinc-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-sans text-zinc-900 hover:text-[#926F12] transition-colors focus:outline-none"
                >
                  <span className="text-sm md:text-base pr-4 leading-relaxed font-bold">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 p-1 bg-white rounded border border-zinc-200 text-zinc-600">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Animated expand panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-6 text-zinc-550 text-xs md:text-sm leading-relaxed border-t border-zinc-100 pt-4 font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
