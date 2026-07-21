export interface Program {
  id: string;
  title: string;
  iconName: string;
  description: string;
  features: string[];
  tools: string[];
  roleOutcomes: string[];
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  iconName: string;
  bio: string;
  skills: string[];
}

export interface AlumniProfile {
  id: string;
  name: string;
  course: string;
  placedAt: string;
  roleBefore: string;
  roleAfter: string;
  testimonial: string;
  photoUrl?: string;
  rating: number;
}

export interface StudentProject {
  id: string;
  title: string;
  course: string;
  studentName: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface CounselingFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  degree: string;
  city: string;
}

export interface SubmissionRecord {
  id: string;
  timestamp: string;
  type: "Counseling" | "Brochure" | "Scholarship" | "Apply Popup";
  name: string;
  email: string;
  phone: string;
  program: string;
  degree: string;
  city: string;
  syncStatus: "success" | "pending";
}


