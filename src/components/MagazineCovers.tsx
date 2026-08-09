import type { FC } from "react";

/**
 * Cover art for each magazine post, factored out of MagazinePage.tsx so
 * the exact same art can render on both /magazine (full card) and the
 * homepage's "از مجله فرندفید" teaser row.
 *
 * Each cover is a small, self-contained SVG/CSS scene with real art
 * direction tied to what the post is actually about (a browser full of
 * feed cards for the FriendFeed story, a reader pane + article list for
 * Google Reader, a live news ticker for the 1388 post) instead of a
 * generic icon-in-a-circle badge. FerferLeaksCover/CafePragueCover keep
 * their existing bespoke treatment below, unchanged.
 */

export const FriendFeedStoryCover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 150,
      background: "linear-gradient(150deg, #eef4ff 0%, #dde9fd 55%, #cfe0fc 100%)",
    }}
  >
    <svg
      viewBox="0 0 400 150"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      {/* browser chrome */}
      <rect x="46" y="18" width="308" height="118" rx="10" fill="#ffffff" stroke="#c7d7f7" strokeWidth="1.5" />
      <rect x="46" y="18" width="308" height="24" rx="10" fill="#f2f6fe" stroke="#c7d7f7" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="3.2" fill="#f4b1a8" />
      <circle cx="71" cy="30" r="3.2" fill="#f7d998" />
      <circle cx="82" cy="30" r="3.2" fill="#a9dba6" />
      <rect x="98" y="25" width="140" height="10" rx="5" fill="#e1e9fb" />
      {/* feed cards stacked, brightest on top like a real stream */}
      <g>
        <rect x="60" y="52" width="276" height="26" rx="7" fill="#eef3ff" />
        <circle cx="74" cy="65" r="7" fill="#c7d7f7" />
        <rect x="88" y="59" width="120" height="6" rx="3" fill="#cddafa" />
        <rect x="88" y="69" width="80" height="5" rx="2.5" fill="#dbe5fb" />
      </g>
      <g>
        <rect x="60" y="83" width="276" height="30" rx="7" fill="#ffffff" stroke="#d8e2fa" strokeWidth="1" />
        <circle cx="74" cy="98" r="8" fill="var(--ff-link)" />
        <rect x="90" y="90" width="130" height="6" rx="3" fill="#3f6fe0" />
        <rect x="90" y="100" width="200" height="5" rx="2.5" fill="#c7d7f7" />
        <path d="M300 92l6 6-6 6" fill="none" stroke="#3f6fe0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g opacity="0.65">
        <rect x="60" y="118" width="276" height="18" rx="6" fill="#eef3ff" />
        <circle cx="74" cy="127" r="6" fill="#c7d7f7" />
        <rect x="88" y="124" width="150" height="5" rx="2.5" fill="#d5e0f9" />
      </g>
    </svg>
  </div>
);

export const GoogleReaderCover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 150,
      background: "linear-gradient(150deg, #fffaf0 0%, #fdf0d0 55%, #fbe6ae 100%)",
    }}
  >
    <svg
      viewBox="0 0 400 150"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      {/* reader panel: article list on the right, open post on the left */}
      <rect x="44" y="16" width="312" height="120" rx="10" fill="#ffffff" stroke="#f0d798" strokeWidth="1.5" />
      <line x1="248" y1="16" x2="248" y2="136" stroke="#f4e4bb" strokeWidth="1.5" />
      {/* article list column */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} opacity={i === 1 ? 1 : 0.75}>
          <rect x="258" y={30 + i * 26} width="88" height="18" rx="5" fill={i === 1 ? "#fef1cf" : "#faf5e8"} />
          <rect x="264" y={35 + i * 26} width="56" height="4.5" rx="2.25" fill="#e8b93f" />
          <rect x="264" y={43 + i * 26} width="70" height="3.5" rx="1.75" fill="#e9d8a8" />
        </g>
      ))}
      {/* open article */}
      <circle cx="72" cy="40" r="14" fill="#fff" stroke="#f4b400" strokeWidth="2.5" />
      <path
        d="M65 33a10 10 0 0 1 10 10M65 39a4 4 0 0 1 4 4M64.5 43.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
        fill="none"
        stroke="#f4b400"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="94" y="32" width="130" height="7" rx="3.5" fill="#5c4a1e" />
      <rect x="94" y="44" width="150" height="5" rx="2.5" fill="#d8c589" />
      <rect x="60" y="66" width="176" height="4.5" rx="2.25" fill="#ecd99b" />
      <rect x="60" y="76" width="176" height="4.5" rx="2.25" fill="#ecd99b" />
      <rect x="60" y="86" width="130" height="4.5" rx="2.25" fill="#ecd99b" />
      <g>
        <rect x="60" y="104" width="60" height="20" rx="6" fill="#fef1cf" stroke="#f4b400" strokeWidth="1.2" />
        <rect x="70" y="111" width="40" height="6" rx="3" fill="#c98f00" />
      </g>
    </svg>
  </div>
);

