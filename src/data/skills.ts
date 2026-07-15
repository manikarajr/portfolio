import type { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React" },
      { name: "Angular (v13–20)" },
      { name: "Angular Signals" },
      { name: "Standalone Components" },
      { name: "RxJS" },
      { name: "HTML5 & CSS3" },
      { name: "SCSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "ASP.NET Core 8" },
      { name: "Entity Framework Core" },
      { name: "LINQ" },
      { name: "REST API Design" },
      { name: "SignalR" },
      { name: "JWT Authentication" },
      { name: "RBAC" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    skills: [{ name: "C#" }, { name: "TypeScript" }, { name: "JavaScript" }],
  },
  {
    id: "databases",
    name: "Databases",
    skills: [{ name: "MS SQL Server" }],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    skills: [
      { name: "Azure App Service" },
      { name: "Azure DevOps" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    id: "ai-tools",
    name: "AI & Tools",
    skills: [
      { name: "Gemini AI" },
      { name: "GitHub Copilot" },
      { name: "ChatGPT" },
      { name: "Visual Studio" },
      { name: "VS Code" },
    ],
  }
];
