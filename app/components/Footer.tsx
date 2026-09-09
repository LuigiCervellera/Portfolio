import React from "react";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
            <Code2 className="w-4 h-4" />
          </span>
          <span className="font-semibold text-white">{personal.name}</span>
          <span>© {new Date().getFullYear()} Tutti i diritti riservati.</span>
        </div>

        <div className="flex items-center gap-6">
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Grazie per essere arrivati fino a questo punto
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Torna su"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
