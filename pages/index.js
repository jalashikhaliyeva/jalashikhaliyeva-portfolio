import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import ResumeSection from "@/Components/ResumeSection";
import Skills from "@/Components/Skills";
import Slider from "@/Components/Slider";
import Typewriter from "@/Components/Typewriter";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/Components/Header"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero id="hero" />
      <Projects id="projects" />
      <Skills id="skills" />
      <ResumeSection id="education" />
      <Contact id="contact" />
    </>
  );
}
