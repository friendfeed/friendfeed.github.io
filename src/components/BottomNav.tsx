import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
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
  IconMenu,
  IconClose,
} from "../icons/Icons";

type IconComp = FC<{ width?: number; height?: number }>;

interface DrawerItem {
  to: string;
  label: string;
  icon: IconComp;
}

interface DrawerSection {
  heading: string;
  items: DrawerItem[];
}

const DRAWER_SECTIONS: DrawerSection[] = [
  {
    heading: "فرندفید",
    items: [
      { to: "/subscriptions", label: "همه کاربران فرندفید", icon: IconUsers },
      { to: "/rooms", label: "اتاق‌ها", icon: IconX },
    ],
  },
  {
    heading: "در ایکس",
    items: [
      { to: "/users", label: "کاربران فرندفید", icon: IconX },
      { to: "/podcasts", label: "پادکست", icon: IconMusic },
      { to: "/brands", label: "برندها", icon: IconBrand },
      { to: "/news", label: "خبرگزاری‌ها", icon: IconNewspaper },
      { to: "/startups", label: "استارت‌آپ‌ها", icon: IconRocket },
      { to: "/orgs", label: "ادارات و سازمان‌ها", icon: IconBuilding },
      { to: "/books", label: "کتاب‌ها", icon: IconBook },
      { to: "/daily-life", label: "زندگی روزمره", icon: IconSun },
      { to: "/embassies", label: "سفارت‌ها", icon: IconFlag },
    ],
  },
  {
    heading: "اطلاعات",
    items: [
      { to: "/faq", label: "سوالات متداول", icon: IconStar },
      { to: "/magazine", label: "مجله فرندفید", icon: IconBlog },
    ],
  },
];

const DRAWER_PATHS = new Set(
  DRAWER_SECTIONS.flatMap((s) => s.items.map((i) => i.to))
);

const TABS: { to: string; label: string; icon: IconComp }[] = [
  { to: "/", label: "خانه", icon: IconRoom },
  { to: "/subscriptions", label: "مشترکین", icon: IconUsers },
  { to: "/users", label: "ایکس", icon: IconX },
  { to: "/faq", label: "سوالات", icon: IconStar },
  { to: "/magazine", label: "مجله", icon: IconBlog },
];

export const BottomNav: FC = () => {
  const { pathname: rawPathname } = useLocation();
  const pathname =
    rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e: TouchEvent | MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [drawerOpen]);

  const drawerActive = DRAWER_PATHS.has(pathname);

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 28,
            background: "rgba(0,0,0,0.35)",
          }}
        />
      )}

      {/* Slide-up drawer -- rendered in DOM always, shown/hidden via
          transform. The .ff-hamburger-drawer class is what the CSS
          media query uses to make this visible only on mobile. */}
      <div
        ref={drawerRef}
        className="ff-hamburger-drawer"
        style={{
          position: "fixed",
          insetInlineStart: 0,
          insetInlineEnd: 0,
          bottom: "calc(var(--ff-bottom-nav-height) + var(--ff-safe-bottom))",
          zIndex: 29,
          background: "#fff",
          borderTop: "1px solid var(--ff-border)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
          borderRadius: "14px 14px 0 0",
          transform: drawerOpen ? "translateY(0)" : "translateY(110%)",
          transition: "transform 260ms cubic-bezier(0.32,0.72,0,1)",
          maxHeight: "72vh",
          overflowY: "auto",
        }}
        aria-hidden={!drawerOpen}
      >
        {/* Drag handle */}
        <div
          style={{
            width: 36,
            height: 4,
            borderRadius: 2,
            background: "#ccc",
            margin: "10px auto 8px",
          }}
        />

        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 16px 10px",
            borderBottom: "1px solid var(--ff-border)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: "bold",
              color: "var(--ff-muted)",
              letterSpacing: "0.04em",
            }}
          >
            منو
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="بستن منو"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ff-muted)",
              padding: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconClose width={18} height={18} />
          </button>
        </div>

        {/* Sectioned nav */}
        <nav aria-label="منوی کامل">
          {DRAWER_SECTIONS.map((section, si) => (
            <div key={section.heading}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "var(--ff-muted)",
                  letterSpacing: "0.05em",
                  padding: "10px 18px 4px",
                  textTransform: "uppercase",
                }}
              >
                {section.heading}
              </div>

              {section.items.map(({ to, label, icon: Icon }) => {
                const active = pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "11px 18px",
                      fontSize: 13.5,
                      fontWeight: active ? "bold" : "normal",
                      color: active ? "var(--ff-text)" : "var(--ff-link)",
                      textDecoration: "none",
                      background: active ? "var(--ff-panel-alt)" : "transparent",
                      borderBottom: "1px solid var(--ff-border)",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        display: "flex",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: active ? "var(--ff-text)" : "var(--ff-muted)",
                      }}
                    >
                      <Icon width={17} height={17} />
                    </span>
                    {label}
                  </Link>
                );
              })}

              {si < DRAWER_SECTIONS.length - 1 && (
                <div style={{ height: 6, background: "var(--ff-panel-alt)" }} />
              )}
            </div>
          ))}
        </nav>

        <div style={{ height: "max(var(--ff-safe-bottom), 12px)" }} />
      </div>

      {/* Fixed tab bar */}
      <nav className="ff-bottom-nav" aria-label="ناوبری اصلی">
        {TABS.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="ff-bottom-nav-item"
              data-active={active}
            >
              <Icon width={20} height={20} />
              <span>{label}</span>
            </Link>
          );
        })}

        <button
          onClick={() => setDrawerOpen((v) => !v)}
          className="ff-bottom-nav-item"
          data-active={drawerActive || drawerOpen}
          aria-label="منوی بیشتر"
          aria-expanded={drawerOpen}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {drawerOpen ? (
            <IconClose width={20} height={20} />
          ) : (
            <IconMenu width={20} height={20} />
          )}
          <span>بیشتر</span>
        </button>
      </nav>
    </>
  );
};
