import React from "react";
import { User, MapPin, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { BorderBeam } from "./ui/border-beam";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Profilo
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Chi Sono & Cosa Faccio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Avatar / Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 border-2 border-slate-700 shadow-xl">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{personal.name}</h3>
                <p className="text-sm text-cyan-400 font-medium mb-4">{personal.role}</p>

                <div className="w-full pt-4 border-t border-slate-800 flex flex-col gap-2.5 text-sm text-slate-300">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{personal.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-4">
              {personal.stats.map((stat, i) => {
                const isHighlighted = stat.value.includes("Frontend");
                return (
                  <div
                    key={i}
                    className={`relative overflow-hidden p-4 rounded-xl text-center transition-colors flex flex-col justify-center items-center min-h-[96px] ${
                      isHighlighted
                        ? "bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                        : "bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    {isHighlighted && (
                      <BorderBeam
                        size={70}
                        duration={4}
                        colorFrom="#06b6d4"
                        colorTo="#3b82f6"
                        borderWidth={1.5}
                      />
                    )}
                    <p className="text-base sm:text-lg font-bold text-cyan-400 mb-1 leading-snug break-words max-w-full relative z-10">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider relative z-10">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
