import React from "react";
import { Database, TrendingUp, Cloud, CheckCircle, ArrowUpRight, Clock, Briefcase, Video, Award, Sparkles, ShieldCheck } from "lucide-react";
import { Program } from "../types";

interface ProgramsProps {
  onInquireClick: (courseName: string) => void;
  onBrochureClick: () => void;
  onScholarshipsClick?: () => void;
}

// Custom multi-layered stacked card icon to match the beautiful stacked look in your screenshot
const StackedLayersIcon = ({ programId }: { programId: string }) => {
  let layer1 = "#3B82F6"; // blue
  let layer2 = "#F97316"; // orange
  let layer3 = "#F5B400"; // amber

  if (programId === "ds") {
    layer1 = "#10B981"; // emerald
    layer2 = "#6366F1"; // indigo
    layer3 = "#8B5CF6"; // purple
  } else if (programId === "da") {
    layer1 = "#F5B400"; // amber
    layer2 = "#EAB308"; // yellow
    layer3 = "#10B981"; // emerald
  } else if (programId === "cloud") {
    layer1 = "#06B6D4"; // cyan
    layer2 = "#3B82F6"; // blue
    layer3 = "#6366F1"; // indigo
  } else if (programId === "networking") {
    layer1 = "#00B4E5"; // cisco blue
    layer2 = "#3B82F6"; // blue
    layer3 = "#1E293B"; // slate
  } else if (programId === "ai") {
    layer1 = "#EC4899"; // pink
    layer2 = "#8B5CF6"; // purple
    layer3 = "#FF6F00"; // orange
  }

  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top layer */}
      <path d="M24 8L40 16L24 24L8 16L24 8Z" fill={layer1} />
      {/* Middle layer */}
      <path d="M8 22L24 30L40 22" stroke={layer2} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 22L24 30L40 22" fill={layer2} fillOpacity="0.2" />
      {/* Bottom layer */}
      <path d="M8 28L24 36L40 28" stroke={layer3} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 28L24 36L40 28" fill={layer3} fillOpacity="0.2" />
    </svg>
  );
};

const ProgramIconBox: React.FC<{ iconName: string; programId: string }> = ({ iconName, programId }) => {
  return (
    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl border border-zinc-200/80 shadow-xs flex items-center justify-center">
      <StackedLayersIcon programId={programId} />
    </div>
  );
};

// Inline SVG representations for popular technology icons
const ReactLogo = () => (
  <div className="flex items-center gap-1 text-[#00D8FF] font-medium" title="ReactJS">
    <svg className="w-7 h-7 animate-[spin_15s_linear_infinite]" viewBox="0 0 84.1 77.6" fill="none">
      <circle cx="42.0" cy="38.8" r="5.2" fill="currentColor"/>
      <ellipse cx="42.0" cy="38.8" rx="11.0" ry="33.0" stroke="currentColor" strokeWidth="2" transform="rotate(30 42 38.8)"/>
      <ellipse cx="42.0" cy="38.8" rx="11.0" ry="33.0" stroke="currentColor" strokeWidth="2" transform="rotate(90 42 38.8)"/>
      <ellipse cx="42.0" cy="38.8" rx="11.0" ry="33.0" stroke="currentColor" strokeWidth="2" transform="rotate(150 42 38.8)"/>
    </svg>
    <span className="font-sans font-bold text-xs text-zinc-800 hidden sm:inline">React</span>
  </div>
);

const NodeLogo = () => (
  <div className="flex items-center gap-1 text-[#539E43]" title="NodeJS">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 14.25l-6.5 3.75-6.5-3.75v-7.5l6.5-3.75 6.5 3.75v7.5z"/>
    </svg>
    <span className="font-sans font-extrabold text-xs tracking-tight text-zinc-800">node</span>
  </div>
);

const ExpressLogo = () => (
  <div className="flex items-center justify-center bg-[#1E1E24] text-white rounded-lg px-2 py-0.5 font-mono font-extrabold text-[11px] border border-zinc-700/50 shadow-xs" title="ExpressJS">
    ex
  </div>
);

