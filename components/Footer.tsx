export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center font-sans text-xs uppercase tracking-wider text-bone/50 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Apollo Magazine — Tous droits réservés</p>
        <div className="flex gap-6">
          <a href="#" className="font-semibold text-bone/70 transition-colors underline-offset-4 hover:text-signal hover:underline">
            Mentions légales
          </a>
          <a href="#top" className="font-semibold text-bone/70 transition-colors underline-offset-4 hover:text-signal hover:underline">
            Haut de page
          </a>
        </div>
      </div>
    </footer>
  );
}
