import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { IconComment, IconStar } from "../icons/Icons";

/**
 * Recreates FriendFeed's single most-loved (and most-copied -- this is
 * the exact mechanic Facebook was said to be buying when it acquired
 * FriendFeed in 2009) feature: the feed re-sorts itself live. The post
 * someone just liked or commented on jumps straight to the top, in
 * front of you, instead of you having to refresh or hunt for it.
 *
 * This is a self-playing, looping illustration -- not real data. Every
 * few seconds it "likes" or "comments" on a random post further down
 * the stack, which bumps that post to the top with a smooth animated
 * reorder, exactly like the real thing. Fully decorative (aria-hidden)
 * and pauses entirely under prefers-reduced-motion, replaced by a
 * static, still-legible 3-post stack.
 */

type DemoPost = {
  id: string;
  name: string;
  color: string;
  text: string;
  likes: number;
  comments: number;
};

/** Small illustrated sample "profile photos" -- flat, simple face
 *  illustrations (not initials) so each of the 3 demo posts reads as an
 *  actual profile, matching the archived FriendFeed avatar treatment
 *  (circular photo next to the post). Purely decorative/invented, no
 *  real people. */
const AvatarSara: FC = () => (
  <svg viewBox="0 0 30 30" width="30" height="30">
    <circle cx="15" cy="15" r="15" fill="#2e7df3" />
    <circle cx="15" cy="13.5" r="5.6" fill="#ffe0c2" />
    <path d="M8.8 12.5c0-4 2.8-6.4 6.2-6.4s6.2 2.4 6.2 6.4c-1-1.4-2.6-.6-6.2-.6s-5.2-.8-6.2.6Z" fill="#3a2a1e" />
    <path
      d="M6.5 27.5c1-4.6 4.6-7.5 8.5-7.5s7.5 2.9 8.5 7.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

const AvatarAmir: FC = () => (
  <svg viewBox="0 0 30 30" width="30" height="30">
    <circle cx="15" cy="15" r="15" fill="#b8860b" />
    <circle cx="15" cy="13.5" r="5.6" fill="#e8b98a" />
    <path
      d="M9 11.5c1.2-3.6 4-5.4 6-5.4s4.8 1.8 6 5.4c-.6-.4-1.4-.6-2.2-.4-1.4-1.4-2.4-1.8-3.8-1.8s-2.4.4-3.8 1.8c-.8-.2-1.6 0-2.2.4Z"
      fill="#241a10"
    />
    <path d="M11 8.4c-1 .8-1.6 2-1.9 3.1" stroke="#241a10" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path
      d="M6.5 27.5c1-4.6 4.6-7.5 8.5-7.5s7.5 2.9 8.5 7.5"
      fill="none"
      stroke="#fff"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

const AvatarNegar: FC = () => (
  <svg viewBox="0 0 30 30" width="30" height="30">
    <circle cx="15" cy="15" r="15" fill="#557799" />
    <path d="M5.5 13.5c0-6 4.2-9.6 9.5-9.6s9.5 3.6 9.5 9.6c0 5-2.6 10-2.6 10l-1.4-3.2H9.5L8.1 23.5s-2.6-5-2.6-10Z" fill="#2c2418" />
    <circle cx="15" cy="14" r="5.4" fill="#f0cba3" />
    <path
      d="M6.2 27.5c1-4.4 4.6-7.2 8.3-7.2s7.3 2.8 8.3 7.2"
      fill="none"
      stroke="#fff"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

const AVATARS: Record<string, FC> = { a: AvatarSara, b: AvatarAmir, c: AvatarNegar };

const INITIAL_POSTS: DemoPost[] = [
  {
    id: "a",
    name: "سارا",
    color: "#2e7df3",
    text: "بالاخره اینترنت اومد سرکار، یه ساعته دارم فید رو چک می‌کنم :)",
    likes: 4,
    comments: 1,
  },
  {
    id: "b",
    name: "امیر",
    color: "#b8860b",
    text: "این آهنگ جدید رو گوش دادین؟ نمی‌تونم ولش کنم",
    likes: 2,
    comments: 0,
  },
  {
    id: "c",
    name: "نگار",
    color: "#557799",
    text: "عکس‌های سفر آخر هفته رو گذاشتم، بروبچ نظر بدید",
    likes: 6,
    comments: 3,
  },
];

const ITEM_HEIGHT = 78;
const GAP = 8;
const STEP = ITEM_HEIGHT + GAP;

export const LiveFeedDemo: FC = () => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [order, setOrder] = useState(INITIAL_POSTS.map((p) => p.id));
  const [flash, setFlash] = useState<{ id: string; kind: "like" | "comment" } | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) return;

    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      setOrder((currentOrder) => {
        // Bump one of the two posts currently NOT on top -- picking
        // randomly between them keeps the loop from feeling mechanical.
        const candidates = currentOrder.slice(1);
        const targetId = candidates[Math.floor(Math.random() * candidates.length)];
        const kind: "like" | "comment" = Math.random() < 0.5 ? "like" : "comment";

        setPosts((prev) =>
          prev.map((p) =>
            p.id === targetId
              ? {
                  ...p,
                  likes: kind === "like" ? p.likes + 1 : p.likes,
                  comments: kind === "comment" ? p.comments + 1 : p.comments,
                }
              : p
          )
        );
        setFlash({ id: targetId, kind });
        window.setTimeout(() => setFlash(null), 1100);

        return [targetId, ...currentOrder.filter((id) => id !== targetId)];
      });
    };

    const interval = window.setInterval(tick, 4200);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="ff-livefeed" aria-hidden="true">
      <div className="ff-livefeed-chrome">
        <span className="ff-livefeed-dot" style={{ background: "#ff5f57" }} />
        <span className="ff-livefeed-dot" style={{ background: "#febc2e" }} />
        <span className="ff-livefeed-dot" style={{ background: "#28c840" }} />
        <span dir="ltr" className="ff-livefeed-url">
          friendfeed.com
        </span>
        <span className="ff-livefeed-live">
          <span className="ff-hero-dot" />
          زنده
        </span>
      </div>

      <div className="ff-livefeed-stack" style={{ height: posts.length * STEP - GAP }}>
        {posts.map((post) => {
          const index = order.indexOf(post.id);
          const isFlashing = flash?.id === post.id;
          const Avatar = AVATARS[post.id];
          return (
            <div
              key={post.id}
              className={`ff-livefeed-item${isFlashing ? ` ff-livefeed-item-flash-${flash!.kind}` : ""}`}
              style={{ top: index * STEP, zIndex: posts.length - index }}
            >
              <span className="ff-livefeed-avatar">
                <Avatar />
              </span>
              <div className="ff-livefeed-body">
                <div className="ff-livefeed-name">{post.name}</div>
                <div className="ff-livefeed-text">{post.text}</div>
                <div className="ff-livefeed-meta">
                  <span className={`ff-livefeed-stat${isFlashing && flash!.kind === "comment" ? " ff-livefeed-stat-pop" : ""}`}>
                    <IconComment width={11} height={11} />
                    <span className="ff-livefeed-stat-num">{post.comments}</span>
                  </span>
                  <span className={`ff-livefeed-stat${isFlashing && flash!.kind === "like" ? " ff-livefeed-stat-pop" : ""}`}>
                    <IconStar width={11} height={11} />
                    <span className="ff-livefeed-stat-num">{post.likes}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
