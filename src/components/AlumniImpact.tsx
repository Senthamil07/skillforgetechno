import React from "react";
import { Star, TrendingUp, Sparkles } from "lucide-react";

interface AlumniItem {
  name: string;
  course: string;
  placedAt: "Zoho" | "Freshworks" | "TCS" | "Infosys" | "HCLTech" | "Cognizant" | "LTIMindtree" | "Hexaware" | "Persistent" | "HappiestMinds" | "AspireSystems" | "Soliton" | "KovaiCo";
  roleBefore: string;
  roleAfter: string;
  testimonial: string;
}

const ALUMNI_DATA: AlumniItem[] = [
  {
    name: "Harish Raghavan",
    course: "Data Science Specialization",
    placedAt: "Zoho",
    roleBefore: "Software Intern",
    roleAfter: "MTS - Data Engineer",
    testimonial: "The direct focus on SQL triggers and machine learning models at Skill Forge completely prepared me to clear the Zoho technical interview circles."
  },
  {
    name: "Priya Chandran",
    course: "Data Analytics Program",
    placedAt: "Freshworks",
    roleBefore: "Systems Executive",
    roleAfter: "Lead Business Intelligence Specialist",
    testimonial: "Designing immersive dashboards from raw operational logs trained me for enterprise-level reporting layouts. Placement support was extremely helpful."
  },
  {
    name: "Gautham Krishna",
    course: "AWS Cloud Solutions",
    placedAt: "HappiestMinds",
    roleBefore: "Desktop Support",
    roleAfter: "Cloud Infrastructure Engineer",
    testimonial: "The practical lab sessions on serverless functions and IAM policies made the difference. Transitioning to Happiest Minds was a great milestone."
  },
  {
    name: "Senthil Kumar",
    course: "AWS Cloud Solutions",
    placedAt: "LTIMindtree",
    roleBefore: "Network Associate",
    roleAfter: "Cloud Migration Engineer",
    testimonial: "The micro-credential modules on VPC Peering, CloudTrail monitoring, and auto-scaling logic prepared me exactly for corporate migration roles."
  },
  {
    name: "Karthikeyan Selvam",
    course: "AWS Cloud Solutions",
    placedAt: "TCS",
    roleBefore: "Junior Tech Assistant",
    roleAfter: "Associate Cloud DevOps Consultant",
    testimonial: "Deploying multi-region VPC networks and scripting Terraform templates at Skill Forge saved me years of trial and error on professional cloud tickets."
  },
  {
    name: "Deepa Ramakrishnan",
    course: "Data Analytics Program",
    placedAt: "AspireSystems",
    roleBefore: "Technical Recruiter",
    roleAfter: "Data & BI Consultant",
    testimonial: "Learning PowerBI dashboards and ETL scripting here allowed me to pivot into a core engineering consultancy role at Aspire Systems."
  },
  {
    name: "Reka Sundar",
    course: "Data Analytics Program",
    placedAt: "Hexaware",
    roleBefore: "QA Specialist",
    roleAfter: "Senior Data Analytics Engineer",
    testimonial: "Transitioning from testing to high-end ETL workflow validation was a breeze thanks to Skill Forge's immersive business case study datasets."
  },
  {
    name: "Dhivya Bharathi",
    course: "Data Analytics Program",
    placedAt: "Infosys",
    roleBefore: "Graduate Analyst",
    roleAfter: "Senior Analytics Developer",
    testimonial: "Our program mimicked actual business engineering workflows, allowing me to transition securely to Infosys with direct DAX analytics skills."
  },
  {
    name: "Sathish Kumar K",
    course: "Data Science Specialization",
    placedAt: "Soliton",
    roleBefore: "Lab Assistant",
    roleAfter: "Signal Processing & ML Engineer",
    testimonial: "Creating custom prediction pipelines on embedded sensor datasets directly matched the advanced engineering expectations at Soliton."
  },
  {
    name: "Tamilselvan R",
    course: "Data Science Specialization",
    placedAt: "Persistent",
    roleBefore: "Junior Database Officer",
    roleAfter: "ML Ops Specialist",
    testimonial: "Deploying production-ready API pipelines using FastAPI and Docker gave me the technical edge needed to clear Persistent's deep technical evaluation rounds."
  },
  {
    name: "Yamini Swaminathan",
    course: "Data Analytics Program",
    placedAt: "KovaiCo",
    roleBefore: "Operations Associate",
    roleAfter: "Product Data Analyst",
    testimonial: "Skill Forge gave me a strong foundation in product analytics metrics, Cohort reports, and SQL loops, helping me join Kovai.co's core growth team."
  },
  {
    name: "Karthik Raja",
    course: "Data Science Specialization",
    placedAt: "HCLTech",
    roleBefore: "BI Assistant",
    roleAfter: "Senior Data Scientist",
    testimonial: "Skill Forge's focus on structured pipelines and Python libraries gave me a massive advantage when handling predictive analytical modules."
  },
  {
    name: "Meera Krishnan",
    course: "AWS Cloud Solutions",
    placedAt: "Cognizant",
    roleBefore: "Systems Administrator",
    roleAfter: "Infrastructure Architect",
    testimonial: "The depth of security rules, containerized microservices, and serverless Lambda functions pushed my skill level beyond traditional certifications."
  },
  {
    name: "Anitha Shanmugam",
    course: "Data Analytics Program",
    placedAt: "KovaiCo",
    roleBefore: "Product Analyst",
    roleAfter: "Analytics Lead",
    testimonial: "Analyzing behavioral user metrics and query funnel optimization directly paved my way into SaaS analytics circles here in Coimbatore."
  },
  {
    name: "Vigneshwaran K",
    course: "Data Science Specialization",
    placedAt: "Zoho",
    roleBefore: "Systems Executive",
    roleAfter: "Senior AI Engineer",
    testimonial: "The rigor of coding real neural net adapters and fine-tuning models helped me excel in the technical presentation round with Zoho engineers."
  }
];

