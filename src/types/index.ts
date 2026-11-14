export type Locale = "en" | "ar";

export interface ArchitectureLayer {
  id: string;
  layer: string;
  title: string;
  tech: string[];
  description: string;
  metricsOrSpecs: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  featured: boolean;
  imageUrl: string;
  liveUrl?: string;
  liveDomainLabel?: string;
  mirrorUrl?: string;
  githubUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  engineeringHighlights: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  architecture: ArchitectureLayer[];
  accentColor: "emerald" | "cyan" | "violet" | "amber";
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  recommendedStack: string[];
  icon: "layers" | "server" | "cpu" | "database";
  bentoSpan: "col-span-12 lg:col-span-7" | "col-span-12 lg:col-span-5";
  accent: string;
}

export interface SkillItem {
  name: string;
  level: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface WorkProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  companyOrWebsite?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  details: string;
}
