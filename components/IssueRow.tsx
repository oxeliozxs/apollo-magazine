"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CoverArt from "./CoverArt";
import { Issue, accentHex } from "@/lib/data";

interface IssueRowProps {
  issue: Issue;
  index: number;
}

export default function IssueRow({ issue, index }: IssueRowProps) {
  const reversed = index % 2 === 1;
  const accentColor = accentHex[issue.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 items-center gap-8 border-t border-ink-line py-12 md:grid-cols-12 md:gap-6 md:py-16"
    >
      <div
        className={`md:col-span-7 ${
          reversed ? "md:order-2 md:col-start-6" : ""
        }`}
      >
        <div className="flex items-baseline gap-4">
          <span
            className="font-mono text-xs uppercase tracking-widest2"
            style={{ color: accentColor }}
          >
            N° {issue.number}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest2 text-bone/40">
            {issue.season}
          </span>
        </div>

        <h3 className="mt-4 font-display text-5xl font-semibold leading-[0.95] text-bone sm:text-6xl md:text-7xl">
          {issue.title}
        </h3>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink-line px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-bone/80 transition-all duration-300 hover:gap-4 hover:border-transparent hover:text-ink"
          style={{
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Lire le numéro
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div
        className={`md:col-span-5 ${
          reversed ? "md:order-1 md:col-start-1" : ""
        }`}
      >
        <div
          className="relative mx-auto max-w-[260px] overflow-hidden rounded-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
          style={{
            clipPath: reversed
              ? "polygon(0 0, 100% 6%, 100% 100%, 0 94%)"
              : "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
          }}
        >
          <CoverArt
            number={issue.number}
            title={issue.title}
            from={issue.gradientFrom}
            to={issue.gradientTo}
            accent={issue.accent}
            className="w-full"
          />
        </div>
      </div>
    </motion.article>
  );
}
