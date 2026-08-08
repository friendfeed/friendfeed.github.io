import type { FC } from "react";

/**
 * Recreates FriendFeed's classic default-avatar placeholder: a plain
 * black-lined smiley face on a light gray square. Visible throughout the
 * archived screenshots for any user without a custom photo, so this is
 * reproduced deliberately rather than using a generic broken-image icon.
 */
export const DefaultAvatar: FC<{ size?: number }> = ({ size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    role="img"
    aria-label="بدون تصویر پروفایل"
    // svg's default display is inline, which leaves a few px of
    // baseline whitespace below it -- same as the classic "extra gap
    // under an <img>" bug. Inside a size-less wrapper div (see the
    // *UserCell/*Cell components, which just do overflow:hidden +
    // border-radius:50% around this with no explicit width/height),
    // that gap made the wrapper a few px taller than it is wide, so
    // border-radius:50% drew an oval instead of a circle, with a
    // visible white strip at the bottom. display:block removes the
    // gap entirely -- the box is exactly size x size again.
    style={{ display: "block" }}
  >
    <rect width="64" height="64" fill="#efefef" />
    <circle cx="32" cy="32" r="22" fill="none" stroke="#333" strokeWidth="2.5" />
    <circle cx="24" cy="27" r="2.6" fill="#333" />
    <circle cx="40" cy="27" r="2.6" fill="#333" />
    <path
      d="M21 38c3 5 8 8 11 8s8-3 11-8"
      fill="none"
      stroke="#333"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