export const FriendFeed88Cover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 150,
      background: "linear-gradient(150deg, #eef4ff 0%, #dde9fd 55%, #cfe0fc 100%)",
    }}
  >
    <svg
      viewBox="0 0 400 150"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      {/* live news-ticker phone/feed, streaming cards racing upward */}
      <rect x="126" y="10" width="148" height="130" rx="16" fill="#0f1b33" />
      <rect x="134" y="24" width="132" height="102" rx="4" fill="#152848" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} opacity={1 - i * 0.16}>
          <rect x="140" y={30 + i * 19} width="120" height="15" rx="4" fill={i === 0 ? "#1f3a66" : "#17304f"} />
          <rect x="146" y={34 + i * 19} width="7" height="7" rx="3.5" fill={i === 0 ? "#ff6b6b" : "#4184f3"} />
          <rect x="158" y={35 + i * 19} width={70 - i * 6} height="5" rx="2.5" fill="#9fb8e6" />
        </g>
      ))}
      {/* pulsing "live" dot */}
      <circle cx="146" cy="37.5" r="7" fill="none" stroke="#ff6b6b" strokeWidth="1.5" opacity="0.6" />
      {/* signal / share arcs radiating out, echoing the migration theme */}
      <g stroke="var(--ff-link)" strokeWidth="2" fill="none" opacity="0.55" strokeLinecap="round">
        <path d="M96 45a44 44 0 0 1 0 60" />
        <path d="M78 30a70 70 0 0 1 0 90" />
      </g>
      <g stroke="var(--ff-link)" strokeWidth="2" fill="none" opacity="0.55" strokeLinecap="round">
        <path d="M304 45a44 44 0 0 0 0 60" />
        <path d="M322 30a70 70 0 0 0 0 90" />
      </g>
      <circle cx="60" cy="75" r="6" fill="var(--ff-link)" />
      <circle cx="340" cy="75" r="6" fill="var(--ff-link)" />
    </svg>
  </div>
);

export const FerferLeaksCover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 150,
      background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }}
      viewBox="0 0 400 120"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="#4fc3f7" strokeWidth="1" />
      ))}
      {[0, 40, 80, 120].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#4fc3f7" strokeWidth="1" />
      ))}
    </svg>
    <svg
      viewBox="0 0 120 140"
      width="46"
      height="54"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 0 10px rgba(79,195,247,0.5))" }}
    >
      <path d="M30 60 V42 A30 30 0 0 1 90 42 V60" fill="none" stroke="#4fc3f7" strokeWidth="5" strokeLinecap="round" />
      <rect x="14" y="58" width="92" height="66" rx="8" fill="#1a1a2e" stroke="#4fc3f7" strokeWidth="3" />
      <circle cx="60" cy="88" r="12" fill="none" stroke="#ef5350" strokeWidth="3" />
      <rect x="56" y="96" width="8" height="16" rx="3" fill="#ef5350" />
    </svg>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        padding: "6px 14px 8px",
        background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
        zIndex: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4fc3f7", opacity: 0.7, letterSpacing: "0.1em" }}>
        FERFERLEAKS / ۱۳۹۰
      </span>
      <span
        style={{
          fontSize: 9,
          color: "#ef5350",
          fontWeight: 700,
          background: "rgba(239,83,80,0.15)",
          border: "1px solid rgba(239,83,80,0.4)",
          padding: "1px 6px",
          borderRadius: 2,
        }}
      >
        LEAKED
      </span>
    </div>
  </div>
);

export const CafePragueCover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 150,
    }}
  >
    <img
      src="/images/magazine/cafe-prague-last-night.webp"
      alt="آخرین شب کافه پراگ"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 30%",
        display: "block",
        filter: "brightness(0.72)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        padding: "6px 14px 8px",
        background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
        CAFE PRAGUE / ۱۳۹۱
      </span>
      <span
        style={{
          fontSize: 9,
          color: "#fff",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          padding: "1px 6px",
          borderRadius: 2,
        }}
      >
        پاتوق فرندفید
      </span>
    </div>
  </div>
);
