import React, { useState, useRef } from "react";
import { 
  Award, 
  Check, 
  Sparkles, 
  Star, 
  Heart, 
  GraduationCap, 
  ChevronRight, 
  HelpCircle, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  BookOpen,
  ClipboardList,
  Users,
  ShieldCheck,
  Calendar,
  Layers,
  Lightbulb,
  Building,
  DollarSign,
  TrendingUp,
  Briefcase,
  ChevronDown,
  FileSpreadsheet,
  MessageCircle,
  PhoneCall,
  FileText,
  BadgeCheck,
  IdCard,
  Camera,
  Wallet
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { addSubmission } from "../utils/submissionStore";

interface ScholarshipsProps {
  onBackClick?: () => void;
  isStandalone?: boolean;
}

export const Scholarships: React.FC<ScholarshipsProps> = ({ onBackClick, isStandalone = true }) => {
  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [degree, setDegree] = useState("");
  const [currentYear, setCurrentYear] = useState("3rd Year");
  const [course, setCourse] = useState("Data Science Specialization");
  const [scholarshipType, setScholarshipType] = useState("Merit-Based Excellence Scholarship");
  const [marks, setMarks] = useState("");
  const [workshopAttended, setWorkshopAttended] = useState("No");
  const [reason, setReason] = useState("");
  
  // Submit State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const formSectionRef = useRef<HTMLDivElement>(null);
  const eligibilitySectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formSectionRef.current) {
      const navbarOffset = 100;
      const elementPosition = formSectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToEligibility = () => {
    if (eligibilitySectionRef.current) {
      const navbarOffset = 100;
      const elementPosition = eligibilitySectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!name || !phone || !email || !collegeName || !degree || !marks || !reason) {
      setErrorMessage("Please fill in all the required fields to apply.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await addSubmission({
        type: "Scholarship",
        name,
        email,
        phone,
        program: `Scholarship [${course}] - Type: ${scholarshipType} - Marks: ${marks}`,
        degree: `${degree} (${currentYear}) - College: ${collegeName}`,
        city: `Workshop: ${workshopAttended} - Reason: ${reason.substring(0, 80)}...`
      });

      setSubmitStatus("success");
      // Reset Form fields
      setName("");
      setPhone("");
      setEmail("");
      setCollegeName("");
      setDegree("");
      setMarks("");
      setReason("");
    } catch (error) {
      console.error(error);
      setErrorMessage("System experienced a sync issue. Please try submitting again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scholarshipCards = [
    {
      id: "merit",
      icon: <Star className="w-5 h-5 text-[#926F12]" />,
      title: "Merit-Based Excellence Scholarship",
      subtitle: "For students with outstanding academic performance.",
      eligibility: [
        "75%+ Marks / Good CGPA",
        "Passion for Technology",
        "Skill Assessment"
      ],
      benefits: [
        "Up to 50% Fee Scholarship",
        "Priority Batch Selection",
        "Certificate of Excellence",
        "Exclusive Mentor Support"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      badge: "🏆 ACADEMIC ELITE",
      colorAccent: "from-[#F5B400] to-amber-600",
      buttonText: "Apply Now"
    },
    {
      id: "workshop",
      icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
      title: "College Workshop Scholarship",
      subtitle: "Exclusive scholarship for students who attended Skill Forge workshops or seminars.",
      eligibility: [
        "Workshop Participation",
        "Assessment Completion"
      ],
      benefits: [
        "Workshop Scholarship",
        "Fast Track Admission",
        "Fee Discount",
        "Free Career Counselling"
      ],
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop",
      badge: "🎓 WORKSHOP ALUMNI",
      colorAccent: "from-amber-500 to-yellow-600",
      buttonText: "Claim Scholarship"
    },
    {
      id: "innovator",
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      title: "Future Innovator Scholarship",
      subtitle: "For students with exceptional project ideas, innovation, or technical skills.",
      eligibility: [
        "Portfolio",
        "Mini Project",
        "Hackathon"
      ],
      benefits: [
        "Up to 40% Scholarship",
        "Live Project Opportunity",
        "Founder Mentorship",
        "Internship Priority"
      ],
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop",
      badge: "💡 FUTURE BUILDER",
      colorAccent: "from-amber-400 to-[#F5B400]",
      buttonText: "Apply Now"
    },
    {
      id: "need",
      icon: <Heart className="w-5 h-5 text-[#926F12]" />,
      title: "Need-Based Support Scholarship",
      subtitle: "Helping passionate students who face financial challenges.",
      eligibility: [
        "Financial Verification",
        "Personal Interview",
        "Commitment to Complete Course"
      ],
      benefits: [
        "Flexible Fee Plan",
        "Scholarship Support",
        "Career Guidance"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      badge: "❤️ ACCESSIBLE PATH",
      colorAccent: "from-amber-600 to-amber-500",
      buttonText: "Apply Now"
    }
  ];

  const valuePropositions = [
    {
      icon: <Star className="w-6 h-6 text-[#926F12]" />,
      title: "Reward Academic Excellence",
      desc: "Get recognized and rewarded for your dedicated hard work and exceptional scholastic background."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#926F12]" />,
      title: "Reduce Financial Burden",
      desc: "Remove the stress of heavy educational upfront payments and focus entirely on mastering top-tier tech stack."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#926F12]" />,
      title: "Build Future Leaders",
      desc: "Harness exclusive, targeted leadership pipelines and dynamic capstone roles inside fast-scaling teams."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#926F12]" />,
      title: "Industry Ready Training",
      desc: "Undergo high-density simulations, live production deployments, and real system engineering workflows."
    },
    {
      icon: <Users className="w-6 h-6 text-[#926F12]" />,
      title: "Expert Mentorship",
      desc: "Receive weekly 1-on-1 performance architecture and portfolio audits from experienced software leads."
    },
    {
      icon: <Award className="w-6 h-6 text-[#926F12]" />,
      title: "Placement Assistance",
      desc: "Connect directly into our robust regional consortium of tier-1 technology and banking corporations."
    }
  ];

  const selectionProcessSteps = [
    { step: "01", label: "Apply Online", desc: "Fill up the official digital application portal down below." },
    { step: "02", label: "Document Verification", desc: "Submit matching educational certificates or proof." },
    { step: "03", label: "Skill Assessment", desc: "Complete our standard tech logic baseline quiz." },
    { step: "04", label: "Personal Counselling", desc: "Discuss career plans and fit with a tech advisor." },
    { step: "05", label: "Scholarship Review", desc: "The admissions committee assesses dynamic eligibility." },
    { step: "06", label: "Admission Confirmation", desc: "Lock your seat and onboard on the selected cohort." }
  ];

  const documentsRequired = [
    { label: "10th / 12th Marksheet", desc: "Academic baseline proof", icon: <FileText className="w-7 h-7 text-white" /> },
    { label: "College ID", desc: "Student status proof", icon: <GraduationCap className="w-7 h-7 text-white" /> },
    { label: "Degree / Diploma", desc: "Highest qualification", icon: <BadgeCheck className="w-7 h-7 text-white" /> },
    { label: "Aadhaar Card", desc: "Secure identity verification", icon: <IdCard className="w-7 h-7 text-white" /> },
    { label: "Passport Photo", desc: "Admissions registry file", icon: <Camera className="w-7 h-7 text-white" /> },
    { label: "Income Proof", desc: "Required only for Need-Based channel", icon: <Wallet className="w-7 h-7 text-white" /> }
  ];

  const faqData = [
    {
      q: "How much scholarship can I receive?",
      a: "Eligible students can receive up to a 50% scholarship on our premier courses based on merit, workshop participation, innovators background, or verified financial difficulties."
    },
    {
      q: "Is everyone guaranteed a scholarship?",
      a: "No. Scholarships are competitive and are awarded based on a holistic evaluation including your screening test score, academic records, and personal interviews."
    },
    {
      q: "Can I apply for more than one scholarship?",
      a: "Yes. You can indicate your interest in different categories in the form, and our admissions committee will evaluate you for the most suitable scholarship track."
    },
    {
      q: "Will scholarships affect placement support?",
      a: "Absolutely not. Every student, regardless of the scholarship level, receives the exact same high-touch 100% placement support, mentor network, and interview guarantees."
    }
  ];

  return (
    <div 
      className="bg-white text-zinc-900 min-h-screen relative font-sans selection:bg-[#F5B400] selection:text-black"
      style={{
        background: "radial-gradient(circle at 15% 15%, rgba(245,180,0,0.06) 0%, rgba(255,255,255,0.9) 50%, #ffffff 100%)"
      }}
    >
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F5B400]/4 rounded-full blur-[150px] pointer-events-none select-none" />
      <div className="absolute top-[35%] right-5 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-[20%] left-5 w-[600px] h-[600px] bg-yellow-600/3 rounded-full blur-[150px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 relative z-10">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-zinc-50 border border-zinc-200/80 p-6 sm:p-12 lg:p-16 rounded-3xl mb-24 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-zinc-50/40 to-white opacity-40 pointer-events-none" />
          
          <div className="lg:col-span-7 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="font-mono text-[10px] sm:text-[11px] text-[#926F12] font-bold tracking-widest uppercase">
                Up to 50% Scholarship Program
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-none">
              Skill Forge <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-[#F5B400] to-yellow-600">
                Scholarships
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-semibold text-zinc-800 font-sans">
              Invest in Your Future. We Invest in Your Potential.
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
              At Skill Forge Technologies, we believe financial limitations should never stop talented students from building a successful career. Our scholarship programs are designed to recognize academic excellence, reward dedication, and support deserving students. Apply today and receive up to 50% scholarship on selected programs.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#F5B400] hover:bg-[#E0A300] text-zinc-950 font-bold font-mono tracking-wider text-xs rounded-xl uppercase transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg cursor-pointer text-center"
              >
                Apply for Scholarship
              </button>
              <button
                onClick={scrollToEligibility}
                className="px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-850 font-bold font-mono tracking-wider text-xs rounded-xl uppercase transition-all duration-300 border border-zinc-200 cursor-pointer text-center shadow-sm"
              >
                View Eligibility
              </button>
            </div>
          </div>

          {/* Hero Image (3-4 students in professional lab/classroom with golden tone) */}
          <div className="lg:col-span-5 relative flex justify-center items-center z-10">
            <div className="relative w-full max-w-[390px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-zinc-200 shadow-xl group bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Students in modern lab collaborating"
                className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Premium Floating Circular Gold Badge */}
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-white border-2 border-[#F5B400] flex flex-col items-center justify-center p-2 text-center shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300 pointer-events-auto">
                <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-tight leading-none">UP TO</span>
                <span className="font-mono text-2xl font-extrabold text-[#926F12] my-0.5">50%</span>
                <span className="font-mono text-[8px] font-bold text-zinc-500 leading-tight">SCHOLARSHIP</span>
                <div className="absolute inset-1 border border-[#F5B400]/20 rounded-full pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Premium Scholarship Program Cards */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[10px] sm:text-[11px] text-amber-600 font-bold tracking-widest uppercase block mb-3">
              PROGRAM PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Scholarship Programs
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base font-light mt-3">
              Explore our four dedicated scholarship tracks tailored to empower merit scholars, workshop attendees, future innovators, and need-based candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {scholarshipCards.map((card, idx) => {
              // Split title: all words except the last in dark slate-blue, and the last word in bright coral-orange
              const titleParts = card.title.split(" ");
              const lastWord = titleParts.pop();
              const mainTitle = titleParts.join(" ");

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#0C0A09] border border-[#F5B400]/20 hover:border-[#F5B400]/50 hover:shadow-[0_20px_45px_rgba(245,180,0,0.12)] rounded-[32px] overflow-hidden flex flex-col justify-between group transition-all duration-500 relative shadow-xl p-6 sm:p-10 space-y-6 sm:space-y-8"
                >
                  <div className="space-y-6 sm:space-y-8">
                    {/* Badge and Title Block */}
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#F5B400] bg-zinc-900 border border-[#F5B400]/25 px-3 py-1 rounded-full uppercase">
                        {card.badge}
                      </span>
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3.5xl text-white tracking-tight leading-tight transition-colors">
                        {mainTitle}{" "}
                        <span className="text-[#F5B400] block sm:inline">{lastWord}</span>
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Program Features - Styled exactly like the reference with beautiful gold bullets */}
                    <div className="space-y-4 pt-4 border-t border-zinc-800">
                      <h4 className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#F5B400]" />
                        <span>Key Benefits & Eligibility</span>
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {card.benefits.map((be, beIdx) => (
                          <li key={beIdx} className="flex gap-3 items-start text-xs sm:text-sm text-zinc-300 font-semibold leading-relaxed">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B400] shrink-0 mt-1.5 shadow-[0_0_0_3.5px_rgba(245,180,0,0.18)]" />
                            <span>{be}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Premium exact match image style from user attachment (Foreground photo with large rounded corners nested over offset solid gold background) */}
                    <div className="relative h-64 sm:h-72 w-full mt-6 flex items-center justify-center select-none overflow-visible">
                      {/* 1. Large offset background shape - solid gold with large rounded corners exactly like the mockup */}
                      <div className="absolute w-[82%] h-[82%] right-[6%] bottom-[4%] rounded-[36px] sm:rounded-[44px] bg-[#F5B400] transition-transform duration-500 ease-out group-hover:scale-102 group-hover:translate-x-1 group-hover:translate-y-1" />

                      {/* 2. Main foreground card holding the person's portrait, with large rounded corners */}
                      <div className="relative w-[82%] h-[82%] left-[-6%] top-[-4%] rounded-[36px] sm:rounded-[44px] overflow-hidden bg-zinc-900 border-4 border-[#0C0A09] shadow-xl transition-all duration-500 ease-out group-hover:scale-[1.03] z-10">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="w-full h-full object-cover object-center filter brightness-95"
                          referrerPolicy="no-referrer"
                        />
                        {/* Elegant overlay to blend the background nicely */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Elegant matching Action Button */}
                  <div className="pt-4 sm:pt-6 border-t border-zinc-800 flex flex-col gap-3">
                    <button 
                      onClick={() => {
                        setScholarshipType(card.title);
                        scrollToForm();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F5B400] hover:bg-[#D4AF37] text-zinc-950 font-mono text-[11px] font-extrabold uppercase tracking-wider rounded-2xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                    >
                      <span>{card.buttonText}</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <div className="text-center">
                      <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-widest">Fast-Track Screening Verified</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Skill Forge Scholarships? */}
        <div className="mb-24 bg-white border border-zinc-200 rounded-[40px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.05)]">
          {/* Subtle golden ambient back glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B400]/3 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#F5B400]/2 rounded-full blur-[120px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="font-mono text-[10px] text-[#926F12] font-bold tracking-widest uppercase block mb-3 bg-amber-50 border border-amber-100 px-3.5 py-1.5 rounded-full w-fit mx-auto">
              THE VALUE PROPOSITION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-[#F5B400] to-amber-700">Skill Forge Scholarships?</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-base font-light mt-4 max-w-2xl mx-auto leading-relaxed">
              Designed to fast-track driven builders into premium technology roles without financial compromise. Empowering you with industry resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {valuePropositions.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-[24px] space-y-5 hover:border-[#F5B400]/70 hover:shadow-[0_15px_35px_rgba(245,180,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Micro golden edge highlight on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#F5B400] group-hover:h-full transition-all duration-500" />
                
                <div className="p-3.5 bg-amber-50 border border-amber-100 rounded-2xl text-[#926F12] inline-block transition-transform duration-500 group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarship Selection Process - Horizontal Timeline */}
        <div className="mb-24 bg-zinc-50/50 border border-zinc-200 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5B400]/2 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-[10px] text-amber-600 font-bold tracking-widest uppercase block mb-2">
              SELECTION TIMELINE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Scholarship Selection Process
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-light mt-1">
              Your transparent path from submitting the application details to securing programmatic fee waivers.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Timeline Bar (Desktop) */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-zinc-200/80 -translate-y-1/2 hidden lg:block z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {selectionProcessSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200 p-5 rounded-xl text-center flex flex-col items-center justify-between space-y-3 hover:border-[#F5B400]/40 shadow-sm transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center font-mono text-[#926F12] text-xs font-extrabold group-hover:bg-[#F5B400] group-hover:text-zinc-950 transition-colors shadow-sm">
                    {step.step}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-800 tracking-wide">{step.label}</h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility & Documents Section Grid */}
        <div ref={eligibilitySectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 scroll-mt-24">
          
          {/* Eligibility Section */}
          <div className="lg:col-span-7 bg-zinc-50/50 border border-zinc-200 p-6 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B400]/2 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-6">
              <span className="font-mono text-[9px] text-[#926F12] bg-amber-50 border border-amber-200 px-2.5 py-1 rounded uppercase tracking-widest inline-block mb-3 font-bold">
                WHO CAN APPLY
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Eligibility Rules
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-light mt-2 mb-4">
                We accommodate diverse student profiles. Review each rule to determine your eligibility track:
              </p>
              
              {/* Eligible Profiles Pills */}
              <div className="flex flex-wrap gap-2 mt-4 bg-white/60 p-3 rounded-2xl border border-zinc-150 shadow-inner">
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider w-full mb-1">
                  Eligible Profiles:
                </span>
                {[
                  { label: "Final Year Students", icon: "🎓" },
                  { label: "Graduates", icon: "📜" },
                  { label: "Diploma Students", icon: "🛠️" }
                ].map((profile, pIdx) => (
                  <span 
                    key={pIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-700 bg-white border border-zinc-200/80 shadow-xs hover:border-[#F5B400]/40 transition-colors"
                  >
                    <span>{profile.icon}</span>
                    <span>{profile.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Educational Status",
                  desc: "Must be a final-year student, recent graduate, or diploma student."
                },
                {
                  num: "02",
                  title: "Scholastic Baseline Score",
                  desc: "A consistent track record of 70% or equivalent CGPA in your 10th, 12th, or current/previous graduation stream."
                },
                {
                  num: "03",
                  title: "Analytical Aptitude Check",
                  desc: "Successful participation in our standard technology baseline screening, measuring fundamental aptitude and interest."
                },
                {
                  num: "04",
                  title: "Workshop Or Seminar Credentials",
                  desc: "Special preference is given to students who have attended at least one previous Skill Forge workshop or college seminar."
                },
                {
                  num: "05",
                  title: "Diligence & Tech Alignment",
                  desc: "A genuine aspiration to learn modern tech (Data Science, Cloud, or Analytics) and dedication to completing the program."
                }
              ].map((rule, rIdx) => (
                <div 
                  key={rIdx} 
                  className="bg-white border border-zinc-200 p-4 rounded-2xl flex items-start gap-4 hover:border-[#F5B400]/40 shadow-sm transition-all duration-300 group"
                >
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center font-mono text-[#F5B400] text-xs font-black shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {rule.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-zinc-800 tracking-wide">{rule.title}</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Required (Small Cards) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-6 sm:p-10 rounded-3xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5B400]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="mb-8 relative z-10">
              <span className="font-mono text-[10px] text-amber-400 font-bold tracking-wider uppercase block mb-1">
                ADMISSIONS CHECKLIST
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Documents Required
              </h3>
              <p className="text-zinc-400 text-xs font-light mt-1.5">
                Keep these handy before initiating your form details.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 relative z-10">
              {documentsRequired.map((doc, dIdx) => (
                <div 
                  key={dIdx} 
                  className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl flex flex-col items-center text-center hover:border-[#F5B400]/40 shadow-sm transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center shadow-lg mb-2.5 shrink-0 transition-transform duration-500 group-hover:scale-110">
                    {doc.icon}
                  </div>
                  <h4 className="text-[11px] font-bold text-white leading-tight tracking-wide group-hover:text-amber-400 transition-colors duration-300 mb-1">{doc.label}</h4>
                  <p className="text-[9px] text-zinc-400 leading-tight font-light">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Scholarship Application Form */}
        <div ref={formSectionRef} className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-xl max-w-4xl mx-auto mb-24 scroll-mt-24">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-[#F5B400] to-amber-500" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/2 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[9px] text-[#926F12] bg-amber-50 border border-amber-100 px-2.5 py-1 rounded uppercase tracking-widest inline-block mb-3 font-bold">
              OFFICIAL APPLICATION PORTAL
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Scholarship Application Form
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed mt-2">
              Ensure all fields are entered accurately. Submitted records will synchronize with our admissions database for immediate screening.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Full Name <span className="text-[#F5B400]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Mobile Number field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Mobile Number <span className="text-[#F5B400]">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9845012345"
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Address field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Email Address <span className="text-[#F5B400]">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* College Name field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  College Name <span className="text-[#F5B400]">*</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. SRM Institute of Technology"
                    className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Degree field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Degree <span className="text-[#F5B400]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="e.g. B.Tech CSE or BCA"
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              {/* Current Year select */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Current Year <span className="text-[#F5B400]">*</span>
                </label>
                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(e.target.value)}
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 focus:outline-none focus:bg-white transition-all cursor-pointer"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="Final Year">Final Year</option>
                  <option value="Passed Out">Passed Out</option>
                </select>
              </div>

              {/* Course Interested select */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Course Interested <span className="text-[#F5B400]">*</span>
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 focus:outline-none focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Data Science Specialization">Data Science Specialization</option>
                  <option value="Data Analytics Mastery">Data Analytics Mastery</option>
                  <option value="AWS Cloud Architecture">AWS Cloud Architecture & Kubernetes</option>
                </select>
              </div>

              {/* Scholarship Type select */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Scholarship Type <span className="text-[#F5B400]">*</span>
                </label>
                <select
                  value={scholarshipType}
                  onChange={(e) => setScholarshipType(e.target.value)}
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 focus:outline-none focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Merit-Based Excellence Scholarship">🏆 Merit-Based Excellence Scholarship</option>
                  <option value="College Workshop Scholarship">🎓 College Workshop Scholarship</option>
                  <option value="Future Innovator Scholarship">💡 Future Innovator Scholarship</option>
                  <option value="Need-Based Support Scholarship">❤️ Need-Based Support Scholarship</option>
                </select>
              </div>

              {/* Current CGPA / Percentage field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Current CGPA / Percentage <span className="text-[#F5B400]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  placeholder="e.g. 8.5 CGPA or 82%"
                  className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              {/* Workshop Attended radio button */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                  Workshop Attended? <span className="text-[#F5B400]">*</span>
                </label>
                <div className="flex gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-600">
                    <input
                      type="radio"
                      name="workshopAttended"
                      value="Yes"
                      checked={workshopAttended === "Yes"}
                      onChange={() => setWorkshopAttended("Yes")}
                      className="accent-[#F5B400] w-4 h-4"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-zinc-600">
                    <input
                      type="radio"
                      name="workshopAttended"
                      value="No"
                      checked={workshopAttended === "No"}
                      onChange={() => setWorkshopAttended("No")}
                      className="accent-[#F5B400] w-4 h-4"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Why should you receive this scholarship? textarea */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                Why should you receive this scholarship? <span className="text-[#F5B400]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Share details about your technological goals, code aspirations, or financial context so our admission board can review..."
                className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-[#F5B400] rounded-xl px-4 py-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Submit responses overlay */}
            <AnimatePresence mode="wait">
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3 text-emerald-850 text-xs sm:text-sm items-start"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-emerald-900">Application Submitted Successfully!</h4>
                    <p className="text-emerald-700 font-light mt-0.5 leading-relaxed">
                      Your files and academic data are compiled securely into our registry. Our regional admission panel will evaluate details and reach out within 24-48 business hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-850 text-xs sm:text-sm items-start"
                >
                  <HelpCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <h4 className="font-bold text-red-900">Information Issue</h4>
                    <p className="text-red-700 font-light mt-0.5 leading-relaxed">
                      {errorMessage}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 rounded-xl bg-gradient-to-r from-amber-300 via-[#F5B400] to-amber-500 hover:from-amber-400 hover:to-amber-600 text-zinc-950 text-xs font-bold font-mono tracking-widest uppercase transition-all shadow-md active:scale-95 disabled:opacity-55 cursor-pointer text-center"
            >
              {isSubmitting ? "TRANSMITTING TO REGISTRY..." : "Apply Now"}
            </button>

          </form>
        </div>

        {/* Accordion FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-amber-600 font-bold tracking-widest uppercase block mb-2">
              GOT QUESTIONS?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              FAQ Section
            </h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-250 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none bg-white"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-zinc-800 hover:text-amber-700 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-amber-600" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-zinc-100 bg-zinc-50/50"
                      >
                        <p className="px-6 py-5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-[#F5B400]/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B400]/2 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/2 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Ready to Build Your Future?
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base font-light">
              Join Skill Forge Technologies with the support you deserve. Academic paths are locking quickly on our rolling admission batched register.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#F5B400] hover:bg-amber-500 text-zinc-950 font-bold font-mono tracking-wider text-xs rounded-xl uppercase transition-all shadow-md cursor-pointer text-center"
              >
                Apply for Scholarship Today
              </button>
              
              <a
                href="tel:+917010315493"
                className="px-5 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold font-mono tracking-wider text-[11px] rounded-xl uppercase transition-all border border-transparent cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F5B400]" />
                <span>Call Desk 1</span>
              </a>

              <a
                href="tel:+919344038554"
                className="px-5 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold font-mono tracking-wider text-[11px] rounded-xl uppercase transition-all border border-transparent cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F5B400]" />
                <span>Call Desk 2</span>
              </a>

              <a
                href="https://wa.me/919344038554?text=Hi%20Skill%20Forge%20team,%20I'm%20interested%20in%20your%20scholarship%20program!"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold font-mono tracking-wider text-[11px] rounded-xl uppercase transition-all border border-transparent cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
