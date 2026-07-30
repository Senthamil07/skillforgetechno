import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

// Import locally generated founder images
import ganeshImg from "../assets/images/regenerated_image_1782709084982.jpg";
import hariImg from "../assets/images/regenerated_image_1782709086190.jpg";
import tamilImg from "../assets/images/regenerated_image_1782709087886.jpg";

import veathImg from "../assets/images/regenerated_image_1782709090512.jpg";

interface Founder {
  id: string;
  name: string;
  designation: string;
  description: string;
  linkedin: string;
  imageUrl: string;
}

export const MeetOurFounders: React.FC = () => {
  const founders: Founder[] = [
    {
      id: "ganesh",
      name: "Ganesan Srinivasan",
      designation: "Founder & Managing Director (MD)",
      description: "Vision is my weapon. Execution is my strength. Legacy is my destination.",
      linkedin: "https://www.linkedin.com/in/ganesan-s-083a53388?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      imageUrl: ganeshImg,
    },
    {
      id: "hari",
      name: "Hari krishnan Janarthanan",
      designation: "Founder & Chief Executive Officer (CEO)",
      description: "Lead with purpose. Build with passion. Leave a legacy.",
      linkedin: "https://www.linkedin.com/in/hari-krishnan-janarthanan-593273250",
      imageUrl: hariImg,
    },
    {
      id: "tamil",
      name: "Senthamil Selvan",
      designation: "Founder & Chief Operating Officer (COO)",
      description: "Break Every Limit. Awaken Every Potential. Lead with Instinct. Build a Legacy.",
      linkedin: "https://www.linkedin.com/in/senthamil-selvan-s-31531230b",
      imageUrl: tamilImg,
    },
   
    {
      id: "veath",
      name: "Veath Prakash",
      designation: "Co-Founder & Chief Marketing Officer (CMO)",
      description: "The strongest brands don't compete. They redefine the game.",
      linkedin: "https://www.linkedin.com/in/veath-prakash-b-95b066227",
      imageUrl: veathImg,
    }
  ];

  // Animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const renderFounderCard = (founder: Founder) => (
    <motion.div
      key={founder.id}
      variants={cardVariants}
      className="flex flex-col items-center text-center max-w-sm mx-auto group"
    >
      {/* Premium organic portrait layout matching the requested design with a solid organic orange blob and elegant circular frame */}
      <div className="relative w-24 h-24 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-4 sm:mb-8 flex items-center justify-center select-none">
        
        {/* Organic Orange Blob Background Shape (mimicking the fluid organic blobs in the mockup) */}
        <svg
          className="absolute inset-0 w-full h-full text-[#E65F00] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-6 z-0"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M45,35 C15,65 10,120 40,150 C70,180 130,185 160,155 C190,125 185,70 155,40 C125,10 75,5 45,35 Z" 
            fill="currentColor" 
          />
        </svg>

        {/* Second layered subtle soft shadow blob under the main shape */}
        <div 
          className="absolute inset-2 sm:inset-4 rounded-full bg-[#E65F00]/10 blur-xl pointer-events-none -z-10 transition-all duration-700 group-hover:scale-110" 
        />

        {/* Professional Rounded Portrait Nested on Top */}
        <div className="relative w-18 h-18 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl transition-transform duration-500 group-hover:scale-105 bg-zinc-50 z-20">
          <img
            src={founder.imageUrl}
            alt={founder.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 cursor-pointer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Founder Name */}
      <h3 className="text-[10px] min-[360px]:text-xs min-[400px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-950 group-hover:text-[#E5C158] transition-colors duration-300 tracking-tight mb-0.5 sm:mb-1">
        {founder.name}
      </h3>

      {/* Lite Gold Designation Text */}
      <p className="text-[7px] min-[360px]:text-[8px] min-[400px]:text-[9px] sm:text-[10px] md:text-xs font-bold text-[#E5C158] tracking-wider uppercase mb-1 sm:mb-3 px-1 sm:px-2">
        {founder.designation}
      </p>

      {/* Role / Quote Description */}
      <p className="text-zinc-500 text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-[13px] leading-tight sm:leading-relaxed font-normal mb-2 sm:mb-5 px-1 sm:px-4 max-w-[100px] min-[360px]:max-w-[110px] min-[400px]:max-w-[130px] sm:max-w-[280px] md:max-w-[320px]">
        {founder.description}
      </p>

      {/* Dark & Gold themed Social Action Buttons */}
      <div className="flex items-center justify-center">
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-amber-50/50 text-zinc-400 hover:text-[#E5C158] flex items-center justify-center border border-zinc-200 hover:border-amber-200/50 shadow-xs transition-all duration-200"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-2.5 h-2.5 sm:w-4 sm:h-4 stroke-[2.5]" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="founders" className="relative py-24 bg-white overflow-hidden border-t border-b border-zinc-100">
      {/* Golden ambient background glows */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-amber-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header with gold/black theme */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#E5C158] uppercase animate-pulse">
            Forge Your Future In Technology
          </span>
          <div className="w-16 h-0.5 bg-[#E5C158] mx-auto mt-2.5 mb-4 rounded-full" />
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none mb-4">
            Meet Our Founders
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm font-normal leading-relaxed max-w-xl mx-auto">
            A group of visionary leaders with a shared mission to align academic training with global corporate standards.
          </p>
        </div>

        {/* Structured Grid Layout: 3 Circle-based items on Row 1, 2 Centered on Row 2 */}
        <motion.div 
          className="space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1: The First Three Founders */}
          <div className="grid grid-cols-3 gap-y-12 gap-x-2 sm:gap-x-8">
            {founders.slice(0, 3).map((founder) => renderFounderCard(founder))}
          </div>

          {/* Row 2: The Next Two Founders, centered beautifully */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-2 sm:gap-x-8 max-w-[500px] sm:max-w-[760px] mx-auto">
            {founders.slice(3, 5).map((founder) => renderFounderCard(founder))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
