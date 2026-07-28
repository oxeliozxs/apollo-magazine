export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center font-mono text-xs uppercase tracking-widest2 text-bone/40 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Apollo Magazine — Tous droits réservés</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-bone">
            Mentions légales
          </a>
          <a href="#top" className="transition-colors hover:text-bone">
            Haut de page
          </a>
        </div>
      </div>
    </footer>
  );
}
