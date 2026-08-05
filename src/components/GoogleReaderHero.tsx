import { useEffect, useRef, useState, type FC } from "react";
import { IconBookmark, IconRss, IconStar } from "../icons/Icons";

/**
 * A recreated, animated hero for the "گودر" (Google Reader) article page,
 * replacing the old empty/dashed placeholder banner in GoogleReaderPage.tsx.
 *
 * This is a *recreation* built from memory of Google Reader's real 2011-era
 * UI (three-pane classic view): the thin grey app bar with the multicolor
 * wordmark, the left rail (subscriptions/folders), and the center item list
 * with unread counts, favicons, snippets, and the like/share/keep-unread
 * action row under each item. Colors, spacing, and type are matched as
 * closely as memory allows (Arial-based UI, #c3d9ff selection blue, the
 * classic red "37" unread pill, etc.) -- it is not a pixel-for-pixel copy
 * of any single screenshot, it's a faithful reconstruction.
 *
 * The sample post content is invented but grounded in the article: Farsi
 * blogs about literature, film criticism, and daily life, the actual mix
 * described in GoogleReaderPage's "چه کسانی بودند" section.
 *
 * Animation, kept subtle/professional on purpose (see frontend-design
 * guidance to not over-animate):
 *   1. On mount, the item list rows cascade in (fade + 6px rise, staggered).
 *   2. A slow autoplay "reading" loop: one row at a time gets a light-blue
 *      selection wash (like clicking into it in the reading pane), its
 *      title fades from bold-blue (unread) to plain grey (read), and the
 *      sidebar's total unread count ticks down by one -- then loops.
 *   3. Reduced-motion users get the static, fully-read end state with no
 *      timers running at all.
 */

type Post = {
  id: string;
  feed: string;
  feedColor: string;
  title: string;
  snippet: string;
  time: string;
  starred?: boolean;
};

const posts: Post[] = [
  {
    id: "p1",
    feed: "یادداشت‌های شبانه",
    feedColor: "#4184f3",
    title: "چرا هنوز برای هر پست وبلاگ، تیتر جداگانه می‌نویسم",
    snippet:
      "دیشب داشتم آرشیو دو سال قبل وبلاگ را مرور می‌کردم و به این نتیجه رسیدم که بخش زیادی از خاطرات این چند سال فقط همین‌جا مانده، نه جای دیگری. یک تکه از آن را امروز دوباره خواندم و...",
    time: "۲ ساعت پیش",
    starred: true,
  },
  {
    id: "p2",
    feed: "نقد و نظر سینما",
    feedColor: "#db4437",
    title: "مروری کوتاه بر آخرین فیلمی که در سینمای شهر دیدم",
    snippet:
      "فیلم از همان صحنه اول نشان می‌داد قرار نیست روایت خطی‌ای داشته باشد. شخصیت اصلی بین دو خط زمانی سرگردان است و کارگردان با تدوینی هوشمندانه این سردرگمی را به تماشاگر هم منتقل می‌کند...",
    time: "۴ ساعت پیش",
  },
  {
    id: "p3",
    feed: "دفتر شعر",
    feedColor: "#f4b400",
    title: "سه‌تایی کوتاه برای یک عصر بارانی",
    snippet: "باران که می‌زند به شیشه، دفتر را می‌بندم و به تو فکر می‌کنم، به شهری که دیگر آن‌جا نیستی...",
    time: "دیروز",
  },
  {
    id: "p4",
    feed: "روزنوشت‌های یک برنامه‌نویس",
    feedColor: "#0f9d58",
    title: "چطور بالاخره یک فیدخوان محلی برای خودم نوشتم",
    snippet:
      "بعد از کلی معطلی، تصمیم گرفتم یک نسخه‌ی خیلی ساده از فیدخوان را خودم بنویسم. هنوز خیلی از قابلیت‌های اجتماعی گودر را ندارد، ولی حداقل اشتراک‌هایم را می‌خوانم بدون این‌که نگران تعطیلی‌اش باشم...",
    time: "دیروز",
  },
  {
    id: "p5",
    feed: "کتاب و کاغذ",
    feedColor: "#4184f3",
    title: "یادداشتی درباره‌ی کتابی که این هفته تمام کردم",
    snippet:
      "کتاب را بیشتر برای همان چند صفحه‌ی وسط خریدم، جایی که نویسنده درباره‌ی مهاجرت و خانه حرف می‌زند. عجیب است که چقدر شبیه حرف‌های خودمان بود...",
    time: "۲ روز پیش",
  },
];

const folders = [
  { label: "همه موارد", count: 231 },
  { label: "ستاره‌دار", count: 12 },
  { label: "به‌اشتراک‌گذاشته‌شده‌ها", count: 8 },
];

const subscriptions = [
  { label: "یادداشت‌های شبانه", unread: 4 },
  { label: "نقد و نظر سینما", unread: 9 },
  { label: "دفتر شعر", unread: 2 },
  { label: "روزنوشت‌های یک برنامه‌نویس", unread: 14 },
  { label: "کتاب و کاغذ", unread: 6 },
];