const MongoLogo = () => (
  <div className="flex items-center gap-1 text-[#47A248]" title="MongoDB">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 1.5C11.5 1.5 6 6.5 6 12.5s5.5 10 6 10s6-4 6-10s-5.5-11-6-11zm0 18.5c-2.5-1.5-4-4.5-4-7.5s1.5-6 4-7.5v15zm0-15v15c2.5-1.5 4-4.5 4-7.5s-1.5-6-4-7.5z"/>
    </svg>
    <span className="font-sans font-semibold text-[10px] text-zinc-700 hidden sm:inline">Mongo</span>
  </div>
);

const PythonLogo = () => (
  <div className="flex items-center gap-1" title="Python">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M11.9 2C8.6 2 8 2.6 8 5.4V8H11.9V8.6H6.6C3.9 8.6 3 9.4 3 12.7v2.1c0 3.3.9 4.1 3.6 4.1H8v-2.7c0-2.8.6-3.4 3.9-3.4H15.8V10C15.8 7.2 15.2 6.6 11.9 6.6H10.5V6H11.9C14.6 6 15.5 5.2 15.5 1.9V1.4c0-.7-.4-.9-1-.9h-2.6v1.5z" fill="#306998" />
      <path d="M12.1 22c3.3 0 3.9-.6 3.9-3.4V16H12.1V15.4H17.4C20.1 15.4 21 14.6 21 11.3V9.2C21 5.9 20.1 5.1 17.4 5.1H16v2.7c0 2.8-.6 3.4-3.9 3.4H8.2V14C8.2 16.8 8.8 17.4 12.1 17.4H13.5V18H12.1C9.4 18 8.5 18.8 8.5 22.1v.5c0 .7.4.9 1 .9h2.6v-1.5z" fill="#FFE873" />
    </svg>
    <span className="font-sans font-semibold text-xs text-zinc-700 hidden sm:inline">Python</span>
  </div>
);

const SqlLogo = () => (
  <div className="flex items-center gap-1 text-[#00758F]" title="SQL Database">
    <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
    <span className="font-mono font-bold text-xs text-zinc-700">SQL</span>
  </div>
);

const PowerBiLogo = () => (
  <div className="flex items-end gap-0.5 bg-amber-50 border border-amber-200/60 rounded p-1 w-8 h-8" title="Power BI">
    <div className="w-1.5 h-3 bg-amber-400 rounded-xs" />
    <div className="w-1.5 h-5 bg-amber-500 rounded-xs" />
    <div className="w-1.5 h-6 bg-amber-600 rounded-xs" />
  </div>
);

