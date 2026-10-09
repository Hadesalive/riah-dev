import Image from "next/image";
import dusk from "../../public/hero/freetown-dusk.jpg";

/**
 * Freetown at dusk behind the home headline. The night overlay is heaviest
 * on the left, where the text sits, and lets the mast and city lights through
 * on the right. Placeholder (AI-generated) until there is a real site photo.
 * `quiet` dims it further for the inner-page heroes.
 */
export function HeroBackdrop({ quiet = false }: { quiet?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src={dusk}
        alt=""
        fill
        preload={!quiet}
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[85%_center] lg:object-[78%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/60 to-night/10" />
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/20 to-night/40" />
      {/* Inner pages keep the photo as a hint so the title carries the band */}
      {quiet && <div className="absolute inset-0 bg-night/70" />}
    </div>
  );
}
