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
            className="font-sans text-xs font-bold uppercase tracking-widest2"
            style={{ color: accentColor }}
          >
            N° {issue.number}
          </span>
          <span className="font-sans text-xs font-medium uppercase tracking-widest2 text-bone/50">
            {issue.season}
          </span>
        </div>

        <h3 className="mt-4 font-display text-4xl font-bold leading-[0.95] text-bone sm:text-5xl md:text-6xl">
          {issue.title}
        </h3>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-bone/30 bg-transparent px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-bone transition-all duration-300 hover:gap-4 hover:-translate-y-1 hover:border-transparent hover:text-ink hover:shadow-lg"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = accentColor;
            e.currentTarget.style.borderColor = accentColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "rgba(246, 244, 239, 0.3)";
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
        <div className="relative mx-auto max-w-[260px] overflow-hidden rounded-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <CoverArt
            number={issue.number}
            title={issue.title}
            coverImage={issue.coverImage}
            className="w-full"
          />
        </div>
      </div>
    </motion.article>
  );
}
