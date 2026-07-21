import React from "react";
import { motion } from "motion/react";
import { Cpu, Globe, Award, Sparkles, Compass } from "lucide-react";

interface Logo {
  name: string;
  filename?: string;
  domain: string;
  simpleIconSlug?: string;
  color?: string;
}

const TIER_1_LOGOS: Logo[] = [
  { name: "Google", domain: "google.com", simpleIconSlug: "google", color: "#4285F4" },
  { name: "Amazon", domain: "amazon.com", simpleIconSlug: "amazon", color: "#FF9900" },
  { name: "Microsoft", domain: "microsoft.com", simpleIconSlug: "microsoft", color: "#00A4EF" },
  { name: "Apple", domain: "apple.com", simpleIconSlug: "apple", color: "#000000" },
  { name: "Meta", domain: "meta.com", simpleIconSlug: "meta", color: "#0668E1" },
  { name: "Netflix", domain: "netflix.com", simpleIconSlug: "netflix", color: "#E50914" },
  { name: "NVIDIA", domain: "nvidia.com", simpleIconSlug: "nvidia", color: "#76B900" },
  { name: "Adobe", domain: "adobe.com", simpleIconSlug: "adobe", color: "#FF0000" },
  { name: "Salesforce", domain: "salesforce.com", simpleIconSlug: "salesforce", color: "#00A1E0" },
  { name: "IBM", domain: "ibm.com", simpleIconSlug: "ibm", color: "#052FAD" },
];

const TIER_2_LOGOS: Logo[] = [
  { name: "Infosys", domain: "infosys.com", simpleIconSlug: "infosys", color: "#007CC3" },
  { name: "TCS", domain: "tcs.com", simpleIconSlug: "tata-consultancy-services", color: "#1B365D" },
  { name: "Wipro", domain: "wipro.com", simpleIconSlug: "wipro", color: "#253B80" },
  { name: "HCLTech", domain: "hcltech.com", simpleIconSlug: "hcl", color: "#005696" },
  { name: "Accenture", domain: "accenture.com", simpleIconSlug: "accenture", color: "#A12BFF" },
  { name: "Cognizant", domain: "cognizant.com", simpleIconSlug: "cognizant", color: "#0033A0" },
  { name: "Capgemini", domain: "capgemini.com", simpleIconSlug: "capgemini", color: "#0070AD" },
  { name: "Oracle", domain: "oracle.com", simpleIconSlug: "oracle", color: "#F80000" },
  { name: "Deloitte", domain: "deloitte.com", simpleIconSlug: "deloitte", color: "#86BC25" },
  { name: "EY", domain: "ey.com", simpleIconSlug: "ey", color: "#FFE600" },
  { name: "KPMG", domain: "kpmg.com", simpleIconSlug: "kpmg", color: "#00338D" },
];

const TIER_3_LOGOS: Logo[] = [
  { name: "Zoho", domain: "zoho.com", simpleIconSlug: "zoho", color: "#009B72" },
  { name: "Freshworks", domain: "freshworks.com", simpleIconSlug: "freshworks", color: "#007CFF" },
  { name: "Hexaware", domain: "hexaware.com", simpleIconSlug: "hexaware", color: "#F15A24" },
  { name: "Mphasis", domain: "mphasis.com", simpleIconSlug: "mphasis", color: "#002D62" },
  { name: "Virtusa", domain: "virtusa.com", simpleIconSlug: "virtusa", color: "#F04E23" },
  { name: "LTIMindtree", domain: "ltimindtree.com", simpleIconSlug: "ltimindtree", color: "#F58220" },
  { name: "CGI", domain: "cgi.com", simpleIconSlug: "cgi", color: "#E31937" },
  { name: "Birlasoft", domain: "birlasoft.com", simpleIconSlug: "birlasoft", color: "#005A9C" },
  { name: "Persistent", domain: "persistent.com", simpleIconSlug: "persistent", color: "#E31E24" },
  { name: "Nagarro", domain: "nagarro.com", simpleIconSlug: "nagarro", color: "#E2001A" },
];

