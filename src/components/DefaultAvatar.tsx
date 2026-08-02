import type { FC } from "react";

/**
 * Recreates FriendFeed's classic default-avatar placeholder: a plain
 * black-lined smiley face on a light gray square. Visible throughout the
 * archived screenshots for any user without a custom photo, so this is
 * reproduced deliberately rather than using a generic broken-image icon.
 */
export const DefaultAvatar: FC<{ size?: number }> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="بدون تصویر پروفایل">
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
