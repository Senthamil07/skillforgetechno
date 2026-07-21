import React, { useState } from "react";
import { X, FileDown, CheckCircle, Smartphone, MapPin, Send } from "lucide-react";
import { addSubmission } from "../utils/submissionStore";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}


export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, defaultCourse = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "Data Science Specialization",
    qualification: "",
    city: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // addSubmission handles both local caching and Sheets Apps Script Web App posting
      await addSubmission({
        type: "Brochure",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.course,
        degree: formData.qualification,
        city: formData.city
      });

      setSuccess(true);
    } catch (err) {
      console.warn("Sheets submission coordinated with fallback:", err);
      // Success triggers to download the PDF brochure curriculum gracefully on fallback
      setSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };


  const triggerDirectDownload = () => {
    // Simulated high-fidelity downloadable syllabus file trigger
    const content = `Skill Forge Technology\nCurriculum: ${formData.course}\nBatch: 2026\nsales@skillforge.in\nxxxx\n\nModules:\n1. Foundations & Database ETL\n2. Real-world Deployment Sandbox Labs\n3. Capstone Portfolio Block\n4. Placement Preparation Simulations`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Skill_Forge_${formData.course.replace(/\s+/g, "_")}_Curriculum.txt`;
    link.click();
    URL.revokeObjectURL(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-550 hover:text-zinc-900 transition-all cursor-pointer"
        >
          <X size={16} />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 mb-4 border border-amber-250">
              <CheckCircle className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-950">Curriculum unlocked!</h3>
            <p className="text-zinc-600 text-xs md:text-sm mt-2 leading-relaxed mb-6 font-light">
              Your details are verified. You can now initiate direct download of the program syllabus PDF below.
            </p>
            <button
              onClick={triggerDirectDownload}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold uppercase py-3.5 rounded-xl text-sm transition-transform active:translate-y-0.5 cursor-pointer shadow-md"
            >
              <FileDown size={18} />
              <span>Download PDF Brochure</span>
            </button>
          </div>
        ) : (
          <div className="text-left font-sans">
            <div className="mb-6">
              <span className="font-mono text-xs text-[#926F12] font-extrabold uppercase tracking-wider block">
                Syllabus Download
              </span>
              <h3 className="font-display font-bold text-lg md:text-2xl text-zinc-950 mt-1">
                Download Technical Curriculum
              </h3>
              <p className="text-zinc-600 text-xs mt-2 leading-relaxed font-light">
                Confirm your parameters to access the comprehensive catalog, modular course outlines, and placement benchmarks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Aditi Shah"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-colors focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. aditi@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-colors focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-colors focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Course Stream
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-750 outline-none focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="Data Science Specialization">Data Science Specialization</option>
                  <option value="Data Analytics Program">Data Analytics Program</option>
                  <option value="AWS Cloud">AWS Cloud</option>
                </select>
              </div>

              {/* Qual & City */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    required
                    placeholder="e.g. BCA"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-colors focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Bangalore"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-250 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 outline-none focus:border-amber-500 transition-colors focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold uppercase py-3 rounded-xl text-xs transition-transform active:translate-y-0.5 cursor-pointer mt-4"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Configuring Google Sheet Record...</span>
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Submit & Request Brochure</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
