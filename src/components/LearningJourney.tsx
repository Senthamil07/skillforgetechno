import React from "react";
import { Speech, BookOpen, Layers, Trophy, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Career Consultation",
      desc: "Connect with industry experts to map your aptitude, experience levels, and career transition trajectories toward optimal learning tracks.",
      icon: <Speech className="w-5 h-5 text-amber-600" />,
    },
    {
      num: "02",
      title: "Interactive Mastery",
      desc: "Ditch static reading lists. Enter active live sessions, hands-on server configurations, cluster designs, or statistical modeling playgrounds.",
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
    },
    {
      num: "03",
      title: "Portfolio Development",
      desc: "Synthesize lessons into highly polished capstones. Deploy solutions live, write clear README briefs, and push real codebases to your repository.",
      icon: <Layers className="w-5 h-5 text-amber-600" />,
    },
    {
      num: "04",
      title: "Placement Preparation",
      desc: "Complete dry-run technical panel simulations, specialized resume critiques, and intensive professional presentation grooming.",
      icon: <Trophy className="w-5 h-5 text-amber-600" />,
    },
    {
      num: "05",
      title: "Hiring Partnerships",
      desc: "Tap into our alumni referral channels and secure interviews with partner modern tech companies looking for competent practical minds.",
      icon: <BadgeCheck className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <section id="journey" className="relative py-12 sm:py-20 lg:pt-28 lg:pb-36 bg-white border-y border-zinc-200 overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 font-sans relative">
          <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full w-fit mx-auto">
            The Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mt-3">
            Your Education <span className="gold-gradient">Journey</span>
          </h2>
          <p className="text-zinc-650 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-light">
            How we take you from step zero to structural competency and your next professional placement.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Main Staggered Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 relative z-10 font-sans">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              // Alternate UP and DOWN positions for gorgeous layout cadence
              const staggerClass = isEven ? "lg:translate-y-8" : "lg:-translate-y-8";
              
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 relative transition-all duration-300 ${staggerClass}`}
                >
                  
                  {/* Connective Staggered Arrow (Curves perfectly up-and-down towards the next card) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[calc(100%_-_12px)] top-1/2 -translate-y-1/2 w-[42px] h-32 pointer-events-none z-20">
                      <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 40 100" preserveAspectRatio="none">
                        {isEven ? (
                          <>
                            {/* Even (Lower) to Odd (Higher) -> curves UP */}
                            <path
                              d="M 2 75 C 20 75, 20 25, 38 25"
                              stroke="#926F12"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeDasharray="4 4"
                            />
                            {/* Bold arrow tipping helper */}
                            <path
                              d="M 32 20 L 39 25 L 32 30 Z"
                              fill="#926F12"
                            />
                          </>
                        ) : (
                          <>
                            {/* Odd (Higher) to Even (Lower) -> curves DOWN */}
                            <path
                              d="M 2 25 C 20 25, 20 75, 38 75"
                              stroke="#926F12"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeDasharray="4 4"
                            />
                            {/* Bold arrow tipping helper */}
                            <path
                              d="M 32 70 L 39 75 L 32 80 Z"
                              fill="#926F12"
                            />
                          </>
                        )}
                      </svg>
                    </div>
                  )}

                  {/* Premium, interactive, highly-scalable cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group bg-white border border-zinc-200 hover:border-amber-400 p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left relative min-h-[290px] flex flex-col justify-between"
                  >
                    
                    <div>
                      {/* Step index badge indicator on top */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="p-2.5 bg-amber-50 rounded-xl group-hover:bg-[#F5B400]/15 text-amber-700 transition-colors">
                          {step.icon}
                        </div>
                        <span className="font-mono text-3xl font-extrabold text-zinc-100 group-hover:text-amber-500/10 transition-colors select-none leading-none">
                          {step.num}
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-base text-zinc-900 group-hover:text-[#926F12] transition-colors mt-2 mb-2.5 tracking-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-zinc-500 text-xs md:text-[12px] leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono font-semibold tracking-widest text-[#926F12] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>MILESTONE {step.num}</span>
                      <span>✓ ACTIVE</span>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
