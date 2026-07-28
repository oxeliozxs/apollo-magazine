"use client";

import { motion } from "framer-motion";
import IssueRow from "./IssueRow";
import { issues } from "@/lib/data";

export default function ArchiveSection() {
  return (
    <section id="archives" className="relative bg-ink px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest2 text-teal">
              Depuis 2011
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.95] text-bone sm:text-6xl md:text-7xl">
              Les archives
            </h2>
          </div>
          <p className="hidden max-w-xs font-sans text-sm leading-relaxed text-bone/70 md:block">
            Chaque numéro, une couleur, une obsession. Feuilletez quinze ans
            d&rsquo;archives éditoriales.
          </p>
        </motion.div>

        <div>
          {issues.map((issue, i) => (
            <IssueRow key={issue.number} issue={issue} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
