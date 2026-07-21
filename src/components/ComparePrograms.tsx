import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  HelpCircle, 
  Clock, 
  Cpu, 
  TrendingUp, 
  Cloud, 
  Code, 
  Terminal, 
  Briefcase, 
  FileText, 
  Layers, 
  Users, 
  Target,
  ChevronRight,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface CompareProgramsProps {
  onInquireClick: (courseName: string) => void;
}

interface CompareRow {
  label: string;
  description: string;
  ds: React.ReactNode | string;
  da: React.ReactNode | string;
  cloud: React.ReactNode | string;
}

export const ComparePrograms: React.FC<CompareProgramsProps> = ({ onInquireClick }) => {
  const [activeMobileTab, setActiveMobileTab] = useState<"ds" | "da" | "cloud">("ds");

  // Rich metadata comparison structure
  const comparisonRows: CompareRow[] = [
    {
      label: "Primary Focus",
      description: "The core technical and professional focus of the program.",
      ds: "Harness AI, Machine Learning, and statistics to build predictive engines, train deep learning models, and write decision-making algorithms.",
      da: "Clean raw databases, construct interactive reports, build KPI metrics dashboards, and deliver visual business intelligence.",
      cloud: "Design high-availability cloud infrastructure, deploy serverless code, automate containerized CI/CD pipelines, and secure networks."
    },
    {
      label: "Duration & Hours",
      description: "Total course length and active training timeline.",
      ds: "6 Months (240+ Hours)",
      da: "4 Months (160+ Hours)",
      cloud: "3 Months (120+ Hours)"
    },
    {
      label: "Programming Level",
      description: "Prior programming exposure needed before starting.",
      ds: (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
          Intermediate (Python/Stats)
        </span>
      ),
      da: (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
          Beginer Friendly (Excel/SQL)
        </span>
      ),
      cloud: (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
          Beginner to Intermediate
        </span>
      )
    },
    {
      label: "Core Technologies",
      description: "Flagship tools and software packages mastered in active labs.",
      ds: (
        <div className="flex flex-wrap gap-1.5">
          {["Python", "PyTorch", "SQL", "Scikit-Learn", "NumPy", "Pandas", "Hugging Face"].map((t) => (
            <span key={t} className="text-[11px] font-mono font-semibold bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200">
              {t}
            </span>
          ))}
        </div>
      ),
      da: (
        <div className="flex flex-wrap gap-1.5">
          {["Power BI", "Tableau", "Excel Basics", "SQL Analytics", "PostgreSQL", "Data Wrangling"].map((t) => (
            <span key={t} className="text-[11px] font-mono font-semibold bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200">
              {t}
            </span>
          ))}
        </div>
      ),
      cloud: (
        <div className="flex flex-wrap gap-1.5">
          {["AWS Services", "Terraform", "Docker", "Lambda", "VPC Networking", "GitHub Actions", "Linux Shell"].map((t) => (
            <span key={t} className="text-[11px] font-mono font-semibold bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200">
              {t}
            </span>
          ))}
        </div>
      )
    },
    {
      label: "Curriculum Highlight",
      description: "Leading modules covered inside our strict syllabus.",
      ds: (
        <ul className="text-xs text-zinc-650 space-y-1.5 text-left font-sans">
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>Supervised & Unsupervised ML</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>Deep Neural Networks & PyTorch</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>AI Agents & LLM Fine-Tuning</span>
          </li>
        </ul>
      ),
      da: (
        <ul className="text-xs text-zinc-650 space-y-1.5 text-left font-sans">
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>SQL ETL Pipelines & Joins</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>KPI Modelling & Trend Forecasts</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>Executive Dashboard Visuals</span>
          </li>
        </ul>
      ),
      cloud: (
        <ul className="text-xs text-zinc-650 space-y-1.5 text-left font-sans">
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>Infrastructure as Code (Terraform)</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>Docker Containerization & Virtualization</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#F5B400] shrink-0 mt-0.5" />
            <span>VPC, IAM Cloud Security & Lambda</span>
          </li>
        </ul>
      )
    },
    {
      label: "Capstone Projects",
      description: "The primary portfolio project required to unlock graduation status.",
      ds: "Predictive Churn Engine & Deployment + Custom AI Agent Assistant integrated with LangChain.",
      da: "E-Commerce Enterprise Dashboard mapping global sales KPIs, with raw SQL database sync sheets.",
      cloud: "Multi-region secure web cluster deployed via Terraform with Docker and auto-scaling group limits."
    },
    {
      label: "Career Paths",
      description: "Primary job roles unlocked by successful alumni placements.",
      ds: "Data Scientist, Machine Learning Engineer, NLP Engineer, Quantitative Analyst",
      da: "Data Analyst, Business Intelligence Developer, Operations Analyst, Metrics Engineer",
      cloud: "Cloud Security Architect, DevOps Specialist, AWS System Administrator, SRE Engineer"
    },
    {
      label: "Lab Exercises",
      description: "Hands-on environments run on real infrastructure.",
      ds: "25+ Python notebooks, PyTorch training cycles, deep-learning optimizations.",
      da: "15+ Interactive dashboard maps, retail analytical joins, forecasting formulas.",
      cloud: "12+ Real AWS infrastructure environments, Terraform configurations, container clusters."
    },
    {
      label: "Strict Cohort Limits",
      description: "Maximum headcount per live mentor group to ensure customized help desks.",
      ds: "Strictly capped at 15 Seats",
      da: "Strictly capped at 15 Seats",
      cloud: "Strictly capped at 15 Seats"
    }
  ];

  return (
    <section id="compare" className="relative py-20 bg-white border-t border-zinc-200 overflow-hidden">
      {/* Dynamic atmospheric decoration matching Skill Forge branding */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full font-mono text-[10px] text-amber-800 font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Program Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-none mb-4 font-sans">
            Compare Flagship <span className="text-[#F5B400]">Programs</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
            Find the track that matches your exact ambitions. Browse our direct side-by-side comparison of curriculum highlights, deep-tech stacks, and durational scopes.
          </p>
        </div>

        {/* Desktop Layout: Side-by-Side Grid Matrix */}
        <div className="hidden md:block bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-zinc-100 border-b border-zinc-200">
                <th className="w-1/4 p-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  Program Criteria
                </th>
                
                {/* Data Science Column Header */}
                <th className="w-1/4 p-6 border-l border-zinc-200/80">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[9px] font-bold text-emerald-800 uppercase bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                      AI & Stats Track
                    </span>
                  </div>
                  <h3 className="font-sans font-extrabold text-zinc-900 text-base">
                    Data Science
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-400 mt-1 font-semibold uppercase">
                    Duration: 6 Months
                  </p>
                </th>

                {/* Data Analytics Column Header */}
                <th className="w-1/4 p-6 border-l border-zinc-200/80">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="font-mono text-[9px] font-bold text-amber-800 uppercase bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
                      BI & Reporting Track
                    </span>
                  </div>
                  <h3 className="font-sans font-extrabold text-zinc-900 text-base">
                    Data Analytics
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-400 mt-1 font-semibold uppercase">
                    Duration: 4 Months
                  </p>
                </th>

                {/* AWS Cloud & DevOps Column Header */}
                <th className="w-1/4 p-6 border-l border-zinc-200/80">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="font-mono text-[9px] font-bold text-blue-800 uppercase bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md">
                      SRE & Infra Track
                    </span>
                  </div>
                  <h3 className="font-sans font-extrabold text-zinc-900 text-base">
                    AWS Cloud & DevOps
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-400 mt-1 font-semibold uppercase">
                    Duration: 3 Months
                  </p>
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-zinc-200/80">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-6 font-sans">
                    <h4 className="font-bold text-zinc-800 text-xs uppercase tracking-wider font-mono">
                      {row.label}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-light leading-normal mt-1 max-w-[200px]">
                      {row.description}
                    </p>
                  </td>
                  
                  {/* Data Science Value */}
                  <td className="p-6 border-l border-zinc-200/80 text-xs font-sans text-zinc-650 leading-relaxed font-light">
                    {row.ds}
                  </td>

                  {/* Data Analytics Value */}
                  <td className="p-6 border-l border-zinc-200/80 text-xs font-sans text-zinc-650 leading-relaxed font-light">
                    {row.da}
                  </td>

                  {/* AWS Cloud & DevOps Value */}
                  <td className="p-6 border-l border-zinc-200/80 text-xs font-sans text-zinc-650 leading-relaxed font-light">
                    {row.cloud}
                  </td>
                </tr>
              ))}

              {/* CTAs Row */}
              <tr className="bg-zinc-100/50">
                <td className="p-6 font-mono text-xs uppercase tracking-wider font-extrabold text-zinc-500">
                  Active Enrollment
                </td>
                
                {/* Data Science CTA */}
                <td className="p-6 border-l border-zinc-200/80">
                  <button
                    onClick={() => onInquireClick("Data Science Specialization")}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5B400] hover:text-black transition-all cursor-pointer shadow-sm shadow-zinc-900/5"
                  >
                    <span>Enroll DS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </td>

                {/* Data Analytics CTA */}
                <td className="p-6 border-l border-zinc-200/80">
                  <button
                    onClick={() => onInquireClick("Data Analytics Program")}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#F5B400] text-black rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-950 hover:text-white transition-all cursor-pointer shadow-sm shadow-amber-500/10"
                  >
                    <span>Enroll DA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </td>

                {/* AWS Cloud & DevOps CTA */}
                <td className="p-6 border-l border-zinc-200/80">
                  <button
                    onClick={() => onInquireClick("AWS Cloud & DevOps Specialist")}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5B400] hover:text-black transition-all cursor-pointer shadow-sm shadow-zinc-900/5"
                  >
                    <span>Enroll Cloud</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Layout: Clean Swipeable Tabs Matrix */}
        <div className="block md:hidden">
          
          {/* Custom responsive sticky tab selector */}
          <div className="flex bg-zinc-100 border border-zinc-200 rounded-xl p-1 mb-6 gap-1">
            <button
              onClick={() => setActiveMobileTab("ds")}
              className={`flex-1 py-3 text-center rounded-lg font-mono text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeMobileTab === "ds"
                  ? "bg-zinc-900 text-[#F5B400] shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => setActiveMobileTab("da")}
              className={`flex-1 py-3 text-center rounded-lg font-mono text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeMobileTab === "da"
                  ? "bg-zinc-900 text-[#F5B400] shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Data Analytics
            </button>
            <button
              onClick={() => setActiveMobileTab("cloud")}
              className={`flex-1 py-3 text-center rounded-lg font-mono text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeMobileTab === "cloud"
                  ? "bg-zinc-900 text-[#F5B400] shadow-sm"
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              AWS Cloud
            </button>
          </div>

          {/* Dynamic Program Highlight Card for Mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMobileTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
                <div>
                  <h3 className="font-sans font-black text-xl text-zinc-900">
                    {activeMobileTab === "ds" ? "Data Science Specialization" : activeMobileTab === "da" ? "Data Analytics Program" : "AWS Cloud & DevOps Specialist"}
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#926F12] bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                    {activeMobileTab === "ds" ? "6 Months Timeline" : activeMobileTab === "da" ? "4 Months Timeline" : "3 Months Timeline"}
                  </span>
                </div>
              </div>

              {/* List out compared criteria values vertically for supreme readability */}
              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400]" />
                      <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        {row.label}
                      </h4>
                    </div>
                    <div className="text-zinc-700 text-sm font-sans font-light leading-relaxed pl-3 border-l border-zinc-200">
                      {activeMobileTab === "ds" ? row.ds : activeMobileTab === "da" ? row.da : row.cloud}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <button
                  onClick={() => {
                    const cName = activeMobileTab === "ds" 
                      ? "Data Science Specialization" 
                      : activeMobileTab === "da" 
                      ? "Data Analytics Program" 
                      : "AWS Cloud & DevOps Specialist";
                    onInquireClick(cName);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 bg-zinc-900 hover:bg-[#F5B400] text-white hover:text-black rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  <span>Inquire About This Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Small Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-[10px] sm:text-xs font-mono font-semibold text-zinc-450 uppercase tracking-widest flex items-center justify-center gap-2">
            <span>All tracks are backed by our</span>
            <span className="text-zinc-800 font-bold border-b border-amber-400 pb-0.5">Dual-Method Career Guarantee</span>
          </p>
        </div>

      </div>
    </section>
  );
};
