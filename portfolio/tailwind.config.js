/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#14161B",
        bgAlt: "#1B1E25",
        panel: "#20232B",
        paper: "#ECE9DF",
        ink: "#ECE9DF",
        inkDim: "#A6AAB4",
        inkFaint: "#757A8A",
        accent: "#E8A33D",
        accent2: "#4FB0AE",
        line: "rgba(236, 233, 223, 0.14)",
        lineStrong: "rgba(236, 233, 223, 0.25)",
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