const wordmarkColors = ["#4184f3", "#db4437", "#f4b400", "#4184f3", "#0f9d58", "#db4437"];
const wordmark = "Reader";

export const GoogleReaderHero: FC = () => {
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;
      const idx = step % posts.length;
      setActiveIdx(idx);
      // Mark the previous row read a beat after it's highlighted, the way
      // Google Reader marked-as-read on scroll/select rather than instantly.
      window.setTimeout(() => {
        setReadIds((prev) => new Set(prev).add(posts[idx].id));
      }, 650);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  const totalUnread = posts.filter((p) => !readIds.has(p.id)).length;

  return (
    <div
      style={{
        border: "1px solid #d6d6d6",
        borderRadius: 2,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        direction: "ltr",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* ---- Top app bar ---- */}
      <div
        style={{
          background: "linear-gradient(#f5f5f5,#e8e8e8)",
          borderBottom: "1px solid #cccccc",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <IconRss width={16} height={16} style={{ color: "#f4b400" }} />
          <span style={{ fontSize: 16, letterSpacing: -0.3 }}>
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
            maxWidth: 360,
            background: "#fff",
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: "3px 8px",
            fontSize: 11.5,
            color: "#767676",
          }}
        >
          جست‌وجو در اشتراک‌ها
        </div>
        <div style={{ marginInlineStart: "auto", fontSize: 11, color: "#767676" }}>reader@gmail.com</div>
      </div>

      <div style={{ display: "flex", minHeight: 340 }}>
        {/* ---- Left rail ---- */}
        <div
          style={{
            width: 168,
            flexShrink: 0,
            background: "#f8f8f8",
            borderInlineEnd: "1px solid #e6e6e6",
            padding: "10px 0",
            fontSize: 11.5,
          }}
        >
          <div
            style={{
              margin: "0 10px 10px",
              padding: "5px 8px",
              background: "#fff",
              border: "1px solid #d6d6d6",
              borderRadius: 2,
              color: "#c1121f",
              fontWeight: "bold",
              fontSize: 11,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            + اشتراک اضافه کنید
          </div>

          {folders.map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "3px 12px",
                color: "#333",
              }}
            >
              <span>{f.label}</span>
              <span style={{ color: "#999" }}>{f.count}</span>
            </div>
          ))}

          <div
            style={{
              margin: "10px 12px 4px",
              fontSize: 10.5,
              fontWeight: "bold",
              color: "#767676",
              textTransform: "uppercase",
              letterSpacing: 0.3,
            }}
          >
            اشتراک‌ها
          </div>
          {subscriptions.map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "3px 12px",
                color: "#333",
              }}
            >
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  direction: "rtl",
                  textAlign: "left",
                }}
              >
                {s.label}
              </span>
              <span style={{ color: "#c1121f", fontWeight: readIds.size ? "normal" : "bold" }}>{s.unread}</span>
            </div>
          ))}
        </div>

        {/* ---- Item list (center pane) ---- */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 14px",
              borderBottom: "1px solid #e6e6e6",
              background: "#fafafa",
            }}
          >
            <span style={{ fontSize: 12.5, fontWeight: "bold", color: "#333", direction: "rtl" }}>همه موارد</span>
            <span
              style={{
                fontSize: 11,
                color: "#767676",
                transition: "opacity 300ms ease",
              }}
            >
              {totalUnread} خوانده‌نشده
            </span>
          </div>

          <div>
            {posts.map((post, i) => {
              const isRead = readIds.has(post.id);
              const isActive = activeIdx === i;
              return (
                <div
                  key={post.id}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: "10px 14px",
                    borderBottom: "1px solid #eeeeee",
                    background: isActive ? "#e3f0ff" : "#fff",
                    transition: "background-color 500ms ease, opacity 500ms ease, transform 500ms ease",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(6px)",
                    transitionDelay: mounted ? `${i * 90}ms` : "0ms",
                    direction: "rtl",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      marginTop: 5,
                      flexShrink: 0,
                      background: post.feedColor,
                      opacity: isRead ? 0.25 : 1,
                      transition: "opacity 400ms ease",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10.5, color: "#767676" }}>{post.feed}</span>
                      <span style={{ fontSize: 10, color: "#aaaaaa" }}>· {post.time}</span>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        margin: "2px 0 3px",
                        color: isRead ? "#666666" : "#1a0dab",
                        fontWeight: isRead ? "normal" : "bold",
                        transition: "color 500ms ease, font-weight 500ms ease",
                      }}
                    >
                      {post.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        lineHeight: 1.8,
                        color: "#767676",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                      }}
                    >
                      {post.snippet}
                    </div>
                    <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 3,
                          fontSize: 10.5,
                          color: post.starred ? "#f4b400" : "#999999",
                        }}
                      >
                        <IconStar width={11} height={11} />
                        ستاره
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10.5, color: "#999999" }}>
                        <IconBookmark width={11} height={11} />
                        اشتراک‌گذاری
                      </span>
                      <span style={{ fontSize: 10.5, color: "#999999" }}>پسندیدن</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
