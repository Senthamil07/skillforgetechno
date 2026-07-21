import React from "react";
import { 
  FileCode, 
  Users, 
  CheckSquare, 
  Terminal 
} from "lucide-react";
import { motion } from "motion/react";

export const ForgePortalSection: React.FC = () => {
  const portalFeatures = [
    {
      id: "works-achievements",
      label: "Phase 01",
      title: "Student Works & Achievements",
      subtitle: "Engineering Portfolio & Badges",
      description: "Keep a transparent, live registry of all compiled assets, schemas, and public apps while unlocking verified credential badges and speed records.",
      icon: <FileCode className="w-4 h-4 text-amber-600" />,
      stats: [
        { name: "Portfolio Status", value: "Verified Public Link" },
        { name: "Leaderboard Badges", value: "8 Key Milestones" }
      ],
      features: [
        "Live portfolio host directories",
        "Social credential badges",
        "Recruiter-facing profile logs"
      ],
      badge: "Completed & Verified"
    },
    {
      id: "attendance-recording",
      label: "Phase 02",
      title: "Attendances & Recording Hubs",
      subtitle: "Live Check-Ins & Lecture Vaults",
      description: "Seamless daily synchronised check-ins to monitor batch progress, paired with instant access to the extensive library of timestamped recording assets.",
      icon: <Users className="w-4 h-4 text-amber-600" />,
      stats: [
        { name: "Daily Attendance", value: "98.2% Avg Sync Rate" },
        { name: "Lectures Archived", value: "120+ Hours Stream" }
      ],
      features: [
        "One-click batch check-ins",
        "Topic timestamp seek logs",
        "Downloadable class assets"
      ],
      badge: "Attendance Sync"
    },
    {
      id: "assessments-assignments",
      label: "Phase 03",
      title: "Assessments & Assignments",
      subtitle: "Diagnostics & Git Repository Tracing",
      description: "Evaluate practical skills with weekly timed exams, integrated directly with secure Git repository tracking for immediate PR formatting feedback.",
      icon: <CheckSquare className="w-4 h-4 text-amber-600" />,
      stats: [
        { name: "Exams Completed", value: "48+ Sessions" },
        { name: "Code Tracking", value: "On-Push CI Triggers" }
      ],
      features: [
        "Interactive syntax sandboxes",
        "Git Hook quality analysis",
        "Space & time complexity metrics"
      ],
      badge: "Production Standards"
    },
    {
      id: "projects-capstones",
      label: "Phase 04",
      title: "Projects & Capstones",
      subtitle: "Multi-Container Systems Hosting",
      description: "Build, configure, and host production-grade full stack applications complete with VPC subnets, active RDS, and live domain recruiting urls.",
      icon: <Terminal className="w-4 h-4 text-amber-600" />,
      stats: [
        { name: "Hosted Capstones", value: "3 Production Deploys" },
        { name: "Review Frequency", value: "Weekly Active Audits" }
      ],
      features: [
        "Database index load tests",
        "Security group rules validation",
        "Live presentations review panel"
      ],
      badge: "Recruiter-Ready"
    }
  ];

  return (
    <section id="portal-ecosystem" className="relative py-12 sm:py-20 lg:py-24 bg-[#fafafc] border-t border-zinc-200 overflow-hidden font-sans">
      {/* Decorative ambient background flares */}
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] bg-[#F5B400]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] bg-[#F5B400]/4 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Visual background dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-mono text-[10px] text-amber-700 font-semibold tracking-widest uppercase block mb-3 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full w-fit mx-auto">
            ELITE STUDENT ACCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-4">
            Unified <span className="gold-gradient animate-pulse">Forge Portal</span> System
          </h2>
          <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Elite workspace access in Skill Forge designed exclusively for tracking student works, live achievements, batch attendances, assessments, assignments, projects, and recording hubs. Combined seamlessly into 4 strategic dual-aspect phases.
          </p>
        </div>

        {/* Compact Responsive Sequence - Staggered Up/Down Layout on Desktop, Grid on Mobile */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap gap-6 pb-12 pt-6 px-4 justify-center items-stretch"
        >
          {portalFeatures.map((fe, idx) => {
            const isEven = idx % 2 === 0;
            // Alternating compact vertical translations
            const staggerClass = isEven ? "lg:translate-y-4" : "lg:-translate-y-4";
            
            return (
              <div 
                key={fe.id} 
                className={`w-full max-w-md mx-auto lg:w-[280px] xl:w-[290px] lg:shrink-0 relative transition-all duration-300 ${staggerClass}`}
              >
                
                {/* Horizontal flow line curves linking cards visually */}
                {idx < portalFeatures.length - 1 && (
                  <div className="hidden lg:block absolute left-[calc(100%_-_10px)] top-1/2 -translate-y-1/2 w-16 h-28 pointer-events-none z-20">
                    <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 60 100" preserveAspectRatio="none">
                      {isEven ? (
                        <>
                          <path
                            d="M 2 70 C 25 70, 35 30, 58 30"
                            stroke="#926F12"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="4 4"
                            fill="none"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            d="M 2 30 C 25 30, 35 70, 58 70"
                            stroke="#926F12"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="4 4"
                            fill="none"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                )}

                {/* Smaller, ultra-compact Card layout with perfect aesthetics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-zinc-200 hover:border-amber-400 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md relative group overflow-hidden z-10 flex flex-col justify-between min-h-[380px] lg:min-h-[410px] select-none text-left transition-all duration-300"
                >
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-[#F5B400]/5 rounded-full blur-[24px] pointer-events-none group-hover:bg-[#F5B400]/10 transition-all duration-300" />
                  
                  <div>
                    {/* Header: Icon & labels */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors duration-300">
                        {fe.icon}
                      </div>
                      <span className="font-mono text-[8px] text-[#926F12] font-semibold tracking-widest bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {fe.label}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mb-2">
                      <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-900 tracking-tight leading-snug group-hover:text-[#926F12] transition-colors duration-200">
                        {fe.title}
                      </h3>
                      <p className="text-zinc-400 font-mono text-[9px] mt-0.5 tracking-wide uppercase font-semibold">
                        {fe.subtitle}
                      </p>
                    </div>

                    <p className="text-zinc-500 text-[11px] leading-relaxed mb-4 font-light">
                      {fe.description}
                    </p>
                  </div>

                  <div>
                    {/* Compact diagnostic specifications tracker */}
                    <div className="grid grid-cols-2 gap-1.5 p-2 bg-zinc-50 rounded-xl mb-3 border border-zinc-150">
                      {fe.stats.map((st, i) => (
                        <div key={i}>
                          <span className="text-[8px] text-zinc-400 font-mono tracking-wider block uppercase mb-0.5">
                            {st.name}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-700 block truncate">
                            {st.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Checked features list */}
                    <div className="space-y-1 font-light">
                      {fe.features.map((item, idy) => (
                        <div key={idy} className="flex items-start gap-1.5 text-xs text-zinc-650">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                          <span className="leading-tight text-[10px] font-light text-zinc-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
