export interface Project {
  title: string;
  description: React.ReactNode;
  url: string;
  content: React.ReactNode;
  status?: "in-progress" | "completed";
}

export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ExpertiseCategory {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
}

export interface EducationItem {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  courses?: string[];
  achievements?: string[];
}

export interface NavItem {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
