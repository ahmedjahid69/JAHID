/**
 * EDITABLE PORTFOLIO CONFIGURATION
 * -------------------------------------------------------------
 * Replace these placeholder values with your personal details.
 * The design, animations, and visual structure remain decoupled
 * and will automatically format your information.
 */

export interface PersonalConfig {
  fullName: string;
  brandName: string;
  avatarText: string;
  avatarImage?: string;
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
  facebookUrl: string;
  facebookHandle: string;
  telegramUrl: string;
  telegramHandle: string;
  instagramUrl: string;
  instagramHandle: string;
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

export const portfolioConfig: PersonalConfig = {
  // Brand & Identity Placeholders
  fullName: 'Jahid',
  brandName: 'Jahid',
  avatarText: 'J',
  avatarImage: '/assets/aistudio/file_0000000060b472089dc893f8353c833a_1__9cc76cf4.png',
  heroGreeting: "Hi, I'm Jahid 👋",
  headlineMain: 'I build software',
  headlineAccent: 'with AI agents as my teammates.',
  role: 'Software engineer',
  location: 'Bangladesh',
  timezone: 'Asia/Dhaka', // IANA timezone for Bangladesh
  timezoneLabel: 'GMT+6',
  
  // Contact Channels Placeholders
  email: 'jahidhasan.support@gmail.com',
  whatsappNumber: '8801604152683',
  whatsappMessage: "Hi, I found your website and I'd like to talk about a project.",
  phoneNumber: '01604152683',
  githubUrl: 'https://github.com/yourhandle',
  githubHandle: '@yourhandle',
  linkedinUrl: 'https://linkedin.com/in/yourhandle',
  linkedinHandle: 'in/yourhandle',
  socialUrl: 'https://x.com/yourhandle',
  socialHandle: '/yourhandle',
  facebookUrl: 'https://www.facebook.com/share/1XEMffAU31/',
  facebookHandle: 'ahmedjahid606',
  telegramUrl: 'https://t.me/jahidme',
  telegramHandle: 'jahidme',
  instagramUrl: 'https://www.instagram.com/xahid_606?vrfl=MWJ3em5hZGttbjV6Yw==',
  instagramHandle: 'xahid_606',

  // About Narrative Placeholders
  aboutParagraphs: [
    "I like taking ideas and turning them into products that people actually use, whether they're client websites or full SaaS apps. I work across the full stack, from the database to the interface.",
    "These days I build with AI agents. Claude Code, Codex and Cursor help me plan, write and review code, so I can ship faster and still keep the code clean.",
    "I also set up AI automations that save teams from boring, repetitive work. Things like customer replies, order taking and courier booking can run on their own.",
  ],

  // 3-Step Agentic Methodology
  howIWorkSteps: [
    {
      step: '01',
      title: 'Plan first',
      description: 'I think problems through and sketch the architecture, often talking ideas over with AI agents.',
    },
    {
      step: '02',
      title: 'Build with agents',
      description: 'I write code side by side with the agents. They speed up the routine parts, and I decide how it all fits together.',
    },
    {
      step: '03',
      title: 'Review and ship',
      description: 'I read and test every change myself before it goes live.',
    },
  ],

  // Availability
  openToText: 'Freelance, part-time roles & AI automation projects',
};

// Work History Timeline
export const experiences: ExperienceItem[] = [
  {
    id: 'exp-3',
    company: 'Nittii',
    period: '2026 – Present',
    badges: [
      { label: 'Software Engineer', variant: 'primary' },
      { label: 'Startup', variant: 'glass' },
    ],
    description: 'Nittii took care of customer chats for businesses. AI answered messages and took orders, and confirmed orders went straight to the courier. I co-founded it and built the whole product.',
    iconType: 'nittii',
  },
  {
    id: 'exp-4',
    company: 'GasbottleBD',
    period: '2025 – Present',
    badges: [
      { label: 'Software Engineer', variant: 'primary' },
      { label: 'Startup', variant: 'glass' },
    ],
    description: 'A platform for ordering gas cylinders online. I co-founded it and built it from scratch.',
    logoBg: 'bg-linear-to-br from-orange-500 to-rose-600',
    iconType: 'flame',
  },
  {
    id: 'exp-5',
    company: 'Freelance',
    period: '2023 – Present',
    badges: [
      { label: 'Software Engineer', variant: 'primary' },
      { label: 'Remote', variant: 'glass' },
    ],
    description: "I build full-stack websites and web apps for clients, wherever they're based.",
    logoBg: 'bg-linear-to-br from-emerald-500 to-cyan-600',
    iconType: 'laptop',
  },
];

// Marquee items for Hero
export const marqueeSkills = [
  'Claude Code',
  'Codex',
  'Cursor',
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'Prisma',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Framer Motion',
];

// Categorized Stack
export const stackCategories: StackCategory[] = [
  {
    category: 'Agentic AI',
    highlighted: true,
    skills: [
      { name: 'Claude Code', iconColor: '#D97757', highlighted: true },
      { name: 'Codex', iconColor: '#f4f4f5', highlighted: true },
      { name: 'Cursor', iconColor: '#a78bfa', highlighted: true },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'OpenAI', iconColor: '#10a37f' },
      { name: 'Claude API', iconColor: '#D97757' },
      { name: 'OpenRouter', iconColor: '#3b82f6' },
      { name: 'AI SDK', iconColor: '#f4f4f5' },
      { name: 'MCP', iconColor: '#8b5cf6' },
      { name: 'n8n', iconColor: '#ea580c' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'TypeScript', iconColor: '#3178C6' },
      { name: 'Next.js', iconColor: '#f4f4f5' },
      { name: 'React', iconColor: '#61DAFB' },
      { name: 'Tailwind CSS', iconColor: '#38BDF8' },
      { name: 'shadcn/ui', iconColor: '#f4f4f5' },
      { name: 'Framer Motion', iconColor: '#0055FF' },
      { name: 'GSAP', iconColor: '#88CE02' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', iconColor: '#5FA04E' },
      { name: 'NestJS', iconColor: '#E0234E' },
      { name: 'Express', iconColor: '#f4f4f5' },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'PostgreSQL', iconColor: '#4169E1' },
      { name: 'MongoDB', iconColor: '#47A248' },
      { name: 'Prisma', iconColor: '#2D3748' },
      { name: 'Supabase', iconColor: '#3ECF8E' },
      { name: 'Firebase', iconColor: '#FFCA28' },
    ],
  },
  {
    category: 'Deploy & Tools',
    skills: [
      { name: 'Vercel', iconColor: '#f4f4f5' },
      { name: 'Railway', iconColor: '#8b5cf6' },
      { name: 'Cloudflare', iconColor: '#F38020' },
      { name: 'Docker', iconColor: '#2496ED' },
      { name: 'GitHub', iconColor: '#f4f4f5' },
      { name: 'Figma', iconColor: '#F24E1E' },
    ],
  },
];
