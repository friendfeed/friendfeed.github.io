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
  initial: string;
  color: string;
  text: string;
  likes: number;
  comments: number;
};

const INITIAL_POSTS: DemoPost[] = [
  {
    id: "a",
    name: "سارا",
    initial: "س",
    color: "#2e7df3",
    text: "بالاخره اینترنت اومد سرکار، یه ساعته دارم فید رو چک می‌کنم :)",
    likes: 4,
    comments: 1,
  },
  {
    id: "b",
    name: "امیر",
    initial: "ا",
    color: "#b8860b",
    text: "این آهنگ جدید رو گوش دادین؟ نمی‌تونم ولش کنم",
    likes: 2,
    comments: 0,
  },
  {
    id: "c",
    name: "نگار",
    initial: "ن",
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
        window.setTimeout(() => setFlash(null), 900);

        return [targetId, ...currentOrder.filter((id) => id !== targetId)];
      });
    };

    const interval = window.setInterval(tick, 2600);
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
          return (
            <div
              key={post.id}
              className={`ff-livefeed-item${isFlashing ? ` ff-livefeed-item-flash-${flash!.kind}` : ""}`}
              style={{ top: index * STEP, zIndex: posts.length - index }}
            >
              <span className="ff-livefeed-avatar" style={{ background: post.color }}>
                {post.initial}
              </span>
              <div className="ff-livefeed-body">
                <div className="ff-livefeed-name">{post.name}</div>
                <div className="ff-livefeed-text">{post.text}</div>
                <div className="ff-livefeed-meta">
                  <span className={`ff-livefeed-stat${isFlashing && flash!.kind === "like" ? " ff-livefeed-stat-pop" : ""}`}>
                    <IconStar width={11} height={11} />
                    {post.likes}
                  </span>
                  <span className={`ff-livefeed-stat${isFlashing && flash!.kind === "comment" ? " ff-livefeed-stat-pop" : ""}`}>
                    <IconComment width={11} height={11} />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="ff-livefeed-caption">
        همون فید زنده‌ی فرندفید: لایک یا کامنت یه پست رو می‌بره بالای فید
      </p>
    </div>
  );
};
