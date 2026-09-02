import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "../data/profile";

function ExperienceItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-7 border-t border-line first:border-t-0">
      <div className="font-mono text-xs text-inkFaint pt-1.5 flex items-center md:items-start justify-between md:justify-start">
        <span>{item.period}</span>
        {item.current && (
          <span className="md:hidden font-mono text-[11px] text-accent border border-accent/40 rounded-xs px-2 py-0.5">
            current
          </span>
        )}
      </div>

      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left group focus-ring rounded"
          aria-expanded={open}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-accent2 mt-0.5">
                {item.org} <span className="text-inkFaint font-normal">· {item.location}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 pt-1">
              {item.current && (
                <span className="hidden md:inline-block font-mono text-[11px] text-accent border border-accent/40 rounded-xs px-2 py-0.5">
                  current
                </span>
              )}
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} className="text-inkFaint group-hover:text-ink transition-colors" />
              </motion.span>
            </div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2.5">
                {item.points.map((pt, i) => (
                  <li key={i} className="text-sm md:text-[15px] text-inkDim leading-relaxed flex gap-3">
                    <span className="w-1.5 h-[1px] bg-inkFaint mt-2.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-inkDim border border-lineStrong px-2.5 py-1 rounded-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-16 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-line">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">Experience</h2>
          <div className="font-mono text-xs text-inkFaint max-w-md">
            Research through production — three roles, one thread: getting models to do useful, grounded work.
          </div>
        </div>

        <div className="divide-y divide-line">
          {experience.map((item, i) => (
            <ExperienceItem key={item.title + item.org} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
