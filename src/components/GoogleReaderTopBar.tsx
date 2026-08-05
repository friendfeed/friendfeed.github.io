import type { FC } from "react";
import { IconRss } from "../icons/Icons";

/**
 * Replaces the old GoogleReaderHero.tsx 3-pane widget. Per request, the
 * whole page now *is* the Google Reader experience (logo bar, then every
 * paragraph rendered as a Reader item, see GoogleReaderPost.tsx), rather
 * than a small animated demo panel sitting above a normal text article.
 * So this component is just the top chrome: the wordmark bar and the
 * slim item-list toolbar with the live unread count, no autoplay loop.
 *
 * Font-accuracy fix: the old hero forced `fontFamily: Arial` on its
 * *entire* wrapper, including the Farsi post titles/snippets inside it,
 * which is wrong on two counts: (1) Google Reader's real chrome was
 * Arial/Helvetica for its Latin UI text only, and (2) Arial has no real
 * Farsi glyphs, so Farsi text inside that wrapper silently fell back to
 * whatever generic sans the OS picked instead of the site's actual Farsi
 * typeface. Here Arial is scoped only to the Latin wordmark/email, and
 * everything else inherits the site's normal Vazirmatn stack.
 */
export const GoogleReaderTopBar: FC<{ totalUnread: number }> = ({ totalUnread }) => {
  const wordmarkColors = ["#4184f3", "#db4437", "#f4b400", "#4184f3", "#0f9d58", "#db4437"];
  const wordmark = "Reader";

  return (
    <div
      style={{
        border: "1px solid #d6d6d6",
        borderRadius: 2,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      {/* ---- Top app bar (logo, search, fake account) ---- */}
      <div
        style={{
          background: "linear-gradient(#f5f5f5,#e8e8e8)",
          borderBottom: "1px solid #cccccc",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Arial, Helvetica, sans-serif" }}>
          <IconRss width={18} height={18} style={{ color: "#f4b400" }} />
          <span style={{ fontSize: 18, letterSpacing: -0.3 }}>
            <span style={{ color: "#4184f3", fontWeight: "bold" }}>Google</span>{" "}
            {wordmark.split("").map((ch, i) => (
              <span key={i} style={{ color: wordmarkColors[i % wordmarkColors.length], fontWeight: "bold" }}>
                {ch}
              </span>
            ))}
          </span>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 120,
            maxWidth: 360,
            background: "#fff",
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: "4px 10px",
            fontSize: 12,
            color: "#767676",
          }}
        >
          جست‌وجو در اشتراک‌ها
        </div>
        <div
          style={{
            marginInlineStart: "auto",
            fontSize: 11,
            color: "#767676",
            fontFamily: "Arial, Helvetica, sans-serif",
            direction: "ltr",
          }}
        >
          reader@gmail.com
        </div>
      </div>

      {/* ---- Slim item-list toolbar: folder name + live unread count ---- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 14px",
          background: "#fafafa",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: "bold", color: "#333" }}>همه موارد</span>
        <span style={{ fontSize: 11.5, color: "#767676", transition: "opacity 300ms ease" }}>
          {totalUnread} خوانده‌نشده
        </span>
      </div>
    </div>
  );
};
