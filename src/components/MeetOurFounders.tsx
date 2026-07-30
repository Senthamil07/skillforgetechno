import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

// Founder images
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
  const foundersList = const foundersList =  [
    {
      id: "ganesh",
      name: "Ganesan Srinivasan",
      designation: "Founder & Managing Director (MD)",
      description:
        "Vision is my weapon. Execution is my strength. Legacy is my destination.",
      linkedin:
        "https://www.linkedin.com/in/ganesan-s-083a53388?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      imageUrl: ganeshImg,
    },
    {
      id: "hari",
      name: "Hari Krishnan Janarthanan",
      designation: "Founder & Chief Executive Officer (CEO)",
      description:
        "Lead with purpose. Build with passion. Leave a legacy.",
      linkedin:
        "https://www.linkedin.com/in/hari-krishnan-janarthanan-593273250",
      imageUrl: hariImg,
    },
    {
      id: "tamil",
      name: "Senthamil Selvan",
      designation: "Founder & Chief Operating Officer (COO)",
      description:
        "Break Every Limit. Awaken Every Potential. Lead with Instinct. Build a Legacy.",
      linkedin:
        "https://www.linkedin.com/in/senthamil-selvan-s-31531230b",
      imageUrl: tamilImg,
    },
    {
      id: "veath",
      name: "Veath Prakash",
      designation: "Founder & Chief Marketing Officer (CMO)",
      description:
        "The strongest brands don't compete. They redefine the game.",
      linkedin:
        "https://www.linkedin.com/in/veath-prakash-b-95b066227",
      imageUrl: veathImg,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
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
      className="group mx-auto flex max-w-sm flex-col items-center text-center"
    >
      <div className="relative mb-4 flex h-32 w-32 select-none items-center justify-center sm:mb-8 sm:h-56 sm:w-56 md:h-64 md:w-64">
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full text-[#E65F00] transition-transform duration-700 ease-out group-hover:rotate-6 group-hover:scale-105"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45,35 C15,65 10,120 40,150 C70,180 130,185 160,155 C190,125 185,70 155,40 C125,10 75,5 45,35 Z"
            fill="currentColor"
          />
        </svg>

        <div className="pointer-events-none absolute inset-2 -z-10 rounded-full bg-[#E65F00]/10 blur-xl transition-all duration-700 group-hover:scale-110 sm:inset-4" />

        <div className="relative z-20 h-24 w-24 overflow-hidden rounded-full border-2 border-white bg-zinc-50 shadow-lg transition-transform duration-500 group-hover:scale-105 sm:h-44 sm:w-44 sm:border-4 sm:shadow-2xl md:h-52 md:w-52">
          <img
            src={founder.imageUrl}
            alt={founder.name}
            referrerPolicy="no-referrer"
            className="h-full w-full cursor-pointer object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      <h3 className="mb-1 text-sm font-bold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-[#E5C158] sm:text-lg md:text-xl lg:text-2xl">
        {founder.name}
      </h3>

      <p className="mb-2 px-1 text-[8px] font-bold uppercase tracking-wider text-[#E5C158] sm:mb-3 sm:px-2 sm:text-[10px] md:text-xs">
        {founder.designation}
      </p>

      <p className="mb-3 max-w-[150px] px-1 text-[10px] font-normal leading-relaxed text-zinc-500 sm:mb-5 sm:max-w-[280px] sm:px-4 sm:text-xs md:max-w-[320px] md:text-[13px]">
        {founder.description}
      </p>

      <div className="flex items-center justify-center">
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 shadow-sm transition-all duration-200 hover:border-amber-200 hover:bg-amber-50/50 hover:text-[#E5C158] sm:h-9 sm:w-9"
          title={`${founder.name} LinkedIn Profile`}
          aria-label={`${founder.name} LinkedIn Profile`}
        >
          <Linkedin className="h-3 w-3 stroke-[2.5] sm:h-4 sm:w-4" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <section
      id="founders"
      className="relative overflow-hidden border-y border-zinc-100 bg-white py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E5C158] sm:text-xs">
            Forge Your Future In Technology
          </span>

          <div className="mx-auto mb-4 mt-2.5 h-0.5 w-16 rounded-full bg-[#E5C158]" />

          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-zinc-950 sm:text-5xl">
            Meet Our Founders
          </h2>

          <p className="mx-auto max-w-xl text-xs font-normal leading-relaxed text-zinc-500 sm:text-sm">
            A group of visionary leaders with a shared mission to align
            academic training with global corporate standards.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6 lg:gap-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          {founders.map((founder) => renderFounderCard(founder))}
        </motion.div>
      </div>
    </section>
  );
};
