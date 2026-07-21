import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Laptop, Users, Target, UserCheck } from "lucide-react";
import { motion } from "motion/react";

const BENEFITS = [
  {
    icon: UserCheck,
    title: "Max 15 Members Per Batch",
    description: "Every cohort is hard-capped at 15 members to guarantee personalized 1-on-1 support, meticulous live pull-request reviews, and deep mentor attention."
  },
  {
    icon: Users,
    title: "Elite Industry Mentorship",
    description: "Learn live from proven professionals who understand real-scale SaaS products, data warehouses, and secure cloud architectures."
  },
  {
    icon: Laptop,
    title: "100% Practical Forge Syllabus",
    description: "No dry theoretical PDFs. Launch actual cloud instances, design SQL tables, and build machine learning workflows in interactive sandboxes."
  },
  {
    icon: Target,
    title: "Built for Placement",
    description: "Curriculum designed to bypass the traditional academic loop, focusing directly on high-income tech skills that hiring managers seek."
  },
  {
    icon: Zap,
    title: "Accelerated Learning Path",
    description: "Go from fundamentals to deploying complex AWS infrastructures and analytical dashboards within a structured, high-intensity timeline."
  },
  {
    icon: ShieldCheck,
    title: "Durable Career Placement",
    description: "Leverage direct mock interview loops, precise resume tuning, and corporate network matching to step into first-tier technology roles."
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Alum Network",
    description: "Gain permanent access to exclusive alumni directories on Zoho, Freshworks, and global platforms for collaborative peer references."
  }
];

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-[#fafafc] border-y border-zinc-200">
      {/* Decorative background patterns */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#F5B400]/4 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 font-sans relative">
          <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3">
            THE SKILL FORGE DIFFERENCE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-6">
            Why Choose <span className="gold-gradient">Skill Forge</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
            We operate like an elite tech team, not a slow-moving academic institution. Every project you build is modeled after a real-world industry ticket.
          </p>
        </div>

        {/* 2-Column layout with the brand image on one side to fill the GAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Beautiful high quality interactive training work image */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white border border-zinc-200 p-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
            <div className="relative h-[280px] sm:h-[350px] lg:h-full w-full overflow-hidden rounded-2xl border border-zinc-150">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Elite Developer Training & Collaboration Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent flex flex-col justify-end p-6 text-left" />
              
              <div className="absolute bottom-6 left-6 right-6 text-left z-20">
                <span className="font-mono text-[9px] text-amber-400 font-bold tracking-widest uppercase mb-1 block">
                  CAP-REGULATED COHORTS
                </span>
                <h4 className="text-white text-lg font-bold tracking-tight leading-snug">
                  Interactive real-time syncs limited strictly to 15 students to guarantee optimal career mentoring.
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Key structured benefits with custom Highlighter Underline */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-zinc-200 hover:border-amber-400 p-5 sm:p-6 flex flex-col items-start text-left group transition-all duration-300 rounded-2xl relative shadow-sm hover:shadow-md"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-50/60 flex items-center justify-center mb-4 text-amber-600 group-hover:bg-[#F5B400]/15 transition-colors duration-300">
                    <Icon size={18} className="stroke-[2]" />
                  </div>
                  
                  {/* Title wrapping a custom handwritten-style marker underline */}
                  <div className="relative mb-3 mt-1.5 inline-block pb-1 select-none">
                    <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight transition-colors font-sans relative z-10">
                      {b.title}
                    </h3>
                    
                    {/* Hand-drawn marker underline highlighting exactly the student benefit title */}
                    <div className="absolute -bottom-1 left-0 right-0 h-1.5 pointer-events-none -rotate-1 origin-left z-0 opacity-70 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300">
                      <svg className="w-full h-full overflow-visible text-[#F5B400]" viewBox="0 0 120 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 1 4 C 40 1.8, 80 3, 119 2 C 80 2.5, 40 1, 1 4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                    
                  <p className="text-zinc-500 text-xs leading-relaxed font-light mt-1.5">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
