import type { PortfolioProfile } from "../types/portfolio";
import rajuAvatar from "../assets/raju.webp";

/**
 * Central identity record for the site. Replace these values with your own —
 * every section on the page reads from this file instead of hardcoding copy.
 */
export const profile: PortfolioProfile = {
  name: "Manikaraj R",
  initials: "MR",
  title: "Software Developer",
  tagline: "Building scalable, secure web applications with Angular, ASP.NET Core & React",
  yearsExperience: 3,
  summary:
    "Software Developer with 3 years of experience building scalable, secure, and high-performance web applications using Angular, ASP.NET Core 8, C#, Entity Framework Core, and MS SQL Server — with React as part of my toolkit.",
  bio: [
    "I'm a Software Developer with three years of experience building scalable, secure, and high-performance web applications using Angular (v13–20) with Signals and Standalone Components, ASP.NET Core 8, C#, Entity Framework Core, and MS SQL Server, and I'm expanding that toolkit with React.",
    "At CKS Solutions, I work across the full stack — from Angular component libraries to ASP.NET Core APIs and SQL Server schemas — on production applications used by hundreds of concurrent users, with a recent focus on integrating Gemini AI to cut down manual, repetitive work. The specifics and numbers are in the Experience section below.",
    "I apply SOLID principles, Dependency Injection, and the Repository Pattern across API layers to keep codebases clean, testable, and maintainable, and I favor pragmatic, well-documented solutions delivered through Agile/Scrum sprints.",
  ],
  strengths: [
    "Turning ambiguous requirements into clean, maintainable full-stack architecture",
    "Diagnosing performance bottlenecks across the stack — from SQL indexes to front-end rendering",
    "Judging where AI genuinely saves time versus where it adds risk",
    "Writing code the next developer — often future me — can pick up without a walkthrough",
  ],
  philosophy:
    "Ship in small, reviewable increments; optimize for the developer who reads this code next; measure before you optimize; secure, well-tested code is a requirement, not polish.",
  location: "Kanniyakumari, Tamil Nadu, India",
  email: "rajuraju1562000@gmail.com",
  phone: "+91 7358982911",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  avatarUrl: rajuAvatar,
};
