import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "B.Tech AI & Data Science", val: "8.2 CGPA" },
    { label: "Production RAG systems shipped", val: "3+" },
    { label: "Multi-agent frameworks used", val: "4" },
    { label: "Currently", val: "AI Consultant" },
  ];

  const stackPills = [
    "LangChain",
    "LangGraph",
    "CrewAI",
    "AutoGen",
    "FastAPI",
    "PyTorch",
    "PostgreSQL",
    "MongoDB",
    "React.js",
  ];

  return (
    <section id="about" className="px-6 md:px-12 lg:px-16 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-xs text-accent2 mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-accent2" />
              <span>About</span>
            </div>
            <p className="text-ink font-sans text-lg md:text-xl leading-relaxed font-light mb-6">
              I work across the generative AI stack — from transformer internals and fine-tuning to agent design and the FastAPI services that put a model in front of real users. My background spans applied research (ensemble methods for computer vision at NIT Trichy) through to production engineering (RAG chatbots serving enterprise knowledge bases in the field).
            </p>
            <p className="text-inkDim font-sans text-base leading-relaxed mb-8">
              Most recently I've been building an e-learning platform where the AI isn't a bolt-on chatbot but a core part of the product: a FAQ system grounded in course content, and infrastructure for enrollment, progress, and certification underneath it. I also teach — running hands-on ML and generative AI sessions for working professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Quick Metrics */}
            <div className="bg-panel border border-line p-6 rounded-xs space-y-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`flex items-baseline justify-between ${i < stats.length - 1 ? 'pb-4 border-b border-line' : ''}`}>
                  <span className="font-mono text-xs text-inkDim">{s.label}</span>
                  <span className="font-serif text-xl text-ink font-medium">{s.val}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Cloud */}
            <div>
              <div className="font-mono text-xs text-inkFaint mb-3">Core Tooling</div>
              <div className="flex flex-wrap gap-2">
                {stackPills.map((sk) => (
                  <span
                    key={sk}
                    className="font-mono text-xs text-inkDim bg-bgAlt border border-line px-3 py-1 rounded-xs"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
