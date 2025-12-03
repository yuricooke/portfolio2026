import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}


