import Link from "next/link";
import { useParams } from "next/navigation";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projectsData = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and checkout process. Built with React and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2NDU2MzQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    date: "November 2024",
    challenge:
      "Creating a seamless shopping experience with complex cart logic, inventory management, and secure checkout flow while maintaining optimal performance.",
    solution:
      "Implemented Redux for state management, optimized re-renders with React.memo, and used lazy loading for product images. Created a custom hook for cart operations and integrated Stripe for payment processing.",
    features: [
      "Product catalog with advanced filtering and search",
      "Real-time inventory tracking",
      "Shopping cart with persistent state",
      "Secure checkout with multiple payment options",
      "User authentication and profile management",
      "Order history and tracking",
      "Admin dashboard for product management",
      "Responsive design optimized for mobile shopping",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Vite", "ESLint", "Prettier", "Git"],
    },
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "Designed and prototyped a mobile banking application with focus on security, accessibility, and user-friendly financial management.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY0NjU2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#",
    date: "October 2024",
    challenge:
      "Designing a banking app that balances security requirements with ease of use, while ensuring accessibility for users of all technical abilities.",
    solution:
      "Conducted extensive user research with diverse age groups, created multiple user personas, and iterated through wireframes and prototypes based on usability testing feedback.",
    features: [
      "Intuitive dashboard with account overview",
      "Quick actions for common transactions",
      "Bill payment and scheduling",
      "Budget tracking and spending insights",
      "Biometric authentication",
      "Card management and controls",
      "In-app customer support chat",
      "Dark mode support",
    ],
    technologies: {
      design: ["Figma", "Adobe XD", "Principle for animations"],
      research: ["User interviews", "Usability testing", "Heatmap analysis"],
      tools: ["Miro", "Notion", "Optimal Workshop"],
    },
  },
  {
    id: "task-management-dashboard",
    title: "Task Management Dashboard",
    description:
      "An intuitive project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1759984782050-981de6a25d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzY0NjY1ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Next.js", "DnD", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    date: "September 2024",
    challenge:
      "Building a complex drag-and-drop interface that works smoothly across devices while handling real-time collaboration between team members.",
    solution:
      "Used react-dnd for drag-and-drop, WebSocket for real-time updates, and implemented optimistic UI updates for instant feedback. Server-side rendering with Next.js for improved performance.",
    features: [
      "Kanban board with drag-and-drop",
      "Task cards with rich details",
      "Real-time collaboration",
      "Custom board layouts",
      "Task assignment and notifications",
      "Time tracking integration",
      "File attachments and comments",
      "Progress analytics and reporting",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "react-dnd"],
      backend: ["Next.js API Routes", "PostgreSQL", "Prisma"],
      realtime: ["WebSocket", "Socket.io"],
      tools: ["Vercel", "GitHub Actions"],
    },
  },
  {
    id: "portfolio-redesign",
    title: "Portfolio Website Redesign",
    description:
      "Complete redesign of a creative agency portfolio with emphasis on modern aesthetics, smooth animations, and performance.",
    image:
      "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1Njg3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web Design", "Motion/React", "CSS Animations", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
    date: "August 2024",
    challenge:
      "Creating a visually stunning portfolio that showcases creative work while maintaining fast load times and excellent SEO performance.",
    solution:
      "Implemented Motion for smooth animations, lazy loading for images, and optimized all assets. Used Next.js for SSG to ensure fast page loads and better SEO.",
    features: [
      "Smooth page transitions",
      "Interactive project showcases",
      "Parallax scrolling effects",
      "Video backgrounds",
      "Case study templates",
      "Blog integration",
      "Contact form with validation",
      "Multi-language support",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Motion/React", "SCSS"],
      cms: ["Sanity CMS"],
      seo: ["Next SEO", "Schema markup"],
      tools: ["Lighthouse", "ImageOptim"],
    },
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, real-time metrics, and customizable widgets for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY0NDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Recharts", "TypeScript", "Data Visualization"],
    liveUrl: "#",
    githubUrl: "#",
    date: "July 2024",
    challenge:
      "Processing and visualizing large datasets in real-time while maintaining smooth interactions and allowing users to customize their dashboard layout.",
    solution:
      "Implemented data pagination, memoized expensive calculations, used Web Workers for data processing, and created a flexible widget system with drag-and-drop customization.",
    features: [
      "Customizable dashboard layout",
      "Multiple chart types (line, bar, pie, etc.)",
      "Real-time data updates",
      "Data export functionality",
      "Custom date range selection",
      "Comparison views",
      "Alert system for metrics",
      "Mobile-responsive charts",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Recharts", "D3.js"],
      backend: ["REST API", "GraphQL"],
      database: ["PostgreSQL", "Redis for caching"],
      tools: ["React Query", "Zustand"],
    },
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    description:
      "Feature-rich social networking platform with user profiles, posts, comments, and real-time notifications.",
    image:
      "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NTU0MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Real-time", "API Design", "UX Research"],
    liveUrl: "#",
    githubUrl: "#",
    date: "June 2024",
    challenge:
      "Building a scalable social platform with real-time features, infinite scrolling feeds, and complex user interactions while ensuring data privacy and security.",
    solution:
      "Architected a microservices backend, implemented virtual scrolling for feeds, used optimistic updates for instant feedback, and integrated comprehensive privacy controls.",
    features: [
      "User profiles and customization",
      "News feed with infinite scroll",
      "Real-time notifications",
      "Post creation with media upload",
      "Comments and reactions",
      "Direct messaging",
      "Privacy and blocking controls",
      "Content moderation tools",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "React Query", "Tailwind"],
      backend: ["Node.js", "Express", "MongoDB", "Redis"],
      realtime: ["Socket.io", "WebSocket"],
      infrastructure: ["AWS", "Docker", "Nginx"],
    },
  },
  {
    id: "hellstrom",
    title: "Hellstrøm",
    description:
      "Modern culinary website redesign for Hellstrøm, featuring recipe pages, journal articles, and an elegant user experience focused on food and cooking inspiration.",
    image: "/www.hellstrom.no_.png",
    tags: ["Web Design", "Next.js", "UI/UX Design", "Responsive Design"],
    liveUrl: "https://www.hellstrom.no",
    githubUrl: "#",
    date: "December 2024",
    challenge:
      "Creating a modern, elegant website that showcases recipes, journal articles, and culinary content while maintaining excellent performance and user experience across all devices.",
    solution:
      "Designed and developed a responsive website with a clean aesthetic, intuitive navigation, and optimized content presentation. Implemented recipe pages, journal articles, and a newsletter signup system with a focus on visual storytelling.",
    features: [
      "Recipe pages with detailed instructions",
      "Journal article layout with rich content",
      "Newsletter signup integration",
      "Responsive design for all devices",
      "Clean, modern UI with elegant typography",
      "Image galleries and visual content",
      "Social media integration",
      "Search functionality",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      design: ["Figma", "UI/UX Design"],
      cms: ["Content Management"],
      tools: ["Git", "Responsive Design"],
    },
    galleryImages: [
      "/www.hellstrom.no_.png",
      "/www.hellstrom.no_journal.png",
      "/prototype.hellstrom.k8s.seeds.no_test-pages_journal-article-page.php.png",
      "/prototype.hellstrom.k8s.seeds.no_test-pages_recipe-single-page.php.png",
    ],
  },
  {
    id: "jotron",
    title: "Jotron",
    description:
      "Corporate website for Jotron, a world-leading manufacturer of communication products and systems for land, sea, and air applications. Built with React, featuring modern design and comprehensive product showcases.",
    image: "/jotron1.png",
    tags: ["React", "Web Design", "UI/UX Design", "Corporate Website"],
    liveUrl: "https://www.jotron.com",
    githubUrl: "#",
    date: "2024",
    challenge:
      "Creating a professional corporate website that effectively communicates Jotron's expertise in communication systems for maritime, aviation, and land applications while showcasing their extensive product portfolio and solutions.",
    solution:
      "Developed a modern, responsive website using React that highlights Jotron's products, solutions, and company values. Implemented intuitive navigation, comprehensive product showcases, and engaging content sections that reflect the company's commitment to safety and innovation.",
    features: [
      "Product catalog with detailed specifications",
      "Solutions showcase for ATC, Coastal, Maritime, and Energy sectors",
      "Company information and values presentation",
      "News and insights section",
      "Career opportunities page",
      "Sustainability and ESG information",
      "Responsive design for all devices",
      "Modern UI with professional aesthetics",
    ],
    technologies: {
      frontend: ["React", "JavaScript", "CSS", "HTML"],
      design: ["UI/UX Design", "Responsive Design"],
      tools: ["Git", "Modern Web Standards"],
    },
    galleryImages: [
      "/jotron1.png",
      "/jotron2.png",
      "/jotron3.png",
      "/jotron4.png",
      "/jotron5.png",
    ],
  },
  {
    id: "logopadie",
    title: "Logopädie",
    description:
      "Multilingual speech therapy practice website for Speech Therapy Hamburg. Complete visual identity design and development using Next.js and Tailwind CSS, featuring a modern, welcoming interface for a multilingual therapy practice.",
    image: "/twoarebetter-1.jpg",
    tags: ["Next.js", "Tailwind CSS", "Visual Identity", "UI/UX Design"],
    liveUrl: "https://www.speechtherapyhamburg.com",
    githubUrl: "#",
    date: "2024",
    challenge:
      "Creating a welcoming and professional website for a multilingual speech therapy practice that effectively communicates the practice's services, philosophy, and expertise while appealing to a diverse, multilingual clientele in Hamburg.",
    solution:
      "Designed a complete visual identity with a modern, approachable aesthetic using a palette of light beige, blues, and purple accents. Developed a responsive website with Next.js and Tailwind CSS that showcases therapy services, practice information, and contact details in an intuitive, multilingual-friendly interface.",
    features: [
      "Complete visual identity design including logo and brand colors",
      "Multilingual navigation and content support",
      "Therapy services showcase with detailed descriptions",
      "Practice room gallery with image carousel",
      "About me section with professional qualifications",
      "Partnerships and certifications display",
      "Contact form and location information",
      "Responsive design optimized for all devices",
      "Modern UI with welcoming, professional aesthetics",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      design: ["Visual Identity Design", "UI/UX Design", "Brand Design"],
      tools: ["Git", "Responsive Design", "Modern Web Standards"],
    },
    galleryImages: ["/twoarebetter-1.jpg", "/sth.png"],
  },
  {
    id: "hello-sales",
    title: "Hello Sales",
    description:
      "CRM platform designed for physical stores and services, integrated with WhatsApp. Easy-to-use system that increases sales by up to 30% through intelligent contact management and ready-to-use campaigns. Built with Angular and custom frontend design.",
    image: "/hellosales-1.png",
    tags: ["Angular", "Frontend Design", "CRM", "UI/UX Design"],
    liveUrl: "https://hellosales.app",
    githubUrl: "#",
    date: "2024-2025",
    challenge:
      "Creating an intuitive CRM platform specifically designed for physical retail stores and services that integrates seamlessly with WhatsApp, the primary communication channel for Brazilian retailers. The system needed to be extremely easy to use for sales teams while providing powerful campaign management and analytics for store owners.",
    solution:
      "Developed a comprehensive CRM platform using Angular with a custom frontend design that focuses on simplicity and user experience. Implemented intelligent contact scheduling, ready-to-use sales campaigns, WhatsApp integration, and real-time analytics. The design emphasizes ease of use with a clean, modern interface that sales teams can adopt immediately.",
    features: [
      "Intelligent contact agenda that suggests who to contact, when, and why",
      "Ready-to-use sales campaigns that can be activated instantly",
      "WhatsApp integration without changing phone numbers",
      "Real-time analytics and performance indicators",
      "User hierarchy and team management",
      "Cashback system integration",
      "Campaign results tracking and reporting",
      "Mobile-first responsive design",
      "Login and password recovery system",
      "Dashboard with daily progress tracking",
    ],
    technologies: {
      frontend: ["Angular", "TypeScript", "CSS", "HTML"],
      design: ["Frontend Design", "UI/UX Design", "Custom Design System"],
      tools: ["Git", "Responsive Design", "Modern Web Standards"],
    },
    galleryImages: [
      "/hellosales-1.png",
      "/hellosales-2.png",
      "/hellosales-3.png",
      "/hellosales-4.png",
      "/hellosales-5.png",
      "/hellosales-6.png",
    ],
  },
] as const;

