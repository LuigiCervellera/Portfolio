import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Layers, CheckCircle } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Competenze
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Stack Tecnologico & Strumenti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((categoryGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{categoryGroup.category}</h3>
                </div>

                <ul className="space-y-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-sm text-slate-300 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-500/70 shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
