import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../seo/useSEO";
import { FriendFeedStoryCover, FerferLeaksCover, FriendFeed88Cover } from "../components/MagazineCovers";
import {
  IconUsers,
  IconX,
  IconRoom,
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
  description: string;
  count?: string;
  icon: FC<{ width?: number; height?: number }>;
};

type HighlightGroup = {
  eyebrow: string;
  title: string;
  description: string;
  icon: FC<{ width?: number; height?: number }>;
  items: HighlightItem[];
};

/** Every section of the site, grouped exactly the way the main nav
 *  (Sidebar/BottomNav) already groups them, so this reads as a real
 *  sitemap and not an invented taxonomy -- just presented with more
 *  weight: one small "hero" band per group, then bigger cards with a
 *  real description on each. */
const HIGHLIGHT_GROUPS: HighlightGroup[] = [
  {
    eyebrow: "بخش یکم",
    title: "آرشیو اصلی فرندفید",
    description: "هسته‌ی آرشیو: فهرست کامل کاربران و اتاق‌های گفتگوی فرندفید فارسی، همان‌طور که سال ۲۰۱۵ متوقف شد.",
    icon: IconUsers,
    items: [
      {
        to: "/subscriptions",
        title: "همه کاربران فرندفید",
        description: "فهرست کامل کاربران فارسی‌زبان فرندفید به همراه آواتار و اطلاعات پروفایل آرشیوی هرکدام.",
        count: "+۴٬۳۰۰ کاربر",
        icon: IconUsers,
      },
      {
        to: "/rooms",
        title: "اتاق‌ها",
        description: "اتاق‌های گفتگوی گروهی فرندفید، از عمومی تا خصوصی، با فهرست اعضا و توضیحات هرکدام.",
        count: "+۲۵۰ اتاق",
        icon: IconRoom,
      },
    ],
  },
  {
    eyebrow: "بخش دوم",
    title: "زندگی بعد از فرندفید، در ایکس",
    description: "همان کاربران و اجتماع، این‌بار در بستر ایکس؛ به‌علاوه رسانه‌ها، برندها و نهادهایی که در مسیر مهاجرت این جامعه پیدا کرده‌ایم.",
    icon: IconX,
    items: [
      {
        to: "/users",
        title: "کاربران فرندفید در ایکس",
        description: "پیوند حساب ایکس کاربران قدیمی فرندفید، برای پیدا کردن دوباره آدم‌های همان دوره.",
        count: "+۶۰۰ حساب",
        icon: IconX,
      },
      {
        to: "/podcasts",
        title: "پادکست",
        description: "پادکست‌های فارسی‌زبان با میزبان‌ها و مهمان‌های فعال در ایکس.",
        count: "+۱٬۱۰۰ حساب",
        icon: IconMusic,
      },
      {
        to: "/brands",
        title: "برندها",
        description: "برندها و کسب‌وکارهای فارسی‌زبان با حساب فعال در ایکس.",
        icon: IconBrand,
      },
      {
        to: "/news",
        title: "خبرگزاری‌ها",
        description: "رسانه‌ها و خبرگزاری‌های فارسی‌زبان با حساب فعال در ایکس.",
        icon: IconNewspaper,
      },
      {
        to: "/startups",
        title: "استارت‌آپ‌ها",
        description: "استارت‌آپ‌های فارسی‌زبان و بنیان‌گذارانشان در ایکس.",
        icon: IconRocket,
      },
      {
        to: "/orgs",
        title: "ادارات و سازمان‌ها",
        description: "نهادها، ادارات و سازمان‌های فارسی‌زبان با حضور رسمی در ایکس.",
        icon: IconBuilding,
      },
      {
        to: "/books",
        title: "کتاب‌ها",
        description: "نویسنده‌ها و ناشرهای فارسی‌زبان با حساب فعال در ایکس.",
        icon: IconBook,
      },
      {
        to: "/daily-life",
        title: "زندگی روزمره",
        description: "حساب‌های سبک زندگی، خوراک و زندگی روزمره‌ی فارسی‌زبان در ایکس.",
        icon: IconSun,
      },
      {
        to: "/embassies",
        title: "سفارت‌ها",
        description: "حساب رسمی سفارتخانه‌ها و نمایندگی‌های دیپلماتیک فارسی‌زبان در ایکس.",
        icon: IconFlag,
      },
    ],
  },
  {
    eyebrow: "بخش سوم",
    title: "بیشتر بدانید",
    description: "روایت کامل داستان فرندفید و پاسخ سوالاتی که درباره‌ی فرندفید بیشتر پرسیده می‌شود.",
    icon: IconBlog,
    items: [
      {
        to: "/magazine",
        title: "مجله فرندفید",
        description: "یادداشت‌ها و روایت‌های آرشیوی درباره‌ی فرندفید، گودر و جامعه‌ی فارسی‌زبان وبلاگستان.",
        icon: IconBlog,
      },
      {
        to: "/faq",
        title: "سوالات متداول",
        description: "پاسخ سوالاتی که درباره‌ی هدف، منابع داده و نحوه‌ی کار این آرشیو پرسیده می‌شود.",
        icon: IconStar,
      },
    ],
  },
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
                دیدن همه کاربران
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

      {/* ---- Highlights: every section of the site, grouped into the
          same 3 groups as the main nav, each with its own small hero
          band (art direction) and bigger, described cards. ---- */}
      <Reveal>
        <section style={{ marginBottom: 8 }}>
          <div className="ff-section-heading">
            <h2 style={{ fontSize: 16 }}>هر چیزی که این‌جا هست</h2>
            <span style={{ fontSize: 12, color: "var(--ff-muted-light)" }}>
              همه بخش‌های آرشیو، از یک نگاه
            </span>
          </div>
        </section>
      </Reveal>

      {HIGHLIGHT_GROUPS.map((group) => (
        <Reveal key={group.title}>
          <section className="ff-menu-section">
            <div className="ff-menu-section-glow" aria-hidden="true" />
            <div className="ff-menu-section-inner">
              <div className="ff-menu-section-head">
                <span className="ff-menu-section-icon">
                  <group.icon width={22} height={22} />
                </span>
                <div>
                  <span className="ff-menu-section-eyebrow">{group.eyebrow}</span>
                  <h3 className="ff-menu-section-title">{group.title}</h3>
                  <p className="ff-menu-section-desc">{group.description}</p>
                </div>
              </div>

              <div className="ff-menu-grid">
                {group.items.map(({ to, title, description, count, icon: Icon }) => (
                  <Link key={to} to={to} className="ff-menu-card">
                    <span className="ff-menu-card-icon">
                      <Icon width={20} height={20} />
                    </span>
                    <span className="ff-menu-card-title">{title}</span>
                    <span className="ff-menu-card-desc">{description}</span>
                    {count && <span className="ff-menu-card-count">{count}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      ))}

      {/* ---- Magazine teaser ---- */}
      <Reveal>
        <section style={{ marginBottom: 22 }}>
          <div className="ff-section-heading">
            <h2 style={{ fontSize: 16 }}>از مجله فرندفید</h2>
            <Link to="/magazine" className="ff-section-more">
              همه مطالب
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Link to="/magazine/ferferleaks" className="ff-home-post-card">
              <FerferLeaksCover />
              <div style={{ padding: "12px 14px 16px" }}>
                <h3 style={{ fontSize: 13.5, margin: "0 0 6px", lineHeight: 1.6 }}>فرفرلیکس</h3>
                <p style={{ fontSize: 12, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
                  نخستین افشاگری به سبک ویکی‌لیکس در وب فارسی، بهار ۱۳۹۰.
                </p>
              </div>
            </Link>
            <Link to="/magazine/friendfeed-1388" className="ff-home-post-card">
              <FriendFeed88Cover />
              <div style={{ padding: "12px 14px 16px" }}>
                <h3 style={{ fontSize: 13.5, margin: "0 0 6px", lineHeight: 1.6 }}>
                  فرندفید ایرانی بعد از خرداد ۸۸
                </h3>
                <p style={{ fontSize: 12, color: "var(--ff-muted)", margin: 0, lineHeight: 1.8 }}>
                  از سرگرمی وبلاگی به پناهگاه خبر و گزارش لحظه‌ای.
                </p>
              </div>
            </Link>
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
            فهرست کامل کاربران فرندفید و پیوند حساب‌های قدیمی‌شان در ایکس همین‌جاست.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            <Link to="/subscriptions" className="ff-btn ff-btn-primary">
              همه کاربران فرندفید
            </Link>
            <Link to="/users" className="ff-btn ff-btn-ghost">
              کاربران فرندفید در ایکس
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
};
