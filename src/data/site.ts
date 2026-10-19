export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  index: string;
  slug: string;
  title: string;
  role: string;
  year: string;
  description: string;
  stack: string[];
  live?: string;
}

export interface ExperienceItem {
  org: string;
  title: string;
  dates: string;
  location: string;
  contribution: string;
  current?: boolean;
}

export interface Capability {
  title: string;
  description: string;
  items: string[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface TerminalLine {
  command: string;
  value: string;
}

export const site = {
  name: 'Muhammad Rafif Widyadhana',
  shortName: 'rafifwd',
  role: 'AI/ML Engineer · Full-Stack Product Builder',
  email: 'rafifwidyadhanaaa@gmail.com',
  github: 'https://github.com/rafifwd',
  linkedin: 'https://linkedin.com/in/rafif-widyadhana',
  portfolio: 'https://rafifwd.github.io',
  location: 'Bandung, West Java, Indonesia',
  timezone: 'GMT+7',
  availability: 'Open to freelance & collaborations',

  meta: {
    title: 'Muhammad Rafif Widyadhana — AI/ML & Full-Stack Engineer',
    description:
      'AI/ML engineer and full-stack product builder. CS undergraduate at Universitas Padjadjaran building explainable ML systems and the products around them.',
    canonical: 'https://rafifwd.github.io/',
    ogImage: 'https://rafifwd.github.io/og.png',
    themeColor: '#08090A',
  },

  links: {
    portfolio: { label: 'Portfolio', href: 'https://rafifwd.github.io' },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rafif-widyadhana',
      external: true,
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/rafifwd',
      external: true,
    },
    email: {
      label: 'Email',
      href: 'mailto:rafifwidyadhanaaa@gmail.com',
    },
  } satisfies Record<string, LinkItem>,

  hero: {
    eyebrow: 'Muhammad Rafif Widyadhana — Bandung, Indonesia',
    title: 'AI/ML systems, shipped as real products.',
    titleAccent: 'real products.',
    subtitle:
      'CS undergrad at Universitas Padjadjaran building explainable ML systems and the full-stack products around them—from risk scoring engines to the dashboards people use.',
    availability: 'Open to freelance & collaborations',
    ctas: {
      work: { label: 'View selected work', href: '#work' },
      email: {
        label: 'Email me',
        href: 'mailto:rafifwidyadhanaaa@gmail.com',
      },
    },
    terminal: [
      { command: 'whoami', value: 'rafif — AI/ML + full-stack' },
      {
        command: 'currently',
        value: 'CS @ Unpad · Project Officer @ IFEST 2026',
      },
      {
        command: 'focus',
        value: 'explainable ML · full-stack products',
      },
      { command: 'status', value: 'open to freelance' },
    ] satisfies TerminalLine[],
  },

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  projects: [
    {
      index: '01',
      slug: 'awasjentik',
      title: 'AwasJentik',
      role: 'AI/Full-Stack Developer',
      year: '2026',
      description:
        'AI-powered malaria early-warning surveillance platform with a dual-model risk scoring engine, citizen reporting system, and real-time administrative dashboard.',
      stack: [
        'FastAPI',
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'SQLModel',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Python',
      ],
      live: 'https://malaria-watch.vercel.app/',
    },
    {
      index: '02',
      slug: 'nalarpath-ai',
      title: 'NalarPath AI',
      role: 'AI/Full-Stack Developer',
      year: '2026',
      description:
        'Career reasoning system combining rule-based and machine-learning scoring, dynamic skill-weight logic, a FastAPI backend, and SHAP-based explainable AI for narrative career recommendations.',
      stack: ['FastAPI', 'Scikit-learn', 'SHAP', 'Pandas', 'NumPy', 'Python'],
      live: 'https://nalaraitest.vercel.app/',
    },
    {
      index: '03',
      slug: 'unpad-goes-to-school-sukabumi',
      title: 'Unpad Goes to School Sukabumi',
      role: 'Front-end Developer',
      year: '2026',
      description:
        'Company profile plus integrated ticketing platform for a school outreach program—an informational site paired with a registration flow for students.',
      stack: [
        'Laravel Blade',
        'Tailwind CSS',
        'Vite',
        'JavaScript (ES6+)',
        'Axios',
      ],
      live: 'https://ugssukabumi.com',
    },
  ] satisfies Project[],

  about: {
    paragraphs: [
      'I build AI/ML systems with the product around them. The model is only one part: the useful work is turning a risk score or a recommendation into something a person can read, question, and act on.',
      'My projects sit between the two ends of that problem—an explainable career reasoning engine, a malaria surveillance dashboard, and front-end work on a client ticketing platform. I care about clear interfaces, honest outputs, and shipping something that works outside a notebook.',
    ],
    facts: [
      {
        label: 'Education',
        value: 'BSc Computer Science, Universitas Padjadjaran · GPA 3.65/4.00',
      },
      { label: 'Base', value: 'Bandung, West Java, Indonesia · GMT+7' },
      {
        label: 'Focus',
        value: 'Explainable ML · full-stack product engineering',
      },
      { label: 'Current leadership', value: 'Project Officer, IFEST 2026' },
    ] satisfies Fact[],
    capabilities: [
      {
        title: 'AI/ML systems',
        description:
          'Risk scoring engines and recommendation logic that combine learned models with rules people can inspect.',
        items: [
          'Dual-model risk scoring',
          'Rule-based + ML scoring',
          'SHAP-based explanations',
          'Data processing with Pandas & NumPy',
        ],
      },
      {
        title: 'Full-stack products',
        description:
          'The application layer around the model: APIs, data models, dashboards, and the interfaces people actually use.',
        items: [
          'FastAPI backends',
          'Next.js, React & TypeScript',
          'Supabase & SQLModel',
          'Laravel Blade front ends',
        ],
      },
      {
        title: 'Product & operations',
        description:
          'Requirements, coordination, and delivery—learned through client work and leading event teams.',
        items: [
          'Requirements gathering',
          'Stakeholder coordination',
          'Project planning & timelines',
          'Team leadership across divisions',
        ],
      },
    ] satisfies Capability[],
  },

  experience: [
    {
      org: 'Informatics Festival (IFEST) 2026',
      title: 'Project Officer',
      dates: 'May 2026 – Present',
      location: 'Bandung, West Java',
      contribution:
        'Leading the organizing committee: setting strategic direction, aligning division goals, and overseeing project execution.',
      current: true,
    },
    {
      org: 'LinkToWork (previously Pathseeker) by Magna Partners',
      title: 'Operations Associate',
      dates: 'Aug 2025 – Apr 2026',
      location: 'Sumedang, West Java',
      contribution:
        'Supported planning and execution of 3+ organizational projects by gathering requirements, coordinating stakeholders, and maintaining project information.',
    },
    {
      org: 'Training of Motivation (TOM)',
      title: 'Project Officer',
      dates: 'Aug 2025 – Jan 2026',
      location: 'Tegal, Central Java',
      contribution:
        'Coordinated logistics and volunteer teams for a program guiding high school students toward higher education.',
    },
    {
      org: 'Informatics Festival (IFEST) 2025',
      title: 'Project Supervisor',
      dates: 'May 2025 – Oct 2025',
      location: 'Bandung, West Java',
      contribution:
        'Oversaw four divisions—Technopreneur, National Seminar, Event Management, and IT Competition—and managed key timelines.',
    },
  ] satisfies ExperienceItem[],

  contact: {
    title: "Let's build something useful.",
    copy: 'Open to freelance projects, collaborations, and AI/product work. Best fit: ML-powered products, full-stack web apps, and data-driven dashboards.',
    cta: 'Email me',
  },

  footer: {
    year: '2026',
    builtWith: 'Astro',
    location: 'Bandung, Indonesia',
  },
} as const;

export type Site = typeof site;
