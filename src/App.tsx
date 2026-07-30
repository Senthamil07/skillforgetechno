import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { PromoBanner } from "./components/PromoBanner";
import { Hero } from "./components/Hero";
import { TrustBanner } from "./components/TrustBanner";
import { Programs } from "./components/Programs";
import { ComparePrograms } from "./components/ComparePrograms";
import { WhyChoose } from "./components/WhyChoose";
import { MissionVision } from "./components/MissionVision";
import { MeetOurFounders } from "./components/MeetOurFounders";
import { LearningJourney } from "./components/LearningJourney";
import { ForgePortalSection } from "./components/ForgePortalSection";
import { ToolsSection } from "./components/ToolsSection";
import { AlumniImpact } from "./components/AlumniImpact";
import { IndustryEcosystem } from "./components/IndustryEcosystem";
import { CredentialsAndGraduation } from "./components/CredentialsAndGraduation";
import { Scholarships } from "./components/Scholarships";
import { CareerSupport } from "./components/CareerSupport";
import { CourseSchedule } from "./components/CourseSchedule";
import { FaqSection } from "./components/FaqSection";
import { CounselingForm } from "./components/CounselingForm";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BrochureModal } from "./components/BrochureModal";
import { ApplyPopupModal } from "./components/ApplyPopupModal";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { updateSEOMetadata } from "./utils/seo";
import { SheetsAdminPortal } from "./components/SheetsAdminPortal";
import { DataScienceTamilGuide } from "./components/DataScienceTamilGuide";
import leadersGroupImg from "./assets/images/regenerated_image_1782719700476.jpg";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplyPopupOpen, setIsApplyPopupOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState("Data Science Specialization");
  const [currentView, setCurrentView] = useState<"home" | "scholarships" | "journey" | "tamil-guide">("home");

  // Automatically trigger the Apply Popup Form after 30 seconds
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenApplyPopup");
    if (hasSeen !== "true") {
      const timer = setTimeout(() => {
        setIsApplyPopupOpen(true);
      }, 30000); // 30 seconds after entering our website
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseApplyPopup = () => {
    setIsApplyPopupOpen(false);
    sessionStorage.setItem("hasSeenApplyPopup", "true");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  useEffect(() => {
    if (currentView === "scholarships") {
      updateSEOMetadata({
        title: "Skill Forge Scholarships | Financial Accessibility Program",
        description: "Apply for merit-based, need-based, or regional scholarship talent grants to join Skill Forge's high-paying technology cohorts.",
      });
    } else if (currentView === "journey") {
      updateSEOMetadata({
        title: "Our Journey | Skill Forge Technology",
        description: "Learn who we are, our mission, vision, and meet the founders driving corporate integration and student success at Skill Forge.",
      });
    } else if (currentView === "tamil-guide") {
      updateSEOMetadata({
        title: "Data Science in Tamil | Beginner Guide for Career Growth",
        description: "Learn Data Science in Tamil step by step. Beginner guide covering Python, SQL, Machine Learning, roadmap and career opportunities.",
        keywords: "Data Science in Tamil, Python, SQL, Machine Learning, Data Analyst, Career Guide",
      });
   } else {
  let title =
    "Skill Forge Technologies | Premium Online IT Training Institute";

  let desc =
    "Skill Forge Technologies offers industry-focused online training in Data Science, Data Analytics, AWS & DevOps, and CCNA Networking with live classes, real-world projects, expert mentors, and placement assistance.";

  if (
    currentView !== "home" &&
    preselectedCourse === "Data Science Specialization"
  ) {
    title = "Data Science Course | Skill Forge Technologies";
    desc =
      "Learn Data Science with Python, SQL, Machine Learning, Artificial Intelligence, real-world projects, expert mentoring, and placement assistance.";
  } else if (
    currentView !== "home" &&
    preselectedCourse === "Data Analytics Program"
  ) {
    title = "Data Analytics Course | Skill Forge Technologies";
    desc =
      "Learn Excel, SQL, Power BI, Python, dashboard development, business analytics, real-world projects, and placement assistance.";
  } else if (
    currentView !== "home" &&
    preselectedCourse === "AWS Cloud"
  ) {
    title = "AWS and DevOps Course | Skill Forge Technologies";
    desc =
      "Learn AWS Cloud, Linux, Docker, Kubernetes, Terraform, CI/CD, practical labs, projects, and placement assistance.";
  }

  updateSEOMetadata({
    title,
    description: desc,
  });
}
  };

  const handleApplyClick = () => {
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        scrollToSection("counseling");
      }, 150);
    } else {
      scrollToSection("counseling");
    }
  };

  const handleBrochureButton = () => {
    setPreselectedCourse("Data Science Specialization");
    setIsModalOpen(true);
  };

  const handleInquireCourse = (courseName: string) => {
    setPreselectedCourse(courseName);
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        scrollToSection("counseling");
      }, 150);
    } else {
      scrollToSection("counseling");
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-[#F5B400] selection:text-black font-sans leading-relaxed">
      
      {/* 1. Premium Navbar */}
      <Navbar 
        onApplyClick={handleApplyClick} 
        onBrochureClick={handleBrochureButton} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <AnimatePresence mode="wait">
        {currentView === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* 2. Hero Section */}
            <Hero onApplyClick={handleApplyClick} onBrochureClick={handleBrochureButton} />

            {/* 3. Trust Banner */}
            <TrustBanner />

            {/* 4. Programs */}
            <Programs 
              onInquireClick={handleInquireCourse} 
              onBrochureClick={handleBrochureButton} 
              onScholarshipsClick={() => {
                setCurrentView("scholarships");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* 4.5. Compare Programs */}
            <ComparePrograms onInquireClick={handleInquireCourse} />

            {/* 5. Why Choose Skill Forge */}
            <WhyChoose />

            {/* 7. Learning Journey Timeline */}
            <LearningJourney />

            {/* 7.5. Forge Portal Staggered System with Curved Back Arrows */}
            <ForgePortalSection />

            {/* 8. Alumni Impact Directory */}
            <AlumniImpact />

            {/* 8.5. Premium Industry Ecosystem Section */}
            <IndustryEcosystem />

            {/* 9. Credentials & Graduation Day Section */}
            <CredentialsAndGraduation />

            {/* 10. Tools & Ecosystem */}
            <ToolsSection />

            {/* 11. Career Support */}
            <CareerSupport />

            {/* 11.5. Course Schedule Section */}
            <CourseSchedule onInquireClick={handleInquireCourse} />

            {/* 12. FAQ */}
            <FaqSection />

            {/* 13. Career Counseling Form */}
            <section id="counseling" className="relative py-12 sm:py-20 lg:py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
              {/* Flare */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#F5B400]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <CounselingForm initialCourse={preselectedCourse} />
              </div>
            </section>

            {/* 14. Contact */}
            <ContactSection />
          </motion.div>
        ) : currentView === "journey" ? (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white"
          >
            {/* Who Is Us / Header */}
            <div className="relative min-h-[90vh] flex items-center justify-center border-b border-zinc-200 overflow-hidden bg-white text-zinc-900 py-16 sm:py-24">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16 sm:py-24">
                <span className="font-mono text-[10px] text-amber-800 font-bold tracking-widest uppercase block mb-4 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full w-fit mx-auto animate-pulse">
                  WHO WE ARE & OUR STORY
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6">
                  Empowering Tech Leaders of <span className="text-[#F5B400] font-black">Tomorrow</span>
                </h1>
                <p className="text-zinc-650 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-12">
                  Skill Forge is more than a bootcamp. We are an operational technology workspace designed by industry veterans to forge high-tier technical careers through rigorous, spreadsheet-synchronized, real-world mastery.
                </p>

                {/* Elegant, Curated Images Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch max-w-4xl mx-auto mb-16 text-left">
                  {/* Left Big Frame: Founders Group */}
                  <div className="md:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 shadow-lg shadow-zinc-100 flex flex-col justify-between group">
                    <div className="overflow-hidden rounded-xl bg-zinc-100 relative aspect-[16/10]">
                      <img
                        src={leadersGroupImg}
                        alt="Skill Forge Executive Leadership Team"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="pt-4 px-1.5 pb-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold">Leadership Core</span>
                      </div>
                      <h3 className="text-sm font-bold text-zinc-950 mb-1">The Founding Technical Partners</h3>
                      <p className="text-zinc-500 text-xs font-light leading-relaxed">
                       MD Ganesan Srinivasan, CEO Hari krishnan, COO Senthamil Selvan, and CMO Veath Prakash, combining over 45 years of production software engineering and tech leadership.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: 2 Stacked Curated Workspace/Coding Images */}
                  <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Top Stacked Image: Modern Workspace */}
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 shadow-lg shadow-zinc-100 flex-1 flex flex-col justify-between group">
                      <div className="overflow-hidden rounded-xl bg-zinc-100 relative aspect-[16/9]">
                        <img
                          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
                          alt="Modern Collaborative Technology Workspace"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>
                      <div className="pt-3 px-1">
                        <h4 className="text-xs font-bold text-zinc-950 mb-0.5">High-Performance Lab Environment</h4>
                        <p className="text-zinc-500 text-[11px] font-light leading-snug">
                          Virtual and hybrid sandbox workspaces replicating authentic enterprise developer environments.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Stacked Image: Hands-on code reviews */}
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 shadow-lg shadow-zinc-100 flex-1 flex flex-col justify-between group">
                      <div className="overflow-hidden rounded-xl bg-zinc-100 relative aspect-[16/9]">
                        <img
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                          alt="Hands-on Code Reviews and Collaborative Mentorship"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>
                      <div className="pt-3 px-1">
                        <h4 className="text-xs font-bold text-zinc-950 mb-0.5">Real-time Pull Request Workflows</h4>
                        <p className="text-zinc-500 text-[11px] font-light leading-snug">
                          Live pair programming, code audits, and pull request approvals led by senior engineers daily.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll Down Hint to make the fit clean */}
                <div className="flex flex-col items-center justify-center gap-2 animate-bounce">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll to Discover</span>
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>


            {/* Mission & Vision Section */}
            <MissionVision />

            {/* Meet Our Founders */}
            <MeetOurFounders />

            {/* Core Operations Portal Info / Details */}
            <div className="py-12 bg-zinc-50 border-t border-zinc-200">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-zinc-500 text-xs sm:text-sm font-light">
                  Our strategic operating model ensures that all live bootcamps, assignments, corporate talent partnerships, and marketing engines synchronize under professional ISO standards.
                </p>
              </div>
            </div>

            {/* Footer Back Link CTA */}
            <div className="text-center py-12 bg-white border-t border-zinc-200 flex justify-center">
              <button
                onClick={handleApplyClick}
                className="px-6 py-3 bg-[#F5B400] text-black rounded-lg font-bold hover:bg-black hover:text-[#F5B400] transition-colors duration-200 font-mono text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-amber-500/10"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        ) : currentView === "tamil-guide" ? (
          <motion.div
            key="tamil-guide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="pt-20 md:pt-28 bg-white"
          >
            <DataScienceTamilGuide onApplyClick={handleApplyClick} />
          </motion.div>
        ) : (
          <motion.div
            key="scholarships"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="pt-20 md:pt-28"
          >
            <Scholarships 
              onBackClick={() => setCurrentView("home")}
              onApplyClick={() => {
                setCurrentView("home");
                setTimeout(() => {
                  scrollToSection("counseling");
                }, 100);
              }}
              isStandalone={true}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15. Premium Footer */}
      <Footer 
        onBrochureClick={handleBrochureButton} 
        onApplyClick={handleApplyClick} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Brochure Dynamic Modal Dialog */}
      <BrochureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={preselectedCourse}
      />

      {/* Auto-Trigger 30-Second Apply Popup Modal */}
      <ApplyPopupModal
        isOpen={isApplyPopupOpen}
        onClose={handleCloseApplyPopup}
        defaultCourse={preselectedCourse}
      />

      {/* Floating Active WhatsApp Chat Service */}
      <WhatsAppButton />

      {/* Google Sheets Integration Hub & Admin Portal */}
      <SheetsAdminPortal />


    </div>
  );
}
