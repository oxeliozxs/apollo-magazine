"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";

export default function FollowSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section id="suivre" className="relative bg-ink px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-signal">
              Restons en contact
            </p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] text-bone sm:text-6xl">
              Ne manquez
              <br />
              aucun numéro.
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                className="w-full rounded-full border border-ink-line bg-transparent px-6 py-4 text-sm text-bone placeholder:text-bone/40 focus:border-signal"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 py-4 font-mono text-xs uppercase tracking-widest2 text-bone transition-transform duration-300 hover:scale-105"
              >
                {sent ? "Merci !" : "S'abonner"}
                <Send size={14} />
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-sm text-teal">
                Vous êtes inscrit. À bientôt dans votre boîte mail.
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="font-mono text-xs uppercase tracking-widest2 text-bone/40">
              Retrouvez-nous sur
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-ink-line px-6 py-4 text-sm text-bone/80 transition-colors hover:border-signal hover:text-bone"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-ink-line px-6 py-4 text-sm text-bone/80 transition-colors hover:border-signal hover:text-bone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.7 6.2 9.2-.1-.8-.2-2 0-2.8.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-1 3.9-.3 1.1.6 2.1 1.7 2.1 2 0 3.6-2.1 3.6-5.2 0-2.7-2-4.6-4.7-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .3 1.6.8 2.2.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.7 0 3.4-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.2 0 0-.5 2-.6 2.4-.2.9-.8 1.9-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
                </svg>
                Pinterest
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