const PremiumLogoCard: React.FC<{ logo: Logo }> = ({ logo }) => {
  const brandColor = logo.color || "#333333";
  const hexColor = brandColor.replace("#", "");
  
  const clearbitUrl = `https://logo.clearbit.com/${logo.domain}`;
  const logoDevUrl = `https://img.logo.dev/${logo.domain}?token=demo`;
  const simpleIconsUrl = logo.simpleIconSlug ? `https://cdn.simpleicons.org/${logo.simpleIconSlug}/${hexColor}` : "";
  const localUrl = logo.filename ? `/images/logos/${logo.filename}` : "";
  
  // Start with authentic, official, multi-color Clearbit logo first for absolute realism and exact brand colors
  const [imgSrc, setImgSrc] = React.useState(clearbitUrl);
  const [hasFailed, setHasFailed] = React.useState(false);

  const handleImageError = () => {
    if (imgSrc === clearbitUrl) {
      setImgSrc(logoDevUrl);
    } else if (imgSrc === logoDevUrl) {
      if (simpleIconsUrl) {
        setImgSrc(simpleIconsUrl);
      } else if (localUrl) {
        setImgSrc(localUrl);
      } else {
        setHasFailed(true);
      }
    } else if (imgSrc === simpleIconsUrl) {
      if (localUrl) {
        setImgSrc(localUrl);
      } else {
        setHasFailed(true);
      }
    } else {
      setHasFailed(true);
    }
  };

  return (
    <div 
      className="group relative flex items-center justify-center bg-transparent border-0 px-5 py-3 h-14 w-28 sm:h-16 sm:w-36 transition-all duration-300 hover:scale-110 select-none shrink-0 cursor-pointer overflow-hidden"
    >
      {!hasFailed ? (
        <img
          src={imgSrc}
          alt={logo.name}
          onError={handleImageError}
          className="max-h-6 sm:max-h-7 max-w-[85%] sm:max-w-full object-contain opacity-100 transition-all duration-300"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span 
          className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase transition-colors duration-300"
          style={{ color: brandColor }}
        >
          {logo.name}
        </span>
      )}
    </div>
  );
};

export const IndustryEcosystem: React.FC = () => {
  const tier1Double = [...TIER_1_LOGOS, ...TIER_1_LOGOS];
  const tier2Double = [...TIER_2_LOGOS, ...TIER_2_LOGOS];
  const tier3Double = [...TIER_3_LOGOS, ...TIER_3_LOGOS];

  return (
    <section 
      id="industry-ecosystem" 
      className="relative py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-100"
    >
      {/* Premium ambient light spot/glow representing Apple + NVIDIA aesthetic */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#D4AF37]/5 via-[#D4AF37]/1 to-transparent rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[250px] bg-gradient-to-t from-zinc-100/5 to-transparent rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Subtle vector grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#fff_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B59110] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#B59110] font-bold tracking-widest uppercase">
              Global Hiring Partners
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-5 font-sans"
          >
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111] via-[#B59110] to-[#D4AF37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.1)]">Ecosystem</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Build skills aligned with the world's leading technology companies.
          </motion.p>
        </div>

        {/* TIERED LOGO ECOSYSTEM MARQUEES */}
        <div className="space-y-6 sm:space-y-8 relative">
          
          {/* Symmetrical Left/Right Fading Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Tier 1: Leftward Scrolling (Top tech corporations) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-1">
              <Cpu className="w-3 h-3 text-[#B59110]" /> Tier 1 • Cloud & Hyperscalers
            </div>
            <div className="relative py-2 overflow-hidden flex w-full group/carousel1">
              <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel1:[animation-play-state:paused]">
                {tier1Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier1-a-${idx}`} logo={logo} />
                ))}
              </div>
              <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel1:[animation-play-state:paused]" aria-hidden="true">
                {tier1Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier1-b-${idx}`} logo={logo} />
                ))}
              </div>
            </div>
          </div>

          {/* Tier 2: Rightward Scrolling (Global integrators & Consulting giants) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-1">
              <Globe className="w-3 h-3 text-zinc-500" /> Tier 2 • Enterprise Consultants
            </div>
            <div className="relative py-2 overflow-hidden flex w-full group/carousel2">
              <div className="animate-marquee-reverse flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel2:[animation-play-state:paused]">
                {tier2Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier2-a-${idx}`} logo={logo} />
                ))}
              </div>
              <div className="animate-marquee-reverse flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel2:[animation-play-state:paused]" aria-hidden="true">
                {tier2Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier2-b-${idx}`} logo={logo} />
                ))}
              </div>
            </div>
          </div>

          {/* Tier 3: Leftward Scrolling (SaaS & High-growth tech engines) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest mb-1">
              <Compass className="w-3 h-3 text-zinc-500" /> Tier 3 • High-Growth SaaS & Product Engines
            </div>
            <div className="relative py-2 overflow-hidden flex w-full group/carousel3">
              <div className="animate-marquee-fast flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel3:[animation-play-state:paused]">
                {tier3Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier3-a-${idx}`} logo={logo} />
                ))}
              </div>
              <div className="animate-marquee-fast flex shrink-0 whitespace-nowrap gap-4 sm:gap-6 items-center select-none pr-4 sm:pr-6 group-hover/carousel3:[animation-play-state:paused]" aria-hidden="true">
                {tier3Double.map((logo, idx) => (
                  <PremiumLogoCard key={`tier3-b-${idx}`} logo={logo} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Elegant trust badge showing validation */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <Award className="w-5 h-5 text-[#B59110]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-800">Industry-Aligned Curriculum</p>
              <p className="text-[10px] text-zinc-500">Every syllabus is customized with engineering mentors from active hiring partners</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center md:text-left">
              <span className="block text-2xl font-bold text-[#B59110]">500+</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Hiring Partners</span>
            </div>
            <div className="w-px h-8 bg-zinc-200" />
            <div className="text-center md:text-left">
              <span className="block text-2xl font-bold text-zinc-900">93.4%</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Cohort Conversion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
