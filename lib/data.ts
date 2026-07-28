export type Accent = "signal" | "gold" | "teal";

export interface Issue {
  number: number;
  title: string;
  season: string;
  accent: Accent;
  gradientFrom: string;
  gradientTo: string;
}

export const accentHex: Record<Accent, string> = {
  signal: "#E63462",
  gold: "#D8A93B",
  teal: "#1F8C82",
};

export const issues: Issue[] = [
  {
    number: 40,
    title: "Pouvoir Doux",
    season: "Hiver 2025—2026",
    accent: "teal",
    gradientFrom: "#123B39",
    gradientTo: "#1F8C82",
  },
  {
    number: 39,
    title: "Après, Mieux",
    season: "Été 2025",
    accent: "gold",
    gradientFrom: "#3A2C10",
    gradientTo: "#D8A93B",
  },
  {
    number: 38,
    title: "Performance",
    season: "Hiver 2024",
    accent: "teal",
    gradientFrom: "#0F3634",
    gradientTo: "#3BB8AC",
  },
  {
    number: 37,
    title: "S'aimer Encore",
    season: "Été 2024",
    accent: "signal",
    gradientFrom: "#3A0F1C",
    gradientTo: "#E63462",
  },
  {
    number: 36,
    title: "Le Temps Déborde",
    season: "Printemps 2024",
    accent: "signal",
    gradientFrom: "#241322",
    gradientTo: "#7C5CBF",
  },
  {
    number: 35,
    title: "Côte à Côte",
    season: "Été 2023",
    accent: "gold",
    gradientFrom: "#123244",
    gradientTo: "#3FA6C7",
  },
  {
    number: 34,
    title: "Objets & Lieux",
    season: "Topologie — Printemps 2023",
    accent: "signal",
    gradientFrom: "#341808",
    gradientTo: "#E67A3F",
  },
  {
    number: 33,
    title: "No Diktat",
    season: "Automne—Hiver 2022",
    accent: "gold",
    gradientFrom: "#2A2A0C",
    gradientTo: "#C9B23A",
  },
];

export const latestIssue: Issue = {
  number: 41,
  title: "Une Affaire de Goûts",
  season: "En kiosque maintenant",
  accent: "signal",
  gradientFrom: "#1A0A12",
  gradientTo: "#E63462",
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Le numéro", href: "#numero" },
  { label: "Archives", href: "#archives" },
  { label: "La revue", href: "#manifeste" },
  { label: "Suivre", href: "#suivre" },
];
