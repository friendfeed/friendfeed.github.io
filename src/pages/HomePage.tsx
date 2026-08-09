import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import { FriendFeedStoryCover, FerferLeaksCover, GoogleReaderCover } from "../components/MagazineCovers";
import {
  IconUsers,
  IconX,
  IconMusic,
  IconBrand,
  IconNewspaper,
  IconRocket,
  IconBuilding,
  IconBook,
  IconSun,
  IconFlag,
  IconBlog,
  IconStar,
} from "../icons/Icons";

/**
 * The site's landing page -- redesigned from a single long article into
 * an actual homepage: animated hero, a highlight grid that surfaces
 * every item from the main nav (Sidebar/BottomNav), a stats strip, the
 * migration timeline, and a magazine teaser, closed by the site-wide
 * footer (see App.tsx / Footer.tsx).
 *
 * The long-form "درباره فرندفید" / "چرا فرندفید دیگر وجود ندارد؟" essay
 * (plus the full migration timeline) that used to live here has moved to
 * its own magazine post, /magazine/dastan-khane-friendfeed (see
 * FriendFeedStoryPage.tsx) -- the old hero's browser-chrome visual now
 * doubles as that post's cover image on /magazine (and here, in the
 * teaser row below). Nothing written before was deleted, it just now
 * has a dedicated page instead of being the entire home page.
 */

/** Reveals a section as it scrolls into view. Fully visible/usable
 * without JS (initial render has no inline style yet, so nothing is
 * hidden by default -- the .ff-reveal class that hides it is only
 * applied once JS has mounted and can also flip it back). */