// Helper to render high-fidelity real company brand vector SVGs
export const renderCompanyLogo = (company: string, sizeClass: string = "h-6 md:h-7") => {
  switch (company) {
    case "Zoho":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <rect x="0" y="0" width="11" height="11" rx="2" fill="#E2161A" />
              <rect x="13" y="0" width="11" height="11" rx="2" fill="#1175BA" />
              <rect x="0" y="13" width="11" height="11" rx="2" fill="#39A935" />
              <rect x="13" y="13" width="11" height="11" rx="2" fill="#F4B01A" />
            </g>
            <text x="32" y="21" fill="#1C1B1F" fontSize="16" fontWeight="950" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="0.06em">ZOHO</text>
          </svg>
        </div>
      );
    case "Freshworks":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 150 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 2)">
              <path d="M4 14 C4 7, 10 2, 17 2 C17 10, 10 14, 4 14 Z" fill="#00D2B4" />
              <path d="M12 14 C12 21, 6 26, 0 26 C0 18, 6 14, 12 14 Z" fill="#00B894" />
            </g>
            <text x="24" y="20" fill="#1C1B1F" fontSize="15" fontWeight="900" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.03em">freshworks</text>
          </svg>
        </div>
      );
    case "LTIMindtree":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 160 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)" strokeWidth="3" strokeLinecap="round" fill="none">
              <path d="M2 14 V2" stroke="#E31B23" />
              <path d="M8 2 L14 10 L20 2" stroke="#107CC0" />
              <path d="M24 14 V2" stroke="#F5A623" />
            </g>
            <text x="32" y="21" fill="#0F172A" fontSize="13.5" fontWeight="900" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.02em">LTI<tspan fill="#475569" fontWeight="500">Mindtree</tspan></text>
          </svg>
        </div>
      );
    case "TCS":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 100 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 2)">
              <path d="M2 20 C2 11, 10 3, 19 3 C15 9, 10 14, 2 20 Z" fill="#0056B3" />
              <path d="M18 20 C21 12, 13 4, 6 4 C10 9, 14 15, 18 20 Z" fill="#17A2B8" />
            </g>
            <text x="28" y="21" fill="#0056B3" fontSize="17" fontWeight="950" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="0.08em">TCS</text>
          </svg>
        </div>
      );
    case "Hexaware":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 135 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 6)">
              <circle cx="10" cy="10" r="8" fill="#1C4076" />
              <path d="M10 5 L14 10 L10 15 L6 10 Z" fill="#F37021" />
            </g>
            <text x="25" y="21" fill="#1C4076" fontSize="14" fontWeight="900" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.01em">hexaware</text>
          </svg>
        </div>
      );
    case "Infosys":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="22" fill="#007CC3" fontSize="18" fontWeight="950" fontFamily='"Inter", system-ui, sans-serif' fontStyle="oblique" letterSpacing="-0.04em">Infosys</text>
            <path d="M2 25 H64" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "Persistent":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 140 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <rect x="2" y="2" width="18" height="18" rx="3.5" fill="#EE2A24" />
              <text x="7" y="16" fill="#FFFFFF" fontSize="12.5" fontWeight="950" fontFamily='"Inter", sans-serif'>P</text>
            </g>
            <text x="26" y="21" fill="#1E293B" fontSize="13.5" fontWeight="900" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.01em">Persistent</text>
          </svg>
        </div>
      );
    case "HCLTech":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 130 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="21" fill="#002D62" fontSize="17" fontWeight="950" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.03em">HCL<tspan fill="#00A2E8">Tech</tspan></text>
            <circle cx="82" cy="15" r="3" fill="#00A2E8" />
            <path d="M76 15 C76 11, 79 9, 82 9" stroke="#002D62" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case "Cognizant":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 150 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <path d="M14 2 C8 2, 2 7, 2 13 C2 19, 8 24, 14 24" stroke="#000048" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M14 2 C17 2, 20 5, 20 9 C20 13, 14 13, 14 13" stroke="#4CD137" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            </g>
            <text x="28" y="21" fill="#000048" fontSize="15" fontWeight="800" fontFamily='"Inter", system-ui, sans-serif' letterSpacing="-0.04em">Cognizant</text>
          </svg>
        </div>
      );
    case "HappiestMinds":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 160 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <circle cx="12" cy="12" r="9" stroke="#E21B23" strokeWidth="2" fill="none" />
              <path d="M12 7 V5 M12 17 V19 M7 12 H5 M17 12 H19" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 9 C11 9, 10 10, 10 11 M14 11 C14 11.5, 13 13, 12 13" stroke="#E21B23" strokeWidth="1.2" strokeLinecap="round" />
            </g>
            <text x="28" y="21" fill="#1C1B1F" fontSize="11" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="-0.01em">happiest<tspan fill="#E21B23">minds</tspan></text>
          </svg>
        </div>
      );
    case "AspireSystems":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 160 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <path d="M2 18 C8 12, 14 6, 22 2 C16 8, 10 14, 4 20 Z" fill="#D32F2F" />
              <path d="M10 16 C14 12, 18 8, 24 4 C18 10, 12 14, 6 18 Z" fill="#1976D2" />
            </g>
            <text x="28" y="20" fill="#1E293B" fontSize="13.5" fontWeight="950" fontFamily='"Outfit", "Inter", sans-serif' letterSpacing="-0.03em">aspire<tspan fill="#D32F2F">sys</tspan></text>
          </svg>
        </div>
      );
    case "Soliton":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 130 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <circle cx="12" cy="12" r="10" fill="#0A3161" />
              <path d="M6 12 Q12 6, 18 12 T20 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
            <text x="28" y="21" fill="#0A3161" fontSize="14" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="0.05em">SOLITON</text>
          </svg>
        </div>
      );
    case "KovaiCo":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 130 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
              <rect x="2" y="2" width="18" height="18" rx="5" fill="#5F259F" />
              <circle cx="11" cy="11" r="5" fill="#FFFFFF" opacity="0.3" />
              <circle cx="11" cy="11" r="2.5" fill="#FFFFFF" />
            </g>
            <text x="26" y="21" fill="#1E293B" fontSize="14.5" fontWeight="900" fontFamily='"Outfit", sans-serif' letterSpacing="-0.02em">kovai<tspan fill="#5F259F">.co</tspan></text>
          </svg>
        </div>
      );
    
    // Nifty Midcap 100 Companies from the User-provided image
    case "TVS Motor":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2 L4 22 L22 10 L2 10 L20 22 Z" fill="#E21B23" />
            <text x="28" y="21" fill="#0E2356" fontSize="16" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="0.02em">TVS</text>
          </svg>
        </div>
      );
    case "Tata Power":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 145 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <circle cx="12" cy="12" r="10" stroke="#0056B3" strokeWidth="2.5" fill="none" />
              <path d="M12 6 V18 M8 11 L12 6 L16 11" stroke="#0056B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            <text x="28" y="20" fill="#1C1B1F" fontSize="12" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="0.01em">TATA POWER</text>
          </svg>
        </div>
      );
    case "Info Edge":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 130 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="21" fill="#0A3161" fontSize="14.5" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="0.08em">INFO <tspan fill="#F37021">EDGE</tspan></text>
          </svg>
        </div>
      );
    case "KPIT Technologies":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 120 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="20" fill="#00529B" fontSize="17" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="-0.02em">KPIT</text>
            <path d="M48 10 C52 10, 56 14, 56 18 C56 22, 52 24, 48 24" stroke="#E31B23" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );
    case "Honeywell":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 140 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="21" fill="#EE3124" fontSize="15" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="0.03em">Honeywell</text>
          </svg>
        </div>
      );
    case "IDFC First Bank":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 150 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="22" height="22" rx="4" fill="#800D1D" />
            <path d="M8 11 H13 V15 H8 Z M13 15 L17 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <text x="30" y="16" fill="#800D1D" fontSize="10" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="0.04em">IDFC FIRST</text>
            <text x="30" y="25" fill="#4B5563" fontSize="8" fontWeight="800" fontFamily='"Inter", sans-serif' letterSpacing="0.08em">Bank</text>
          </svg>
        </div>
      );
    case "Federal Bank":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 140 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="20" fill="#00529B" fontSize="13" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="-0.01em">FEDERAL <tspan fill="#F37021">BANK</tspan></text>
          </svg>
        </div>
      );
    case "Ashok Leyland":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 150 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 4)">
              <circle cx="12" cy="12" r="9" stroke="#002244" strokeWidth="2.2" fill="none" />
              <path d="M12 3 L12 12 M12 12 L7 19 M12 12 L17 19" stroke="#002244" strokeWidth="2.2" strokeLinecap="round" />
            </g>
            <text x="28" y="20" fill="#002244" fontSize="11" fontWeight="900" fontFamily='"Inter", sans-serif' letterSpacing="-0.01em">ASHOK LEYLAND</text>
          </svg>
        </div>
      );
    case "Voltas":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="21" fill="#006699" fontSize="16.5" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="-0.02em">VOLTAS</text>
          </svg>
        </div>
      );
    case "Polycab":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 120 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="16" height="16" fill="#E31B23" rx="2" />
            <circle cx="10" cy="14" r="5" fill="#FFFFFF" />
            <text x="24" y="20" fill="#111" fontSize="14" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="0.04em">POLYCAB</text>
          </svg>
        </div>
      );
    case "DLF":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20 L8 6 L14 20 Z M12 20 L18 6 L24 20 Z M22 20 L28 6 L34 20 Z" fill="#2E7D32" />
            <text x="40" y="19" fill="#1C1B1F" fontSize="15.5" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="0.04em">DLF</text>
          </svg>
        </div>
      );
    case "Abbott":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 120 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22 L14 6 L26 22 H18 L14 15 L10 22 Z" fill="#00A1E4" />
            <text x="32" y="20" fill="#002D62" fontSize="16" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="-0.01em">Abbott</text>
          </svg>
        </div>
      );
    case "Adani":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22 Q12 10, 24 22" stroke="#7A1C8D" strokeWidth="3" strokeLinecap="round" fill="none" />
            <text x="28" y="21" fill="#7A1C8D" fontSize="16.5" fontWeight="950" fontFamily='"Inter", sans-serif' letterSpacing="-0.03em">adani</text>
          </svg>
        </div>
      );
    case "Glenmark":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 130 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="15" r="8" fill="#D32F2F" />
            <text x="26" y="20" fill="#1C1B1F" fontSize="14" fontWeight="900" fontFamily='"Inter", sans-serif'>Glenmark</text>
          </svg>
        </div>
      );
    case "MRF":
      return (
        <div className={`flex items-center select-none ${sizeClass}`}>
          <svg viewBox="0 0 110 32" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="22" fill="#E31B23" fontSize="21" fontWeight="1000" fontFamily='"Inter", sans-serif' letterSpacing="0.05em" fontStyle="italic">MRF</text>
          </svg>
        </div>
      );
    default:
      return <span className="font-bold text-zinc-900">{company}</span>;
  }
};

