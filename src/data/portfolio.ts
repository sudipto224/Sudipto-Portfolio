export type Project = { id: string; name: string; category: string; period: string; description: string; role: string; tech: string[]; github: string; githubPrivate: boolean; live: string; image: string; featured: boolean };
export type PortfolioData = {
  profile: { name: string; title: string; eyebrow: string; headline: string; intro: string; about: string; location: string; availability: string; photo: string; email: string; whatsapp: string; cv: string };
  skills: string[];
  services: { title: string; description: string }[];
  education: { degree: string; institution: string; period: string; description: string }[];
  projects: Project[];
  socials: { label: string; url: string }[];
};

export const seedContent: PortfolioData = {
  "profile": {
    "name": "Sudipto Das",
    "title": "Full Stack Developer",
    "eyebrow": "FULL-STACK WEB DEVELOPER / KHULNA, BANGLADESH",
    "headline": "I build ideas into digital experiences.",
    "intro": "I create responsive web applications, practical backends and thoughtfully designed experiences — from concept to launch.",
    "about": "I'm Sudipto Das, a Computer Science and Engineering student at Northern University of Business & Technology Khulna. I enjoy building full-stack web applications that solve real-world problems, working with modern tools such as Next.js, React, TypeScript, Laravel, and Supabase. My project work spans e-commerce, appointment booking, and AI-assisted education.",
    "location": "Khulna, Bangladesh",
    "availability": "Open to freelance projects & collaboration",
    "photo": "/sudipto.jpg",
    "email": "sudiptodas8900@gmail.com",
    "whatsapp": "https://wa.me/8801701054096",
    "cv": ""
  },
  "skills": [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "PHP",
    "Supabase",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "REST APIs",
    "AI Integration",
    "Git",
    "GitHub"
  ],
  "services": [
    {
      "title": "Full-Stack Web Apps",
      "description": "Responsive frontend experiences connected to maintainable backend systems."
    },
    {
      "title": "E-commerce & Booking",
      "description": "Product catalogs, shopping experiences, appointments and admin workflows."
    },
    {
      "title": "API & Database Development",
      "description": "Practical data models, authentication and application integrations."
    },
    {
      "title": "AI-Enabled Features",
      "description": "Thoughtful AI integrations for useful, real-world workflows."
    }
  ],
  "education": [
    {
      "degree": "B.Sc. in Computer Science & Engineering",
      "institution": "Northern University of Business & Technology Khulna",
      "period": "Current student",
      "description": "Building a foundation in software engineering while developing practical web applications."
    }
  ],
  "projects": [
    {
      "id": "mehedi-by-meherin",
      "name": "Mehedi By Meherin",
      "category": "Full-Stack E-commerce & Booking",
      "period": "Oct 2026 — Present",
      "description": "Modern e-commerce and appointment booking platform with product management, shopping cart, checkout, bookings and an admin dashboard.",
      "role": "Full-Stack Development",
      "tech": [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Tailwind CSS"
      ],
      "github": "https://github.com/sudipto224/Modern-ecommerce-platform",
      "githubPrivate": false,
      "live": "",      "image": "",
      "featured": true
    },
    {
      "id": "quizora",
      "name": "Quizora",
      "category": "AI-Based Smart Quiz System",
      "period": "Jul 2026 — Sep 2026",
      "description": "University team project for AI-assisted question generation, online assessments, timed quizzes and instant feedback.",
      "role": "Team Leader & Backend Developer · University team project",
      "tech": [
        "Laravel",
        "React",
        "Inertia.js",
        "MySQL",
        "Groq AI"
      ],
      "github": "https://github.com/sudipto224/AI-based-Smart-Quiz-System",
      "githubPrivate": false,
      "live": "https://ai-based-smart-quiz-system.onrender.com",
      "image": "",
      "featured": true
    },
    {
      "id": "single-society",
      "name": "Bangladesh Single Society",
      "category": "Creative Interactive Web App",
      "period": "2026",
      "description": "A playful Bangla web experience that generates personalized Single Society award crests and allows users to export the result as a PNG image.",
      "role": "Frontend Web Development",
      "tech": ["React", "Vite", "Tailwind CSS", "html-to-image"],
      "github": "https://github.com/sudipto224/Singlesociety",
      "githubPrivate": false,
      "live": "",
      "image": "",
      "featured": true
    }
  ],
  "socials": [
    {
      "label": "GitHub",
      "url": "https://github.com/sudipto224/"
    },
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/sudipto-das-7b3a4327a/"
    },
    {
      "label": "Facebook",
      "url": "https://www.facebook.com/share/1UA8eedKhG/"
    },
    {
      "label": "Instagram",
      "url": "https://www.instagram.com/sudiptodas2468"
    },
    {
      "label": "WhatsApp",
      "url": "https://wa.me/8801701054096"
    }
  ]
};

export function normalizeContent(value: unknown): PortfolioData {
  if (!value || typeof value !== 'object') return seedContent;
  const data = value as Partial<PortfolioData>;
  return {
    profile: { ...seedContent.profile, ...(data.profile ?? {}) },
    skills: Array.isArray(data.skills) ? data.skills : seedContent.skills,
    services: Array.isArray(data.services) ? data.services : seedContent.services,
    education: Array.isArray(data.education) ? data.education : seedContent.education,
    projects: Array.isArray(data.projects) ? data.projects : seedContent.projects,
    socials: Array.isArray(data.socials) ? data.socials : seedContent.socials,
  };
}
