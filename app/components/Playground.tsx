import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Sliders, Wand2, Compass, Globe } from "lucide-react";
import { IconCloud } from "./ui/icon-cloud";

export function Playground() {
  // Demo 1 State: 3D Tilt Card
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 14;
    const rotateY = (x / (rect.width / 2)) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Demo 2 State: Interactive Glow & Palette Tuner
  const palettes = [
    { name: "Cyan Cyber", from: "#06b6d4", to: "#3b82f6", glow: "rgba(6, 182, 212, 0.4)" },
    { name: "Neon Violet", from: "#a855f7", to: "#ec4899", glow: "rgba(168, 85, 247, 0.4)" },
    { name: "Emerald Matrix", from: "#10b981", to: "#06b6d4", glow: "rgba(16, 185, 129, 0.4)" },
    { name: "Solar Amber", from: "#f59e0b", to: "#ef4444", glow: "rgba(245, 158, 11, 0.4)" },
  ];
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(70);

  // Demo 3 State: 3D Icon Cloud Tech Stack
  const techImages = [
    "https://cdn.simpleicons.org/typescript/3178C6",
    "https://cdn.simpleicons.org/javascript/F7DF1E",
    "https://cdn.simpleicons.org/react/61DAFB",
    "https://cdn.simpleicons.org/html5/E34F26",
    "https://cdn.simpleicons.org/css/1572B6",
    "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    "https://cdn.simpleicons.org/bun/FBF0DF",
    "https://cdn.simpleicons.org/vite/646CFF",
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "https://cdn.simpleicons.org/figma/F24E1E",
    "https://cdn.simpleicons.org/git/F05032",
    "https://cdn.simpleicons.org/github/FFFFFF",
    "https://cdn.simpleicons.org/docker/2496ED",
    "https://cdn.simpleicons.org/angular/DD0031",
    "https://cdn.simpleicons.org/x/FFFFFF",
    "https://cdn.simpleicons.org/sass/CC6699",
    "https://cdn.simpleicons.org/npm/CB3837",
    "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  ];

  return (
    <section id="playground" className="py-20 relative border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Interactive Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Un assaggio di quello che so fare
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Piccoli esperimenti interattivi di UI, animazioni spaziali 3D, fisica e controllo del colore in tempo reale realizzati con React, Tailwind e Framer Motion.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DEMO 1: 3D SPATIAL TILT CARD */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  01. 3D Spatial Tilt
                </span>
                <Compass className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Effetto Prospettiva & Luce</h3>
              <p className="text-xs text-slate-400 mb-6">
                Muovi il cursore sul box per calcolare in tempo reale l'inclinazione 3D e il riflesso speculare.
              </p>
            </div>

            {/* Interactive Tilt Area */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: "800px",
              }}
              className="w-full h-44 flex items-center justify-center cursor-pointer select-none"
            >
              <motion.div
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full rounded-xl bg-gradient-to-br from-slate-800/90 to-slate-950/90 border border-cyan-500/30 p-4 flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                {/* Specular Highlight glare */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                  style={{
                    background: isHovered
                      ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 - tilt.x * 2}%, rgba(6, 182, 212, 0.45), transparent 60%)`
                      : "none",
                  }}
                />
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold text-cyan-400">LUIGI.DEV</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-sm font-bold text-white">Card interattiva</p>
                  <p className="text-[10px] text-slate-400">Muovi il mouse</p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 relative z-10">
                  <span>X: {Math.round(tilt.y)}°</span>
                  <span>Y: {Math.round(tilt.x)}°</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* DEMO 2: REALTIME VFX & PALETTE TUNER */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  02. Realtime Color Tuner
                </span>
                <Sliders className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">I Colori con cui mi piace lavorare</h3>
              <p className="text-xs text-slate-400 mb-6">
                Una rapida selezione dei miei colori preferiti
              </p>
            </div>

            {/* Interactive Glow Preview */}
            <div className="space-y-4">
              <div
                className="w-full h-24 rounded-xl flex items-center justify-center transition-all duration-500 border border-slate-700/50"
                style={{
                  background: `linear-gradient(135deg, ${palettes[selectedPalette].from}, ${palettes[selectedPalette].to})`,
                  boxShadow: `0 0 ${glowIntensity / 2}px ${palettes[selectedPalette].glow}`,
                }}
              >
                <span className="text-slate-950 font-extrabold text-sm tracking-wide bg-white/90 px-3 py-1 rounded-full shadow">
                  {palettes[selectedPalette].name}
                </span>
              </div>

              {/* Palette Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {palettes.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPalette(idx)}
                    className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all border ${
                      selectedPalette === idx
                        ? "bg-slate-800 border-cyan-400 text-white shadow-sm"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Glow Intensity Slider */}
              <div className="pt-1">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Intensità Glow</span>
                  <span>{glowIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* DEMO 3: INTERACTIVE 3D PLEXUS ICON CLOUD */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  03. 3D Plexus Sphere
                </span>
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Costellazione 3D Plexus</h3>
              <p className="text-xs text-slate-400 mb-2">
                Icone connesse da fili di luce dinamici nello spazio 3D. Trascina per ruotare la sfera.
              </p>
            </div>

            {/* Icon Cloud Component */}
            <div className="relative flex items-center justify-center overflow-hidden min-h-[200px] w-full">
              <IconCloud images={techImages} showControl={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
