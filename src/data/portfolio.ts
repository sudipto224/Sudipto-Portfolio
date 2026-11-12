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
  liveUrl?: string;
  repoUrl?: string;
  github: string;
  live: string;
  image: string;
  gallery: string[];
  featured: boolean;
  approach: string;
  features: string[];
  challenges: { title: string; description: string; solution: string }[];
};

export type Certification = {
  title: string;
  organization: string;
  duration: string;
  location: string;
  image: string;
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    eyebrow: string;
    headline: string;
    intro: string;
    about: string;
    interests: string[];
    strengths: string[];
    location: string;
    hometown: string;
    availability: string;
    photo: string;
    email: string;
    phone: string;
    whatsapp: string;
    cv: string;
    certification: Certification;
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
    headline: 'Building Digital Products That Solve Real Problems.',
    intro:
      'I design and develop modern web applications, intuitive user interfaces, and reliable backend systems. I enjoy turning complex ideas into practical digital experiences through thoughtful engineering and clean code.',
    about:
      "I'm Sudipto Das, a Full Stack Developer based in Khulna, Bangladesh. I build responsive web applications, scalable backend functionality, and user-centered digital products. My work spans full-stack platforms, e-commerce systems, and AI-assisted tools — always with a focus on clean, maintainable code and real-world usefulness.",
    interests: [
      'Full-stack web applications',
      'Modern frontend interfaces',
      'Backend systems and REST APIs',
      'E-commerce platforms',
      'Database design and integration',
      'AI-assisted tools',
      'Responsive design and user experience',
    ],
    strengths: [
      'HTML, CSS, JavaScript, TypeScript',
      'React, Next.js, Tailwind CSS',
      'Laravel, PHP, Node.js',
      'MySQL, PostgreSQL, Supabase',
      'Git, GitHub, VS Code, Postman',
      'AI integration',
    ],
    location: 'Khulna, Bangladesh',
    hometown: 'Bagerhat, Bangladesh',
    availability: 'Open to Internship, Junior Developer, and Full Stack Roles',
    photo: '/sudipto.jpg',
    email: 'sudiptodas8900@gmail.com',
    phone: '+880 1701-054096',
    whatsapp: 'https://wa.me/8801701054096',
    cv: '/documents/Sudipto_Das_CV.pdf',
    certification: {
      title: 'Laravel 1-Month Industrial Training Program',
      organization: 'Appstick',
      duration: 'February 1, 2026 – March 4, 2026',
      location: 'Khulna, Bangladesh',
      image: '/images/certificate/laravel-training.jpg',
    },
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
    'Inertia.js',
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
        { name: 'Inertia.js', icon: 'api' },
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
      group: 'AI & Automation',
      items: [
        { name: 'AI Integration', icon: 'bot' },
        { name: 'Authentication', icon: 'lock' },
        { name: 'Responsive Web Design', icon: 'smartphone' },
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
      period: '2026',
      description:
        'CGPA 3.67 / 4.00.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Khan Jahan Ali College, Bagerhat',
      period: '2020',
      description:
        'GPA 5.00 / 5.00.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Bagerhat Government High School, Bagerhat',
      period: '2018',
      description:
        'GPA 4.56 / 5.00.',
    },
  ],
  projects: [
    {
      id: 'khulna-turf',
      slug: 'khulna-turf',
      name: 'Khulna Turf — Booking & Management System',
      category: 'Full-Stack Booking Platform',
      period: '2026 — Present',
      description: 'A complete booking website and owner admin dashboard for Khulna Turf, a floodlit football/cricket turf in Gollamari, Khulna. Customers browse the ground, book 90-minute slots and pay 50% in advance; the owner manages bookings, blocks slots for maintenance, and edits prices from the admin panel. Bookings are stored in Supabase, so a booking made on a customer\'s phone appears in the owner\'s dashboard immediately.',
      overview: 'Khulna Turf is a full-stack booking and management platform for a floodlit football/cricket turf. It features customer slot booking with advance payment and an owner admin dashboard for managing bookings, blocking maintenance slots, and editing prices, all powered by Supabase.',
      role: 'Full-Stack Development',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://khulna-turf-inky.vercel.app/',
      repoUrl: 'https://github.com/sudipto224/khulna-turf',
      github: 'https://github.com/sudipto224/khulna-turf',
      live: 'https://khulna-turf-inky.vercel.app/',
      image: '/images/projects/live-screenshots/khulna-turf/01-booking-homepage.png',
      gallery: [
        '/images/projects/live-screenshots/khulna-turf/01-booking-homepage.png',
        '/images/projects/live-screenshots/khulna-turf/02-owner-dashboard.png',
      ],
      featured: true,
      approach: 'A Next.js 16 frontend with React 19 and Supabase handling the backend, database, and authentication. Customer bookings sync in real time to the owner dashboard via Supabase Realtime and Row Level Security.',
      features: [
        '90-minute slot booking with 50% advance payment',
        'Supabase Auth + Row Level Security',
        'Owner admin dashboard for bookings and pricing',
        'Live on Vercel',
      ],
      challenges: [
        {
          title: 'Real-time booking sync across devices',
          description: 'A booking made on a customer\'s phone must appear in the owner\'s dashboard immediately.',
          solution: 'Supabase Realtime subscriptions combined with Row Level Security keep customer and owner views in sync without polling.',
        },
        {
          title: 'Preventing double bookings on the same slot',
          description: 'Multiple customers could book the same 90-minute slot concurrently.',
          solution: 'Server-side validation and timezone-normalized timestamps in Supabase prevent overlapping appointment bookings.',
        },
      ],
    },
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
      repoUrl: 'https://github.com/sudipto224/Modern-ecommerce-platform',
      liveUrl: 'https://mehedi-by-meherin.vercel.app/',
      github: 'https://github.com/sudipto224/Modern-ecommerce-platform',
      live: 'https://mehedi-by-meherin.vercel.app/',
      image: '/images/projects/live-screenshots/mehedi-by-meherin/01-storefront-homepage.png',
      gallery: [
        '/images/projects/live-screenshots/mehedi-by-meherin/01-storefront-homepage.png',
        '/images/projects/live-screenshots/mehedi-by-meherin/02-admin-dashboard.png',
        '/images/projects/live-screenshots/mehedi-by-meherin/03-booking-page.png',
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
      challenges: [
        {
          title: 'Keeping bookings available in real time',
          description: 'Multiple customers could request the same appointment slot, risking double bookings.',
          solution: 'A Supabase-backed bookings table with server-side validation and timezone-normalized timestamps prevents overlapping appointments.',
        },
        {
          title: 'Syncing inventory between storefront and admin',
          description: 'Product stock had to stay consistent across the customer storefront and the admin dashboard.',
          solution: 'Typed Supabase clients with real-time subscriptions keep inventory and order status in sync across interfaces.',
        },
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
      liveUrl: 'https://ai-based-smart-quiz-system.onrender.com',
      repoUrl: 'https://github.com/sudipto224/AI-based-Smart-Quiz-System',
      github: 'https://github.com/sudipto224/AI-based-Smart-Quiz-System',
      live: 'https://ai-based-smart-quiz-system.onrender.com',
      image: '/images/projects/live-screenshots/quizora/05-public-homepage.png',
      gallery: [
        '/images/projects/live-screenshots/quizora/05-public-homepage.png',
        '/images/projects/live-screenshots/quizora/01-role-selection.png',
        '/images/projects/live-screenshots/quizora/02-faculty-dashboard.png',
        '/images/projects/live-screenshots/quizora/03-student-dashboard.png',
        '/images/projects/live-screenshots/quizora/04-admin-dashboard.png',
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
      challenges: [
        {
          title: 'AI-generated question quality and consistency',
          description: 'AI-generated MCQs could be vague, inaccurate, or inconsistent across topics.',
          solution: 'Structured Groq prompts with schema validation plus a teacher review workflow before questions go live.',
        },
        {
          title: 'Timed assessments across roles without client clock tampering',
          description: 'Quiz timers must not depend on the user device clock, which can be changed.',
          solution: 'Server-validated start and end timestamps, with assessment state stored on the backend and checked on submission.',
        },
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
      repoUrl: 'https://github.com/sudipto224/Singlesociety',
      liveUrl: 'https://singlesociety.vercel.app/',
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
      challenges: [
        {
          title: 'High-quality client-side PNG export',
          description: 'Exporting the interactive crest as a PNG can lose quality or fail across browsers.',
          solution: 'Used html-to-image with deterministic rendering and a reliable fallback so downloads work consistently.',
        },
        {
          title: 'Keeping the creative experience lightweight',
          description: 'A playful interactive app can easily become heavy and slow to load.',
          solution: 'Built as a single-page Vite application with minimal dependencies and no backend, keeping it fast and portable.',
        },
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
