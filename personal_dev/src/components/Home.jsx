// Home.jsx
import Hero from "./Hero";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Social from "./Social";
import Highlight from "./Highlights";
import ContactMe from "./ContactMe"

export default function Home() {
  return (
    <div className="scroll-smooth select-none">
      <Hero />
      <section id="skills">
        <Skill />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="highlights">
        <Highlight />
      </section>
      <section id="contact">
        <Social />
      </section>
      <section id="contactMe">
        <ContactMe />
      </section>
    </div>
  );
}
