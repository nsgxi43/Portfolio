import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Hackathons } from "@/components/sections/Hackathons";
import { Research } from "@/components/sections/Research";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-500/30">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Research />
      <Education />
      <Contact />
    </main>
  );
}
