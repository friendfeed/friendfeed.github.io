import type { FC } from "react";

/**
 * Small illustrative diagram for the گودر page: five scattered blogs
 * converging into one "گودر" hub, which later splits into its two
 * migration destinations (فرندفید فارسی و توییتر). Pure decorative/
 * explanatory visual requested alongside the article, not a precise
 * data chart, so no legend/footnote is needed the way MigrationTimeline's
 * statistical chart has one.
 *
 * Geometry (curves) is plain SVG; all Farsi labels are separate absolutely
 * positioned HTML nodes over the SVG, matching the bidi-safe pattern
 * already used in MigrationTimeline.tsx (no <text> inside the SVG).
 */
const VB_W = 640;
const VB_H = 250;

const blogs = [
  { x: 40, color: "#4184f3" },
  { x: 180, color: "#db4437" },
  { x: 320, color: "#f4b400" },
  { x: 460, color: "#0f9d58" },
  { x: 600, color: "#7b5db8" },
];
const hub = { x: 320, y: 132 };
const dests = [
  { x: 200, y: 224, label: "فرندفید فارسی", color: "#4184f3" },
  { x: 440, y: 224, label: "توییتر", color: "#1da1f2" },
];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

export const GooderDiagram: FC = () => (
  <div style={{ position: "relative", direction: "ltr", padding: "6px 4px 0" }}>
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="نمودار: چند وبلاگ جدا از هم در گودر جمع می‌شوند، و بعد از تعطیلی گودر، همان جمع به فرندفید فارسی و توییتر تقسیم می‌شود">
      {blogs.map((b, i) => (
        <path key={i} d={curve(b.x, 40, hub.x, hub.y - 26)} fill="none" stroke={b.color} strokeOpacity={0.45} strokeWidth={2} />
      ))}
      {dests.map((d, i) => (
        <path key={i} d={curve(hub.x, hub.y + 26, d.x, d.y - 16)} fill="none" stroke={d.color} strokeOpacity={0.55} strokeWidth={2.5} />
      ))}

      {blogs.map((b, i) => (
        <circle key={i} cx={b.x} cy={40} r={13} fill="#fff" stroke={b.color} strokeWidth={2.5} />
      ))}

      <circle cx={hub.x} cy={hub.y} r={26} fill="#fff" stroke="#f4b400" strokeWidth={3} />
      <circle cx={hub.x} cy={hub.y} r={26} fill="#f4b400" opacity={0.12} />

      {dests.map((d, i) => (
        <rect key={i} x={d.x - 62} y={d.y - 16} width={124} height={32} rx={4} fill="#fff" stroke={d.color} strokeWidth={2} />
      ))}
    </svg>

    {/* ---- Labels, absolutely positioned to match the geometry above ---- */}
    {blogs.map((b, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          insetInlineStart: `${(b.x / VB_W) * 100}%`,
          top: `${(40 / VB_H) * 100}%`,
          transform: "translate(-50%, -230%)",
          fontSize: 10,
          color: "var(--ff-muted)",
          whiteSpace: "nowrap",
          direction: "rtl",
        }}
      >
        وبلاگ {i + 1}
      </div>
    ))}
    <div
      style={{
        position: "absolute",
        insetInlineStart: `${(hub.x / VB_W) * 100}%`,
        top: `${(hub.y / VB_H) * 100}%`,
        transform: "translate(-50%, -50%)",
        fontSize: 12.5,
        fontWeight: "bold",
        color: "#333",
        direction: "rtl",
      }}
    >
      گودر
    </div>
    {dests.map((d, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          insetInlineStart: `${(d.x / VB_W) * 100}%`,
          top: `${(d.y / VB_H) * 100}%`,
          transform: "translate(-50%, -50%)",
          fontSize: 11.5,
          fontWeight: "bold",
          color: d.color,
          direction: "rtl",
        }}
      >
        {d.label}
      </div>
    ))}

    <p style={{ margin: "10px 0 0", fontSize: 10.5, color: "var(--ff-muted-light)", textAlign: "center", direction: "rtl" }}>
      وبلاگ‌های پراکنده، در گودر یک‌جا جمع می‌شدند؛ بعد از تعطیلی‌اش، همان جمع بین فرندفید فارسی و توییتر تقسیم شد.
    </p>
  </div>
);
