import type { FC, CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Recreates the classic FriendFeed left-hand nav column (Home / Me / Rooms
 * / Everyone) from the archived screenshot -- plain stacked text links,
 * no borders or pill backgrounds, bold when active. In the original
 * (LTR) site this column sat on the far left; in this localized Farsi
 * (RTL) build the whole page mirrors, so the equivalent column sits on
 * the far right instead, per the source layout logic rather than a
 * literal left/right copy.
 *
 * Items are mapped to what this project actually has pages for --
 * "خانه" (/) is the landing page and sits first, then "همه کاربران"
 * (the X-crossover directory, at /users), which is the main content of
 * the site. The rest are kept as labelled, inert placeholders matching
 * the source screenshot's structure so the chrome reads as authentic
 * FriendFeed rather than an invented menu.
 */
const itemStyle = (active: boolean): CSSProperties => ({
  display: "block",
  padding: "4px 0",
  fontSize: 12.5,
  fontWeight: active ? "bold" : "normal",
  color: active ? "var(--ff-text)" : "var(--ff-link)",
});

export const Sidebar: FC = () => {
  const { pathname } = useLocation();

  return (
    <aside
      className="ff-sidebar"
      style={{
        width: "var(--ff-sidebar-width)",
        flexShrink: 0,
        padding: "16px 4px 16px 0",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Link to="/" style={itemStyle(pathname === "/")}>
          خانه
        </Link>
        <Link to="/users" style={itemStyle(pathname === "/users")}>
          همه کاربران
        </Link>
        <span style={itemStyle(false)} aria-disabled="true">
          من
        </span>
        <span style={itemStyle(false)} aria-disabled="true">
          اتاق‌ها
        </span>
      </nav>

      <div
        style={{
          marginTop: 18,
          paddingTop: 10,
          borderTop: "1px solid var(--ff-border)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Link to="/faq" style={itemStyle(pathname === "/faq")}>
          سوالات متداول
        </Link>
        <Link to="/magazine" style={itemStyle(pathname === "/magazine")}>
          مجله فرندفید
        </Link>
        <Link
          to="/magazine/google-reader"
          style={{
            ...itemStyle(pathname === "/magazine/google-reader"),
            paddingRight: 12,
          }}
        >
          گودر (گوگل ریدر)
        </Link>
      </div>
    </aside>
  );
};
