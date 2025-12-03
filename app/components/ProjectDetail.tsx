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
              className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
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
            {Object.entries(project.technologies).map(
              ([category, techs]) => (
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
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