const Reveal: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`ff-reveal ${inView ? "ff-reveal-in" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
};

type HighlightItem = {
  to: string;
  title: string;
  count?: string;
  icon: FC<{ width?: number; height?: number }>;
};

const HIGHLIGHTS: HighlightItem[] = [
  { to: "/subscriptions", title: "همه کاربران فرندفید", count: "+۴٬۳۰۰ کاربر", icon: IconUsers },
  { to: "/rooms", title: "اتاق‌ها", count: "+۲۵۰ اتاق", icon: IconX },
  { to: "/users", title: "کاربران فرندفید در ایکس", count: "+۶۰۰ حساب", icon: IconX },
  { to: "/podcasts", title: "پادکست", count: "+۱٬۱۰۰ حساب", icon: IconMusic },
  { to: "/brands", title: "برندها", icon: IconBrand },
  { to: "/news", title: "خبرگزاری‌ها", icon: IconNewspaper },
  { to: "/startups", title: "استارت‌آپ‌ها", icon: IconRocket },
  { to: "/orgs", title: "ادارات و سازمان‌ها", icon: IconBuilding },
  { to: "/books", title: "کتاب‌ها", icon: IconBook },
  { to: "/daily-life", title: "زندگی روزمره", icon: IconSun },
  { to: "/embassies", title: "سفارت‌ها", icon: IconFlag },
  { to: "/magazine", title: "مجله فرندفید", icon: IconBlog },
  { to: "/faq", title: "سوالات متداول", icon: IconStar },
];

const panelStyle: React.CSSProperties = {
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: "var(--ff-radius)",
  boxShadow: "var(--ff-card-shadow)",
};

export const HomePage: FC = () => {
  useSEO({ path: "/" });

  return (
    <div>
      {/* ---- Hero ---- */}
      <section className="ff-hero" style={{ marginBottom: 20 }}>
        <div className="ff-hero-glow" aria-hidden="true" />
        <div
          className="ff-hero-inner"
          style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: "40px 32px", alignItems: "center" }}
        >
          <div style={{ flex: "1 1 380px", minWidth: 260 }}>
            <span className="ff-hero-eyebrow">
              <span className="ff-hero-dot" aria-hidden="true" />
              آرشیو زنده و غیررسمی، ۲۰۰۷ تا امروز
            </span>

            <h1 className="ff-hero-title">
              خانه‌ی جامعه‌ی فارسی‌زبان <span>فرندفید</span>، این‌بار برای همیشه آرشیو شد
            </h1>

            <p className="ff-hero-lede">
              فرندفید سال ۲۰۱۵ خاموش شد، اما جامعه‌اش نه. این‌جا فهرست کاربران، اتاق‌ها، مسیر مهاجرت این
              جامعه بین پلتفرم‌ها و روایت کامل داستان فرندفید را یک‌جا جمع کرده‌ایم؛ به فارسی، بدون
              نیاز به حساب کاربری.
            </p>

            <div className="ff-hero-cta-row">
              <Link to="/subscriptions" className="ff-btn ff-btn-primary">
                دیدن همه کاربران ‹
              </Link>
              <Link to="/magazine/dastan-khane-friendfeed" className="ff-btn ff-btn-ghost">
                خواندن داستان فرندفید
              </Link>
            </div>

            <div className="ff-hero-stats">
              <div className="ff-hero-stat">
                <b>+۴٬۳۰۰</b>
                <span>کاربر آرشیو شده</span>
              </div>
              <div className="ff-hero-stat">
                <b>+۲۵۰</b>
                <span>اتاق</span>
              </div>
              <div className="ff-hero-stat">
                <b>+۶۰۰</b>
                <span>حساب فعال در ایکس</span>
              </div>
              <div className="ff-hero-stat">
                <b>۲۰۰۷ تا ۲۰۱۵</b>
                <span>دوران فعالیت سرویس</span>
              </div>
            </div>
          </div>

          {/* Decorative animated browser-chrome mock -- desktop only,
              purely illustrative, no real data/links inside it. */}
          <div className="ff-hero-mock" style={{ flex: "1 1 300px", maxWidth: 360, minWidth: 260 }} aria-hidden="true">
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 12px", background: "#e8e8e8" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
              <span dir="ltr" style={{ marginInlineStart: 8, fontSize: 10, color: "var(--ff-muted)" }}>
                friendfeed.com
              </span>
            </div>
            <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="ff-hero-mock-row" style={{ width: "70%" }} />
              <div className="ff-hero-mock-row" style={{ width: "94%", animationDelay: "180ms" }} />
              <div className="ff-hero-mock-row" style={{ width: "55%", animationDelay: "360ms" }} />
              <div style={{ height: 1, background: "var(--ff-border)", margin: "8px 0" }} />
              <div className="ff-hero-mock-row" style={{ width: "85%", animationDelay: "540ms" }} />
              <div className="ff-hero-mock-row" style={{ width: "40%", animationDelay: "720ms" }} />
              <div className="ff-hero-mock-row" style={{ width: "76%", animationDelay: "900ms" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Highlights: every section of the site, one card each ---- */}
      <Reveal>
        <section style={{ marginBottom: 22 }}>
          <div className="ff-section-heading">
            <h2 style={{ fontSize: 16 }}>هر چیزی که این‌جا هست</h2>
            <span style={{ fontSize: 12, color: "var(--ff-muted-light)" }}>
              همه بخش‌های آرشیو، از یک نگاه
            </span>
          </div>
          <div className="ff-highlight-grid">
            {HIGHLIGHTS.map(({ to, title, count, icon: Icon }) => (
              <Link key={to} to={to} className="ff-highlight-card">
                <span className="ff-highlight-icon">
                  <Icon width={17} height={17} />
                </span>
                <span className="ff-highlight-title">{title}</span>
                {count && <span className="ff-highlight-count">{count}</span>}
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ---- Magazine teaser ---- */}
      <Reveal>
        <section style={{ marginBottom: 22 }}>
          <div className="ff-section-heading">
            <h2 style={{ fontSize: 16 }}>از مجله فرندفید</h2>
            <Link to="/magazine" className="ff-section-more">
              همه مطالب ‹
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Link to="/magazine/dastan-khane-friendfeed" className="ff-home-post-card">
              <FriendFeedStoryCover />
              <div style={{ padding: "12px 14px 16px" }}>
                <h3 style={{ fontSize: 13.5, margin: "0 0 6px", lineHeight: 1.6 }}>
                  داستان خانه‌ی فرندفید
                </h3>
                <p style={{ fontSize: 12, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
                  از بهترین فید اینترنت تا تعطیلی؛ روایت کامل با اسناد، عکس و تایم‌لاین مهاجرت.
                </p>
              </div>
            </Link>
            <Link to="/magazine/ferferleaks" className="ff-home-post-card">
              <FerferLeaksCover />
              <div style={{ padding: "12px 14px 16px" }}>
                <h3 style={{ fontSize: 13.5, margin: "0 0 6px", lineHeight: 1.6 }}>فرفرلیکس</h3>
                <p style={{ fontSize: 12, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
                  نخستین افشاگری به سبک ویکی‌لیکس در وب فارسی، بهار ۱۳۹۰.
                </p>
              </div>
            </Link>
            <Link to="/magazine/google-reader" className="ff-home-post-card">
              <GoogleReaderCover />
              <div style={{ padding: "12px 14px 16px" }}>
                <h3 style={{ fontSize: 13.5, margin: "0 0 6px", lineHeight: 1.6 }}>گودر</h3>
                <p style={{ fontSize: 12, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
                  خانه‌ی گمشده‌ی وبلاگ‌نویسان فارسی، پیش از توییتر و اینستاگرام.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ---- Closing CTA ---- */}
      <Reveal>
        <section
          style={{
            ...panelStyle,
            textAlign: "center",
            padding: "32px 20px",
            marginBottom: 4,
          }}
        >
          <h2 style={{ fontSize: 16, margin: "0 0 8px" }}>دنبال یک کاربر یا اتاق خاصی می‌گردی؟</h2>
          <p style={{ fontSize: 12.5, color: "var(--ff-muted)", margin: "0 0 18px", maxWidth: 480, marginInline: "auto" }}>
            فهرست کامل کاربران فرندفید و ردیابی حساب‌های قدیمی‌شان در ایکس همین‌جاست.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            <Link to="/subscriptions" className="ff-btn ff-btn-primary">
              همه کاربران فرندفید ‹
            </Link>
            <Link to="/users" className="ff-btn ff-btn-ghost">
              کاربران فرندفید در ایکس ‹
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
