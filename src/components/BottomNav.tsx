import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconRoom, IconUsers, IconStar, IconBlog, IconArchive } from "../icons/Icons";

/**
 * Mobile-only bottom tab bar -- the phone-native replacement for
 * <Sidebar> below the 680px breakpoint (see tokens.css: .ff-sidebar is
 * display:none there, .ff-bottom-nav only renders in that same range).
 * Fixed to the viewport bottom, sized and iconed like a native iOS/
 * Android app tab bar rather than a page footer link list.
 *
 * Renders unconditionally in the DOM (App.tsx mounts it on every route);
 * it's the CSS media query that decides whether it's actually on screen,
 * so there's no layout jump / hydration mismatch between breakpoints.
 *
 * Keep this in sync with <Sidebar> (desktop nav) -- both should expose
 * the same destinations so a link like اتاق‌ها is reachable regardless
 * of viewport width. IconRoom is (despite the name) a house glyph, used
 * for خانه; IconArchive (a lidded box) stands in for اتاق‌ها since rooms
 * are a contained space distinct from the open کاربران list.
 */
const items = [
  { to: "/", label: "خانه", icon: IconRoom },
  { to: "/users", label: "کاربران", icon: IconUsers },
  { to: "/rooms", label: "اتاق‌ها", icon: IconArchive },
  { to: "/faq", label: "سوالات", icon: IconStar },
  { to: "/magazine", label: "مجله", icon: IconBlog },
];

export const BottomNav: FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="ff-bottom-nav" aria-label="ناوبری اصلی">
      {items.map(({ to, label, icon: Icon }) => {
        const active = pathname === to;
        return (
          <Link key={to} to={to} className="ff-bottom-nav-item" data-active={active}>
            <Icon width={20} height={20} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
