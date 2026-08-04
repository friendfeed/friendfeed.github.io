import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconRoom, IconUsers, IconStar, IconBlog } from "../icons/Icons";

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
 */
const items = [
  { to: "/", label: "خانه", icon: IconRoom },
  { to: "/users", label: "کاربران", icon: IconUsers },
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
