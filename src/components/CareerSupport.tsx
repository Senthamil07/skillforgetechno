import React from "react";
import { HeartHandshake, Check } from "lucide-react";

export const CareerSupport: React.FC = () => {
  const supportPoints = [
    {
      title: "1-on-1 Expert Consulting",
      desc: "Our mentors map your custom aptitude profile to recommended jobs as you approach program exit blocks.",
    },
    {
      title: "Interactive CV Grooming",
      desc: "Reformat your project sections to match technical patterns that resume readers and automated tracking systems look for.",
    },
    {
      title: "Mock Interview Simulations",
      desc: "Work through actual live logic tests and systems architecture rounds with veteran managers from partner firms.",
    },
    {
      title: "Hiring Partner Direct Channels",
      desc: "Get referred automatically via internal networks for tech vacancies that are rarely listed on standard boards.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-white border-y border-zinc-200 overflow-hidden font-sans">
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-[#F5B400]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Detailed breakdown */}
          <div className="text-left font-sans">
            <span className="font-mono text-xs text-amber-700 font-semibold tracking-widest uppercase inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full mb-6">
              <HeartHandshake size={14} className="text-amber-600" /> Professional Bridge
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
              Elite Placement & <span className="gold-gradient">Career Support</span>
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-light">
              Securing a transition involves more than learning syntax. Our core coaching structure runs in parallel with your tech curriculum, preparing you for senior stakeholder interviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supportPoints.map((pt, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-[#fdf8e3]/80 border border-amber-300 flex items-center justify-center">
                    <Check size={12} className="text-amber-700 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-zinc-900 mb-1">
                      {pt.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics stats showcase */}
          <div className="relative p-8 md:p-10 bg-white border border-zinc-250/80 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="absolute -top-12 -right-12 h-32 w-32 bg-amber-200/10 rounded-full blur-2xl" />
            
            <div className="text-left mb-8 font-sans">
              <span className="text-[10px] font-mono text-amber-700 tracking-wider uppercase block font-semibold">
                Average Outcomes
              </span>
              <h3 className="font-sans font-bold text-lg md:text-xl text-zinc-900 mt-1">
                Active Placement Indicators
              </h3>
            </div>

            <div className="space-y-6 font-sans">
              {/* Stat 1 */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                <div className="text-left">
                  <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-zinc-950">12 Days</h4>
                  <p className="text-zinc-500 text-xs font-light">Avg. Response Time after referral</p>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">✓ Accelerated</span>
              </div>

              {/* Stat 2 */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                <div className="text-left">
                  <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-zinc-950">40+ Partners</h4>
                  <p className="text-zinc-500 text-xs font-light">Actively hiring ed-tech candidates</p>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">✓ Connected</span>
              </div>

              {/* Stat 3 */}
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <h4 className="font-sans font-extrabold text-2xl md:text-3xl text-zinc-950">96%</h4>
                  <p className="text-zinc-500 text-xs font-light">Candidate transition match rate</p>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">✓ Highly Reliable</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
