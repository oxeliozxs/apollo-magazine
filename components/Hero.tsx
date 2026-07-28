"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import CoverArt from "./CoverArt";
import { latestIssue } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28"
    >
      {/* Ambient blob, the recurring accent shape of the identity */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-[45%_55%_60%_40%/45%_40%_60%_55%] bg-gold blur-[2px] md:h-[640px] md:w-[640px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-mono text-xs uppercase tracking-widest2 text-signal"
          >
            Depuis 2011 — parce que l&rsquo;homme est pluriel
          </motion.p>

          <h1 className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-bone sm:text-[9vw] lg:text-[4.6vw]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Le N°41
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block italic text-transparent text-outline"
            >
              est en kiosque
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-bone/70"
          >
            Un numéro consacré au goût — celui qu&rsquo;on affine, qu&rsquo;on
            transmet, qu&rsquo;on discute à table. Mode, société et culture,
            comme toujours vus au pluriel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#numero"
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-transform duration-300 hover:scale-105"
            >
              Découvrir le numéro
            </a>
            <a
              href="#archives"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-bone/70 underline decoration-ink-line underline-offset-8 transition-colors hover:text-bone hover:decoration-signal"
            >
              Voir les archives
            </a>
          </motion.div>
        </div>

        <motion.div
          id="numero"
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto w-full max-w-[280px] scroll-mt-28 animate-floaty lg:order-2 lg:max-w-[340px]"
        >
          <CoverArt
            number={latestIssue.number}
            title={latestIssue.title}
            from={latestIssue.gradientFrom}
            to={latestIssue.gradientTo}
            accent={latestIssue.accent}
            className="w-full rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
          />
        </motion.div>
      </div>

      <motion.a
        href="#numero"
        aria-label="Défiler vers le bas"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-bone/50 hover:text-bone md:block"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
