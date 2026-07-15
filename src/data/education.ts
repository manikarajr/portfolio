import type { Certification, Education } from "../types/portfolio";

export const education: Education[] = [
  {
    id: "edu-bharath-university",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Bharath University",
    location: "Chennai, Tamil Nadu",
    startYear: "2018",
    endYear: "2022",
  },
  {
    id: "edu-cmc-hsc",
    degree: "HSC (12th Grade) – State Board",
    institution: "C.M.C Matriculation Higher Secondary School",
    location: "Konam, Nagercoil, Tamil Nadu",
    startYear: "2018",
    endYear: "2018",
  },
  {
    id: "edu-cmc-sslc",
    degree: "SSLC (10th Grade) – State Board",
    institution: "C.M.C Matriculation Higher Secondary School",
    location: "Konam, Nagercoil, Tamil Nadu",
    startYear: "2016",
    endYear: "2016",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-angular-developer",
    name: "Angular Developer Course",
    issuer: "Core Angular development skills and best practices",
    year: "",
  },
  {
    id: "cert-pcep",
    name: "Certified Entry-Level Python Programmer (PCEP)",
    issuer: "Python Institute",
    year: "",
  },
  {
    id: "cert-digisailor-internship",
    name: "Full Stack Developer Internship Certificate",
    issuer: "Digisailor",
    year: "2023",
  },
  {
    id: "cert-flutter-webinar",
    name: "Master Flutter Webinar Certificate",
    issuer: "Flutter development and cross-platform mobile UI",
    year: "",
  },
];
