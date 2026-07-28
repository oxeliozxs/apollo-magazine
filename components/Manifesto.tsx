"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "01",
    title: "Mode",
    text: "Le vestiaire comme terrain d'expression, loin des uniformes imposés.",
  },
  {
    label: "02",
    title: "Société",
    text: "Des sujets de fond traités sans posture, avec des voix qui comptent.",
  },
  {
    label: "03",
    title: "Culture",
    text: "Cinéma, musique, littérature : ce qui nourrit le regard du moment.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifeste" className="relative bg-paper px-6 py-28 text-ink lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl font-display text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl text-ink"
        >
          &laquo; Nous ne cherchons pas à définir l&rsquo;homme, mais à lui
          laisser la place d&rsquo;être plusieurs à la fois. &raquo;
        </motion.blockquote>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-ink/10 pt-14 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest2 text-signal">
                {pillar.label}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-ink/75">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
