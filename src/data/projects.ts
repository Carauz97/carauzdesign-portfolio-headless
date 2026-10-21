// data/projects.ts
export type Feature = {
  title: string;
  description: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  url?: string; // el "?" significa opcional: un proyecto sin sitio público no lo necesita
  image?: { src: string; alt: string }; // captura en /public (opcional)
  overview: string;
  features: Feature[];
  stack: StackGroup[];
  role: { title: string; description: string };
  type: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Empleo a la Vista",
    category: "Full-Stack Web Development · Job Platform",
    url: "https://www.empleoalavista.com/",
    overview:
      "A job discovery platform designed to help users find, filter, and explore employment opportunities in Nicaragua. The platform features dynamic job listings, location-based browsing, categorized vacancies, and career-related content to improve job discovery and accessibility.",
    features: [
      {
        title: "Dynamic Job Listings",
        description:
          "Displaying employment opportunities with company details, locations, categories, and work modes.",
      },
      {
        title: "Search & Filtering",
        description:
          "Helping users explore vacancies based on relevant criteria.",
      },
      {
        title: "Dynamic Pages",
        description:
          "Building job listings and location-focused pages with reusable components.",
      },
      {
        title: "Database Integration",
        description:
          "Managing and retrieving job data through MongoDB and Mongoose.",
      },
      {
        title: "SEO & Deployment",
        description:
          "Structuring public-facing pages for discoverability and deploying the application to a production environment.",
      },
      {
        title: "UI/UX Design",
        description:
          "Designing responsive interfaces and intuitive navigation for a user-friendly experience.",
      },
    ],
    stack: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      { label: "Database", items: ["MongoDB", "Mongoose"] },
      {
        label: "Infrastructure & Tools",
        items: ["Railway", "Cloudflare", "Git", "GitHub"],
      },
    ],
    role: {
      title: "Product Design & Development",
      description:
        "Designed and developed the platform, combining frontend engineering, database integration, responsive UI/UX, and production deployment to deliver a functional web product.",
    },
    type: "Personal Project · Live Production Application",
  },
  // Proyecto 02 y 03: copia el objeto de arriba y cambia los datos
];
