import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import SkillsOrbit from "@/components/sections/skills-orbit";
import AboutTerminal from "@/components/sections/about-terminal";
import WhatIDo from "@/components/sections/what-i-do";
import Experience from "@/components/sections/experience";
import Achievements from "@/components/sections/achievements";
import Education from "@/components/sections/education";
import ProcessTimeline from "@/components/sections/process-timeline";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutTerminal />
      <WhatIDo />
      <Experience />
      <Achievements />
      <Education />
      <SkillsOrbit />
      <ProcessTimeline />
      <Projects />
      <Contact />
    </main>
  );
}
