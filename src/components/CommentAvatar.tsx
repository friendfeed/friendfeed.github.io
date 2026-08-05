import type { FC } from "react";

/**
 * Small colored-circle-with-initial avatar for the fake comment threads
 * on the گودر page (GoogleReaderPage.tsx). Google Reader/Gmail-era
 * accounts without a photo showed exactly this: a flat colored circle
 * with a single letter. Color is derived deterministically from the
 * username so the same commenter always gets the same color across
 * posts, without needing any image assets.
 */
const palette = ["#4184f3", "#db4437", "#f4b400", "#0f9d58", "#7b5db8", "#e07b39", "#3aa6a6"];

function colorFor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return palette[hash % palette.length];
}

export const CommentAvatar: FC<{ user: string; size?: number }> = ({ user, size = 22 }) => {
  const initial = user.replace(/[^a-zA-Z0-9]/g, "")[0]?.toUpperCase() ?? "?";
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: colorFor(user),
        color: "#fff",
        fontSize: size * 0.5,
        fontWeight: "bold",
        fontFamily: "Arial, Helvetica, sans-serif",
        flexShrink: 0,
      }}
    >
      {initial}
    </span>
  );
};
