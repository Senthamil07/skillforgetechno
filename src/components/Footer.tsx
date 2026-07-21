import React from "react";
import { Sparkles, Star, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  onBrochureClick: () => void;
  onApplyClick: () => void;
  currentView?: "home" | "scholarships" | "journey" | "tamil-guide";
  setCurrentView?: (view: "home" | "scholarships" | "journey" | "tamil-guide") => void;
}

export const Footer: React.FC<FooterProps> = ({ onBrochureClick, onApplyClick, currentView, setCurrentView }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");

    if (id === "home" || href === "#" || !id) {
      if (setCurrentView && currentView !== "home") {
        setCurrentView("home");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (setCurrentView && currentView && currentView !== "home") {
      setCurrentView("home");
      
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(interval);
          const navbarOffset = 85;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        } else {
          attempts++;
          if (attempts > 60) {
            clearInterval(interval);
          }
        }
      }, 50);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#0c0b08] text-zinc-300 pt-20 pb-12 overflow-hidden relative font-sans border-t border-zinc-850/60 select-none">
      {/* Subtle Warm Dark Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-60 bg-[#F5B400]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-40 bg-amber-500/2 rounded-full blur-[110px] pointer-events-none" />

      {/* Giant Editorial Capital Header as requested */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-12 select-none pointer-events-none border-b border-zinc-900/80 pb-6">
        <h1 className="text-[9.5vw] font-black tracking-[0.03em] leading-none text-[#23201b]/80 uppercase text-center select-none">
          SKILL FORGE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns and Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 pb-16">
          
          {/* Column 1: Our Courses */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide mb-6 uppercase">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Data Science Specialization", href: "#programs" },
                { label: "Data Analytics Program", href: "#programs" },
                { label: "AWS Cloud Infrastructure", href: "#programs" },
                { label: "Networking & Security Program", href: "#programs" },
                { label: "AI & Machine Learning Engineering", href: "#programs" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-[#E5C158] text-xs sm:text-sm font-normal tracking-wide transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Crash Courses", href: "#programs" },
                { label: "Master DSA", href: "#programs" },
                { label: "Master AWS", href: "#programs" },
                { label: "Blogs", href: "#home" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-[#E5C158] text-xs sm:text-sm font-normal tracking-wide transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Skill Forge (Error Makes Clever style) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wide mb-6 uppercase">
              Skill Forge
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#home" },
                { label: "Terms Of Use", href: "#home" },
                { label: "Student Reviews", href: "#alumni" },
                { label: "Careers", href: "#home" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-zinc-400 hover:text-[#E5C158] text-xs sm:text-sm font-normal tracking-wide transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Symmetrical High-Fidelity Badges */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4 justify-start text-left pt-2 md:pt-0">
            

            {/* Badge 2: Google Review Widget */}
            <div className="w-full max-w-[280px] p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-center gap-4 shadow-md hover:border-zinc-700/80 transition-all duration-300">
              {/* Google Colored 'G' icon */}
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-850">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.282 2.71 1.346 6.645l3.92 3.12z"
                  />
                  <path
                    fill="#4285F4"
                    d="M16.04 12.02c0-.58-.05-1.13-.15-1.66H12v3.15h2.27c-.1.52-.39.96-.83 1.25l3.77 2.92c2.2-2.03 3.47-5.01 3.47-8.66z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.266 14.235a7.078 7.078 0 0 1 0-4.47l-3.92-3.12A11.91 11.91 0 0 0 0 12c0 2.01.5 3.91 1.346 5.59l3.92-3.355z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.97-1.07 7.96-2.92l-3.77-2.92c-1.05.7-2.39 1.12-4.19 1.12-3.23 0-5.97-2.18-6.95-5.11l-3.92 3.12C3.282 21.29 7.33 24 12 24z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                {/* 5 Stars Rating Row */}
                <div className="flex items-center gap-1 mb-1 text-amber-500">
                  <Star size={11} className="fill-current" />
                  <Star size={11} className="fill-current" />
                  <Star size={11} className="fill-current" />
                  <Star size={11} className="fill-current" />
                  <Star size={11} className="fill-current" />
                </div>
                <p className="text-[10px] text-zinc-400 font-bold">Google (4.8)</p>
              </div>
            </div>

            {/* Quick action triggers inside the columns zone */}
            <div className="w-full max-w-[280px] pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onBrochureClick}
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-850 text-white rounded-lg border border-zinc-800 text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
              >
                Syllabus Brochure
              </button>
              <button
                onClick={onApplyClick}
                className="w-full py-2 bg-[#F5B400] hover:bg-[#E5C158] text-zinc-950 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
              >
                Apply Now
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-zinc-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-zinc-500 text-[10px] font-mono">
            © {new Date().getFullYear()} Skill Forge Technology. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5 my-2 md:my-0">
            <a
              href="https://www.linkedin.com/company/skill-forge-techno/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-800/60 bg-zinc-950/40 text-zinc-400 hover:text-[#F5B400] hover:border-amber-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=137nkgk2hdi59&utm_content=7p8i6yx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-800/60 bg-zinc-950/40 text-zinc-400 hover:text-[#F5B400] hover:border-amber-500/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-sans">
            <a href="#" className="hover:text-[#E5C158] transition-colors font-medium">Admissions Policy</a>
            <span className="text-zinc-800">•</span>
            <a href="#" className="hover:text-[#E5C158] transition-colors font-medium">Curriculum Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
