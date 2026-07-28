import Image from "next/image";

interface CoverArtProps {
  number: number;
  title: string;
  coverImage: string;
  className?: string;
}

export default function CoverArt({
  number,
  title,
  coverImage,
  className = "",
}: CoverArtProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-sm ${className}`}
    >
      <Image
        src={coverImage}
        alt={`Couverture du numéro ${number}, ${title}`}
        fill
        sizes="(max-width: 768px) 280px, 340px"
        className="object-cover object-center w-full h-full"
        priority={number === 41}
      />
    </div>
  );
}


