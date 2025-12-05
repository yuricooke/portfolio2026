import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-slate-800 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-6 text-gray-700 dark:text-gray-300 text-3xl leading-tight title">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate front-end developer and UI/UX designer with a
                keen eye for detail and a love for creating seamless user
                experiences. With years of experience in web development, I
                specialize in transforming ideas into pixel-perfect, accessible,
                and high-performance applications.
              </p>
              <p>
                My approach combines technical prowess with design sensibility.
                I believe that great software isn't just about clean code—it's
                about understanding user needs, crafting intuitive interfaces,
                and delivering experiences that delight.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the
                latest web technologies, contributing to open-source projects,
                or mentoring aspiring developers.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NTU0MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
