import type { FC, CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconRoom,
  IconUsers,
  IconStar,
  IconBlog,
  IconX,
  IconMusic,
  IconBrand,
  IconNewspaper,
  IconRocket,
  IconBuilding,
  IconBook,
  IconSun,
  IconFlag,
} from "../icons/Icons";

const itemStyle = (active: boolean): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 7,
  padding: "4px 0",
  fontSize: 12.5,
  fontWeight: active ? "bold" : "normal",
  color: active ? "var(--ff-text)" : "var(--ff-link)",
  textDecoration: "none",
});

const SectionLabel: FC<{ children: string }> = ({ children }) => (
  <div
    style={{
      fontSize: 10,
      fontWeight: "bold",
      color: "var(--ff-muted)",
      letterSpacing: "0.04em",
      padding: "10px 0 4px",
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

const Divider = () => (
  <div style={{ borderTop: "1px solid var(--ff-border)", margin: "6px 0" }} />
);

export const Sidebar: FC = () => {
  const { pathname: rawPathname } = useLocation();
  const pathname =
    rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  const link = (to: string, label: string, Icon: FC<{ width?: number; height?: number }>) => (
    <Link to={to} style={itemStyle(pathname === to)}>
      <Icon width={13} height={13} />
      {label}
    </Link>
  );

  return (
    <aside
      className="ff-sidebar"
      style={{
        width: "var(--ff-sidebar-width)",
        flexShrink: 0,
        padding: "16px 4px 16px 0",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: 1 }}>

        {/* Section 1: FriendFeed archive */}
        {link("/", "خانه", IconRoom)}
        {link("/subscriptions", "همه کاربران فرندفید", IconUsers)}
        {link("/rooms", "اتاق‌ها", IconRoom)}

        <Divider />

        {/* Section 2: X / ایکس directory */}
        <SectionLabel>در ایکس</SectionLabel>
        {link("/users", "کاربران فرندفید", IconX)}
        {link("/podcasts", "پادکست", IconMusic)}
        {link("/brands", "برندها", IconBrand)}
        {link("/news", "خبرگزاری‌ها", IconNewspaper)}
        {link("/startups", "استارت‌آپ‌ها", IconRocket)}
        {link("/orgs", "ادارات و سازمان‌ها", IconBuilding)}
        {link("/books", "کتاب‌ها", IconBook)}
        {link("/daily-life", "زندگی روزمره", IconSun)}
        {link("/embassies", "سفارت‌ها", IconFlag)}

        <Divider />

        {/* Section 3: Meta */}
        {link("/faq", "سوالات متداول", IconStar)}
        {link("/magazine", "مجله فرندفید", IconBlog)}
      </nav>
    </aside>
  );
};
