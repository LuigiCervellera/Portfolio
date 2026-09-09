import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Carriera
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Esperienza Lavorativa
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
          {experiences.map((item) => (
            <div key={item.id} className="relative pl-6 md:pl-10 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/50" />

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 text-sm text-slate-300">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-medium text-cyan-300/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
