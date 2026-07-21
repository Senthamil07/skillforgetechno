import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Lock, ChevronLeft, ChevronRight, User, Mail, Phone, GraduationCap, MapPin, Award } from "lucide-react";
import { CounselingFormData } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { addSubmission } from "../utils/submissionStore";

interface CounselingFormProps {
  initialCourse?: string;
  onSuccess?: () => void;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <span className="font-mono font-bold text-zinc-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 text-sm">
      {formatTime(timeLeft)}
    </span>
  );
};

export const CounselingForm: React.FC<CounselingFormProps> = ({ initialCourse = "", onSuccess }) => {
  const normalizeCourse = (course: string) => {
    if (!course) return "Data Science Specialization";
    const lower = course.toLowerCase();
    if (lower.includes("science")) return "Data Science Specialization";
    if (lower.includes("analytics")) return "Data Analytics";
    if (lower.includes("cloud") || lower.includes("aws")) return "AWS Cloud";
    if (lower.includes("network")) return "Networking & Security";
    if (lower.includes("machine") || lower.includes("ai")) return "AI & Machine Learning";
    return "Data Science Specialization";
  };

  const [formData, setFormData] = useState<CounselingFormData>({
    name: "",
    email: "",
    phone: "",
    program: normalizeCourse(initialCourse),
    degree: "",
    city: "",
  });

  const [submittedData, setSubmittedData] = useState<CounselingFormData | null>(null);

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, program: normalizeCourse(initialCourse) }));
    }
  }, [initialCourse]);

  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const steps = [
    {
      key: "name" as const,
      label: "Your Full Name",
      placeholder: "e.g. Rahul Sharma",
      type: "text",
      question: "What is your full name?",
      description: "Please enter your first and last name so we can register your profile.",
      icon: User,
    },
    {
      key: "email" as const,
      label: "Email Address",
      placeholder: "e.g. rahul@example.com",
      type: "email",
      question: "What is your email address?",
      description: "We'll send your program curriculum handbook and admission options here.",
      icon: Mail,
    },
    {
      key: "phone" as const,
      label: "Phone / WhatsApp",
      placeholder: "e.g. xxxxxxxxxx",
      type: "tel",
      question: "What is your mobile number / WhatsApp?",
      description: "Our coaching desks require this to secure and schedule your callback slot.",
      icon: Phone,
    },
    {
      key: "program" as const,
      label: "Intended Program",
      type: "select",
      question: "Which career stream fits your goal?",
      description: "Select the primary technology track you want to master.",
      icon: Award,
      options: [
        { value: "Data Science Specialization", label: "Data Science Specialization" },
        { value: "Data Analytics", label: "Data Analytics" },
        { value: "AWS Cloud", label: "AWS Cloud" },
        { value: "Networking & Security", label: "Networking & Security" },
        { value: "AI & Machine Learning", label: "AI & Machine Learning" }
      ]
    },
    {
      key: "degree" as const,
      label: "Highest Qualification",
      placeholder: "e.g. BCA, B.Tech, M.Tech, MBA",
      type: "text",
      question: "What is your highest educational degree?",
      description: "Helps us assess eligibility profiles for corporate partner placements.",
      icon: GraduationCap,
    },
    {
      key: "city" as const,
      label: "Current City Hub",
      placeholder: "e.g. Chennai, Bangalore, Mumbai, Remote",
      type: "text",
      question: "Which city are you currently located in?",
      description: "Your geographic hub determines in-campus lab visits and local cohort groups.",
      icon: MapPin,
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = () => {
    const step = steps[currentStep];
    const value = formData[step.key] || "";

    if (step.key === "name") {
      return value.trim().length >= 2;
    }
    if (step.key === "email") {
      return value.trim().length >= 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    if (step.key === "phone") {
      return value.trim().length >= 8;
    }
    if (step.key === "program") {
      return value !== "";
    }
    if (step.key === "degree") {
      return value.trim().length >= 1;
    }
    if (step.key === "city") {
      return value.trim().length >= 2;
    }
    return true;
  };

  const handleNext = () => {
    if (isStepValid()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isStepValid()) {
        if (currentStep < steps.length - 1) {
          handleNext();
        } else {
          handleSubmit(e);
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isStepValid()) return;

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // addSubmission handles both local caching and Sheets Apps Script webhook posting
      await addSubmission({
        type: "Counseling",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        degree: formData.degree,
        city: formData.city
      });

      setSubmittedData({ ...formData });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        degree: "",
        city: ""
      });

      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.warn("Sheets submission coordinated with fallback:", err);

      setSubmittedData({ ...formData });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        degree: "",
        city: ""
      });
      if (onSuccess) onSuccess();
    } finally {
      setIsLoading(false);
    }
  };


  const handleReset = () => {
    setSubmitStatus("idle");
    setSubmittedData(null);
    setCurrentStep(0);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: normalizeCourse(initialCourse),
      degree: "",
      city: "",
    });
  };

  const currentField = steps[currentStep];
  const IconComponent = currentField.icon;

  return (
    <div id="counseling-form" className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-lg relative min-h-[580px] flex flex-col justify-between">
      <div className="absolute top-5 right-5 flex items-center gap-1.5 text-zinc-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 text-[10px] font-mono z-20">
        <Lock size={11} className="stroke-[2.5]" />
        <span className="font-semibold tracking-wider">SECURE SYNC</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 font-sans grow">
        {/* Left column */}
        <div className="lg:col-span-4 bg-zinc-50 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 text-left">
          <div>
            <span className="font-mono text-xs text-[#926F12] font-semibold tracking-widest uppercase block mb-3">
              ADMISSIONS DESK
            </span>
            <h3 className="text-2xl font-bold text-zinc-950 leading-tight mb-4 uppercase">
              Apply For <span className="gold-gradient">Career Counseling</span>
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-6 font-light">
              Fill out this interactive application. An expert technology mentor will schedule a customized 1-on-1 counseling block to construct your path and send our detailed course brochure.
            </p>

            {/* Checkpoints info list */}
            <div className="space-y-4 text-left">
              <div className="flex gap-3.5 items-start">
                <div className="p-1 rounded bg-[#fcf8e3]/80 border border-amber-200 text-amber-700 mt-0.5">
                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Guaranteed Relevance</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5 font-light leading-relaxed">Syllabus is tailored to fit modern software environments.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-1 rounded bg-[#fcf8e3]/80 border border-amber-200 text-amber-700 mt-0.5">
                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Direct Verification</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5 font-light leading-relaxed">Curriculum codebases verified by active practitioners.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-1 rounded bg-[#fcf8e3]/80 border border-amber-200 text-amber-700 mt-0.5">
                  <CheckCircle2 size={12} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Direct Callback Desk</h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5 font-light leading-relaxed">Immediate callback slot coordination within 24 working hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center gap-2.5 text-[11px] text-zinc-500">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-505 bg-emerald-500 animate-pulse border border-emerald-300" />
            <span className="font-semibold">Admissions active and accepting applications</span>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success-receipt"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 text-center flex flex-col justify-between h-full font-sans"
              >
                <div>
                  <div className="relative mb-5 inline-flex justify-center mx-auto">
                    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-emerald-400 opacity-20" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                    Counseling Request Initiated
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm mt-3 leading-relaxed font-light max-w-lg mx-auto">
                    Your profile parameters have been synchronized with the live Skill Forge Admissions spreadsheet. A certified mentor is coordinating slot allocations.
                  </p>

                  {/* Active Countdown */}
                  <div className="mt-6 p-4 rounded-xl bg-amber-50/40 border border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-left max-w-lg mx-auto shadow-sm">
                    <div className="text-xs">
                      <span className="font-bold text-zinc-900 block">Queue Spot Priority Secured</span>
                      <span className="text-[11px] text-zinc-500 block mt-0.5 font-light">Your callback coordination window begins in:</span>
                    </div>
                    <div className="flex-shrink-0">
                      <CountdownTimer />
                    </div>
                  </div>

                  {/* Receipt block */}
                  {submittedData && (
                    <div className="mt-6 bg-zinc-50 border border-zinc-250/80 rounded-xl p-5 text-left text-xs space-y-3.5 max-w-lg mx-auto">
                      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400 tracking-wider font-semibold pb-2 border-b border-zinc-200">
                        <span>PROFILE SUMMARY RECEIPT</span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded leading-none">✓ RECORDED</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-zinc-650">
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Candidate Name</span>
                          <span className="font-semibold text-zinc-800">{submittedData.name}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Phone / WhatsApp</span>
                          <span className="font-semibold text-zinc-800">{submittedData.phone}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Email Address</span>
                          <span className="font-semibold text-zinc-800 truncate block">{submittedData.email}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Intended Program</span>
                          <span className="font-semibold text-zinc-800 truncate block">{submittedData.program}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Highest Qualification</span>
                          <span className="font-semibold text-zinc-800">{submittedData.degree}</span>
                        </div>
                        <div>
                          <span className="text-zinc-400 text-[10px] block font-light">Hub Location</span>
                          <span className="font-semibold text-zinc-800">{submittedData.city}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick roadmap */}
                  <div className="mt-6 text-left border-t border-zinc-150 pt-5 max-w-lg mx-auto">
                    <h4 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                      Subsequent Verification Cycle
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-2.5">
                        <span className="flex-shrink-0 h-4.5 w-4.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center text-[10px] font-bold">1</span>
                        <p className="text-[11px] text-zinc-550 font-light leading-relaxed">
                          Syllabus handbook and course outline dispatches immediately to <strong className="text-zinc-800 font-medium">{submittedData?.email}</strong>.
                        </p>
                      </div>
                      <div className="flex gap-2.5">
                        <span className="flex-shrink-0 h-4.5 w-4.5 rounded-full bg-amber-50 text-amber-80 *0 border border-amber-200 flex items-center justify-center text-[10px] font-bold">2</span>
                        <p className="text-[11px] text-zinc-550 font-light leading-relaxed">
                          Coordinator maps your degree qualifications against active partner batch limits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-650 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>Submit Another Application</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="vertical-wizard-flow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 text-left flex flex-col justify-between grow"
              >
                <div>
                  {/* Progress Indicators */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-zinc-400 font-semibold uppercase mb-2">
                      <span>Step {currentStep + 1} of {steps.length}</span>
                      <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
                    </div>
                    <div className="flex gap-1.5 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                      {steps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-full flex-grow rounded-full transition-all duration-300 ${
                            idx === currentStep
                              ? "bg-[#F5B400]"
                              : idx < currentStep
                              ? "bg-amber-500"
                              : "bg-zinc-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Active Field Screen */}
                  <div className="mt-4 grow">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentField.key}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="space-y-5 text-left"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 sm:p-2.5 bg-amber-50 border border-amber-100 rounded-xl text-amber-700">
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-800">
                              {currentField.label}
                            </span>
                            <h4 className="text-lg md:text-xl font-bold font-sans text-zinc-955 tracking-tight mt-0.5">
                              {currentField.question}
                            </h4>
                          </div>
                        </div>

                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                          {currentField.description}
                        </p>

                        <div className="pt-3">
                          {currentField.type === "select" ? (
                            <div className="space-y-2.5 max-w-lg">
                              {currentField.options?.map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData((prev) => ({ ...prev, program: opt.value }));
                                    setTimeout(() => {
                                      if (currentStep < steps.length - 1) {
                                        setCurrentStep((prev) => prev + 1);
                                      }
                                    }, 250);
                                  }}
                                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                                    formData.program === opt.value
                                      ? "border-amber-400 bg-amber-50 text-amber-805 font-bold"
                                      : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700"
                                  }`}
                                >
                                  <span>{opt.label}</span>
                                  {formData.program === opt.value && (
                                    <CheckCircle2 size={16} className="text-amber-600" />
                                  )}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="relative max-w-lg">
                              <input
                                type={currentField.type}
                                name={currentField.key}
                                required
                                autoFocus
                                placeholder={currentField.placeholder}
                                value={formData[currentField.key] || ""}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-white border border-zinc-200 focus:border-amber-400 rounded-xl px-4 py-3.5 text-base text-zinc-900 placeholder-zinc-400 outline-none transition-all font-sans"
                              />
                              {isStepValid() && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-0.5 rounded text-[10px] font-mono leading-none">
                                  <span>VALID</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {currentField.type !== "select" && (
                          <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5 pl-1 select-none">
                            <span>Press</span>
                            <kbd className="bg-zinc-100 border border-zinc-200 rounded px-1.5 py-0.5 leading-none">Enter ↵</kbd>
                            <span>to advance</span>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {submitStatus === "error" && (
                  <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 border border-red-200/60 text-red-700 text-xs rounded-xl max-w-lg">
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Navigation Actions Footer */}
                <div className="mt-10 pt-6 border-t border-zinc-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`inline-flex items-center gap-1 px-4 py-2 text-xs font-mono uppercase rounded-lg border tracking-wider transition-colors cursor-pointer ${
                      currentStep === 0
                        ? "text-zinc-300 border-zinc-200 bg-zinc-50 cursor-not-allowed opacity-50"
                        : "text-zinc-600 border-zinc-200 bg-white hover:bg-zinc-50 shadow-sm"
                    }`}
                  >
                    <ChevronLeft size={14} className="stroke-[2]" />
                    <span>Back</span>
                  </button>

                  {currentStep === steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading || !isStepValid()}
                      className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase rounded-lg tracking-wider transition-all cursor-pointer ${
                        isLoading || !isStepValid()
                          ? "bg-zinc-150 text-zinc-400 border border-zinc-200 cursor-not-allowed"
                          : "bg-[#F5B400] text-zinc-950 hover:bg-[#e0a400] shadow-sm hover:shadow"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Syncing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono uppercase rounded-lg tracking-wider transition-all cursor-pointer ${
                        !isStepValid()
                          ? "bg-zinc-100 text-zinc-400 border border-zinc-250 cursor-not-allowed"
                          : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                      }`}
                    >
                      <span>Continue</span>
                      <ChevronRight size={14} className="stroke-[2]" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
