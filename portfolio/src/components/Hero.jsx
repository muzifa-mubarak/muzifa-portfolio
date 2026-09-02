import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import NodeGraph from "./NodeGraph";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-65px)] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs md:text-sm text-accent2 mb-5 flex items-center gap-3"
          >
            <span className="w-5 h-[1px] bg-accent2" />
            <span>AI Engineer · {profile.location}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink tracking-tight"
          >
            Building systems that{" "}
            <span className="italic font-medium text-accent">reason</span>, retrieve, and remember.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-inkDim leading-relaxed max-w-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="font-mono text-sm bg-accent text-bg font-medium px-6 py-3 rounded-xs hover:brightness-110 transition-all focus-ring"
            >
              See the work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-mono text-sm text-ink border border-lineStrong px-6 py-3 rounded-xs hover:border-inkDim hover:bg-bgAlt transition-all focus-ring"
            >
              Contact
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-inkFaint"
          >
            <a href={profile.links.email} className="text-inkDim hover:text-accent2 transition-colors">
              {profile.email}
            </a>
            <a href={profile.links.phone} className="text-inkDim hover:text-accent2 transition-colors">
              {profile.phone}
            </a>
            <span>{profile.extra}</span>
          </motion.div>
        </div>

        {/* Interactive RAG + LangGraph Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex flex-col items-center bg-bgAlt/50 border border-line p-6 rounded-md relative"
        >
          <div className="w-full">
            <svg viewBox="0 0 420 300" width="100%" height="auto" role="img" aria-label="RAG Pipeline Flow Diagram">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#4FB0AE" opacity="0.7"/>
                </marker>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="#E8A33D" opacity="0.8"/>
                </marker>
              </defs>
              <line x1="80" y1="50" x2="80" y2="115" stroke="#4FB0AE" strokeWidth="1.4" opacity="0.6" markerEnd="url(#arrow)"/>
              <line x1="80" y1="135" x2="80" y2="200" stroke="#4FB0AE" strokeWidth="1.4" opacity="0.6" markerEnd="url(#arrow)"/>
              <line x1="98" y1="220" x2="300" y2="220" stroke="#4FB0AE" strokeWidth="1.4" opacity="0.6" markerEnd="url(#arrow)"/>
              <line x1="320" y1="200" x2="320" y2="135" stroke="#4FB0AE" strokeWidth="1.4" opacity="0.4" markerEnd="url(#arrow)" strokeDasharray="3 4"/>
              <line x1="320" y1="115" x2="320" y2="50" stroke="#4FB0AE" strokeWidth="1.4" opacity="0.4"/>
              <line x1="300" y1="30" x2="98" y2="30" stroke="#E8A33D" strokeWidth="1.4" opacity="0.7" markerEnd="url(#arrow-amber)"/>

              <g>
                <rect x="20" y="15" width="120" height="35" rx="2" fill="#1B1E25" stroke="#5E6270"/>
                <text x="80" y="29" textAnchor="middle" fill="#ECE9DF" fontFontFamily="JetBrains Mono" fontSize="11">user query</text>
                <text x="80" y="42" textAnchor="middle" fill="#9CA0AA" fontFontFamily="JetBrains Mono" fontSize="9">input prompt</text>
              </g>
              <g>
                <rect x="20" y="115" width="120" height="40" rx="2" fill="#20232B" stroke="#4FB0AE" strokeOpacity="0.7"/>
                <text x="80" y="131" textAnchor="middle" fill="#ECE9DF" fontFontFamily="JetBrains Mono" fontSize="11">retrieve</text>
                <text x="80" y="145" textAnchor="middle" fill="#9CA0AA" fontFontFamily="JetBrains Mono" fontSize="9.5">pgvector / Chroma</text>
              </g>
              <g>
                <rect x="200" y="200" width="120" height="40" rx="2" fill="#20232B" stroke="#4FB0AE" strokeOpacity="0.7"/>
                <text x="260" y="216" textAnchor="middle" fill="#ECE9DF" fontFontFamily="JetBrains Mono" fontSize="11">reason</text>
                <text x="260" y="230" textAnchor="middle" fill="#9CA0AA" fontFontFamily="JetBrains Mono" fontSize="9.5">LangGraph agent</text>
              </g>
              <g>
                <rect x="260" y="15" width="120" height="35" rx="2" fill="#1B1E25" stroke="#E8A33D" strokeOpacity="0.8"/>
                <text x="320" y="29" textAnchor="middle" fill="#ECE9DF" fontFontFamily="JetBrains Mono" fontSize="11">grounded</text>
                <text x="320" y="42" textAnchor="middle" fill="#E8A33D" fontFontFamily="JetBrains Mono" fontSize="9.5">response</text>
              </g>
            </svg>
          </div>

          <div className="w-full border-t border-line pt-4 mt-2">
            <NodeGraph className="w-full h-auto opacity-85" />
          </div>

          <div className="font-mono text-xs text-inkFaint mt-3 text-center">
            a RAG + agent flow like the ones I ship
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-6 left-6 md:left-12 lg:left-16 text-inkFaint hover:text-accent2 transition-colors focus-ring rounded"
        aria-label="Scroll to profile section"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
