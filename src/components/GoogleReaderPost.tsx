import { useState, type FC } from "react";
import { IconBookmark, IconComment, IconStar } from "../icons/Icons";
import { CommentAvatar } from "./CommentAvatar";
import type { ReaderPost } from "../data/googleReaderArticle";

/**
 * One article section rendered as a real Google Reader item, not a <p>.
 * Implements the actual Google Reader UX: unread posts start with a light
 * blue highlight (#d7e6fb) + left accent bar (like they're pre-selected),
 * then clicking the row marks them as read (badge/title/dot change) while
 * the highlight *stays* visible for ~400ms, giving the user visual feedback
 * that their click was registered before the wash fades out.
 *
 * This mirrors real Reader: you open a post, it highlights blue and stays
 * that way while you read, then dims as the next post opens or you move on.
 *
 * A small fake comment thread sits under the action row purely for
 * atmosphere, styled like the hover-card/comment look already used
 * elsewhere on the site (see tokens.css --ff-card-shadow). The thread
 * also shows that comments were shared inside the Reader (visible by
 * clicking the comment count), reflecting how Reader was a social layer
 * on top of individual feeds.
 */
export const GoogleReaderPost: FC<{
  post: ReaderPost;
  isRead: boolean;
  onRead: (id: string) => void;
}> = ({ post, isRead, onRead }) => {
  const [isDimming, setIsDimming] = useState(false);
  const [starred, setStarred] = useState(!!post.starred);
  const [liked, setLiked] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const handleOpen = () => {
    if (isRead || isDimming) return;
    onRead(post.id);
    // Highlight stays visible for 400ms after marking read, then fades
    setIsDimming(true);
    window.setTimeout(() => setIsDimming(false), 400);
  };

  return (
    <div
      style={{
        border: "1px solid #d6d6d6",
        borderTop: "none",
        background: "#fff",
        /* No border-radius on this card, so overflow:hidden here served
           no visual purpose -- but it silently clipped the share popover
           below (position:absolute, opens *below* the action row) at
           this card's own bottom edge, making it invisible/unclickable
           the moment it opened, which also made the adjacent "نظر"
           (comments) button feel broken: clicks meant for it were
           landing on the invisible clipped popover instead. Removed. */
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
          padding: "12px 16px",
          borderInlineStart: "3px solid #4184f3",
          background: !isRead || isDimming ? "#d7e6fb" : "#fff",
          transition: "background-color 400ms ease",
          cursor: isRead && !isDimming ? "default" : "pointer",
          direction: "rtl",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: "6px" }}>
            <span
              aria-hidden
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                flexShrink: 0,
                background: post.feedColor,
                opacity: isRead && !isDimming ? 0.25 : 1,
                transition: "opacity 300ms ease",
              }}
            />
            <span style={{ fontSize: 11, color: "#767676" }}>{post.feed}</span>
            <span style={{ fontSize: 10.5, color: "#aaaaaa" }}>· {post.time}</span>
            {!isRead && !isDimming && (
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
              marginBottom: "8px",
              color: isRead && !isDimming ? "#666666" : "#1a0dab",
              fontWeight: isRead && !isDimming ? "normal" : "bold",
              transition: "color 300ms ease, font-weight 300ms ease",
              lineHeight: 1.7,
            }}
          >
            {post.title}
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.9, color: "#333", marginBottom: "10px" }}>{post.body}</div>

          {/* ---- Action row ---- */}
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap", position: "relative" }}>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setStarred((s) => !s);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                color: starred ? "#f4b400" : "#999999",
                cursor: "pointer",
                transition: "color 150ms ease",
              }}
            >
              <IconStar width={13} height={13} />
              ستاره
            </span>

            <span
              onClick={(e) => {
                e.stopPropagation();
                setLiked((l) => !l);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                color: liked ? "#db4437" : "#999999",
                cursor: "pointer",
                transition: "color 150ms ease",
              }}
            >
              ♥ {post.likeCount + (liked ? 1 : 0)}
            </span>

            <span style={{ position: "relative" }}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setShareOpen((s) => !s);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 11,
                  color: "#999999",
                  cursor: "pointer",
                  transition: "color 150ms ease",
                }}
              >
                <IconBookmark width={13} height={13} />
                اشتراک‌گذاری
              </span>
              {shareOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: "100%",
                    insetInlineStart: 0,
                    marginTop: 4,
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    zIndex: 50,
                    direction: "rtl",
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShareOpen(false);
                      alert(`اشتراک‌گذاری بر توییتر: "${post.title}"`);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 12px",
                      textAlign: "right",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11.5,
                      color: "#1da1f2",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    اشتراک بر توییتر
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShareOpen(false);
                      alert(`اشتراک‌گذاری بر فرندفید: "${post.title}"`);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 12px",
                      textAlign: "right",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11.5,
                      color: "#4184f3",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    اشتراک بر فرندفید
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShareOpen(false);
                      alert(`ذخیره در گودر شما: "${post.title}"`);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 12px",
                      textAlign: "right",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11.5,
                      color: "#f4b400",
                    }}
                  >
                    ذخیره در گودر شما
                  </button>
                </div>
              )}
            </span>

            <span
              onClick={(e) => {
                e.stopPropagation();
                setCommentsOpen((o) => !o);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
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

      {/* ---- Fake comment thread (shared inside Reader) ---- */}
      {commentsOpen && (
        <div
          style={{
            direction: "rtl",
            background: "#f7f7f7",
            borderTop: "1px solid #eaeaea",
            padding: "8px 16px 10px",
          }}
        >
          <div style={{ fontSize: 10, color: "#999", marginBottom: 8 }}>
            نظرات اشتراک‌شده درون گودر:
          </div>
          {post.comments.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                padding: "8px 0",
                borderTop: i === 0 ? "none" : "1px solid #ececec",
              }}
            >
              <CommentAvatar user={c.user} size={20} />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#557799",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    direction: "ltr",
                    textAlign: "right",
                    marginBottom: "2px",
                  }}
                >
                  {c.user}
                </div>
                <div style={{ fontSize: 12.5, color: "#333", lineHeight: 1.7 }}>{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
