import React from "react";
import { Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 relative border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Contatti
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Mettiti in Contatto
          </p>
          <p className="text-sm sm:text-base text-slate-400">
            Hai una proposta, una domanda o vuoi collaborare? Scrivimi pure direttamente via email o sui miei profili social!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Email Card */}
          <a
            href={`mailto:${personal.email}?subject=Contatto dal Portfolio`}
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Email Diretta</h3>
            <p className="text-xs text-slate-400 mb-3">Scrivimi direttamente</p>
            <span className="text-xs font-medium text-cyan-400 group-hover:underline break-all inline-flex items-center gap-1">
              {personal.email}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Social / Twitter Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
            <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Social & Network</h3>
            <p className="text-xs text-slate-400 mb-3">Trovami online</p>
            <div className="flex items-center gap-2.5">
              {personal.socialLinks.twitter && (
                <a
                  href={personal.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socialLinks.github && (
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socialLinks.linkedin && (
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
            <div className="p-3.5 rounded-xl bg-teal-500/10 text-teal-400 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Posizione</h3>
            <p className="text-xs text-slate-400 mb-2">{personal.location}</p>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {personal.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
