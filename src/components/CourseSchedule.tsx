import React, { useState } from "react";
import { Calendar, Clock, Globe, ArrowRight, UserCheck, AlertTriangle, Check, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CourseScheduleProps {
  onInquireClick: (courseName: string) => void;
}

type TimeZoneType = "IST" | "SGT" | "GST" | "EST";
type CategoryType = "all" | "ds" | "da" | "cloud" | "networking";

interface ScheduleItem {
  id: string;
  courseName: string;
  category: "ds" | "da" | "cloud" | "networking";
  startDate: string;
  days: string;
  // Dynamic times for each timezone
  times: Record<TimeZoneType, string>;
  status: "Filling Fast" | "Seats Available" | "Last 3 Seats" | "Active";
  seatsLeft: number;
  mode: string;
}

const SCHEDULES: ScheduleItem[] = [
  {
    id: "ds-batch-1",
    courseName: "Data Science Specialization",
    category: "ds",
    startDate: "July 15, 2026",
    days: "Mon - Fri (Weekdays)",
    times: {
      IST: "06:00 PM - 08:00 PM (IST) [Evening Batch]",
      SGT: "08:30 PM - 10:30 PM (SGT)",
      GST: "04:30 PM - 06:30 PM (GST)",
      EST: "08:30 AM - 10:30 AM (EST)"
    },
    status: "Filling Fast",
    seatsLeft: 3,
    mode: "Live Interactive + Forge Sandbox"
  },
  {
    id: "da-batch-1",
    courseName: "Advanced Data Analytics Blueprint",
    category: "da",
    startDate: "July 22, 2026",
    days: "Mon - Fri (Weekdays)",
    times: {
      IST: "10:00 AM - 12:00 PM (IST) [Morning Batch]",
      SGT: "12:30 PM - 02:30 PM (SGT)",
      GST: "08:30 AM - 10:30 AM (GST)",
      EST: "12:30 AM - 02:30 AM (EST)"
    },
    status: "Seats Available",
    seatsLeft: 8,
    mode: "Live Interactive + Power BI Lab"
  },
  {
    id: "cloud-batch-1",
    courseName: "AWS Cloud & DevOps Specialization",
    category: "cloud",
    startDate: "August 01, 2026",
    days: "Sat - Sun (Weekend Batch)",
    times: {
      IST: "02:00 PM - 05:00 PM (IST) [Afternoon Batch]",
      SGT: "04:30 PM - 07:30 PM (SGT)",
      GST: "12:30 PM - 03:30 PM (GST)",
      EST: "04:30 AM - 07:30 AM (EST)"
    },
    status: "Seats Available",
    seatsLeft: 12,
    mode: "Live AWS Infrastructure Live-Build"
  },
  {
    id: "networking-batch-1",
    courseName: "Cisco CCNA Enterprise Networking",
    category: "networking",
    startDate: "August 10, 2026",
    days: "Mon - Fri (Weekdays)",
    times: {
      IST: "04:00 PM - 06:00 PM (IST) [Evening Batch]",
      SGT: "06:30 PM - 08:30 PM (SGT)",
      GST: "02:30 PM - 04:30 PM (GST)",
      EST: "06:30 AM - 08:30 AM (EST)"
    },
    status: "Last 3 Seats",
    seatsLeft: 2,
    mode: "Live Cisco Router Hands-on Labs"
  }
];

export const CourseSchedule: React.FC<CourseScheduleProps> = ({ onInquireClick }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [selectedTimeZone, setSelectedTimeZone] = useState<TimeZoneType>("IST");

  const filteredSchedules = SCHEDULES.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const getStatusColor = (status: ScheduleItem["status"]) => {
    switch (status) {
      case "Last 3 Seats":
        return "bg-red-50 text-red-700 border-red-200";
      case "Filling Fast":
        return "bg-amber-50 text-amber-850 border-amber-200";
      case "Seats Available":
        return "bg-emerald-50 text-emerald-850 border-emerald-200";
      default:
        return "bg-zinc-50 text-zinc-700 border-zinc-200";
    }
  };

  const getTimeZoneLabel = (tz: TimeZoneType) => {
    switch (tz) {
      case "IST": return "India (IST)";
      case "SGT": return "Singapore (SGT)";
      case "GST": return "Gulf / UAE (GST)";
      case "EST": return "US East (EST)";
    }
  };

  return (
    <section id="course-schedule" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-white border-b border-zinc-200">
      {/* Background radial flare */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3">
            UPCOMING COHORTS & SEAT AVAILABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Interactive Live <span className="gold-gradient">Course Schedule</span>
          </h2>
          <p className="text-zinc-650 text-base sm:text-lg font-light leading-relaxed">
            All cohorts are hard-capped at <span className="font-semibold text-zinc-900">15 students</span> to preserve personalized peer mentorship and live workspace coding code-reviews.
          </p>
        </motion.div>

        {/* Filters and Timezone Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-zinc-150"
        >
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-50 rounded-xl border border-zinc-200 self-start lg:self-auto">
            {[
              { id: "all", label: "All Batches" },
              { id: "ds", label: "Data Science" },
              { id: "da", label: "Data Analytics" },
              { id: "cloud", label: "AWS & DevOps" },
              { id: "networking", label: "Cisco Networking" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as CategoryType)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer uppercase ${
                  activeCategory === tab.id
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timezone Converter Dropdown */}
          <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-xl self-start lg:self-auto">
            <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs font-medium">
              <Globe className="w-4 h-4 text-amber-500 animate-[spin_20s_linear_infinite]" />
              <span>TIMEZONE:</span>
            </div>
            <div className="flex gap-1.5">
              {(["IST", "SGT", "GST", "EST"] as TimeZoneType[]).map((tz) => (
                <button
                  key={tz}
                  onClick={() => setSelectedTimeZone(tz)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    selectedTimeZone === tz
                      ? "bg-amber-100 text-amber-900 border border-amber-300"
                      : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                  }`}
                  title={`View times in ${getTimeZoneLabel(tz)}`}
                >
                  {tz}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Clean Responsive Tabular Format */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300"
        >
          {/* Desktop Tabular Format */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
                  <th className="py-4 px-6 font-bold">Bootcamp & Domain</th>
                  <th className="py-4 px-6 font-bold">Next Start Date</th>
                  <th className="py-4 px-6 font-bold">Days & Local Class Time</th>
                  <th className="py-4 px-6 font-bold text-center">Batch Status</th>
                  <th className="py-4 px-6 font-bold text-center">Available Seats</th>
                  <th className="py-4 px-6 font-bold text-right">Enrollment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-150">
                <AnimatePresence mode="popLayout">
                  {filteredSchedules.map((item) => (
                    <motion.tr
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="group hover:bg-zinc-50/50 transition-colors duration-200"
                    >
                      {/* Name & Mode */}
                      <td className="py-5 px-6">
                        <div className="flex flex-col">
                          <span className="font-sans font-bold text-sm sm:text-base text-zinc-900 group-hover:text-amber-700 transition-colors duration-150">
                            {item.courseName}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500 mt-0.5">
                            {item.mode}
                          </span>
                        </div>
                      </td>

                      {/* Start Date */}
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-zinc-400" />
                          <span className="text-xs sm:text-sm font-semibold text-zinc-800 font-mono">
                            {item.startDate}
                          </span>
                        </div>
                      </td>

                      {/* Schedule, times and timezone converted */}
                      <td className="py-5 px-6">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-zinc-800">
                            {item.days}
                          </span>
                          <span className="text-[11px] font-mono text-[#926F12] font-semibold mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3 flex-shrink-0 text-amber-500" />
                            {item.times[selectedTimeZone]}
                          </span>
                        </div>
                      </td>

                      {/* Batch Status badge */}
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border uppercase ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>

                      {/* Available Seats info */}
                      <td className="py-5 px-6 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#F5B400] animate-pulse" />
                            <span className="font-mono text-sm font-bold text-zinc-900">
                              {item.seatsLeft} / 15
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-400 mt-0.5">
                            Strict hard cap
                          </span>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="py-5 px-6 text-right">
                        <button
                          onClick={() => onInquireClick(item.courseName)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5B400] hover:text-black transition-all cursor-pointer group/btn"
                        >
                          <span>Reserve Seat</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Mobile Card-Based Format */}
          <div className="block md:hidden divide-y divide-zinc-150">
            <AnimatePresence mode="popLayout">
              {filteredSchedules.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 flex flex-col gap-3.5 hover:bg-zinc-50/50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border uppercase bg-amber-50 text-[#926F12] border-amber-200">
                      {item.category === 'ds' ? 'Data Science' : item.category === 'da' ? 'Data Analytics' : item.category === 'cloud' ? 'AWS & DevOps' : 'Networking'}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border uppercase ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-sm text-zinc-900">
                      {item.courseName}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {item.mode}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 pt-2 pb-2 border-y border-zinc-100">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Start Date</span>
                      <span className="text-xs font-semibold text-zinc-800 font-mono mt-0.5 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        {item.startDate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Cohort Style</span>
                      <span className="text-xs font-semibold text-zinc-800 font-mono mt-0.5 block truncate">
                        {item.days}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Class Time ({selectedTimeZone})</span>
                    <span className="text-xs font-mono text-[#926F12] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {item.times[selectedTimeZone]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Available</span>
                      <span className="font-mono text-xs font-bold text-zinc-900 mt-0.5">
                        {item.seatsLeft} / 15 Seats Left
                      </span>
                    </div>

                    <button
                      onClick={() => onInquireClick(item.courseName)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#F5B400] hover:text-black transition-all cursor-pointer"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Quick Notice Banner below table */}
          <div className="bg-zinc-50 border-t border-zinc-200 p-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-50 rounded border border-amber-200 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <p className="text-zinc-650 text-xs font-light leading-relaxed max-w-2xl">
                Can't find a timing that fits your schedule? We launch new modular batches twice a month. 
                Register your request below to receive custom priority notification alerts for the next cohort releases.
              </p>
            </div>
            <button
              onClick={() => onInquireClick("Custom Timing Request")}
              className="text-xs font-mono font-bold tracking-wider text-amber-800 hover:text-amber-950 underline shrink-0 cursor-pointer"
            >
              Request Custom Batch Timing
            </button>
          </div>
        </motion.div>

        {/* Dynamic Social Proof / Trust Factor Callouts for Schedules */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {[
            {
              icon: <UserCheck className="w-5 h-5 text-amber-500" />,
              title: "Hard-Capped Batch Size",
              desc: "Limited strictly to 15 peers. This ensures our core engineering mentors review every live SQL query and machine learning workflow you build."
            },
            {
              icon: <Globe className="w-5 h-5 text-amber-500" />,
              title: "Global Timezone Access",
              desc: "Interactive live classes scheduled elegantly to serve South India, Southeast Asia (SGT), the Middle East, and flexible US-based shifts."
            },
            {
              icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
              title: "100% Session Playbacks",
              desc: "Get lifetime access to the Forge Student Portal including clean, chapter-indexed recording files, curated cheat sheets, and active GitHub sandbox codes."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-5 rounded-xl border border-zinc-150 hover:border-zinc-300 transition-colors">
              <div className="p-2 bg-amber-50 rounded-lg h-fit border border-amber-100 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm mb-1">{item.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
