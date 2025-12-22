import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: "hellstrom",
    title: "Hellstrøm",
    description:
      "Modern culinary website redesign for Hellstrøm, featuring recipe pages, journal articles, and an elegant user experience focused on food and cooking inspiration.",
    image: "/hellstrom.png",
    tags: ["Web Design", "Next.js", "UI/UX Design", "Responsive Design"],
    liveUrl: "https://www.hellstrom.no",
    githubUrl: "#",
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
  },
  {
    id: "great-hikes",
    title: "Great Hikes",
    description:
      "MVP project from fullstack graduation course. A React-based web application showcasing hiking destinations around the world. Features interactive maps, destination galleries, and detailed information about national parks and hiking trails.",
    image: "/GH1.png",
    tags: ["React", "Fullstack", "MVP", "UI/UX Design"],
    liveUrl: "https://great-hikes.vercel.app",
    githubUrl: "#",
  },
  {
    id: "barbarian-kingdoms",
    title: "Rise of the Barbarian Kingdoms",
    description:
      "EdTech platform for history education focusing on the transition from Antiquity to the Middle Ages through the formation of barbarian kingdoms. Interactive learning modules with maps, videos, and detailed historical content.",
    image: "/RBCover.jpg",
    tags: ["EdTech", "History", "Education", "Interactive Learning"],
    liveUrl:
      "https://stensineme.blob.core.windows.net/hmlgrepoh/00212hu/04612/index.html#apresentacao",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 text-white text-3xl leading-tight title">
            &lt;Featured Projects /&gt;
          </h2>
          <p className="text-white max-w-2xl ">
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
                      className="text-blue-900 hover:text-teal-500 transition-colors opacity-30 pointer-events-none cursor-not-allowed"
                      title="View Code"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      aria-disabled="true"
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
