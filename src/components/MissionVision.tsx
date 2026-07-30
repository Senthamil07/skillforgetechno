import React, { useState } from "react";
import { 
  Target, 
  Compass, 
  Sparkles, 
  Building, 
  Flame, 
  GraduationCap, 
  HeartHandshake,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Tv,
  ExternalLink,
  Users
} from "lucide-react";
import { motion } from "motion/react";

export const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "story" | "challenges" | "ecosystem" | "vision">("all");

 const foundersList = [
  "Ganesan Srinivasan (MD)",
  "Hari Krishnan Janarthanan (CEO)",
  "Senthamil Selvan (COO)",
  "Veath Prakash (CMO)",
];

  return (
    <section id="journey-blog" className="py-12 sm:py-20 lg:py-24 bg-[#fafafc] border-t border-b border-zinc-200 overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute left-1/3 top-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Editorial Header */}
        <div className="border-b border-zinc-300 pb-8 mb-12">
          <span className="font-mono text-[10px] text-amber-800 font-bold tracking-widest uppercase block mb-3 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full w-fit">
            INSIDER CHRONICLE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-4">
            The Skill Forge Story: From Online Startup to Scalable Future ERP Platform
          </h1>
          
          {/* Article Metadata Bar (Blog Style) with SEO slug */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-xs text-zinc-500 font-mono border-t border-zinc-200/60 mt-4">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-600" />
              <span>By: <strong>4 Co-Founders</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span>Established: <strong>2026</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span>Reading Time: <strong>8 min</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] rounded border border-amber-200">
                SEO Slug: <strong>/skill-forge-story-erp-platform</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="px-2 py-0.5 bg-zinc-100 text-zinc-700 text-[10px] rounded border border-zinc-200">
                Online Mode Active
              </span>
            </div>
          </div>
        </div>

        {/* Blog Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-zinc-200">
          {[
            { id: "all", label: "Read Entire Chronicle" },
            { id: "story", label: "I. How We Started" },
            { id: "challenges", label: "II. Core Challenges" },
            { id: "ecosystem", label: "III. ERP Learning Ecosystem" },
            { id: "vision", label: "IV. Future Vision" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout: Main Blog Column + Dynamic Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Reading Column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Core H1 SEO Heading requested by user */}
            <div className="border-b border-zinc-100 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-none">
                The Skill Forge Story
              </h1>
              <p className="text-zinc-500 text-sm mt-2 italic">Building a Future-Ready ERP Ecosystem</p>
            </div>
            
            {/* ARTICLE SECTION 1: HOW WE STARTED */}
            {(activeTab === "all" || activeTab === "story") && (
              <article className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    CHAPTER I
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  How Skill Forge Started Online
                </h2>
                
                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  In early <strong>2026</strong>, four technical leaders and educators aligned on a singular, urgent goal: to launch a high-caliber <strong>ERP training</strong> and <strong>SAP</strong> course.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  By taking an online-first stance, we completely eliminated geographical constraints. Traditional <strong>ERP training</strong> institutes and <strong>SAP</strong> centers often struggled to provide live, production-like experiences at scale.
                </p>

                {/* Editorial Genesis Teamwork Image */}
                <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 aspect-[21/9] my-6 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                    alt="High-performance virtual collaborative workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center pointer-events-none hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                {/* Pull Quote Box */}
                <div className="border-l-4 border-amber-500 bg-amber-50/40 p-4 rounded-r-xl my-6">
                  <p className="text-zinc-800 text-xs sm:text-sm font-medium italic leading-relaxed">
                    "We didn't want to build another passive offline school with physical overhead constraints. We engineered a highly connected, live operational portal where four founders directly supervised the learning and assessment process."
                  </p>
                  <span className="block mt-2 font-mono text-[9px] text-[#926F12] uppercase font-bold">
                    — Ganesan Srinivasan, Managing Director
                  </span>
                </div>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  Starting online has also allowed us to establish real-time feedback loops. Instead of waiting for weekly reviews, student submissions are integrated directly into our operational pipelines.
                </p>
              </article>
            )}

            {/* ARTICLE SECTION 2: CORE CHALLENGES */}
            {(activeTab === "all" || activeTab === "challenges") && (
              <article className="space-y-4 pt-6 border-t border-zinc-200/60">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    CHAPTER II
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  Challenges in Building the Platform
                </h2>
                
                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  Establishing a production-ready <strong>ERP training</strong> environment presented several complex structural challenges. Enterprise systems like <strong>SAP</strong> demand massive infrastructure and realistic data sets.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  To bypass these physical limitations, the engineering founders of <strong>Skill Forge</strong> designed a virtual sandbox pipeline. We created web-accessible cloud laboratory containers and scripted realistic business scenarios.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  The second key challenge was student accountability. Traditional virtual courses suffer from low completion rates. We solved this by implementing synchronized operational syncs and active mentoring.
                </p>
              </article>
            )}

            {/* ARTICLE SECTION 3: ERP LEARNING ECOSYSTEM */}
            {(activeTab === "all" || activeTab === "ecosystem") && (
              <article className="space-y-6 pt-6 border-t border-zinc-200/60">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    CHAPTER III
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  Scaling into an ERP Learning Ecosystem
                </h2>
                
                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  By refining our cloud architectures, <strong>Skill Forge</strong> successfully scaled from a remote online project into a fully fledged enterprise education ecosystem. This ecosystem emphasizes hands-on competency.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  Our scalable education ecosystem is built entirely on code competency. Instead of boring theoretical exams, we evaluate students through active code repositories and active system deployments.
                </p>

                {/* Detailed Blog-Style Breakdown */}
                <div className="space-y-6 my-6 border-l border-zinc-200 pl-4 py-1">
                  <div>
                    <strong className="text-sm font-bold text-zinc-900 block mb-1">Active Pull Request Workflows</strong>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      Students commit their project code directly to GitHub. Automated unit tests and founders grade individual lines of code to maintain rigorous standards.
                    </p>
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-zinc-900 block mb-1">Live Multi-Container Sandboxes</strong>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      Students deploy live full-stack solutions, custom VPCs, and isolated database clusters, showcasing actual enterprise-ready technical competence.
                    </p>
                  </div>
                </div>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  This multi-phase training system equips our students with the skills required to secure top-tier roles. By teaching modern version control, real-time sync hub integrations, and project-based assessments, we ensure measurable outcomes.
                </p>
              </article>
            )}

            {/* ARTICLE SECTION 4: FUTURE VISION */}
            {(activeTab === "all" || activeTab === "vision") && (
              <article className="space-y-4 pt-6 border-t border-zinc-200/60 font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    CHAPTER IV
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  Future Vision of Skill Forge
                </h2>
                
                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  The future vision of <strong>Skill Forge</strong> focuses on bridging the gap between virtual learning and global career opportunities. We plan to expand our online-forged blueprints into strategic partnerships and physical hubs.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  We are also building deeper strategic alignments with top consultation firms, global enterprise partners, and tier-1 IT recruiters. This ensures our <strong>ERP training</strong> remains closely aligned with corporate needs.
                </p>

                <p className="text-zinc-650 text-sm leading-relaxed font-light">
                  Ultimately, <strong>Skill Forge</strong> is more than just an educational course; it is a long-term engine for upward career mobility. We are fully committed to helping every student maximize their career trajectory.
                </p>
              </article>
            )}

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Founders Card */}
            <div className="py-2">
              <h3 className="text-xs font-mono font-bold text-[#926F12] uppercase tracking-widest mb-3 border-b border-zinc-200 pb-2">
                Our Founders
              </h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed mb-4 font-light">
                Skill Forge was established in 2026 by 4 dedicated founders who continue to lead, refine curricula, and run live synchronizations:
              </p>
              
              <ul className="space-y-2.5">
                {foundersList.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEW: Educational Operating Pillars / Training Standards Card to fill the gap */}
            <div className="py-2">
              <h3 className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-3 border-b border-zinc-200 pb-2">
                Digital Training Standard
              </h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed mb-4 font-light">
                Our virtual online workspace runs on strict live parameters to guarantee high placement outcomes:
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 text-[#926F12] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 border border-zinc-200">
                    100%
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-850">Hands-on Git Submissions</h4>
                    <p className="text-zinc-500 text-[10px] leading-relaxed mt-0.5 font-light">
                      Students make live repositories. No mock submissions or static files.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 text-[#926F12] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 border border-zinc-200">
                    LIVE
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-850">Synchronous Video Sync</h4>
                    <p className="text-zinc-500 text-[10px] leading-relaxed mt-0.5 font-light">
                      Real-time interactive lectures overseen directly by our 4 founders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 text-[#926F12] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 border border-zinc-200">
                    SEEK
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-850">Recorded Vault seeking</h4>
                    <p className="text-zinc-500 text-[10px] leading-relaxed mt-0.5 font-light">
                      Instantly seek specific keywords or sub-topics across past recorded lessons.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 text-[#926F12] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 border border-zinc-200">
                    SYNC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-850">Live Sheets Dashboard</h4>
                    <p className="text-zinc-450 text-[10px] leading-relaxed mt-0.5 font-light">
                      Active tracking of program admissions, brochure requests, and scholarship status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Home Prompt */}
            <div className="pt-6 border-t border-zinc-200 text-left">
              <h4 className="text-xs font-bold text-zinc-900 mb-1">Looking for Course Details?</h4>
              <p className="text-zinc-500 text-[10px] leading-relaxed mb-3 font-light">
                Explore our specialized live cohorts in Data Science, Data Analytics, and AWS Cloud.
              </p>
              <a 
                href="#programs" 
                className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-800 hover:text-amber-950 uppercase tracking-wider"
              >
                <span>Browse Programs</span>
                <ArrowRight size={12} />
              </a>
            </div>

          </div>

        </div>

        {/* ARTICLE SECTION 3: MISSION & VISION - FULL WIDTH & CENTERED */}
        {(activeTab === "all" || activeTab === "vision") && (
          <article className="space-y-10 mt-16 pt-12 border-t border-zinc-200/80 max-w-5xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 w-fit">
                CHAPTER III
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 text-center tracking-tight">
                Our Core Mission & Strategic Vision
              </h2>
            </div>

            <div className="flex flex-col gap-16 mt-12">
              
              {/* Mission */}
              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-amber-50 rounded border border-amber-200">
                    <Target className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="font-extrabold text-xs text-zinc-900 uppercase tracking-widest font-mono">Our Mission</h4>
                </div>
                <p className="text-zinc-650 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
                  To deliver world-class technical skills and premium, direct-to-instructor mentorship through an optimized online-only refinery, bridging the gap between regional academic syllabi and enterprise-ready skills.
                </p>
                
                {/* One by One details arranged horizontally on larger screens */}
                <div className="border-t border-zinc-200/60 pt-6">
                  <h5 className="font-mono text-[10px] font-bold text-[#926F12] uppercase tracking-wider mb-5">Mission Objectives</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Democratizing Elite Skills</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Eliminating physical overheads to bring top industry curriculum to students anywhere.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Direct Accountability</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Regular synchronous checks directly overseen and graded by our 4 founders.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Verified Competency</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Evaluating student success entirely through active code repositories.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vision */}
              <div className="text-left border-t border-zinc-200 pt-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-amber-50 rounded border border-amber-200">
                    <Compass className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="font-extrabold text-xs text-zinc-900 uppercase tracking-widest font-mono">Our Vision</h4>
                </div>
                <p className="text-zinc-650 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
                  To pioneer an active, spreadsheet-backed technical learning standard that grows globally. We aim to scale from our virtual online root to strategic physical academies, empowering regional talent with enterprise-grade curriculum.
                </p>
                {/* One by One details arranged horizontally on larger screens */}
                <div className="border-t border-zinc-200/60 pt-6">
                  <h5 className="font-mono text-[10px] font-bold text-[#926F12] uppercase tracking-wider mb-5">Strategic Milestones</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Infrastructure Mastery</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Perfecting keyword-indexed video vaults and live-submission loops.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Relational Transparency</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Tracking admissions and learner benchmarks in real-time via sync sheets.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-800 text-xs block font-semibold">Blended Classrooms</strong>
                        <span className="text-zinc-500 text-xs leading-relaxed block font-light mt-1">Transitioning online-forged blueprints into physical hubs as we expand.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Special Student Quote: APJ Abdul Kalam */}
            <div className="relative mt-16 pt-10 border-t border-zinc-200">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="font-mono text-[9px] text-amber-700 font-bold tracking-widest uppercase">
                    WORDS OF WISDOM FOR STUDENTS
                  </span>
                </div>
                
                <blockquote className="text-base sm:text-lg md:text-xl italic font-light leading-relaxed text-zinc-800 pl-4 border-l-2 border-[#F5B400]">
                  "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great... If you want to shine like a sun, first burn like a sun."
                </blockquote>
                
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <cite className="not-italic text-xs font-bold text-zinc-900 block">
                      Dr. A.P.J. Abdul Kalam
                    </cite>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Former President of India, Scientist & Visionary Educator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

      </div>
    </section>
  );
};