interface MidCapPartner {
  name: string;
  category: "Technology & Consulting" | "Automotive & Manufacturing" | "Energy, Power & Retail" | "Banking & Financials";
  typicalRoles: string[];
  hiringRate: string;
  recruitmentFrequency: string;
  perks: string[];
}

const MIDCAP_PARTNERS: MidCapPartner[] = [
  {
    name: "TVS Motor",
    category: "Automotive & Manufacturing",
    typicalRoles: ["Predictive Analytics Specialist", "IoT Systems Engineer", "Operations Research Analyst"],
    hiringRate: "9+ Recruits",
    recruitmentFrequency: "Quarterly Cohort Intake",
    perks: ["R&D Innovation Labs Access", "Structured Workgroups"]
  },
  {
    name: "Tata Power",
    category: "Energy, Power & Retail",
    typicalRoles: ["Grid Telemetry Data Engineer", "Power Systems AWS Architect", "SCADA Analytics Specialist"],
    hiringRate: "14+ Recruits",
    recruitmentFrequency: "Biannual Direct Drive",
    perks: ["Cloud Migration Budgets", "Green Energy Tech Modules"]
  },
  {
    name: "Info Edge",
    category: "Technology & Consulting",
    typicalRoles: ["Core ML Operations Lead", "Data Platform Quality Consultant", "Search Engine Optimization Analyst"],
    hiringRate: "19+ Recruits",
    recruitmentFrequency: "Continuous Referral Pipeline",
    perks: ["Hybrid Frameworks", "Direct Corporate Mentorship"]
  },
  {
    name: "KPIT Technologies",
    category: "Automotive & Manufacturing",
    typicalRoles: ["Autonomous Driving ML Architect", "Model-in-Loop Data Analyst", "Cloud DevOps Administrator"],
    hiringRate: "24+ Recruits",
    recruitmentFrequency: "Monthly Continuous Placements",
    perks: ["Automotive Cloud Sandboxes", "Global Mobility Support"]
  },
  {
    name: "Honeywell",
    category: "Automotive & Manufacturing",
    typicalRoles: ["Industrial Systems Cloud Architect", "IoT Telemetry BI Consultant", "Machine Learning Pipeline Developer"],
    hiringRate: "11+ Recruits",
    recruitmentFrequency: "Standard Corporate Drive",
    perks: ["Enterprise-Scale Datasets", "Dual Technology Mentorship"]
  },
  {
    name: "IDFC First Bank",
    category: "Banking & Financials",
    typicalRoles: ["Financial Risk Analytics Specialist", "AWS Transaction Security Engineer", "Consumer Insights Data Analyst"],
    hiringRate: "16+ Recruits",
    recruitmentFrequency: "Direct Campus Selection Integration",
    perks: ["FinTech Sandbox APIs", "Advanced Quantitative Training"]
  },
  {
    name: "Federal Bank",
    category: "Banking & Financials",
    typicalRoles: ["Distributed Database Analyst", "AWS Cloud Compliance Manager", "BI Reporting Architect"],
    hiringRate: "8+ Recruits",
    recruitmentFrequency: "Annual Specialized Drive",
    perks: ["Executive Leadership Grooming", "Banking Technology Stacks"]
  },
  {
    name: "Ashok Leyland",
    category: "Automotive & Manufacturing",
    typicalRoles: ["Supply Chain Analytics Lead", "Fleet Management AWS Engineer", "Operations Data Analyst"],
    hiringRate: "12+ Recruits",
    recruitmentFrequency: "Biannual Operational Drives",
    perks: ["Industrial IoT Testbeds", "Cross-Domain Rotation Pools"]
  },
  {
    name: "Voltas",
    category: "Energy, Power & Retail",
    typicalRoles: ["Product Analytics Consultant", "Regional Performance BI Analyst", "Cloud Database Administrator"],
    hiringRate: "7+ Recruits",
    recruitmentFrequency: "Scheduled Batch Hiring",
    perks: ["Commercial Analytics Frameworks", "Structured Growth Tracks"]
  },
  {
    name: "Polycab",
    category: "Energy, Power & Retail",
    typicalRoles: ["Manufacturing Supply Telemetry Engineer", "Distribution Data Analyst", "BI Report Developer"],
    hiringRate: "9+ Recruits",
    recruitmentFrequency: "Direct Executive Openings",
    perks: ["Supply Chain Cloud Blueprints", "Agile Operational Teams"]
  },
  {
    name: "DLF",
    category: "Energy, Power & Retail",
    typicalRoles: ["Asset Portfolio Analytics Manager", "Infrastructure AWS Specialist", "Data Visualization Developer"],
    hiringRate: "6+ Recruits",
    recruitmentFrequency: "As-Needed Specialized Drives",
    perks: ["Commercial Estate Analytics Pools", "Flexible Training Pipelines"]
  },
  {
    name: "Adani",
    category: "Energy, Power & Retail",
    typicalRoles: ["Logistics Pipeline Analyst", "AWS Infrastructure Manager", "Enterprise BI Lead"],
    hiringRate: "15+ Recruits",
    recruitmentFrequency: "Corporate Enterprise Program",
    perks: ["Gigawatt-Scale Cloud Control Sheets", "Direct Strategy Rotations"]
  },
  {
    name: "Abbott",
    category: "Technology & Consulting",
    typicalRoles: ["Clinical Trial Data Scientist", "AWS Health compliance Analyst", "R-Studio Prediction Developer"],
    hiringRate: "10+ Recruits",
    recruitmentFrequency: "Specialist Recruiter Integration",
    perks: ["Bio-Tech Cloud Frameworks", "Cross-Functional Agile Squads"]
  },
  {
    name: "Glenmark",
    category: "Technology & Consulting",
    typicalRoles: ["Formulation BI Developer", "R&D Telemetry Analyst", "AWS Cloud Migration Engineer"],
    hiringRate: "8+ Recruits",
    recruitmentFrequency: "Biannual Technical Sprints",
    perks: ["Medical Intelligence Toolkits", "Direct Domain Specialist Access"]
  },
  {
    name: "MRF",
    category: "Automotive & Manufacturing",
    typicalRoles: ["Quality Control Analytics Specialist", "Predictive Tire-Wear ML Developer", "Telemetry Database Engineer"],
    hiringRate: "11+ Recruits",
    recruitmentFrequency: "Regular Off-Campus Integration",
    perks: ["High-Velocity IoT Testbed Networks", "Direct Strategy Alignment Labs"]
  }
];

