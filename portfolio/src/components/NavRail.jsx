import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { siteGraph } from "../data/profile";

export default function NavRail() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [touchFeedback, setTouchFeedback] = useState(false);

  useEffect(() => {
    const sections = siteGraph.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const handleGetInTouch = (e) => {
    e.preventDefault();
    setTouchFeedback(true);
    setTimeout(() => setTouchFeedback(false), 2000);
    scrollTo("contact");
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Work", id: "experience", matchIds: ["experience", "projects", "skills"] },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="font-mono text-base font-semibold tracking-tight text-ink flex items-center gap-2.5 hover:text-accent2 transition-colors focus-ring rounded px-1 py-0.5"
          >
            <span className="w-2 h-2 rounded-full bg-accent2 shadow-[0_0_8px_rgba(79,176,174,0.6)] animate-pulse" />
            <span>Muzifa Mubarak Ali</span>
          </motion.a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => scrollTo("hero")}
              className={`font-mono text-[13px] py-1 border-b transition-colors duration-200 ${
                active === "hero"
                  ? "text-ink border-accent font-medium"
                  : "text-inkDim border-transparent hover:text-ink"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className={`font-mono text-[13px] py-1 border-b transition-colors duration-200 ${
                active === "experience" || active === "projects" || active === "skills"
                  ? "text-ink border-accent font-medium"
                  : "text-inkDim border-transparent hover:text-ink"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={`font-mono text-[13px] py-1 border-b transition-colors duration-200 ${
                active === "contact"
                  ? "text-ink border-accent font-medium"
                  : "text-inkDim border-transparent hover:text-ink"
              }`}
            >
              Contact
            </button>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 14px rgba(232, 163, 61, 0.35)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleGetInTouch}
              className="font-mono text-xs text-bg bg-accent px-4 py-2 rounded-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm focus-ring group"
            >
              <span>{touchFeedback ? "Connecting..." : "Get in touch"}</span>
              {touchFeedback ? (
                <Check size={14} className="text-bg" />
              ) : (
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              )}
            </motion.button>
          </nav>

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden font-mono text-xs text-ink px-3 py-1.5 border border-lineStrong rounded-xs bg-bgAlt focus-ring"
            aria-label="Toggle menu"
          >
            {open ? "close" : "menu"}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden p-6"
          >
            {siteGraph.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="font-serif text-2xl text-ink hover:text-accent transition-colors focus-ring rounded"
              >
                {s.label}
              </button>
            ))}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleGetInTouch}
              className="mt-4 font-mono text-sm text-bg bg-accent px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              <span>Get in touch</span>
              <Send size={15} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
