import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects } from "../data/profile";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-16 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-line">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">Projects</h2>
          <div className="font-mono text-xs text-inkFaint max-w-md">
            Selected builds spanning agentic systems, retrieval, and applied deep learning.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-xs border transition-all duration-200 focus-ring ${
                filter === c
                  ? "bg-accent text-bg border-accent font-medium"
                  : "bg-bgAlt text-inkDim border-lineStrong hover:border-inkDim hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-xs overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => {
                const isOpen = expanded === p.title;
                const statusText = p.status.toLowerCase();
                return (
                  <motion.div
                    layout
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setExpanded(isOpen ? null : p.title)}
                    className="cursor-pointer bg-bg p-6 md:p-8 flex flex-col justify-between hover:bg-bgAlt/60 transition-colors duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="font-mono text-xs text-accent">
                          {statusText === "in development" ? "in development" : "shipped"}
                        </span>
                        <span className="font-mono text-[11px] text-inkFaint">{p.category}</span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-ink mt-1">{p.title}</h3>

                      {p.metric && (
                        <div className="mt-2 font-serif text-2xl text-accent2">
                          {p.metric.value}{" "}
                          <span className="font-mono text-xs text-inkFaint font-normal">
                            {p.metric.label}
                          </span>
                        </div>
                      )}

                      <p className="mt-3 font-sans text-sm text-inkDim leading-relaxed">
                        {p.description}
                      </p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2 pt-3 border-t border-line">
                              {p.points.map((pt, i) => (
                                <li key={i} className="text-xs md:text-sm text-inkDim flex gap-2">
                                  <span className="w-1.5 h-[1px] bg-accent mt-2 shrink-0" />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] text-inkFaint border border-lineStrong px-2 py-0.5 rounded-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="block mt-4 font-mono text-[11px] text-accent2 hover:underline">
                        {isOpen ? "− collapse" : "+ details"}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
