import React from "react";
import { ArrowRight, Mail, Layers, Code2 } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  BunIcon,
  ViteIcon,
  FigmaIcon,
  AfterEffectsIcon,
  PremiereIcon,
  PlexusIcon,
} from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { AuroraText } from "./ui/aurora-text";
import { Marquee } from "./ui/marquee";

export function Hero() {
  const { personal } = portfolioData;

  const socialItems = [
    personal.socialLinks.twitter && {
      name: "Twitter / X",
      handle: "@LokyVanHelsing",
      url: personal.socialLinks.twitter,
      icon: <TwitterIcon className="w-4 h-4 text-cyan-400" />,
    },
    personal.socialLinks.github && {
      name: "GitHub",
      handle: "LuigiCervellera",
      url: personal.socialLinks.github,
      icon: <GithubIcon className="w-4 h-4 text-white" />,
    },
    personal.socialLinks.linkedin && {
      name: "LinkedIn",
      handle: "Luigi Cervellera",
      url: personal.socialLinks.linkedin,
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
    },
    {
      name: "Email",
      handle: personal.email,
      url: `mailto:${personal.email}?subject=Contatto dal Portfolio`,
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
    },
  ].filter(Boolean) as { name: string; handle: string; url: string; icon: React.ReactNode }[];

  const techStackItems = [
    { name: "React", icon: <ReactIcon className="w-4 h-4" />, category: "Frontend" },
    { name: "TypeScript", icon: <TypeScriptIcon className="w-4 h-4" />, category: "Language" },
    { name: "Tailwind CSS", icon: <TailwindIcon className="w-4 h-4" />, category: "Styling" },
    { name: "Node.js", icon: <NodeIcon className="w-4 h-4" />, category: "Runtime" },
    { name: "Bun", icon: <BunIcon className="w-4 h-4" />, category: "Runtime" },
    { name: "Vite", icon: <ViteIcon className="w-4 h-4" />, category: "Bundler" },
    { name: "After Effects", icon: <AfterEffectsIcon className="w-4 h-4" />, category: "VFX / Motion" },
    { name: "Rowbyte Plexus", icon: <PlexusIcon className="w-4 h-4" />, category: "3D Particle" },
    { name: "Premiere Pro", icon: <PremiereIcon className="w-4 h-4" />, category: "Editing" },
    { name: "Figma", icon: <FigmaIcon className="w-4 h-4" />, category: "Design" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-8 shadow-inner shadow-cyan-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personal.availability}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Ciao, sono{" "}
          <AuroraText speed={4}>
            {personal.name}
          </AuroraText>
          <br />
          <span className="text-slate-300 text-3xl sm:text-5xl md:text-6xl font-bold mt-2 block">
            {personal.role}
          </span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          {personal.headline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-full shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            Guarda gli Effetti & Motion
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dual Marquee Container */}
        <div className="space-y-3 max-w-2xl mx-auto overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Row 1: Social Links */}
          <Marquee pauseOnHover repeat={4} className="[--duration:24s] [--gap:1.25rem]">
            {socialItems.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-md shadow-black/20 hover:scale-105 active:scale-95 text-xs font-medium shrink-0"
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">{item.handle}</span>
              </a>
            ))}
          </Marquee>

          {/* Row 2: Tech Stack & Tools (Reverse Direction) */}
          <Marquee reverse pauseOnHover repeat={3} className="[--duration:28s] [--gap:1rem]">
            {techStackItems.map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all shadow-sm text-xs font-medium shrink-0 group cursor-default"
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="font-medium text-slate-200">{tech.name}</span>
                <span className="text-[10px] text-slate-500 font-normal px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 hidden sm:inline">
                  {tech.category}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
