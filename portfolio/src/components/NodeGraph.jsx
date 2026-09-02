import { useMemo } from "react";
import { motion } from "framer-motion";

// A LangGraph-style state-machine graph: nodes pulse and edges
// draw themselves, echoing the "AI Travel Planner" project's
// own workflow-visualization approach.
const NODES = [
  { id: "n1", x: 60, y: 70, r: 5, label: "query" },
  { id: "n2", x: 200, y: 30, r: 4, label: "retrieve" },
  { id: "n3", x: 200, y: 130, r: 4, label: "tools" },
  { id: "n4", x: 330, y: 80, r: 6, label: "agent" },
  { id: "n5", x: 460, y: 40, r: 4, label: "reason" },
  { id: "n6", x: 460, y: 130, r: 4, label: "act" },
  { id: "n7", x: 580, y: 85, r: 5, label: "respond" },
];

const EDGES = [
  ["n1", "n2"], ["n1", "n3"], ["n2", "n4"], ["n3", "n4"],
  ["n4", "n5"], ["n4", "n6"], ["n5", "n7"], ["n6", "n7"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function NodeGraph({ className = "" }) {
  const paths = useMemo(
    () =>
      EDGES.map(([a, b], i) => {
        const A = byId[a];
        const B = byId[b];
        return { d: `M ${A.x} ${A.y} L ${B.x} ${B.y}`, key: `${a}-${b}`, delay: i * 0.15 };
      }),
    []
  );

  return (
    <svg
      viewBox="0 0 640 170"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <motion.path
          key={p.key}
          d={p.d}
          stroke="rgba(236,233,223,0.18)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
      {paths.map((p) => (
        <motion.circle
          key={`pulse-${p.key}`}
          r="2.5"
          fill="#4FB0AE"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          style={{ offsetPath: `path('${p.d}')` }}
          transition={{
            duration: 2.2,
            delay: p.delay + 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}
      {NODES.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={i === 3 ? "#E8A33D" : "#1B1E25"}
            stroke={i === 3 ? "#E8A33D" : "#4FB0AE"}
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          />
          <text
            x={n.x}
            y={n.y - n.r - 8}
            textAnchor="middle"
            fontSize="9"
            fill="#9CA0AA"
            fontFamily="'JetBrains Mono', monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
