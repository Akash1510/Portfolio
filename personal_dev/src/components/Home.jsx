// Home.jsx
import Hero from "./Hero";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Social from "./Social";
import Highlight from "./Highlights";
import ContactMe from "./ContactMe";

export default function Home() {
  return (
    <div className="scroll-smooth select-none overflow-x-hidden w-full">
      <Hero />

      <section id="skills" className="w-full">
        <Skill />
      </section>

      <section id="experience" className="w-full">
        <Experience />
      </section>

      <section id="projects" className="w-full">
        <Project />
      </section>

      <section id="highlights" className="w-full">
        <Highlight />
      </section>

      <section id="contact" className="w-full">
        <Social />
      </section>

      <section id="contactMe" className="w-full">
        <ContactMe />
      </section>
    </div>
  );
}