const TableauLogo = () => (
  <div className="flex items-center justify-center w-8 h-8 text-orange-500" title="Tableau">
    <svg className="w-6 h-6 fill-current animate-pulse" viewBox="0 0 24 24">
      <path d="M12 0v24M0 12h24M5 5l14 14M5 19L19 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

const AwsLogo = () => (
  <div className="flex flex-col items-center justify-center text-[#FF9900]" title="Amazon Web Services">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M6 14.5c2 1.5 5 2 6 2s4-.5 6-2M18 13.5l1.5 2.5-2.5-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
    <span className="text-[8px] font-bold text-zinc-800 -mt-1 font-mono">aws</span>
  </div>
);

const CiscoLogo = () => (
  <div className="flex items-center gap-1.5 text-[#00B4E5]" title="Cisco Systems">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M4 14v-4h1v4H4zm3 2V8h1v8H7zm3 1V7h1v10h-1zm3 0V7h1v10h-1zm3-1V8h1v8h-1zm3-2v-4h1v4h-1z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
    <span className="font-sans font-bold text-xs text-zinc-850">Cisco</span>
  </div>
);

const TensorFlowLogo = () => (
  <div className="flex items-center gap-1.5 text-[#FF6F00]" title="TensorFlow">
    <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
      <path d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1l8-4.6z" />
      <path d="M12 6.5l5.2 3v6l-5.2 3-5.2-3v-6l5.2-3z" fill="currentColor" fillOpacity="0.25" />
    </svg>
    <span className="font-sans font-extrabold text-[11px] text-zinc-850">TF</span>
  </div>
);

export const Programs: React.FC<ProgramsProps> = ({ onInquireClick, onBrochureClick, onScholarshipsClick }) => {
  const customProgramsData: Program[] = [
    {
      id: "ds",
      title: "Data Science Specialization",
      iconName: "ds",
      description: "Harness the power of AI and machine learning to analyze datasets, train predictive models, and drive business decision-making.",
      features: [
        "Advanced statistical modeling & machine learning",
        "Deep learning with Neural Networks",
        "NLP & Computer Vision basics",
        "AI Agent and LLM prompt engineering integrations",
      ],
      tools: ["Python", "PyTorch", "SQL", "Scikit-Learn", "Numpy", "Pandas", "GitHub"],
      roleOutcomes: ["Data Scientist", "Machine Learning Engineer", "AI Researcher", "Decision Scientist"]
    },
    {
      id: "da",
      title: "Data Analytics Program",
      iconName: "da",
      description: "Convert raw numbers into powerful visual insights and strategic reports. Clean, analyze, and communicate database dashboards like an expert.",
      features: [
        "Data wrangling and ETL pipelines with SQL",
        "Interactive dashboard designs",
        "Business metrics optimization & KPI modeling",
        "Statistical hypothesis testing & predictive analytics",
      ],
      tools: ["PowerBI", "Tableau", "Excel", "SQL Analytics", "PostgreSQL"],
      roleOutcomes: ["Data Analyst", "BI Developer", "Product Analyst", "Operations Analyst"]
    },
    {
      id: "cloud",
      title: "AWS Cloud & DevOps Specialist",
      iconName: "cloud",
      description: "Design, deploy, and secure high-availability cloud infrastructure. Master scalable computing environments on AWS with DevOps workflows.",
      features: [
        "AWS Serverless computing & App integration",
        "Cloud virtualization, VPC, SEC & IAM networking",
        "CI/CD infrastructure as code (IaC)",
        "Database migrations & cloud security compliance",
      ],
      tools: ["AWS", "VPC", "Lambda", "Terraform", "Docker", "GitHub"],
      roleOutcomes: ["Cloud Architect", "Cloud DevOps Engineer", "AWS Admin", "Cloud Security Engineer"]
    },
    {
      id: "networking",
      title: "Networking & Security Program",
      iconName: "networking",
      description: "Specially designed for Diploma and Graduate students. Master the fundamentals of routing, switching, firewalls, and enterprise security to launch a stable career.",
      features: [
        "Cisco CCNA routing & switching alignment",
        "Specially structured for Diploma & Graduate job seekers",
        "Advanced network security, VPNs & firewall systems",
        "Interactive labs and packet forensic troubleshooting"
      ],
      tools: ["Cisco", "Routing", "Switching", "Wireshark", "VPN", "Firewalls", "DHCP", "DNS"],
      roleOutcomes: ["Network Engineer", "Systems Administrator", "Security Analyst", "Technical Support Specialist"]
    },
    {
      id: "ai",
      title: "AI & Machine Learning Engineering",
      iconName: "ai",
      description: "Deep dive into state-of-the-art AI systems. Construct machine learning algorithms, deep neural networks, computer vision utilities, and intelligent AI agents.",
      features: [
        "Advanced ML algorithms & statistical forecasting",
        "Deep Neural Networks with TensorFlow & PyTorch",
        "Computer Vision (OpenCV) & NLP (Transformers)",
        "Building, tuning & deploying intelligent AI Agents"
      ],
      tools: ["TensorFlow", "PyTorch", "Hugging Face", "OpenCV", "Python", "Numpy", "Pandas", "Scikit-Learn"],
      roleOutcomes: ["Machine Learning Engineer", "AI Developer", "Computer Vision Specialist", "NLP Developer"]
    },
  ];

  const getToolBadgeStyles = (tool: string) => {
    const t = tool.toLowerCase();
    if (t.includes("html")) {
      return "bg-[#FFEAD2] text-[#8C3A00] border border-[#FFD2A2]";
    }
    if (t.includes("css")) {
      return "bg-[#E3F2FD] text-[#0D47A1] border border-[#BBDEFB]";
    }
    if (t.includes("javascript") || t === "js") {
      return "bg-[#FFFDE7] text-[#F57F17] border border-[#FFF9C4]";
    }
    if (t.includes("tailwind")) {
      return "bg-[#E0F7FA] text-[#006064] border border-[#B2EBF2]";
    }
    if (t.includes("react")) {
      return "bg-[#E8EAF6] text-[#1A237E] border border-[#C5CAE9]";
    }
    if (t.includes("node")) {
      return "bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9]";
    }
    if (t.includes("express")) {
      return "bg-[#ECEFF1] text-[#263238] border border-[#CFD8DC]";
    }
    if (t.includes("mongo")) {
      return "bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]";
    }
    if (t.includes("python")) {
      return "bg-[#E3F2FD] text-[#1565C0] border border-[#90CAF9]";
    }
    if (t.includes("pytorch")) {
      return "bg-[#FBE9E7] text-[#BF360C] border border-[#FFCCBC]";
    }
    if (t.includes("sql") || t.includes("postgres")) {
      return "bg-[#E0F2F1] text-[#004D40] border border-[#B2DFDB]";
    }
    if (t.includes("powerbi")) {
      return "bg-[#FFF8E1] text-[#FF6F00] border border-[#FFE082]";
    }
    if (t.includes("tableau")) {
      return "bg-[#F3E5F5] text-[#4A148C] border border-[#E1BEE7]";
    }
    if (t.includes("excel")) {
      return "bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9]";
    }
    if (t.includes("aws") || t.includes("cloud")) {
      return "bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]";
    }
    if (t.includes("lambda") || t.includes("terraform") || t.includes("docker")) {
      return "bg-[#EDE7F6] text-[#311B92] border border-[#D1C4E9]";
    }
    if (t.includes("cisco") || t.includes("routing") || t.includes("switching") || t.includes("vpn") || t.includes("wireshark") || t.includes("firewall")) {
      return "bg-[#E0F7FA] text-[#006064] border border-[#B2EBF2]";
    }
    if (t.includes("tensorflow") || t.includes("hugging") || t.includes("opencv") || t.includes("ai") || t.includes("ml")) {
      return "bg-[#F3E5F5] text-[#4A148C] border border-[#E1BEE7]";
    }
    return "bg-amber-50 text-amber-800 border border-amber-200/50";
  };

  const renderTechLogos = (programId: string) => {
    switch (programId) {
      case "fs":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <NodeLogo />
            <ExpressLogo />
            <ReactLogo />
            <MongoLogo />
          </div>
        );
      case "ds":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <PythonLogo />
            <div className="text-[#BF360C] font-mono font-bold text-[10px] bg-red-50 border border-red-100 px-2 py-0.5 rounded">PyTorch</div>
            <SqlLogo />
          </div>
        );
      case "da":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <PowerBiLogo />
            <TableauLogo />
            <div className="flex items-center gap-1 text-emerald-700 font-semibold text-xs">
              <span className="font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Excel</span>
            </div>
            <SqlLogo />
          </div>
        );
      case "cloud":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <AwsLogo />
            <div className="text-zinc-600 font-mono font-semibold text-[10px] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200/50">Terraform</div>
            <div className="text-blue-700 font-mono font-semibold text-[10px] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Docker</div>
          </div>
        );
      case "networking":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <CiscoLogo />
            <div className="text-zinc-600 font-mono font-semibold text-[10px] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200/50">Wireshark</div>
            <div className="text-red-700 font-mono font-semibold text-[10px] bg-red-50 px-2 py-0.5 rounded border border-red-100">Firewall</div>
          </div>
        );
      case "ai":
        return (
          <div className="flex items-center gap-3 sm:gap-4 bg-zinc-50/50 rounded-xl p-2 border border-zinc-100">
            <PythonLogo />
            <TensorFlowLogo />
            <div className="text-indigo-700 font-mono font-semibold text-[10px] bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Hugging Face</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="programs" className="relative py-12 sm:py-20 lg:py-24 bg-white border-y border-zinc-200">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-[#F5B400]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-[#F5B400]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 px-4">
          <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3">
            ACADEMIC CATALYST
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6">
            Skill-First <span className="gold-gradient">Career Curriculum + Guaranteed Internship</span>
          </h2>
          <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Skip outdated timelines. Master job-ready professional skills coupled with a guaranteed active corporate internship to secure stable tech employment before graduating.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto">
          {customProgramsData.map((prog, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-amber-400/60 transition-all duration-300 p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden group"
              >
                {/* Top Row: Title, Description, and Tech brand logos */}
                <div className={`flex flex-col ${isOdd ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-start lg:justify-between gap-6`}>
                
                {/* Left Area: Icon, Title & Description */}
                <div className="flex items-start gap-4 flex-1">
                  <ProgramIconBox iconName={prog.iconName} programId={prog.id} />
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-zinc-900 tracking-tight flex flex-wrap items-center gap-2">
                      <span>{prog.title}</span>
                      {prog.id === "networking" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wide">
                          Specially for Diploma & Graduate
                        </span>
                      )}
                    </h3>
                    <p className="text-zinc-550 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Right Area: Tech Brand Logos preview */}
                <div className="flex-shrink-0 flex items-center self-start lg:self-center">
                  {renderTechLogos(prog.id)}
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-zinc-100 w-full" />

              {/* Middle Row: Beautiful Pastel Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {prog.tools.map((tool, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-transform duration-200 hover:scale-[1.03] ${getToolBadgeStyles(tool)}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Footer Row: Program Metadata & CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 mt-1 border-t border-zinc-100/80">
                
                {/* Left: Program Meta Features */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-zinc-500 text-xs sm:text-sm font-medium">
                  {/* Glowing live indicator for Online status */}
                  <div className="flex items-center">
                    <span className="relative flex h-2.5 w-2.5 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-zinc-700 font-semibold">Online</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-zinc-400 stroke-[2.5]" />
                    <span>4 Months</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#F5B400] stroke-[2.5]" />
                    <span className="text-zinc-900 font-semibold">Guaranteed Corporate Internship</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-zinc-400 stroke-[2.5]" />
                    <span>Live Mentor Support</span>
                  </div>
                </div>

                {/* Right: CTA buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={onBrochureClick}
                    className="px-4 py-2 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs font-sans"
                  >
                    Syllabus PDF
                  </button>
                  <button
                    onClick={() => onInquireClick(prog.title)}
                    className="px-6 py-2.5 bg-[#F5B400] hover:bg-[#E0A300] text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md font-sans"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>

            </div>
          );
        })}

        {/* Integrated Scholarship Program Section inside Career Curriculum */}
        <div className="bg-white text-zinc-950 rounded-3xl border-2 border-[#F5B400] p-6 sm:p-10 lg:p-12 relative overflow-hidden mt-8 shadow-xl">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left side info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#926F12] font-bold tracking-widest uppercase inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
                <Award className="w-3 h-3 text-[#F5B400]" />
                Affordability & Merit Initiative
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950">
                Skill Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-[#F5B400] to-amber-700">Scholarship Program</span>
              </h3>
              
              <p className="text-zinc-650 text-sm leading-relaxed font-light">
                We believe financial constraints should never stand in the way of high-tier technical mastery. Our scholarship committee actively funds motivated students, offering partial and full-tuition waivers based on merit, dedication, and screening test scores.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-amber-50 border border-amber-200 text-[#926F12] shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-zinc-900 block">Up to 100% Merit Waiver</span>
                    <span className="text-[11px] text-zinc-600 font-light leading-relaxed">Full and partial fee waivers based on screening and core evaluation.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-amber-50 border border-amber-200 text-[#926F12] shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-zinc-900 block">Women In Tech & Rural Empowerment</span>
                    <span className="text-[11px] text-zinc-600 font-light leading-relaxed">Dedicated seat allocations for female developers and students from tier-2 and tier-3 regions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-amber-50 border border-amber-200 text-[#926F12] shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-zinc-900 block">Fast-Track Screening</span>
                    <span className="text-[11px] text-zinc-600 font-light leading-relaxed">Get results within 48 hours of completing the basic scholarship test.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side stats & CTA card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-amber-50/60 to-white border border-amber-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] text-[#926F12] uppercase tracking-widest block mb-1">PROGRAM COVERAGE</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-mono">100%</span>
                    <span className="text-xs text-zinc-700 font-light">Max Fee Sponsorship</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-amber-200/60 py-5">
                  <div>
                    <span className="text-2xl font-bold text-zinc-950 font-mono block">50+</span>
                    <span className="text-[10px] text-[#926F12] font-mono uppercase tracking-wider block mt-0.5">Reserved Seats</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-zinc-950 font-mono block">3-Step</span>
                    <span className="text-[10px] text-[#926F12] font-mono uppercase tracking-wider block mt-0.5">Simple Process</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-auto">
                <button
                  onClick={onScholarshipsClick}
                  className="w-full py-4 bg-[#F5B400] hover:bg-[#E0A300] text-zinc-950 rounded-xl text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Check Eligibility for Your Scholarship
                </button>
                <p className="text-center text-[10px] text-zinc-500 mt-3 font-medium">
                  Simple test. Real outcome. Join the virtual digital refinery today.
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};
