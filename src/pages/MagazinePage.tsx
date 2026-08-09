import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import { IconNetwork, IconRss } from "../icons/Icons";

/**
 * "مجله فرندفید" -- now a proper post index instead of a single
 * hard-coded article. Each entry below is one post, rendered as a
 * clickable cover card (title + short excerpt + a small illustrative
 * cover, no external image assets -- CSS gradient + one icon, same
 * decorative approach as the rest of the site's diagrams) that links to
 * that post's own dedicated page.
 *
 * گودر (previously reachable only from a standing link in <Sidebar>,
 * which meant it had no path into it at all on mobile since <Sidebar>
 * is desktop-only there -- see BottomNav.tsx) is now the FIRST post
 * here instead, so it's reachable the same way every other post is: via
 * "مجله" in the mobile tab bar -> tap its cover -> its own page. The
 * standing Sidebar link was removed accordingly (see Sidebar.tsx).
 */
type MagazinePost = {
  to: string;
  title: string;
  excerpt: string;
  cover: FC;
};

const GoogleReaderCover: FC = () => (
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

const FriendFeed88Cover: FC = () => (
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

const FerferLeaksCover: FC = () => (
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
      {[0,50,100,150,200,250,300,350,400].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="#4fc3f7" strokeWidth="1"/>
      ))}
      {[0,40,80,120].map(y => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#4fc3f7" strokeWidth="1"/>
      ))}
    </svg>
    <svg viewBox="0 0 120 140" width="46" height="54" style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 0 10px rgba(79,195,247,0.5))" }}>
      <path d="M30 60 V42 A30 30 0 0 1 90 42 V60" fill="none" stroke="#4fc3f7" strokeWidth="5" strokeLinecap="round"/>
      <rect x="14" y="58" width="92" height="66" rx="8" fill="#1a1a2e" stroke="#4fc3f7" strokeWidth="3"/>
      <circle cx="60" cy="88" r="12" fill="none" stroke="#ef5350" strokeWidth="3"/>
      <rect x="56" y="96" width="8" height="16" rx="3" fill="#ef5350"/>
    </svg>
    <div style={{
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
    }}>
      <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4fc3f7", opacity: 0.7, letterSpacing: "0.1em" }}>
        FERFERLEAKS / ۱۳۹۰
      </span>
      <span style={{
        fontSize: 9,
        color: "#ef5350",
        fontWeight: 700,
        background: "rgba(239,83,80,0.15)",
        border: "1px solid rgba(239,83,80,0.4)",
        padding: "1px 6px",
        borderRadius: 2,
      }}>
        LEAKED
      </span>
    </div>
  </div>
);

const posts: MagazinePost[] = [
  {
    to: "/magazine/ferferleaks",
    title: "فرفرلیکس: روزی که دخمه افسران جنگ نرم در فرندفید لو رفت",
    excerpt:
      "بهار ۱۳۹۰، اولین افشاگری به سبک ویکی‌لیکس در وب فارسی. ماجرای نفوذ به اتاق خصوصی گروه موسوم به افسران جنگ نرم در فرندفید و اسنادی که به فرفرلیکس معروف شدند.",
    cover: FerferLeaksCover,
  },
  {
    to: "/magazine/google-reader",
    title: "گودر: خانه‌ی گمشده‌ی وبلاگ‌نویسان فارسی",
    excerpt:
      "پیش از توییتر و اینستاگرام، یک فیدخوان ساده به نام Google Reader که کاربران فارسی‌زبان با شوخ‌طبعی «گودر» صدایش می‌کردند، به یکی از پرشورترین اجتماعات آنلاین وبلاگستان فارسی تبدیل شد.",
    cover: GoogleReaderCover,
  },
  {
    to: "/magazine/friendfeed-1388",
    title: "فرندفید ایرانی بعد از خرداد ۸۸: از سرگرمی به پناهگاه اطلاعات",
    excerpt:
      "بعد از انتخابات ریاست‌جمهوری خرداد ۱۳۸۸ و فیلترینگ گسترده‌ی توییتر و فیس‌بوک، همان صفحه‌ی ساده‌ی فرندفید نقش دیگری هم پیدا کرد: راهی میان‌بر برای دنبال کردن خبر و گزارش لحظه‌ای.",
    cover: FriendFeed88Cover,
  },
];

export const MagazinePage: FC = () => {
  useSEO({ path: "/magazine" });

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ fontSize: 16, margin: "0 0 4px" }}>مجله فرندفید</h1>
      <p style={{ fontSize: 12.5, color: "var(--ff-muted)", margin: "0 0 18px" }}>
        مطالب، خاطرات و مقالات مرتبط با جامعه فارسی‌زبان فرندفید و تاریخچه آن
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {posts.map((post) => {
          const Cover = post.cover;
          return (
            <Link
              key={post.to}
              to={post.to}
              className="ff-magazine-card"
              style={{
                display: "block",
                background: "var(--ff-panel)",
                border: "1px solid var(--ff-border)",
                borderRadius: "var(--ff-radius)",
                overflow: "hidden",
                boxShadow: "var(--ff-shadow-panel)",
                color: "inherit",
                textDecoration: "none",
                transition: "box-shadow 120ms ease, transform 120ms ease",
              }}
            >
              <Cover />
              <div style={{ padding: "14px 18px 18px" }}>
                <h2 style={{ fontSize: 15, margin: "0 0 8px", color: "var(--ff-text)", lineHeight: 1.6 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 12.5, lineHeight: 1.9, color: "var(--ff-muted)", margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
