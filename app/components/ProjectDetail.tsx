import Link from "next/link";
import { useParams } from "next/navigation";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projectsData = [
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
  {
    id: "great-hikes",
    title: "Great Hikes",
    description:
      "MVP project from fullstack graduation course. A React-based web application showcasing hiking destinations around the world. Features interactive maps, destination galleries, and detailed information about national parks and hiking trails.",
    image: "/GH1.png",
    tags: ["React", "Fullstack", "MVP", "UI/UX Design"],
    liveUrl: "https://great-hikes.vercel.app",
    githubUrl: "#",
    date: "2024",
    challenge:
      "Building a full-stack MVP application as a graduation project that showcases hiking destinations worldwide. The challenge was to create an engaging, visually appealing platform that combines beautiful imagery with functional features like interactive maps, destination galleries, and detailed hiking information.",
    solution:
      "Developed a React-based web application with a focus on visual storytelling and user experience. Implemented a clean, modern interface that highlights stunning photography of hiking destinations. Created interactive features including destination browsing, location maps, and detailed information pages for each hiking location.",
    features: [
      "Interactive destination browsing with stunning photography",
      "Location maps showing hiking destinations worldwide",
      "Detailed information pages for each national park",
      "Gallery views of hiking locations",
      "Responsive design optimized for all devices",
      "Modern UI with dark theme and semi-transparent overlays",
      "Smooth navigation between destinations",
      "Visual hierarchy emphasizing natural landscapes",
    ],
    technologies: {
      frontend: ["React", "JavaScript", "CSS", "HTML"],
      backend: ["Fullstack MVP"],
      design: ["UI/UX Design", "Responsive Design"],
      tools: ["Vercel", "Git", "Modern Web Standards"],
    },
    galleryImages: ["/GH1.png", "/GH2.png", "/GH3.png"],
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
    date: "2024",
    challenge:
      "Creating an engaging EdTech platform that makes complex historical concepts accessible to students and educators. The challenge was to present the transition from Antiquity to the Middle Ages through the formation of barbarian kingdoms in an interactive, visually appealing way that combines educational content with modern web design.",
    solution:
      "Developed an interactive educational platform featuring modular content structure, historical maps, video content, and detailed explanations. Implemented a clean, modern interface with clear navigation between modules, allowing students to explore different aspects of barbarian kingdoms, their formation, and their impact on European history.",
    features: [
      "Three comprehensive learning modules covering different aspects of barbarian kingdoms",
      "Interactive historical maps showing migration routes and territorial changes",
      "Video content (videocasts) explaining key historical transitions",
      "Detailed descriptions and educational content about barbarian peoples",
      "Visual timeline and contextual information",
      "Module-based navigation with clear learning objectives",
      "Responsive design optimized for educational use",
      "Rich visual content including historical paintings and illustrations",
      "Feedback and rating system for content evaluation",
    ],
    technologies: {
      frontend: ["Web Development", "HTML", "CSS", "JavaScript"],
      design: ["EdTech Design", "Educational UI/UX", "Interactive Learning"],
      tools: ["Azure Blob Storage", "Modern Web Standards"],
    },
    galleryImages: [
      "/RBCover.jpg",
      "/RB1.png",
      "/RB2.png",
      "/RB3.png",
      "/RB4.png",
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
