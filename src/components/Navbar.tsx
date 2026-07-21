import React, { useState, useEffect } from "react";
import { HorizontalLogo } from "./ForgeIcons";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

interface NavbarProps {
  onApplyClick: () => void;
  onBrochureClick: () => void;
  currentView: "home" | "scholarships" | "journey" | "tamil-guide";
  setCurrentView: (view: "home" | "scholarships" | "journey" | "tamil-guide") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick, onBrochureClick, currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Our Journey", href: "#journey" },
    { name: "Alumni", href: "#alumni" },
    { name: "Scholarships", href: "#scholarships" },
    { name: "Tamil Guide", href: "#tamil-guide" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === "#scholarships") {
      setCurrentView("scholarships");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#journey") {
      setCurrentView("journey");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#tamil-guide") {
      setCurrentView("tamil-guide");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentView !== "home") {
      setCurrentView("home");
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const id = href.replace("#", "");
      
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(interval);
          const navbarOffset = 80;
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
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 py-2.5 shadow-md"
          : currentView === "home"
          ? "bg-transparent py-4 md:py-5"
          : "bg-white/40 backdrop-blur-sm py-4 md:py-5"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[56px] sm:min-h-[72px] gap-4">
          {/* Brand Logo - Aligned Left Corner */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex-shrink-0 flex items-center py-1 group"
          >
            <HorizontalLogo 
              className="h-8 sm:h-9 md:h-9.5 transition-transform hover:scale-[1.01]" 
              size={36} 
              lightText={!scrolled && currentView === "home"}
            />
          </a>
 
          {/* Desktop Navigation Links - Perfectly spaced in center-right */}
          {currentView !== "scholarships" && (
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`${
                    !scrolled && currentView === "home"
                      ? "text-zinc-300 hover:text-[#F5B400]"
                      : "text-zinc-700 hover:text-[#F5B400]"
                  } font-sans font-semibold text-[13px] xl:text-sm tracking-wide transition-all duration-300 relative py-1.5 group`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5B400] scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ease-out origin-left" />
                </a>
              ))}
            </div>
          )}

          {/* Actions - Aligned Right Corner with precise professional padding and gap */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Download Brochure CTA */}
            {currentView !== "scholarships" && (
              <button
                onClick={onBrochureClick}
                className={`px-2.5 py-1.5 sm:px-4 sm:py-2 border rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap uppercase font-mono shadow-sm ${
                  !scrolled && currentView === "home"
                    ? "border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-[#F5B400]"
                    : "border-zinc-300 bg-white/80 text-zinc-800 hover:border-[#F5B400] hover:text-[#926F12]"
                }`}
              >
                Brochure
              </button>
            )}
            
            {/* Apply Now CTA */}
            <button
              onClick={onApplyClick}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2 bg-[#F5B400] hover:bg-black hover:text-[#F5B400] text-black text-[11px] sm:text-xs font-bold rounded-md sm:rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-amber-500/10 cursor-pointer whitespace-nowrap uppercase font-mono"
            >
              <span>Apply Now</span>
              <ArrowRight size={13} className="hidden sm:inline-block" />
            </button>

            {/* Compact Mobile Menu Trigger */}
            {currentView !== "scholarships" && (
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-1.5 sm:p-2 rounded-md focus:outline-none transition-all cursor-pointer border ${
                    !scrolled && currentView === "home"
                      ? "text-zinc-300 hover:text-white hover:bg-zinc-900 border-zinc-800"
                      : "text-zinc-650 hover:text-black hover:bg-zinc-100 border-zinc-200 hover:border-zinc-300"
                  }`}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && currentView !== "scholarships" && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-zinc-200 px-5 pt-3 pb-8 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-zinc-800 hover:text-[#F5B400] hover:bg-zinc-50 font-semibold text-base transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
