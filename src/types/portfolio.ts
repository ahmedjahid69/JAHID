export interface PersonalConfig {
  fullName: string;
  brandName: string;
  avatarText: string;
  heroGreeting: string;
  headlineMain: string;
  headlineAccent: string;
  role: string;
  location: string;
  timezone: string;
  timezoneLabel: string;
  email: string;
  whatsappNumber: string;
  whatsappMessage: string;
  phoneNumber: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  socialUrl: string;
  socialHandle: string;
  aboutParagraphs: string[];
  howIWorkSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  openToText: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  url?: string;
  period: string;
  badges: { label: string; variant?: 'primary' | 'glass' }[];
  description: string;
  logoBg?: string;
  iconType: 'company' | 'flame' | 'laptop' | 'nittii';
}

export interface StackCategory {
  category: string;
  highlighted?: boolean;
  skills: {
    name: string;
    iconSvgPath?: string;
    iconColor?: string;
    highlighted?: boolean;
  }[];
}
