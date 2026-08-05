import { useState, type FC } from "react";
import { IconBookmark, IconComment, IconStar } from "../icons/Icons";
import { CommentAvatar } from "./CommentAvatar";
import type { ReaderPost } from "../data/googleReaderArticle";

/**
 * One article section rendered as a real Google Reader item, not a <p>.
 * Reuses the read/unread mechanic from the old GoogleReaderHero.tsx
 * autoplay loop, but now user-driven and deliberately staged into two
 * separate beats so the highlight itself is actually visible (the first
 * version fired both state updates in the same tick, which behaved
 * correctly but was too quick to register on a click-then-look pace):
 *
 *   1. Click -> row gets an immediate, strong blue "selected" wash
 *      (Reader's classic #d7e6fb open-item highlight).
 *   2. ~550ms later, the item is marked read: the "جدید" badge drops,
 *      the title flips from bold unread-blue to plain read-grey, the
 *      feed dot dims -- all while the blue wash is STILL showing.
 *   3. ~450ms after that, the wash itself fades back out to white.
 *
 * That highlight-then-unhighlight sequence (not just an instant color
 * swap) is what actually reads as "Google Reader" rather than a plain
 * click state.
 *
 * A small fake comment thread sits under the action row purely for
 * atmosphere, styled like the hover-card/comment look already used
 * elsewhere on the site (see tokens.css --ff-card-shadow).
 */
export const GoogleReaderPost: FC<{
  post: ReaderPost;
  isRead: boolean;
  onRead: (id: string) => void;
}> = ({ post, isRead, onRead }) => {
  const [isActive, setIsActive] = useState(false);
  const [starred, setStarred] = useState(!!post.starred);
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleOpen = () => {
    if (isRead || isActive) return;
    setIsActive(true);
    window.setTimeout(() => {
      onRead(post.id);
      window.setTimeout(() => setIsActive(false), 450);
    }, 550);
  };

  return (
    <div
      style={{
        border: "1px solid #d6d6d6",
        borderTop: "none",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ---- Post row (click target: mark-as-read mechanic) ---- */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen()}
        style={{
          display: "flex",
          gap: 12,
          padding: "14px 16px",
          borderInlineStart: isActive ? "3px solid #4184f3" : "3px solid transparent",
          background: isActive ? "#d7e6fb" : "#fff",
          transition: "background-color 450ms ease, border-color 450ms ease",
          cursor: isRead ? "default" : "pointer",
          direction: "rtl",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span
              aria-hidden
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                flexShrink: 0,
                background: post.feedColor,
                opacity: isRead ? 0.25 : 1,
                transition: "opacity 400ms ease",
              }}
            />
            <span style={{ fontSize: 11, color: "#767676" }}>{post.feed}</span>
            <span style={{ fontSize: 10.5, color: "#aaaaaa" }}>· {post.time}</span>
            {!isRead && (
              <span
                style={{
                  fontSize: 9.5,
                  color: "#fff",
                  background: "#c1121f",
                  borderRadius: 2,
                  padding: "1px 5px",
                  fontWeight: "bold",
                }}
              >
                جدید
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 15.5,
              margin: "4px 0 6px",
              color: isRead ? "#666666" : "#1a0dab",
              fontWeight: isRead ? "normal" : "bold",
              transition: "color 500ms ease, font-weight 500ms ease",
              lineHeight: 1.6,
            }}
          >
            {post.title}
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 2, color: "#333" }}>{post.body}</div>

          {/* ---- Action row ---- */}
          <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setStarred((s) => !s);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11.5,
                color: starred ? "#f4b400" : "#999999",
                cursor: "pointer",
              }}
            >
              <IconStar width={13} height={13} />
              ستاره
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "#999999" }}>
              <IconBookmark width={13} height={13} />
              اشتراک‌گذاری
            </span>
            <span style={{ fontSize: 11.5, color: "#999999" }}>پسندیدن</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setCommentsOpen((o) => !o);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11.5,
                color: "#557799",
                cursor: "pointer",
                marginInlineStart: "auto",
              }}
            >
              <IconComment width={13} height={13} />
              {post.comments.length} نظر
            </span>
          </div>
        </div>
      </div>

      {/* ---- Fake comment thread ---- */}
      {commentsOpen && (
        <div
          style={{
            direction: "rtl",
            background: "#f7f7f7",
            borderTop: "1px solid #eaeaea",
            padding: "10px 16px 12px",
          }}
        >
          {post.comments.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                padding: "6px 0",
                borderTop: i === 0 ? "none" : "1px solid #ececec",
              }}
            >
              <CommentAvatar user={c.user} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "#557799", fontFamily: "Arial, Helvetica, sans-serif", direction: "ltr", textAlign: "right" }}>
                  {c.user}
                </div>
                <div style={{ fontSize: 12.5, color: "#333", lineHeight: 1.8, marginTop: 1 }}>{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
