import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0E",
          soft: "#141418",
          line: "#232327",
        },
        paper: {
          DEFAULT: "#F3EFE6",
          dim: "#E8E2D4",
        },
        bone: {
          DEFAULT: "#F6F4EF",
          muted: "#9C9A97",
        },
        signal: {
          DEFAULT: "#E63462",
          soft: "#FF5A82",
        },
        gold: {
          DEFAULT: "#D8A93B",
        },
        teal: {
          DEFAULT: "#1F8C82",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
