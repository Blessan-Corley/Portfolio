export type NavItem = 'About' | 'Experience' | 'Skills' | 'Projects' | 'Contact';

export type FooterSocialIconKey = 'github' | 'linkedin' | 'email' | 'whatsapp';

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  whatsapp: string;
  status: string;
  workType: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSocialLink {
  iconKey: FooterSocialIconKey;
  href: string;
  label: string;
  color: string;
}

export type AboutHighlightIconKey =
  | 'code2'
  | 'boxes'
  | 'layers'
  | 'cloudCog'
  | 'graduationCap';

export interface AboutHighlight {
  id: number;
  iconKey: AboutHighlightIconKey;
  title: string;
  description: string;
  image?: string;
}

export interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  duration: string;
  period: string;
  description: string[];
}

export type CompetitivePlatformIconKey =
  | 'leetcode'
  | 'codeforces'
  | 'codechef'
  | 'geeksforgeeks'
  | 'code';

export interface CompetitivePlatform {
  name: string;
  iconKey: CompetitivePlatformIconKey;
  color: string;
  username: string;
  link: string;
  description: string;
}

export type ProjectStatus = 'Completed' | 'In Development';
export type ProjectType = 'Personal' | 'Academic';

export interface ProjectSkill {
  name: string;
  level: number;
}

export interface ProjectLinkSet {
  github?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  period: string;
  status: ProjectStatus;
  type: ProjectType;
  description: string;
  longDescription: string;
  technologies: string[];
  skills: ProjectSkill[];
  achievements: string[];
  links: ProjectLinkSet;
  color: string;
  gradient: string;
}

export type SkillCardIconKey =
  | 'code'
  | 'monitor'
  | 'server'
  | 'database'
  | 'gitBranch'
  | 'cloud';

export interface SkillCardConfig {
  iconKey: SkillCardIconKey;
  title: string;
  skills: string[];
  color: string;
}

export interface SkillsLayoutConfig {
  maxCardsPerRow: number;
  cardHeight: string;
  mobileCardHeight: string;
  gap: string;
  maxCardWidth: string;
}

export interface SkillsAnimationConfig {
  expandRatio: number;
  transitionDuration: number;
  staggerDelay: number;
}

export interface SkillsConfig {
  mainSkills: SkillCardConfig[];
  layout: SkillsLayoutConfig;
  animation: SkillsAnimationConfig;
}

export type SkillUrlMap = Partial<Record<string, string>>;

export interface ViewportState {
  width: number;
  height: number;
  isMobile: boolean;
}

export interface UseViewportOptions {
  mobileBreakpoint?: number;
  defaultWidth?: number;
  defaultHeight?: number;
}
