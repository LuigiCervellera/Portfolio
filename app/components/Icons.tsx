import React from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiBun,
  SiVite,
  SiFigma,
  SiDocker,
  SiAngular,
  SiGit,
  SiGithub,
  SiX,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <SiGithub className={className} />;
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <FaLinkedin className={className} />;
}

export function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <SiX className={className} />;
}

export function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiReact className={`${className} text-[#61DAFB]`} />;
}

export function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiTypescript className={`${className} text-[#3178C6]`} />;
}

export function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
}

export function NodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiNodedotjs className={`${className} text-[#5FA04E]`} />;
}

export function BunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiBun className={`${className} text-[#FBF0DF]`} />;
}

export function ViteIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiVite className={`${className} text-[#646CFF]`} />;
}

export function FigmaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiFigma className={`${className} text-[#F24E1E]`} />;
}

export function DockerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiDocker className={`${className} text-[#2496ED]`} />;
}

export function AngularIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiAngular className={`${className} text-[#DD0031]`} />;
}

export function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <SiGit className={`${className} text-[#F05032]`} />;
}

export function AfterEffectsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#00005B" stroke="#9999FF" strokeWidth="1" />
      <text x="5" y="16.5" fill="#9999FF" fontSize="11" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">Ae</text>
    </svg>
  );
}

export function PremiereIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4.5" fill="#300130" stroke="#EA77FF" strokeWidth="1" />
      <text x="5" y="16.5" fill="#EA77FF" fontSize="11" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">Pr</text>
    </svg>
  );
}

export function PlexusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" fill="#22d3ee" fillOpacity="0.4" />
      <circle cx="18" cy="6" r="2.5" fill="#22d3ee" fillOpacity="0.4" />
      <circle cx="12" cy="18" r="2.5" fill="#22d3ee" fillOpacity="0.4" />
      <line x1="8.5" y1="6" x2="15.5" y2="6" stroke="#22d3ee" strokeWidth="1.5" />
      <line x1="7" y1="8" x2="11" y2="16" stroke="#22d3ee" strokeWidth="1.5" />
      <line x1="17" y1="8" x2="13" y2="16" stroke="#22d3ee" strokeWidth="1.5" />
    </svg>
  );
}
