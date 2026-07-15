import type { WorkExperience } from "../types/portfolio";

export const experiences: WorkExperience[] = [
  {
    id: "exp-cks-solutions",
    company: "CKS Solutions",
    role: "Full Stack Developer",
    location: "Nagercoil, Tamil Nadu",
    employmentType: "Full-time",
    startDate: "Jun 2023",
    endDate: "Present",
    summary:
      "Architecting full-stack features across 3 production applications serving 300+ concurrent users — reusable Angular component libraries, ASP.NET Core 8 REST APIs, and optimised SQL Server schemas.",
    responsibilities: [
      "Build reusable Angular component libraries, ASP.NET Core 8 REST APIs, and optimised SQL Server schemas across 3 production applications",
      "Optimise front-end and back-end performance via Angular lazy loading, RxJS stream optimisation, LINQ query tuning, and SQL indexing",
      "Integrate Gemini AI into the Assessgru platform to automate evaluation workflows",
      "Implement JWT authentication, RBAC, and custom ASP.NET Core middleware to secure access for 300+ users across 12+ Agile sprints",
      "Apply SOLID Principles, Dependency Injection, and the Repository Pattern across all API layers with Swagger/OpenAPI documentation",
    ],
    achievements: [
      "Reduced feature release cycles by ~20% through component reuse and code standardisation",
      "Drove a 25% API response improvement and 30% database efficiency gain, cutting average page load from ~2.1s to ~1.3s",
      "Eliminated 60% of manual grading effort (~18 hrs/week saved) by spearheading the Gemini AI integration for Assessgru",
    ],
    technologies: [
      "Angular 20",
      "ASP.NET Core 8",
      "C#",
      "Entity Framework Core",
      "MS SQL Server",
      "RxJS",
      "Gemini AI",
    ],
  },
  {
    id: "exp-digisailor",
    company: "Digisailor",
    role: "Full Stack Developer Intern",
    location: "Thoothukudi, Tamil Nadu",
    employmentType: "Internship",
    startDate: "Nov 2022",
    endDate: "May 2023",
    summary:
      "Delivered full-stack modules for a B2C web platform processing 1,000+ daily user transactions, within a 6-developer Agile team.",
    responsibilities: [
      "Deliver Angular UI components, ASP.NET Core REST APIs, and MS SQL Server schemas for a B2C web platform",
      "Own end-to-end delivery of sprint stories — from requirement analysis and DB schema design through to production deployment",
      "Design MS SQL Server schemas using Entity Framework Core ORM and LINQ, with relationship modelling, composite indexing, and stored procedures",
      "Develop and integrate JWT-based authentication and Role-Based Access Control (RBAC) across multiple application modules",
    ],
    achievements: [
      "Delivered 8+ production full-stack modules contributing to a system processing 1,000+ daily user transactions",
      "Owned end-to-end delivery of 15+ sprint stories over 7 months, achieving 90%+ on-time sprint completion",
      "Supported high-throughput data access with sub-300ms query response through composite indexing strategies",
    ],
    technologies: ["Angular", "ASP.NET Core", "C#", "Entity Framework Core", "MS SQL Server", "LINQ"],
  },
];
