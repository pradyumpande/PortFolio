import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-8">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ThemeSwitch />
    </main>
  );
}
