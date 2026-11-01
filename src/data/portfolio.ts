export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  period: string;
  description: string;
  overview: string;
  role: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  gallery: string[];
  featured: boolean;
  approach: string;
  features: string[];
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    eyebrow: string;
    headline: string;
    intro: string;
    about: string;
    location: string;
    availability: string;
    photo: string;
    email: string;
    whatsapp: string;
    cv: string;
  };
  skills: string[];
  skillsGroups: {
    group: string;
    items: { name: string; icon: string }[];
  }[];
  services: { title: string; description: string; tech: string[] }[];
  education: { degree: string; institution: string; period: string; description: string }[];
  projects: Project[];
  socials: { label: string; url: string; icon: string }[];
};

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Sudipto Das',
    title: 'Full Stack Developer',
    eyebrow: 'Independent Full Stack Developer',
    headline: 'Building digital experiences that matter.',
    intro: 'I design and develop thoughtful digital products, from elegant interfaces to powerful backend systems.',
    about:
      "I'm Sudipto Das, a Computer Science and Engineering student at Northern University of Business & Technology Khulna. I build full-stack web applications, modern frontend interfaces, backend systems, e-commerce platforms, and AI-assisted tools. My work spans database design, REST APIs, and thoughtful product engineering, driven by curiosity and problem-solving.",
    location: 'Khulna, Bangladesh',
    availability: 'Open to freelance projects & collaboration',
    photo: '/sudipto.jpg',
    email: 'sudiptodas8900@gmail.com',
    whatsapp: 'https://wa.me/8801701054096',
    cv: '',
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'PHP',
    'Laravel',
    'REST APIs',
    'MySQL',
    'PostgreSQL',
    'Supabase',
    'Git',
    'GitHub',
    'VS Code',
    'Vercel',
    'AI Integration',
    'Authentication',
    'Responsive Web Design',
    'Database Integration',
  ],
  skillsGroups: [
    {
      group: 'Frontend',
      items: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
      ],
    },
    {
      group: 'Backend',
      items: [
        { name: 'PHP', icon: 'php' },
        { name: 'Laravel', icon: 'laravel' },
        { name: 'REST APIs', icon: 'api' },
      ],
    },
    {
      group: 'Database',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgres' },
        { name: 'Supabase', icon: 'supabase' },
      ],
    },
    {
      group: 'Development Tools',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Vercel', icon: 'vercel' },
      ],
    },
    {
      group: 'Other Capabilities',
      items: [
        { name: 'AI Integration', icon: 'ai' },
        { name: 'Authentication', icon: 'auth' },
        { name: 'Responsive Web Design', icon: 'responsive' },
        { name: 'Database Integration', icon: 'database' },
      ],
    },
  ],
  services: [
    {
      title: 'Full Stack Web Development',
      description:
        'Complete product development from interface to database — responsive frontends connected to maintainable backend systems.',
      tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    },
    {
      title: 'E-commerce Website Development',
      description:
        'Online stores with product catalogs, shopping carts, secure checkout, appointment booking, and admin workflows.',
      tech: ['Next.js', 'Supabase', 'React', 'Tailwind CSS', 'Payments'],
    },
    {
      title: 'Backend API & Database Development',
      description:
        'Practical data models, authentication, REST APIs, and application integrations built with Laravel and SQL.',
      tech: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'AI Integration & Web Applications',
      description:
        'Thoughtful generative AI integrations for real-world workflows — document-based quiz generation, smart assistants, and more.',
      tech: ['Groq AI', 'Laravel', 'React', 'Inertia.js', 'AI APIs'],
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Northern University of Business & Technology Khulna',
      period: 'Current student',
      description:
        'Building a foundation in software engineering while developing practical web applications — from e-commerce platforms to AI-assisted education tools.',
    },
  ],
  projects: [
    {
      id: 'mehedi-by-meherin',
      slug: 'mehedi-by-meherin',
      name: 'Mehedi By Meherin',
      category: 'Full-Stack E-commerce & Booking',
      period: 'Oct 2026 — Present',
      description:
        'Modern e-commerce and appointment booking platform with product management, shopping cart, checkout, bookings, and an admin dashboard.',
      overview:
        'Mehedi By Meherin is a full-stack e-commerce and booking platform built around henna and mehndi experiences. It combines a product storefront with appointment booking, letting visitors discover designs, purchase essentials, and request personal bookings through one interface.',
      role: 'Full-Stack Development',
      tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      github: 'https://github.com/sudipto224/Modern-ecommerce-platform',
      live: 'https://modern-ecommerce-platform-lac.vercel.app',
      image: '/images/projects/mehedi-by-meherin.svg',
      gallery: [
        '/images/projects/mehedi-by-meherin.svg',
        '/images/projects/mehedi-by-meherin-2.svg',
        '/images/projects/mehedi-by-meherin-3.svg',
      ],
      featured: true,
      approach:
        'A Next.js frontend with Supabase handling the backend, database, and authentication. The architecture separates the customer storefront from the admin dashboard, with product and booking data synced through typed Supabase clients.',
      features: [
        'Product storefront with catalog browsing',
        'Shopping cart and checkout flow',
        'Appointment booking system',
        'Admin dashboard for orders and products',
        'Responsive mobile experience',
        'Supabase authentication and database',
      ],
    },
    {
      id: 'quizora',
      slug: 'quizora',
      name: 'Quizora',
      category: 'AI-Powered Smart Quiz System',
      period: 'Jul 2026 — Sep 2026',
      description:
        'University team project for AI-assisted question generation, online assessments, timed quizzes, and instant feedback.',
      overview:
        'Quizora is an AI-powered online assessment platform developed as a university team project. Teachers generate AI-assisted MCQs from topics or uploaded PDF/PPTX materials, run timed quizzes, and track results on course leaderboards, while students can independently generate personal practice quizzes.',
      role: 'Team Leader & Backend Developer · University team project',
      tech: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Groq AI'],
      github: 'https://github.com/sudipto224/AI-based-Smart-Quiz-System',
      live: 'https://ai-based-smart-quiz-system.onrender.com',
      image: '/images/projects/quizora.svg',
      gallery: [
        '/images/projects/quizora.svg',
        '/images/projects/quizora-2.svg',
        '/images/projects/quizora-3.svg',
      ],
      featured: true,
      approach:
        'Laravel backend with React and Inertia.js for the frontend, MySQL for data, and Groq Cloud AI for question generation. I led the backend architecture, API design, authentication, assessment workflows, and scoring logic, working alongside teammates focused on AI integration and frontend development.',
      features: [
        'AI-generated MCQs from topics and documents',
        'PDF and PPTX-based question generation',
        'Teacher and student dashboards',
        'Timed online assessments',
        'Automatic scoring and result review',
        'Course-wise leaderboards',
        'Student self-practice quizzes',
        'Role-based authentication',
      ],
    },
    {
      id: 'single-society',
      slug: 'single-society',
      name: 'Bangladesh Single Society',
      category: 'Creative Interactive Web App',
      period: '2026',
      description:
        'A playful interactive web experience that generates personalized Single Society award crests and lets users export the result as a PNG image.',
      overview:
        'Bangladesh Single Society is a creative interactive web application built with React, Vite, and Tailwind CSS. Users complete a playful form, receive a personalized award crest, and can download the result as a PNG image. It is a frontend-focused creative project, not a full-stack application.',
      role: 'Frontend Web Development',
      tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/sudipto224/Singlesociety',
      live: 'https://singlesociety.vercel.app',
      image: '/images/projects/single-society.svg',
      gallery: [
        '/images/projects/single-society.svg',
        '/images/projects/single-society-2.svg',
        '/images/projects/single-society-3.svg',
      ],
      featured: true,
      approach:
        'A single-page React application built with Vite and Tailwind CSS. The experience centers on an interactive form that generates a personalized award crest, with client-side image export to PNG using html-to-image.',
      features: [
        'Interactive user form',
        'Personalized award generation',
        'Image upload and customization',
        'PNG download export',
        'Dynamic, responsive interface',
      ],
    },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/sudipto224/', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudipto-das-7b3a4327a/', icon: 'linkedin' },
    { label: 'Facebook', url: 'https://www.facebook.com/share/1UA8eedKhG/', icon: 'facebook' },
    { label: 'Instagram', url: 'https://www.instagram.com/sudiptodas2468/', icon: 'instagram' },
    { label: 'WhatsApp', url: 'https://wa.me/8801701054096', icon: 'whatsapp' },
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioData.projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return portfolioData.projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return portfolioData.projects;
}
