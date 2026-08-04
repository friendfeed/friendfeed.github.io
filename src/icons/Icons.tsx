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
