import type { FC } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../services/SearchContext";
import xUsersRaw from "../data/xUsers.json";

const toPersianDigits = (n: number) =>
  n.toString().replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

/**
 * Header rebuilt to match the real archived FriendFeed chrome: white
 * background, wordmark logo, a functional search box (filters the list on
 * the active page via SearchContext), and plain flat nav text.
 *
 * Two-column layout: logo + live user count anchored to the left, search
 * box + tagline anchored to the right -- each pair grouped together
 * rather than the logo/search sitting alone with copy underneath both.
 * DOM order below is search-block-then-logo-block on purpose: this is an
 * RTL document, so in a row flex container the first child renders on
 * the *right* and the second on the *left* -- putting the logo block
 * second is what actually lands it on the left edge.
 */
export const Header: FC = () => {
  const { query, setQuery } = useSearch();
  const userCount = xUsersRaw.length;

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid var(--ff-border)" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 24px 16px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "nowrap",
        }}
      >
        <div style={{ minWidth: 0, maxWidth: 460 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی نام یا نام کاربری..."
              style={{
                border: "1px solid var(--ff-border)",
                borderRadius: 2,
                padding: "6px 10px",
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
                padding: "6px 12px",
                fontSize: 12,
                cursor: "default",
                color: "var(--ff-text)",
                fontFamily: "inherit",
              }}
            >
              جستجو
            </button>
          </div>
          <p
            style={{
              margin: "10px 0 0",
              fontSize: 12,
              fontWeight: "bold",
              color: "var(--ff-text)",
              lineHeight: 1.9,
            }}
          >
            فرندفید آسان‌ترین راه برای اشتراک مطالب در اینترنت است.
          </p>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 12,
              color: "var(--ff-muted)",
              lineHeight: 1.9,
            }}
          >
            این سرویس در اکتبر ۲۰۰۷ توسط برت تیلور، جیم نوریس، پل باکهایت و
            سنجیو سینگ راه‌اندازی شد و به‌روزرسانی‌های شبکه‌های اجتماعی،
            وبلاگ‌ها و میکروبلاگ‌ها را در یک صفحه کنار هم می‌آورد. فیس‌بوک
            فرندفید را در سال ۲۰۰۹ خرید. یکی از ویژگی‌های شاخص آن
            به‌روزرسانی زنده فید بدون نیاز به رفرش صفحه بود، فناوری‌ای که آن
            زمان کمتر سایتی داشت.
          </p>
        </div>

        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/brand/friendfeed-wordmark.webp"
              alt="FriendFeed"
              style={{ height: 34, display: "block" }}
            />
          </Link>
          <div
            style={{
              marginTop: 8,
              fontSize: 11.5,
              color: "var(--ff-muted)",
            }}
          >
            {toPersianDigits(userCount)} کاربر
          </div>
        </div>
      </div>
    </header>
  );
};
