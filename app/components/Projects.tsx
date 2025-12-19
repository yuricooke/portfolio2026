import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
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
  },
  {
    id: "hellstrom",
    title: "HELLSTRÖM",
    description:
      "Modern culinary website redesign for HELLSTRÖM, featuring recipe pages, journal articles, and an elegant user experience focused on food and cooking inspiration.",
    image: "/hellstrom.png",
    tags: ["Web Design", "Next.js", "UI/UX Design", "Responsive Design"],
    liveUrl: "https://www.hellstrom.no",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 text-blue-950 text-3xl leading-tight title">
            &lt;Featured Projects /&gt;
          </h2>
          <p className="text-gray-700 max-w-2xl ">
            A selection of projects that showcase my skills in front-end
            development and UI/UX design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 hover:border-teal-300 group"
            >
              <Link href={`/project/${project.id}`} className="block">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-6">
                <Link href={`/project/${project.id}`}>
                  <h3 className="mb-2 text-blue-950 group-hover:text-teal-500 transition-colors font-bold text-xl">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center justify-between">
                  <Link
                    href={`/project/${project.id}`}
                    className="flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </Link>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="text-blue-900 hover:text-teal-500 transition-colors"
                      title="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-blue-900 hover:text-teal-500 transition-colors"
                      title="View Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
