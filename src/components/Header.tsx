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
 * box anchored to the right -- each pair grouped together rather than
 * the logo/search sitting alone with copy underneath both. DOM order
 * below is search-block-then-logo-block on purpose: this is an RTL
 * document, so in a row flex container the first child renders on the
 * *right* and the second on the *left* -- putting the logo block second
 * is what actually lands it on the left edge.
 *
 * The long "what is FriendFeed" paragraph that used to live here has
 * moved to the homepage (/) -- it's a proper landing page now, so the
 * header itself stays lean, matching the real archived chrome (search +
 * logo, no marketing copy in every page's header).
 */
export const Header: FC = () => {
  const { query, setQuery } = useSearch();
  const userCount = xUsersRaw.length;

  return (
    <header className="ff-app-header" style={{ background: "#fff", borderBottom: "1px solid var(--ff-border)" }}>
      <div
        className="ff-app-header-inner"
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
        <div className="ff-app-header-search" style={{ minWidth: 0, maxWidth: 460 }}>
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
        </div>

        <div className="ff-app-header-brand" style={{ textAlign: "center", flexShrink: 0 }}>
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
