import React from "react";
import { Users, Code, Compass, Briefcase, Award, HelpCircle } from "lucide-react";

export const TrustBanner: React.FC = () => {
  const trustItems = [
    {
      title: "Industry Expert Trainers",
      description: "Learn from top practitioner mentors actively working in tech.",
      icon: <Users className="text-amber-600 w-6 h-6" />,
    },
    {
      title: "Hands-On Projects",
      description: "Build a production-ready repository of real-world applications.",
      icon: <Code className="text-amber-600 w-6 h-6" />,
    },
    {
      title: "Career Guidance",
      description: "One-on-one professional grooming, coaching & goal mapping.",
      icon: <Compass className="text-amber-600 w-6 h-6" />,
    },
    {
      title: "Placement Assistance",
      description: "Get introduced to hiring partners and corporate networks.",
      icon: <Briefcase className="text-amber-600 w-6 h-6" />,
    },
    {
      title: "Flexible Learning",
      description: "Hybrid schedule formats designed to match working professionals.",
      icon: <Award className="text-amber-600 w-6 h-6" />,
    },
    {
      title: "24/7 Doubt Clarification",
      description: "Uninterrupted support and expert solutions whenever you hit a roadblock.",
      icon: <HelpCircle className="text-amber-600 w-6 h-6" />,
    },
  ];

  return (
    <section className="relative py-12 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
      {/* Absolute background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-24 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-white rounded-xl border border-zinc-200 hover:border-amber-500/40 transition-all hover:bg-zinc-50 shadow-sm hover:shadow-md group"
            >
              <div className="p-3 bg-amber-50 rounded-lg mb-3 border border-amber-100 group-hover:bg-amber-100/50 group-hover:border-amber-400/30 transition-all">
                {item.icon}
              </div>
              <h4 className="font-display font-semibold text-zinc-900 text-sm md:text-base mb-1 tracking-tight">
                {item.title}
              </h4>
              <p className="text-zinc-550 text-xs text-balance leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
