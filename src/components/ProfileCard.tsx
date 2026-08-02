import type { FC } from "react";
import { Link } from "react-router-dom";
import { FriendFeedUser } from "../models/FriendFeedUser";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { IconUsers, IconLock } from "../icons/Icons";

const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><rect width='48' height='48' fill='#dbe6ef'/><text x='24' y='30' font-size='20' text-anchor='middle' fill='#7c93a6' font-family='sans-serif'>؟</text></svg>`
  );

export const ProfileCard: FC<{ user: FriendFeedUser }> = ({ user }) => {
  const img = user.currentProfileImage || FALLBACK_IMG;
  const subs = user.bestSubscriberCount;
  return (
    <Link
      to={`/user/${user.id}`}
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        background: "var(--ff-panel)",
        border: "1px solid var(--ff-border)",
        borderRadius: "var(--ff-radius-md)",
        padding: 8,
        width: 240,
        boxShadow: "var(--ff-shadow-panel)",
        color: "var(--ff-text)",
      }}
    >
      <img
        src={img}
        alt={user.displayName}
        width={44}
        height={44}
        style={{
          borderRadius: 4,
          border: "1px solid var(--ff-border-strong)",
          objectFit: "cover",
          background: "#fff",
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
        }}
      />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontWeight: 700,
            fontSize: 13,
            color: "var(--ff-blue-dark)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {user.displayName}
          {user.hadPrivacyToggle && (
            <IconLock width={11} height={11} color="var(--ff-muted)" />
          )}
        </div>
        <div style={{ fontSize: 11, color: "var(--ff-muted)" }}>
          @{user.username}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 3,
            alignItems: "center",
            fontSize: 11,
            color: "var(--ff-muted)",
          }}
        >
          {typeof subs === "number" && (
            <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <IconUsers width={11} height={11} />
              {subs}
            </span>
          )}
          {user.xMatch && <ConfidenceBadge level={user.xConfidence} />}
        </div>
      </div>
    </Link>
  );
};
