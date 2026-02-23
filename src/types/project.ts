export interface Project {
  id: string;
  name: string;
  description: string;
  github: string;
  features: string[];
  technologies: string[];
  demo: string;
  category?: "Fullstack" | "Data Science" | "AI/ML"; // Legacy support
  categories?: ("Fullstack" | "Data Science" | "AI/ML")[]; // New multi-category support
  /** Optional year for card badge (e.g. 2026) */
  year?: number;
  /** Optional status e.g. "In progress" */
  status?: string;
  /** Optional collaborators for display on card */
  collaborators?: string[];
}
