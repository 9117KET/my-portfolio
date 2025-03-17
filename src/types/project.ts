export interface Project {
  id: string;
  name: string;
  description: string;
  github: string;
  features: string[];
  technologies: string[];
  demo: string;
  category: "Fullstack" | "Data Science" | "AI/ML";
}
