import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../services/SearchContext";

/**
 * Header rebuilt to match the real archived FriendFeed chrome: white
 * background, wordmark logo, a functional search box (filters the list on
 * the active page via SearchContext), and plain flat nav text.
 *
 * Layout is pinned with flexWrap: "nowrap" specifically so the logo and
 * search box always stay on one row at opposite ends (matching the
 * archived screenshot) instead of stacking on narrower viewports.
 *
 * Copy below the nav is a short, plain-Farsi description of FriendFeed:
 * the actual archived Persian tagline first, then two sourced facts
 * (Wikipedia: founding team/launch date, Facebook acquisition, and the
 * live/no-refresh feed updating it was known for) -- not a formal or
 * Arabic-leaning "تجمیع"-style phrasing.
 */
export const Header: FC = () => {
  const { query, setQuery } = useSearch();

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid var(--ff-border)" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "nowrap",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <img
            src="./brand/friendfeed-wordmark.webp"
            alt="FriendFeed"
            style={{ height: 34, display: "block" }}
          />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی نام یا نام کاربری..."
            style={{
              border: "1px solid var(--ff-border)",
              borderRadius: 2,
              padding: "5px 8px",
              fontSize: 12,
              width: "100%",
              minWidth: 90,
              maxWidth: 220,
              fontFamily: "inherit",
            }}
          />
          <button
            type="button"
            style={{
              flexShrink: 0,
              background: "var(--ff-tab-bg)",
              border: "1px solid var(--ff-border)",
              borderRadius: 2,
              padding: "5px 10px",
              fontSize: 12,
              cursor: "default",
              color: "var(--ff-text)",
              fontFamily: "inherit",
            }}
          >
            جستجو
          </button>
        </div>
      </div>

      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 10px",
          display: "flex",
          gap: 4,
        }}
      >
        <Link
          to="/"
          style={{
            background: "var(--ff-tab-bg)",
            border: "1px solid var(--ff-border)",
            borderRadius: 3,
            padding: "5px 14px",
            fontSize: 12.5,
            fontWeight: "bold",
            color: "var(--ff-text)",
          }}
        >
          کاربران در ایکس (X)
        </Link>
      </nav>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 12px",
          fontSize: 12,
          color: "var(--ff-muted)",
          lineHeight: 1.9,
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", color: "var(--ff-text)" }}>
          فرندفید آسان‌ترین راه برای اشتراک مطالب در اینترنت است.
        </p>
        <p style={{ margin: 0 }}>
          این سرویس در اکتبر ۲۰۰۷ توسط برت تیلور، جیم نوریس، پل باکهایت و
          سنجیو سینگ راه‌اندازی شد و به‌روزرسانی‌های شبکه‌های اجتماعی،
          وبلاگ‌ها و میکروبلاگ‌ها را در یک صفحه کنار هم می‌آورد.
        </p>
        <p style={{ margin: 0 }}>
          فیس‌بوک فرندفید را در سال ۲۰۰۹ خرید. یکی از ویژگی‌های شاخص آن
          به‌روزرسانی زنده فید بدون نیاز به رفرش صفحه بود، فناوری‌ای که آن
          زمان کمتر سایتی داشت.
        </p>
      </div>
    </header>
  );
};
