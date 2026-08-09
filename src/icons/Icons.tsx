import type { FC, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconStar: FC<IconProps> = (p) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6-5.9-3.4-5.9 3.4 1.3-6.6-4.9-4.6 6.6-.7z" />
  </svg>
);

export const IconComment: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H5.5L3 22l.7-4.6A8.5 8.5 0 1 1 21 11.5Z" />
  </svg>
);

export const IconRoom: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M3 9.5 12 3l9 6.5V21H3z" />
    <path d="M9 21v-7h6v7" />
  </svg>
);

export const IconBlog: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3Z" />
    <path d="M9 9h7M9 13h7M9 17h4" />
  </svg>
);

export const IconTwitter: FC<IconProps> = (p) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.7 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.6.1-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.5a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1Z" />
  </svg>
);

/** Official X (post-2023) logo mark -- used as a small badge over the
 *  "live" profile photo so it reads as "this is where they are now",
 *  separate from the legacy bird mark above which is kept for any older
 *  context. Path is the official X brand glyph. */
export const IconX: FC<IconProps> = (p) => (
  <svg {...base(p)} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);

export const IconFacebook: FC<IconProps> = (p) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.7c0-.4.3-.7.5-.7Z" />
  </svg>
);

export const IconMusic: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </svg>
);

export const IconBookmark: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M6 3h12v18l-6-4-6 4Z" />
  </svg>
);

export const IconPhoto: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="10" r="1.5" />
    <path d="M21 16l-5.5-5L7 19" />
  </svg>
);

export const IconVideo: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3Z" />
  </svg>
);

export const IconLink: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1.5 1.5" />
    <path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1.5-1.5" />
  </svg>
);

export const IconCalendar: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

export const IconPyramid: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 3l9 18H3Z" />
    <path d="M8.5 10h7M6 15h12" />
  </svg>
);

export const IconArchive: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="5" rx="1" />
    <path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
    <path d="M10 13h4" />
  </svg>
);

export const IconLock: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const IconUsers: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15 20a5 5 0 0 1 6-4.8" />
  </svg>
);

/** Generic RSS/feed glyph, used for the Google Reader timeline entry. */
export const IconRss: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="6" cy="18" r="1.6" fill="currentColor" stroke="none" />
    <path d="M4 11.5a8.5 8.5 0 0 1 8.5 8.5" />
    <path d="M4 5.5a14.5 14.5 0 0 1 14.5 14.5" />
  </svg>
);

/** Bluesky "butterfly" mark -- same glyph used across the site (blog post
 *  share buttons and the footer) so the icon is consistent everywhere. */
export const IconBluesky: FC<IconProps> = (p) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 8.6C10.6 5.9 6.9 2.4 4.4 3.3 3 3.8 3.4 6 3.9 8.7c.6 3.4 1.9 6 5.1 6.9-3.5 1.1-5.7 3.3-6.9 6.4-.4 1 .5 1.6 1.4 1.3 4.3-1.6 6.4-3.8 7.6-6.5 1.2 2.7 3.3 4.9 7.6 6.5.9.3 1.8-.3 1.4-1.3-1.2-3.1-3.4-5.3-6.9-6.4 3.2-.9 4.5-3.5 5.1-6.9.5-2.7.9-4.9-.5-5.4-2.5-.9-6.2 2.6-7.6 5.3Z" />
  </svg>
);


/** Generic "switched off / retired" glyph, used for shutdown events on
 *  the timeline (Yahoo 360, Google Reader, Google+, FriendFeed itself). */
export const IconOff: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 3v8" />
    <path d="M6.5 6.5a8 8 0 1 0 11 0" />
  </svg>
);

/** Generic layered-squares glyph for a general-purpose social network
 *  entry on the timeline (Yahoo 360, Google+) where we deliberately avoid
 *  reproducing any brand's actual logo mark. */
export const IconNetwork: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

/** Hamburger / menu icon */
export const IconMenu: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);

/** Close / X icon for the drawer */
export const IconClose: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/** Shopping tag / brand icon */
export const IconBrand: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

/** Newspaper icon for news / رسانه */
export const IconNewspaper: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10M7 12h10M7 16h6" />
  </svg>
);

/** Rocket icon for startups */
export const IconRocket: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

/** Building / org icon */
export const IconBuilding: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 22V12h6v10" />
    <path d="M8 7h1M11 7h1M14 7h1M8 11h1M11 11h1M14 11h1" />
  </svg>
);

/** Open book icon */
export const IconBook: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

/** Sun / daily life icon */
export const IconSun: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

/** Flag / embassy icon */
export const IconFlag: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