export function ProjectDetail() {
  const params = useParams<{ projectId: string }>();
  const projectId = params?.projectId;
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center">
          <h2 className="mb-4 text-blue-950">Project Not Found</h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-900 hover:text-teal-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 shadow-xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gallery Images - if available */}
        {"galleryImages" in project && project.galleryImages && (
          <div className="mb-12">
            <h3 className="mb-6 text-blue-950">Project Screenshots</h3>
            <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2">
              {project.galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{project.date}</span>
            </div>
          </div>

          <h1 className="mb-4 text-blue-950">{project.title}</h1>
          <p className="text-gray-700 text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full flex items-center gap-2"
              >
                <Tag size={16} />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all hover:shadow-lg"
            >
              <ExternalLink size={20} />
              View Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors opacity-30 pointer-events-none cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              aria-disabled="true"
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="mb-4 text-blue-950">The Challenge</h3>
            <p className="text-gray-700">{project.challenge}</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <h3 className="mb-4 text-blue-950">The Solution</h3>
            <p className="text-gray-700">{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="mb-6 text-blue-950">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-blue-950 text-white p-8 rounded-2xl">
          <h3 className="mb-6">Technologies Used</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-teal-300 mb-3 capitalize">{category}</h4>
                <ul className="space-y-2">
                  {(techs as readonly string[]).map((tech) => (
                    <li key={tech} className="text-blue-100">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
