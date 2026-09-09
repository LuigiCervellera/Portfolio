export interface VisualEffectItem {
  id: string;
  title: string;
  description: string;
  category: "Plexus & 3D" | "VFX & Tracking" | "Motion Design" | "Video Editing";
  tools: string[];
  tweetUrl: string;
  tweetId: string;
  date?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    bio: string[];
    location: string;
    email: string;
    avatarUrl: string;
    availability: "Disponibile per nuove opportunità" | "Occupato al momento";
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
    stats: {
      label: string;
      value: string;
    }[];
  };
  skills: SkillCategory[];
  visualEffects: VisualEffectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Luigi",
    role: "Junior Frontend Developer & Motion Designer",
    headline: "Unisco lo sviluppo web moderno con la creatività di motion graphics, VFX designer e video editing.",
    bio: [
      "Sono uno sviluppatore frontend junior appassionato di UI moderne, animazioni fluide e codice pulito (React, TypeScript, Tailwind).",
      "Accanto al coding, amo il mondo dei Visual Effects e del Motion Design: sperimento con After Effects, Plexus e tecniche di compositing per dare vita a idee visive dinamiche."
    ],
    location: "Palagiano (TA)",
    email: "luigilok24@gmail.com",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    availability: "Disponibile per nuove opportunità",
    socialLinks: {
      github: "https://github.com/LuigiCervellera/LokyV1",
      linkedin: "https://www.linkedin.com/in/luigi-cervellera-8b55622b7/",
      twitter: "https://x.com/LokyVanHelsing",
    },
    stats: [
      { label: "Focus Primario", value: "Frontend & VFX" },
      { label: "Stack Web", value: "React & TS" },
      { label: "Motion Suite", value: "AE & Plexus" },
      { label: "Voglia di Crescere", value: "100%" },
    ],
  },
  skills: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / React Router" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 / CSS3 / SCSS" },
        { name: "Angular" },
      ],
    },
    {
      category: "Runtime & Tooling",
      skills: [
        { name: "Node.js" },
        { name: "Bun" },
        { name: "Vite" },
        { name: "Git / GitHub" },
        { name: "Docker" },
      ],
    },
    {
      category: "Motion Design & VFX",
      skills: [
        { name: "After Effects" },
        { name: "Rowbyte Plexus" },
        { name: "Mocha AE (Tracking)" },
        { name: "Premiere Pro" },
        { name: "Sony Vegas" },
        { name: "Particle & Optical Effects" },
      ],
    },
    {
      category: "Design & Principi",
      skills: [
        { name: "Figma" },
        { name: "UI/UX Design Principles" },
        { name: "Responsive & Mobile-First" },
        { name: "Design System & Micro-animazioni" },
      ],
    },
  ],
  visualEffects: [
    {
      id: "vfx-1",
      title: "Pupil Color Shift & Motion Tracking",
      description:
        "Effetto visivo di cambio colore e luminescenza della pupilla con motion tracking e mascheratura precisa.",
      category: "VFX & Tracking",
      tools: ["After Effects", "Mocha AE", "Motion Tracking", "Color Grading"],
      tweetUrl: "https://x.com/LokyVanHelsing/status/1796323985094779299",
      tweetId: "1796323985094779299",
      date: "Maggio 2024",
      featured: true,
    },
    {
      id: "vfx-2",
      title: "Interspatial Warp & Hyperspace",
      description:
        "Viaggio interspaziale a velocità di curvatura con particelle cosmiche, scie luminose e accelerazione spaziale.",
      category: "Motion Design",
      tools: ["After Effects", "Particle Effects", "Speed Ramping", "Motion Graphics"],
      tweetUrl: "https://x.com/LokyVanHelsing/status/1793357901337137419",
      tweetId: "1793357901337137419",
      date: "Maggio 2024",
      featured: true,
    },
    {
      id: "vfx-3",
      title: "Plexus 3D Particle Constellation",
      description:
        "Animazione generativa 3D con Rowbyte Plexus: reticolo di particelle, vertici e linee connesse con camera 3D fluttuante.",
      category: "Plexus & 3D",
      tools: ["Rowbyte Plexus", "After Effects", "3D Camera", "Point Clouds"],
      tweetUrl: "https://x.com/LokyVanHelsing/status/1791146546085384561",
      tweetId: "1791146546085384561",
      date: "Maggio 2024",
      featured: true,
    },
  ],
};
