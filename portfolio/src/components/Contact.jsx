import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";

function CopyRow({ label, value, link }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e) => {
    if (!link) {
      e.preventDefault();
    }
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const Content = (
    <div
      onClick={copy}
      className="w-full flex items-center justify-between py-4 border-t border-line font-mono text-sm text-ink hover:text-accent2 hover:pl-2 transition-all duration-200 cursor-pointer group"
    >
      <span className="text-inkFaint font-normal">{label}</span>
      <span className="flex items-center gap-2">
        <span>{value}</span>
        <span className="text-xs text-accent2 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? <Check size={14} className="inline text-accent" /> : <Copy size={14} className="inline opacity-70" />}
        </span>
      </span>
    </div>
  );

  return link ? (
    <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {Content}
    </a>
  ) : (
    Content
  );
}

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 md:px-12 lg:pl-28 lg:pr-16 pt-20 pb-12 border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight"
            >
              Let's build something that ships.
            </motion.h2>
            <p className="mt-5 font-sans text-base text-inkDim leading-relaxed max-w-lg">
              Open to AI engineering roles and consulting work — RAG systems, agent orchestration, or full-stack AI products. Based in Tiruchirappalli, India, with UAE residency.
            </p>

            <div className="mt-8 border-b border-line">
              <CopyRow label="email" value={profile.email} link={profile.links.email} />
              <CopyRow label="phone" value={profile.phone} link={profile.links.phone} />
              <CopyRow label="linkedin" value="view profile" link={profile.links.linkedin} />
              <CopyRow label="github" value="view repos" link={profile.links.github} />
              <CopyRow label="location" value="Tiruchirappalli, India" />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-bgAlt/50 border border-line p-6 md:p-8 rounded-xs">
              <div className="font-mono text-xs text-accent2 mb-4 flex items-center gap-2">
                <span className="w-5 h-[1px] bg-accent2" /> Core Expertise & Stack
              </div>
              <p className="font-sans text-sm text-inkDim leading-relaxed">
                Specialized in architecting retrieval-augmented generation (RAG) pipelines, LangGraph state-machine agents, FastAPI backends, vector search (pgvector, Chroma), and fine-tuning PyTorch models.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["LLM / GenAI", "RAG", "LangGraph", "CrewAI", "Camel AI", "FastAPI", "PyTorch", "PostgreSQL", "MongoDB", "n8n"].map((t) => (
                  <span key={t} className="font-mono text-xs text-inkDim border border-lineStrong px-2.5 py-1 rounded-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono text-xs text-center py-3 border border-lineStrong text-ink hover:border-accent2 hover:text-accent2 transition-colors rounded-xs focus-ring"
              >
                GitHub Profile
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-mono text-xs text-center py-3 border border-lineStrong text-ink hover:border-accent2 hover:text-accent2 transition-colors rounded-xs focus-ring"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-line font-mono text-xs text-inkFaint flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>{profile.name} — {profile.role}</span>
          <span>{currentYear}</span>
        </footer>
      </div>
    </motion.section>
  );
}
