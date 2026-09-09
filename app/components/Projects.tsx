import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Video, ExternalLink } from "lucide-react";
import { TwitterIcon } from "./Icons";
import { portfolioData, type VisualEffectItem } from "../data/portfolioData";

function TwitterEmbedCard({ tweetId, tweetUrl, title }: { tweetId: string; tweetUrl: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (!isMounted || !containerRef.current) return;
      if ((window as any).twttr?.widgets) {
        containerRef.current.innerHTML = "";
        (window as any).twttr.widgets
          .createTweet(tweetId, containerRef.current, {
            theme: "dark",
            align: "center",
            conversation: "none",
            dnt: true,
          })
          .then(() => {
            if (isMounted) setLoaded(true);
          })
          .catch(() => {
            if (isMounted) setLoaded(true);
          });
      }
    };

    if (!(window as any).twttr) {
      const existingScript = document.getElementById("twitter-wjs");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "twitter-wjs";
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = renderWidget;
        document.body.appendChild(script);
      } else {
        existingScript.addEventListener("load", renderWidget);
      }
    } else {
      renderWidget();
    }

    return () => {
      isMounted = false;
    };
  }, [tweetId]);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-slate-950/60 p-2 min-h-[360px] flex items-center justify-center">
      <div ref={containerRef} className="w-full flex justify-center [&_.twitter-tweet]:!my-0" />
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500 text-xs bg-slate-950/80">
          <Video className="w-6 h-6 text-cyan-400 animate-pulse" />
          <span>Caricamento video da X...</span>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { visualEffects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("Tutti");

  const categories = ["Tutti", ...Array.from(new Set(visualEffects.map((item) => item.category)))];

  const filteredItems =
    activeFilter === "Tutti"
      ? visualEffects
      : visualEffects.filter((item) => item.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Creativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Effetti Visivi & Motion Design
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Una selezione dei miei esperimenti con After Effects, Plexus, tracking e motion graphics pubblicati sul mio canale X/Twitter.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === category
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Media Container (Twitter / X Embed) */}
              <div className="p-3 bg-slate-950/40 border-b border-slate-800/80">
                <TwitterEmbedCard
                  tweetId={item.tweetId}
                  tweetUrl={item.tweetUrl}
                  title={item.title}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      {item.category}
                    </span>
                    {item.date && (
                      <span className="text-[11px] text-slate-500">{item.date}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tools Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-[11px] font-medium text-slate-300 border border-slate-700/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <a
                      href={item.tweetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                      Guarda su X
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>

                    <span className="text-[11px] text-slate-500">@LokyVanHelsing</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below cards */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">Vuoi vedere altri effetti & esperimenti?</h3>
          <p className="text-sm text-slate-400 mb-6">
            Pubblico regolarmente nuove animazioni, test di motion tracking e creazioni con Plexus sul mio profilo X.
          </p>
          <a
            href="https://x.com/LokyVanHelsing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2.5 rounded-full border border-slate-700 transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <TwitterIcon className="w-4 h-4 text-cyan-400" />
            Seguimi su X (@LokyVanHelsing)
          </a>
        </div>
      </div>
    </section>
  );
}
