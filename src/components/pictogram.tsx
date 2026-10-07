// Flat, hand-painted shop pictograms: slate outline, paint-tin fills.
const INK = "#0f172a";
const WHITE = "#f8fafc";
const SIGN = "#facc15";
const MONEY = "#10b981";
const KIOSK = "#2563eb";

export type PictogramName =
  | "network"
  | "firewall"
  | "servers"
  | "sms"
  | "money"
  | "testing"
  | "health"
  | "key"
  | "tv"
  | "apps"
  | "ministry"
  | "globe";

const stroke = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const art: Record<PictogramName, React.ReactNode> = {
  network: (
    <>
      <path d="M44 6 a14 14 0 0 1 14 14" fill="none" {...stroke} stroke={SIGN} strokeWidth="4" />
      <path d="M44 14 a6 6 0 0 1 6 6" fill="none" {...stroke} stroke={SIGN} strokeWidth="4" />
      <path d="M26 38 L20 56 H40 L34 38 Z" fill={WHITE} {...stroke} />
      <ellipse cx="26" cy="30" rx="19" ry="9" transform="rotate(-40 26 30)" fill={WHITE} {...stroke} />
      <path d="M26 30 L40 18" {...stroke} />
      <circle cx="41" cy="17" r="4" fill={SIGN} {...stroke} />
      <path d="M14 56 H46" {...stroke} />
    </>
  ),
  firewall: (
    <>
      <path d="M32 5 L55 13 V30 C55 44 45 54 32 59 C19 54 9 44 9 30 V13 Z" fill={SIGN} {...stroke} />
      <path d="M9.5 24 H54.5 M10.5 36 H53.5 M15 48 H49 M32 13 V24 M21 24 V36 M43 24 V36 M32 36 V48 M24 48 V55 M40 48 V55" fill="none" {...stroke} strokeWidth="2.5" />
    </>
  ),
  servers: (
    <>
      {[8, 25, 42].map((y) => (
        <g key={y}>
          <rect x="8" y={y} width="48" height="14" rx="2.5" fill={WHITE} {...stroke} />
          <path d={`M15 ${y + 7} H33`} {...stroke} strokeWidth="2.5" />
          <circle cx="47" cy={y + 7} r="3" fill={MONEY} stroke={INK} strokeWidth="2" />
        </g>
      ))}
    </>
  ),
  sms: (
    <>
      <rect x="10" y="10" width="28" height="48" rx="5" fill={WHITE} {...stroke} />
      <rect x="15" y="17" width="18" height="30" rx="1.5" fill={KIOSK} stroke={INK} strokeWidth="2" />
      <circle cx="24" cy="52" r="1.8" fill={INK} />
      <path d="M30 6 H56 a4 4 0 0 1 4 4 V24 a4 4 0 0 1 -4 4 H42 L35 34 V28 H30 a4 4 0 0 1 -4 -4 V10 a4 4 0 0 1 4 -4 Z" fill={SIGN} {...stroke} />
      <path d="M33 14 H53 M33 20 H47" {...stroke} strokeWidth="2.5" />
    </>
  ),
  money: (
    <>
      <rect x="4" y="16" width="44" height="28" rx="3" fill={MONEY} {...stroke} />
      <circle cx="26" cy="30" r="7" fill={WHITE} {...stroke} strokeWidth="2.5" />
      <path d="M10 22 H14 M38 38 H42" {...stroke} strokeWidth="2.5" />
      <circle cx="46" cy="44" r="13" fill={SIGN} {...stroke} />
      <circle cx="46" cy="44" r="7.5" fill="none" {...stroke} strokeWidth="2" />
    </>
  ),
  testing: (
    <>
      <rect x="12" y="10" width="40" height="48" rx="4" fill={WHITE} {...stroke} />
      <rect x="23" y="5" width="18" height="10" rx="2" fill={INK} />
      <path d="M21 36 L29 44 L44 25" fill="none" stroke={MONEY} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  health: (
    <>
      <rect x="6" y="6" width="52" height="52" rx="6" fill={WHITE} {...stroke} />
      <path d="M20 13 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8 Z" fill={MONEY} {...stroke} strokeWidth="2.5" />
      <rect x="38" y="38" width="6" height="13" fill={KIOSK} stroke={INK} strokeWidth="2" />
      <rect x="47" y="30" width="6" height="21" fill={SIGN} stroke={INK} strokeWidth="2" />
      <path d="M12 51 H54" {...stroke} strokeWidth="2.5" />
    </>
  ),
  key: (
    <>
      <path d="M30 29 H58 V37 H54 V45 H47 V37 H42 V43 H36 V37 H30 Z" fill={SIGN} {...stroke} />
      <circle cx="20" cy="33" r="14" fill={SIGN} {...stroke} />
      <circle cx="17" cy="33" r="4.5" fill={INK} />
    </>
  ),
  tv: (
    <>
      <rect x="21" y="44" width="22" height="12" rx="2" fill={WHITE} {...stroke} />
      <rect x="5" y="8" width="54" height="38" rx="4" fill={WHITE} {...stroke} />
      <rect x="11" y="14" width="42" height="26" rx="1.5" fill={KIOSK} stroke={INK} strokeWidth="2" />
      <path d="M16 35 L26 24 L33 31 L38 27 L48 35 Z" fill={SIGN} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  apps: (
    <>
      <rect x="7" y="7" width="22" height="22" rx="4" fill={SIGN} {...stroke} />
      <rect x="35" y="7" width="22" height="22" rx="4" fill={MONEY} {...stroke} />
      <rect x="7" y="35" width="22" height="22" rx="4" fill={WHITE} {...stroke} />
      <rect x="35" y="35" width="22" height="22" rx="4" fill={KIOSK} {...stroke} />
    </>
  ),
  ministry: (
    <>
      <path d="M6 22 L32 7 L58 22 Z" fill={SIGN} {...stroke} />
      <rect x="8" y="50" width="48" height="7" fill={WHITE} {...stroke} />
      {[14, 26, 38, 50].map((x) => (
        <rect key={x} x={x - 3} y="25" width="6" height="22" fill={WHITE} {...stroke} strokeWidth="2.5" />
      ))}
      <path d="M8 23 H56" {...stroke} />
    </>
  ),
  globe: (
    <>
      <circle cx="32" cy="32" r="25" fill={KIOSK} {...stroke} />
      <path d="M7 32 H57 M32 7 C20 20 20 44 32 57 C44 44 44 20 32 7" fill="none" {...stroke} stroke={WHITE} strokeWidth="2.5" />
      <circle cx="32" cy="32" r="25" fill="none" {...stroke} />
    </>
  ),
};

export function Pictogram({
  name,
  className = "size-14",
}: {
  name: PictogramName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {art[name]}
    </svg>
  );
}
