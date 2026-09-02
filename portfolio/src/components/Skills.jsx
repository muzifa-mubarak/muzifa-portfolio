import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/profile";

export default function Skills() {
  const groups = Object.keys(skills);
  const [active, setActive] = useState(groups[0]);

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-16 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 pb-4 border-b border-line">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">Skills</h2>
          <div className="font-mono text-xs text-inkFaint max-w-md">
            Core stack &amp; technical capabilities grouped by domain.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`font-mono text-xs px-4 py-2 rounded-xs border transition-all duration-200 focus-ring ${
                active === g
                  ? "bg-accent text-bg border-accent font-medium"
                  : "bg-bgAlt text-inkDim border-lineStrong hover:border-inkDim hover:text-ink"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {skills[active].map((s) => (
              <span
                key={s}
                className="font-mono text-xs text-ink bg-bgAlt border border-lineStrong rounded-xs px-3.5 py-2 hover:border-accent2 hover:text-accent2 transition-colors duration-200"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
