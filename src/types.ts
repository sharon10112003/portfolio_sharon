export type ProjectCategory = 'All' | 'Full-Stack' | 'Mobile' | 'Web';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Mobile' | 'Web';
  summary: string;
  period?: string;
  type?: 'Academic Project' | 'Personal Project';
  image: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isGithubPlaceholder: boolean;
  isLiveDemoPlaceholder: boolean;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  tag: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: 'Layout' | 'Server' | 'Database' | 'Wrench' | 'Code' | 'Shield';
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gradeOrCgpa?: string;
  status: 'Completed' | 'Pursuing' | 'Enrolled';
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Phone';
  url: string;
  displayValue: string;
  isPlaceholder: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    title: string;
    qualification: string;
    experienceLevel: string;
    careerGoal: string;
    shortBio: string;
    fullBio: string[];
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
    resumeFileName: string;
    profileImage?: string;
    profileImageSecondary?: string;
    videoPitchScript?: string;
    availableForHire: boolean;
  };
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  concepts: string[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
