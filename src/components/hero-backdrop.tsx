import Image from "next/image";
import dusk from "../../public/hero/freetown-dusk.jpg";

/**
 * Freetown at dusk behind the home headline. The night overlay is heaviest
 * on the left, where the text sits, and lets the mast and city lights through
 * on the right. Placeholder (AI-generated) until there is a real site photo.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src={dusk}
        alt=""
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[85%_center] lg:object-[78%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/60 to-night/10" />
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/20 to-night/40" />
    </div>
  );
}
