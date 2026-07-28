"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-ink-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className="flex items-center transition-opacity hover:opacity-90 shrink-0"
        >
          <Image
            src="/Logo_Appolo-Magazine-Wh.png"
            alt="Apollo Magazine"
            width={240}
            height={60}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-sans text-xs font-semibold uppercase tracking-wider text-bone/80 transition-colors hover:text-bone"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#numero"
            className="rounded-full bg-signal px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-bone border-2 border-signal-soft/60 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-signal-soft hover:shadow-lg hover:shadow-signal/40"
          >
            Le N°41
          </a>
        </nav>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-bone md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden border-t border-ink-line bg-ink md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-sans text-xl font-medium text-bone"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#numero"
                onClick={() => setOpen(false)}
                className="mt-4 w-fit rounded-full bg-signal px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-bone border-2 border-signal-soft/60 shadow-md"
              >
                Le N°41
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
