import { Accent, accentHex } from "@/lib/data";

interface CoverArtProps {
  number: number;
  title: string;
  from: string;
  to: string;
  accent: Accent;
  className?: string;
}

/**
 * A generated, abstract stand-in for a magazine cover.
 * Built entirely from gradients + typography so the project
 * never depends on external imagery or copyrighted art.
 */
export default function CoverArt({
  number,
  title,
  from,
  to,
  accent,
  className = "",
}: CoverArtProps) {
  const gradId = `grad-${number}`;
  const accentColor = accentHex[accent];

  return (
    <svg
      viewBox="0 0 400 520"
      className={className}
      role="img"
      aria-label={`Couverture du numéro ${number}, ${title}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <filter id={`grain-${number}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.06" />
          </feComponentTransfer>
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>

      <rect width="400" height="520" fill={`url(#${gradId})`} />
      <rect width="400" height="520" filter={`url(#grain-${number})`} opacity="0.5" />

      {/* Abstract geometric silhouette, unique per issue via number */}
      <circle
        cx={80 + ((number * 37) % 240)}
        cy={340 + ((number * 19) % 120)}
        r={110}
        fill="black"
        opacity="0.18"
      />
      <rect
        x={-40}
        y={60 + ((number * 11) % 100)}
        width="480"
        height={2}
        fill={accentColor}
        opacity="0.6"
        transform={`rotate(${(number % 7) - 3} 200 260)`}
      />

      {/* Masthead */}
      <text
        x="24"
        y="48"
        fontFamily="var(--font-fraunces), serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="1"
        fill="#F6F4EF"
      >
        APOLLO
      </text>
      <text
        x="24"
        y="68"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        letterSpacing="4"
        fill={accentColor}
      >
        MAGAZINE
      </text>

      {/* Issue number, huge */}
      <text
        x="24"
        y="470"
        fontFamily="var(--font-fraunces), serif"
        fontWeight="900"
        fontSize="150"
        fill="#F6F4EF"
        opacity="0.92"
      >
        {number}
      </text>

      <text
        x="24"
        y="500"
        fontFamily="var(--font-mono), monospace"
        fontSize="12"
        letterSpacing="2"
        fill="#F6F4EF"
        opacity="0.75"
      >
        N° {number} — {title.toUpperCase()}
      </text>
    </svg>
  );
}
