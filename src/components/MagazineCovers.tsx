import type { FC } from "react";
import { IconRoom, IconNetwork, IconRss } from "../icons/Icons";

/**
 * Cover art for each magazine post, factored out of MagazinePage.tsx so
 * the exact same art can render on both /magazine (full card) and the
 * homepage's "از مجله فرندفید" teaser row -- previously the homepage
 * teaser used a plain wordmark-on-gradient placeholder instead of real
 * cover art, which read as an empty/unfinished card.
 *
 * Badge icon + colored ring on a soft gradient matches the existing
 * GoogleReaderCover/FriendFeed88Cover language; FriendFeedStoryCover
 * uses the brand blue (--ff-link) and IconRoom, since "خانه" is what
 * this post is literally about (see Sidebar, which uses the same icon
 * for the "خانه" nav item).
 */

export const FriendFeedStoryCover: FC = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #eaf1ff 0%, #d7e6fd 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#fff",
        border: "3px solid var(--ff-link)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <IconRoom width={26} height={26} style={{ color: "var(--ff-link)" }} />
    </div>
  </div>
);

export const GoogleReaderCover: FC = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #fef6e0 0%, #fde9b8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#fff",
        border: "3px solid #f4b400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <IconRss width={26} height={26} style={{ color: "#f4b400" }} />
    </div>
  </div>
);

export const FriendFeed88Cover: FC = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #e8f0fe 0%, #d2e3fc 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#fff",
        border: "3px solid #4184f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <IconNetwork width={26} height={26} style={{ color: "#4184f3" }} />
    </div>
  </div>
);

export const FerferLeaksCover: FC = () => (
  <div
    style={{
      position: "relative",
      overflow: "hidden",
      height: 120,
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
      height: 120,
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