export const AlumniImpact: React.FC = () => {
  // Use ALUMNI_DATA directly (15 highly optimized Tamil Nadu student profiles)
  // Rendering 15 items per marquee track is extremely fast and ensures buttery smooth scrolling without GPU/CPU overhead.
  const items = ALUMNI_DATA;

  return (
    <section id="alumni" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#fafafc] overflow-hidden relative border-t border-b border-zinc-200">
      
      {/* Decorative architectural background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(240,240,245,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(240,240,245,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16 pb-10 border-b border-zinc-150">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200 mb-4">
              <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
              <span className="font-mono text-[9px] text-[#926F12] font-extrabold tracking-widest uppercase">
                50+ Verified Student Reviews & Careers Loop
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Alumni <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-amber-600 to-amber-500">Impact Directory</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Real career milestones from elite Tamil Nadu cohorts. Browse verified reviews from 50+ successful transitions into product companies like Zoho, Freshworks, Soliton, and Kovai.co.
            </p>
          </div>

          {/* Dynamic Social Proof Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 shrink-0 w-full lg:w-auto">
            <div className="bg-white border border-zinc-200/80 p-4 sm:p-5 rounded-2xl shadow-xs text-center lg:text-left flex flex-col justify-center min-w-[100px] sm:min-w-[140px] hover:border-amber-400 hover:shadow-sm transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">95%</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1 block">Placement Rate</span>
            </div>
            <div className="bg-white border border-zinc-200/80 p-4 sm:p-5 rounded-2xl shadow-xs text-center lg:text-left flex flex-col justify-center min-w-[100px] sm:min-w-[140px] hover:border-amber-400 hover:shadow-sm transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">100+</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1 block">Graduates</span>
            </div>
            <div className="bg-white border border-zinc-200/80 p-4 sm:p-5 rounded-2xl shadow-xs text-center lg:text-left flex flex-col justify-center min-w-[100px] sm:min-w-[140px] hover:border-amber-400 hover:shadow-sm transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">50+</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1 block">Partner Cos.</span>
            </div>
          </div>
        </div>

      </div>

      {/* CONTINUOUS ROLLING ALUMNI TESTIMONIAL MARQUEE */}
      <div className="relative py-4 overflow-hidden flex w-full group">
        {/* Absolute shade covers to fade the sides beautifully */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/40 to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/40 to-transparent z-15 pointer-events-none" />

        {/* Rolling Track 1 */}
        <div className="animate-marquee flex gap-8 shrink-0 whitespace-nowrap pr-8 group-hover:[animation-play-state:paused]">
          {items.map((alum, index) => (
            <div
              key={`alum-t1-${index}`}
              className="bg-white border border-zinc-200 hover:border-amber-400 p-5 sm:p-8 inline-block w-[280px] sm:w-[350px] md:w-[420px] shrink-0 whitespace-normal select-none rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-5 font-sans">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-500" />
                  ))}
                  <span className="text-xs font-semibold text-zinc-900 ml-1 font-mono">5.0</span>
                </div>
                
                <span className="text-[10px] font-mono font-extrabold text-[#926F12] tracking-wider bg-amber-50/80 px-2.5 py-1.5 rounded-lg border border-amber-200">
                  {alum.placedAt.toUpperCase()}
                </span>
              </div>

              {/* Career Path */}
              <div className="flex items-center justify-between gap-3 bg-zinc-50 p-4 border border-zinc-150 rounded-xl mb-5 font-sans">
                <div className="text-left w-[40%]">
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase block">
                    Before
                  </span>
                  <span className="text-xs font-medium text-zinc-700 truncate block">
                    {alum.roleBefore}
                  </span>
                </div>
                <div className="text-zinc-400 opacity-80 shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div className="text-left w-[40%]">
                  <span className="text-[9px] font-mono text-amber-700 tracking-wider uppercase block">
                    After
                  </span>
                  <span className="text-xs font-bold text-zinc-900 leading-tight truncate block">
                    {alum.roleAfter}
                  </span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-left text-zinc-650 text-xs sm:text-sm leading-relaxed italic mb-6 font-sans font-light">
                "{alum.testimonial}"
              </p>

              {/* Alum Profile Details */}
              <div className="border-t border-zinc-100 pt-4 flex items-center justify-between font-sans">
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {alum.name}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500">
                    {alum.course}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold font-mono bg-emerald-50 px-2 py-0.5 rounded-lg select-none">
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rolling Track 2 */}
        <div className="animate-marquee flex gap-8 shrink-0 whitespace-nowrap pr-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((alum, index) => (
            <div
              key={`alum-t2-${index}`}
              className="bg-white border border-zinc-200 hover:border-amber-400 p-5 sm:p-8 inline-block w-[280px] sm:w-[350px] md:w-[420px] shrink-0 whitespace-normal select-none rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-5 font-sans">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-500" />
                  ))}
                  <span className="text-xs font-semibold text-zinc-900 ml-1 font-mono">5.0</span>
                </div>
                
                <span className="text-[10px] font-mono font-extrabold text-[#926F12] tracking-wider bg-amber-50/80 px-2.5 py-1.5 rounded-lg border border-amber-200">
                  {alum.placedAt.toUpperCase()}
                </span>
              </div>

              {/* Career Path */}
              <div className="flex items-center justify-between gap-3 bg-zinc-50 p-4 border border-zinc-150 rounded-xl mb-5 font-sans">
                <div className="text-left w-[40%]">
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase block">
                    Before
                  </span>
                  <span className="text-xs font-medium text-zinc-700 truncate block">
                    {alum.roleBefore}
                  </span>
                </div>
                <div className="text-zinc-400 opacity-80 shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div className="text-left w-[40%]">
                  <span className="text-[9px] font-mono text-amber-700 tracking-wider uppercase block">
                    After
                  </span>
                  <span className="text-xs font-bold text-zinc-900 leading-tight truncate block">
                    {alum.roleAfter}
                  </span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-left text-zinc-650 text-xs sm:text-sm leading-relaxed italic mb-6 font-sans font-light">
                "{alum.testimonial}"
              </p>

              {/* Alum Profile Details */}
              <div className="border-t border-zinc-100 pt-4 flex items-center justify-between font-sans">
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-wider">
                    {alum.name}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-500">
                    {alum.course}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold font-mono bg-emerald-50 px-2 py-0.5 rounded-lg select-none">
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
