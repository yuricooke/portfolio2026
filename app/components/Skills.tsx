import { Code2, Palette, Smartphone, Zap, Users, Layers } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End Development",
    description:
      "Expert in React, TypeScript, Next.js, and modern JavaScript frameworks. Building scalable and maintainable applications.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces with a focus on user-centered design principles and visual hierarchy.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Wireframing"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Crafting pixel-perfect experiences that work seamlessly across all devices and screen sizes.",
    technologies: ["Mobile-First", "CSS Grid", "Flexbox", "Media Queries"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed and efficiency with lazy loading, code splitting, and best practices.",
    technologies: ["Web Vitals", "Lighthouse", "Webpack", "Vite"],
  },
  {
    icon: Users,
    title: "User Research",
    description:
      "Conducting user interviews, usability testing, and analyzing data to inform design decisions.",
    technologies: ["User Testing", "Analytics", "A/B Testing", "Personas"],
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Building and maintaining scalable design systems and component libraries for consistency.",
    technologies: ["Storybook", "Component Libraries", "Style Guides"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-16">
          <h2 className="mb-4 text-blue-950 text-3xl leading-tight title">
            &lt;Skills /&gt;
          </h2>
          <p className="text-gray-700 max-w-2xl ">
            A comprehensive skill set spanning both development and design,
            enabling me to bridge the gap between aesthetics and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="mb-3 text-blue-950">{skill.title}</h3>
                <p className="text-gray-700 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
