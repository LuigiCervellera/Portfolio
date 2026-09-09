import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2, ArrowUpRight, User, Layers, Video, Wand2, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Chi Sono", href: "#about", id: "about", icon: <User className="w-4 h-4" /> },
    { name: "Competenze", href: "#skills", id: "skills", icon: <Layers className="w-4 h-4" /> },
    { name: "Effetti & Motion", href: "#projects", id: "projects", icon: <Video className="w-4 h-4" /> },
    { name: "Esperimenti", href: "#playground", id: "playground", icon: <Wand2 className="w-4 h-4" /> },
    { name: "Contatti", href: "#contact", id: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll state at 90px
      const scrolled = window.scrollY > 90;
      setIsScrolled(scrolled);

      // Bottom of page detector for Contact section
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["about", "skills", "projects", "playground", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let current = "about";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* CORNER SNAKE BEAM (Visible during scroll transition in the top-left corner) */}
      <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-40 hidden md:block overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          className="w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle guide track */}
          <path
            d="M 180 28 Q 28 28 28 180"
            stroke="rgba(15, 23, 42, 0.4)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Glowing pulse that shoots around the corner when scrolled */}
          {isScrolled && (
            <motion.path
              d="M 180 28 Q 28 28 28 180"
              stroke="url(#snakeGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          )}
          <defs>
            <linearGradient id="snakeGradient" x1="180" y1="28" x2="28" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="0.5" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 1. TOP HORIZONTAL NAVBAR (Desktop & Tablet) */}
      <AnimatePresence mode="wait">
        {!isScrolled && (
          <motion.header
            key="top-navbar"
            initial={{ opacity: 0, x: -90, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              x: -120,
              y: 0,
              scale: 0.96,
              transition: { duration: 0.32, ease: [0.32, 0, 0.67, 0] },
            }}
            className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="flex items-center justify-between w-full backdrop-blur-xl bg-slate-950/70 p-2 sm:p-2.5 rounded-full border border-slate-800/80 shadow-2xl shadow-cyan-500/5"
              >
                {/* Brand / Snake Head */}
                <motion.a
                  href="#"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.08 } }}
                  exit={{ opacity: 0, x: -70, transition: { duration: 0.22, delay: 0 } }}
                  className="flex items-center gap-2.5 font-bold text-base sm:text-lg text-white group tracking-tight pl-2 shrink-0"
                >
                  <span className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent font-extrabold">
                    {portfolioData.personal.name}
                    <span className="text-cyan-400">.dev</span>
                  </span>
                </motion.a>

                {/* Center Navigation Links / Snake Vertebrae */}
                <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        initial={{ opacity: 0, x: -25 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.35, delay: 0.12 + index * 0.03 },
                        }}
                        exit={{
                          opacity: 0,
                          x: -50,
                          transition: { duration: 0.22, delay: (index + 1) * 0.025 },
                        }}
                        className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                          isActive
                            ? "text-cyan-300 font-semibold"
                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-slate-800 rounded-full border border-cyan-500/30 -z-10 shadow-sm"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {link.name}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Right CTA / Snake Tail */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.28 } }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.22, delay: 0.18 } }}
                  className="hidden md:flex items-center gap-3 pr-1 shrink-0"
                >
                  <a
                    href={`mailto:${portfolioData.personal.email}?subject=Contatto dal Portfolio`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-cyan-500/20"
                  >
                    Contattami
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden pr-1">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                    className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800/50 transition-colors"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Mobile Dropdown */}
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="md:hidden mt-3 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                        activeSection === link.id
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </a>
                  ))}
                  <div className="pt-2 border-t border-slate-800/80">
                    <a
                      href={`mailto:${portfolioData.personal.email}?subject=Contatto dal Portfolio`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20"
                    >
                      Contattami via Email
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 2. VERTICAL CHANGELOG DOCK (Desktop & Tablet when scrolled) */}
      <AnimatePresence mode="wait">
        {isScrolled && (
          <aside className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
            <motion.div
              key="vertical-dock"
              initial={{ opacity: 0, y: -50, x: -10, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{
                opacity: 0,
                y: -50,
                x: -10,
                scale: 0.92,
                transition: { duration: 0.28, ease: "easeIn" },
              }}
              className="p-2.5 rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-slate-800/90 shadow-2xl shadow-cyan-500/10 flex flex-col items-center gap-4"
            >
              {/* Brand Home Node (Snake Head on the Left Track) */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -30, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 350, damping: 24, delay: 0.05 },
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  scale: 0.6,
                  transition: { duration: 0.2, delay: 0 },
                }}
                className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-cyan-400 hover:text-white hover:border-cyan-500/50 transition-all hover:scale-110 shadow-sm"
                title="Torna all'inizio"
              >
                <Code2 className="w-4 h-4" />
              </motion.a>

              {/* Vertical Timeline Track */}
              <div className="relative flex flex-col items-center gap-4 py-2">
                {/* Connecting Track Line that unrolls from the top */}
                <motion.div
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{
                    scaleY: 1,
                    transition: { duration: 0.45, delay: 0.08, ease: "easeOut" },
                  }}
                  exit={{ scaleY: 0, originY: 0, transition: { duration: 0.2 } }}
                  className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 w-[1.5px] bg-slate-800/80 -z-10"
                />

                {/* Snake Vertebrae flowing down the left rail */}
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      initial={{ opacity: 0, y: -30, scale: 0.6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 24,
                          delay: 0.1 + index * 0.05,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -25,
                        scale: 0.6,
                        transition: { duration: 0.18, delay: (index + 1) * 0.02 },
                      }}
                      className="group relative flex items-center"
                    >
                      {/* Milestone Node */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50 scale-110"
                            : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105"
                        }`}
                      >
                        {link.icon}

                        {/* Active ping indicator */}
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping -z-10" />
                        )}
                      </div>

                      {/* Tooltip on Hover (appears to the right) */}
                      <div
                        className={`absolute left-full ml-3 px-3 py-1.5 rounded-xl border backdrop-blur-xl shadow-xl transition-all duration-200 pointer-events-none whitespace-nowrap text-xs font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                          isActive
                            ? "bg-slate-900/95 border-cyan-500/50 text-cyan-300 shadow-cyan-500/10"
                            : "bg-slate-950/95 border-slate-800 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-cyan-400/70">
                            0{index + 1}
                          </span>
                          <span>{link.name}</span>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Quick Contact (Snake Tail) */}
              <motion.a
                href={`mailto:${portfolioData.personal.email}?subject=Contatto dal Portfolio`}
                initial={{ opacity: 0, y: -25, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 350, damping: 24, delay: 0.38 },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.6,
                  transition: { duration: 0.18, delay: 0.15 },
                }}
                className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all hover:scale-110 shadow-sm shadow-cyan-500/10"
                title="Scrivimi una mail"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </aside>
        )}
      </AnimatePresence>

      {/* 3. MOBILE SCROLLED CAPSULE (Only on mobile devices when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-3 left-4 right-4 z-50 md:hidden flex items-center justify-between p-2 rounded-full bg-slate-950/90 backdrop-blur-xl border border-slate-800 shadow-xl"
          >
            <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-white pl-2">
              <span className="p-1 rounded-lg bg-cyan-500 text-slate-950">
                <Code2 className="w-3.5 h-3.5" />
              </span>
              <span>Luigi.dev</span>
            </a>

            <div className="flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800 text-[11px] font-semibold text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{navLinks.find((l) => l.id === activeSection)?.name}</span>
            </div>

            <a
              href={`mailto:${portfolioData.personal.email}?subject=Contatto`}
              className="p-1.5 rounded-full bg-cyan-500 text-slate-950 shadow-md"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
