import type { FC } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setDrawerOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Close on outside pointer-down — but only if the target is NOT the
  // hamburger button itself (which handles its own toggle via onClick).
  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        hamburgerRef.current?.contains(target) ||
        drawerRef.current?.contains(target)
      ) {
        return;
      }
      close();
    };
    // Use pointerdown so we capture before click fires
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [drawerOpen, close]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const drawerActive = DRAWER_PATHS.has(pathname);

  return (
    <>
      {/* Backdrop — tapping it closes the drawer */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 28,
          background: "rgba(0,0,0,0.4)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity 220ms ease",
        }}
        aria-hidden="true"
      />

      {/* Slide-up drawer */}
      <div
        ref={drawerRef}
        className="ff-hamburger-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="منوی کامل"
        style={{
          position: "fixed",
          insetInlineStart: 0,
          insetInlineEnd: 0,
          bottom: "calc(var(--ff-bottom-nav-height) + var(--ff-safe-bottom))",
          zIndex: 29,
          background: "#fff",
          borderTop: "1px solid var(--ff-border)",
          boxShadow: "0 -8px 32px rgba(0,0,0,0.14)",
          borderRadius: "16px 16px 0 0",
          transform: drawerOpen ? "translateY(0)" : "translateY(100%)",
          // visible immediately on open; hidden only AFTER slide-out completes
          visibility: drawerOpen ? "visible" : "hidden",
          transition: drawerOpen
            ? "transform 280ms cubic-bezier(0.32,0.72,0,1)"
            : "transform 280ms cubic-bezier(0.32,0.72,0,1), visibility 0ms 280ms",
          maxHeight: "70vh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch" as never,
        }}
      >
        {/* Drag handle — purely decorative */}
        <div
          aria-hidden="true"
          style={{
            width: 40,
            height: 4,
            borderRadius: 2,
            background: "#ddd",
            margin: "12px auto 0",
          }}
        />

        {/* Sectioned nav — no close button inside the drawer.
            The hamburger in the tab bar is the single toggle. */}
        <nav aria-label="منوی کامل" style={{ paddingBottom: 8 }}>
          {DRAWER_SECTIONS.map((section, si) => (
            <div key={section.heading}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--ff-muted)",
                  letterSpacing: "0.06em",
                  padding: "14px 20px 6px",
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
                    className="ff-drawer-item"
                    data-active={active}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 20px",
                      fontSize: 14,
                      fontWeight: active ? 700 : 400,
                      color: active ? "var(--ff-text)" : "var(--ff-link)",
                      textDecoration: "none",
                      background: active ? "var(--ff-panel-alt)" : "transparent",
                      borderBottom: "1px solid var(--ff-border)",
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        display: "flex",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: active ? "var(--ff-link)" : "var(--ff-muted)",
                      }}
                    >
                      <Icon width={18} height={18} />
                    </span>
                    {label}
                  </Link>
                );
              })}

              {si < DRAWER_SECTIONS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{ height: 8, background: "var(--ff-panel-alt)" }}
                />
              )}
            </div>
          ))}
        </nav>

        <div style={{ height: "max(var(--ff-safe-bottom), 8px)" }} />
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
              <Icon width={22} height={22} />
              <span>{label}</span>
            </Link>
          );
        })}

        {/* Hamburger — single source of truth for open/close.
            onClick always toggles; the outside-pointerdown handler
            explicitly skips this button so the two don't fight. */}
        <button
          ref={hamburgerRef}
          onClick={() => setDrawerOpen((v) => !v)}
          className="ff-bottom-nav-item"
          data-active={drawerActive || drawerOpen}
          aria-label={drawerOpen ? "بستن منو" : "منوی بیشتر"}
          aria-expanded={drawerOpen}
          aria-controls="ff-main-drawer"
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 220ms ease",
              transform: drawerOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {drawerOpen ? (
              <IconClose width={22} height={22} />
            ) : (
              <IconMenu width={22} height={22} />
            )}
          </span>
          <span>بیشتر</span>
        </button>
      </nav>
    </>
  );
};
