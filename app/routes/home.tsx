import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Playground } from "../components/Playground";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { portfolioData } from "../data/portfolioData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${portfolioData.personal.name} | Portfolio - ${portfolioData.personal.role}` },
    {
      name: "description",
      content: portfolioData.personal.headline,
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
