// data/projects.ts
export type Feature = {
  title: string;
  description: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  url?: string;
  images?: ProjectImage[];
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
    images: [
      {
        src: "https://primary-production-fdfe8.up.railway.app/wp-content/uploads/2026/10/app-screen001.jpg",
        alt: "job portal",
      },
      {
        src: "https://primary-production-fdfe8.up.railway.app/wp-content/uploads/2026/10/blog-preview-002.jpg",
        alt: "job portal02",
      },
    ],
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
  {
    id: "02",
    title: "Carauz Design",
    category: "Full-Stack Web Development · Headless WordPress Portfolio",
    url: "https://carauzdesign.com/",
    overview:
      "A personal portfolio and blog built with a headless WordPress architecture. The project separates content management from frontend presentation, using WordPress to manage blog content and Next.js to deliver a dynamic, responsive user experience. GraphQL connects the WordPress backend to the Next.js frontend, allowing content to be retrieved and displayed dynamically while providing greater flexibility over the website's design and functionality.",
    features: [
      {
        title: "Headless WordPress Architecture",
        description:
          "Using WordPress as a content management system (CMS) independently of the frontend.",
      },
      {
        title: "Dynamic Blog",
        description:
          "Managing and publishing blog posts through the WordPress dashboard and displaying them on the website.",
      },
      {
        title: "GraphQL Integration",
        description:
          "Retrieving structured content from WordPress to power the Next.js frontend.",
      },
      {
        title: "Dynamic Frontend",
        description:
          "Building reusable React components and dynamic pages to display content efficiently.",
      },
      {
        title: "Interactive Portfolio",
        description:
          "Presenting personal projects, professional experience, and design work through a custom interface.",
      },
      {
        title: "Responsive UI/UX Design",
        description:
          "Creating a responsive layout that adapts to different screen sizes and provides a consistent user experience.",
      },
    ],
    stack: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "CMS & Data Fetching",
        items: ["WordPress", "GraphQL"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub"],
      },
    ],
    role: {
      title: "Web Development & UI/UX Design",
      description:
        "Designed and developed the website using a headless WordPress architecture. Implemented the Next.js frontend, integrated GraphQL to retrieve content from WordPress, and created a custom interface for the blog and interactive portfolio.",
    },
    type: "Personal Project · Headless CMS · Live Production Application",
  },
];
