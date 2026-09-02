import { motion } from "framer-motion";
import { education, honors } from "../data/profile";

export default function Education() {
  const getHonorMark = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes("winner")) return "winner";
    if (lower.includes("finalist")) return "finalist";
    if (lower.includes("workshop") || lower.includes("training")) return "teaching";
    return "honor";
  };

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 md:px-12 lg:pl-28 lg:pr-16 py-20 border-t border-line"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="font-mono text-xs text-accent2 mb-4 flex items-center gap-2">
            <span className="w-5 h-[1px] bg-accent2" /> Education
          </div>
          <div className="border border-line bg-bgAlt/40 p-6 md:p-8 rounded-xs space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={i > 0 ? "pt-6 border-t border-line" : ""}
              >
                <h3 className="font-serif text-lg font-semibold text-ink">{e.degree}</h3>
                <p className="font-sans text-sm text-inkDim mt-1">{e.school}</p>
                <div className="font-mono text-xs text-inkFaint mt-2">
                  {e.period} <span className="text-line mx-1">·</span>{" "}
                  <span className="text-accent">{e.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-xs text-accent2 mb-4 flex items-center gap-2">
            <span className="w-5 h-[1px] bg-accent2" /> Honors & Recognition
          </div>
          <div className="divide-y divide-line border-y border-line">
            {honors.map((h, i) => {
              const mark = getHonorMark(h.title);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="py-4 flex gap-4 items-baseline"
                >
                  <span className="font-mono text-xs text-accent2 w-16 shrink-0 font-medium">
                    {mark}
                  </span>
                  <span className="font-sans text-sm md:text-[15px] text-inkDim leading-relaxed">
                    {h.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
