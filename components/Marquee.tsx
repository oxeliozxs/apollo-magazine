interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  const items = Array.from({ length: 8 }, () => text);

  return (
    <div className="overflow-hidden border-y border-ink-line bg-ink py-5">
      <div className="flex w-max animate-marquee gap-8">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl italic text-bone/30"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
