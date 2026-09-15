import type { Config } from "tailwindcss";

// Tokens tomados de Draft Studio — Brand Assets v2.0 "Cobalto" (2026-05)
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0E12",
          700: "#3A3A40",
        },
        paper: {
          DEFAULT: "#F1EEE5",
          200: "#E4E0D3",
        },
        graphite: {
          DEFAULT: "#6B6B72",
          300: "#B9B5A8",
        },
        cobalto: "#2B41E5",
        rule: "#DAD6CB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "JetBrains Mono", "Fira Code", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
