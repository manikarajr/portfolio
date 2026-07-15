export type IconName = "github" | "linkedin" | "mail" | "phone";

export interface PortfolioImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PortfolioProfile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  yearsExperience: number;
  summary: string;
  bio: string[];
  strengths: string[];
  philosophy: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  availableForWork: boolean;
  /** Set once a real photo is available; falls back to a monogram avatar otherwise. */
  avatarUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: "Full-time" | "Contract" | "Freelance" | "Internship";
  startDate: string;
  endDate: string | "Present";
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  /** Set once a real logo is available; falls back to a monogram mark otherwise. */
  logoUrl?: string;
}

export interface Skill {
  name: string;
}

export type SkillCategoryName =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Databases"
  | "Cloud & DevOps"
  | "AI & Tools"
  | "Methodology";

export interface SkillCategory {
  id: string;
  name: SkillCategoryName;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  /** Set once a real screenshot is available; falls back to a generated preview otherwise. */
  image?: PortfolioImage;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
