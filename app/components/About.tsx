import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white relative" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="order-2 md:order-1 md:col-span-2">
            <h2 className="mb-6 text-blue-950 text-3xl leading-tight title">
              &lt;About Me /&gt;
            </h2>
            <div className="text-md space-y-6 text-gray-700 md:pr-20">
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

          <div className="relative order-1 md:order-2 md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Cooke_Yuri.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
