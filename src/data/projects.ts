import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "project-assessgru",
    title: "Assessgru – AI-Based Assessment Platform",
    problem:
      "Manual test evaluation was time-consuming for instructors and slowed down feedback to candidates.",
    description:
      "Architected the full-stack platform using C#, ASP.NET Core 8, EF Core, SOLID Principles, and the Repository Pattern — designing the MS SQL Server schema, building secure RESTful APIs with Dependency Injection, and developing the Angular 20 UI with role-based dashboards for Admin and Candidate modules.",
    features: [
      "Gemini AI integration to automate test evaluation, eliminating 60% of manual grading effort (~18 hrs/week saved)",
      "Role-based dashboards for Admin and Candidate modules backed by secure RESTful APIs",
      "Real-time data updates via RxJS Observables supporting 300+ concurrent users",
      "25% API performance improvement and 30% database efficiency gain through LINQ query optimisation, server-side caching, Angular lazy loading, and composite SQL indexing",
    ],
    technologies: [
      "Angular 20",
      "Tailwind CSS",
      "C#",
      "ASP.NET Core 8",
      "Entity Framework Core",
      "LINQ",
      "Gemini AI",
      "REST APIs",
      "Swagger",
      "MS SQL Server",
    ],
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
      alt: "A hand filling in bubbles on a scored answer sheet with a pencil",
      width: 800,
      height: 450,
    },
  },
  {
    id: "project-neet-jee-platform",
    title: "NEET & JEE Exam Preparation Platform",
    problem:
      "Students preparing for NEET and JEE entrance exams needed a single platform for course tracking, timed mock tests, and performance analytics.",
    description:
      "Built the complete full-stack solution — personalised dashboards, course tracking, timed mock tests with real-time exam simulation (auto-submit, timer, analytics), and performance reports for 500+ active student accounts.",
    features: [
      "Timed mock tests with real-time exam simulation, auto-submit, and a live timer",
      "Personalised dashboards with course tracking and performance reports",
      "Multi-tenant MS SQL Server database for course management, exam records, and performance data with full indexing achieving sub-200ms average query response",
      "JWT authentication, RBAC (Admin/Student roles), lazy loading, and server-side caching for high availability",
    ],
    technologies: [
      "Angular 20",
      "Tailwind CSS",
      "C#",
      "ASP.NET Core 8",
      "Entity Framework Core",
      "LINQ",
      "REST APIs",
      "Swagger",
      "MS SQL Server",
    ],
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?q=80&w=800&auto=format&fit=crop",
      alt: "A hand writing physics equations, including E=mc², on a blackboard next to a stack of books",
      width: 800,
      height: 450,
    },
  },
  {
    id: "project-careerin",
    title: "CareerIn – Online Learning Platform",
    problem:
      "The platform needed a responsive way to manage course enrolments and training records for a growing base of registered users.",
    description:
      "Developed an end-to-end full-stack application — a responsive Angular 13 UI with dynamic reactive forms, REST API integration, and full CRUD operations — supporting course enrolments and training records for 200+ registered users.",
    features: [
      "Dynamic reactive forms for course enrolment and training record management",
      "Full CRUD operations backed by REST API integration",
      "MS SQL Server schema for course catalogues, user enrolments, and training records",
      "Stored procedures and LINQ queries for reusable, optimised data access patterns",
    ],
    technologies: [
      "Angular 13",
      "Bootstrap",
      "C#",
      "ASP.NET Core 5",
      "Entity Framework Core",
      "LINQ",
      "REST APIs",
      "Swagger",
      "MS SQL Server",
    ],
    featured: false,
    image: {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
      alt: "A student with a backpack walking through a library aisle lined with books",
      width: 800,
      height: 450,
    },
  },
];
