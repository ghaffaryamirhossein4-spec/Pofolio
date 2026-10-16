export type PageId = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export type Language = 'en' | 'fa';

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend';

export interface ProjectItem {
  id: string;
  systemCode: string;
  category: 'fullstack' | 'frontend' | 'backend';
  titleEn: string;
  titleFa: string;
  badge: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  period: string;
  summaryEn: string;
  summaryFa: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  techStack: string[];
  image: string;
  imageAlt: string;
  liveStatus?: string;
  version?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  roleEn: string;
  roleFa: string;
  company: string;
  location: string;
  tag: string;
  periodEn: string;
  periodFa: string;
  durationEn: string;
  durationFa: string;
  isCurrent?: boolean;
  scopeEn: string;
  scopeFa: string;
  bulletsEn: string[];
  bulletsFa: string[];
  keyMilestone?: {
    title: string;
    description: string;
    badges: string[];
  };
  stack: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}
