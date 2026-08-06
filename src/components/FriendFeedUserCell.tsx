import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";

export interface FriendFeedSubscriberRecord {
  name: string;
  username: string;
  avatar?: string;
  hasRealAvatar?: boolean;
}

const getArchiveUrl = (username: string): string =>
  `https://web.archive.org/web/20150000000000*/http://friendfeed.com/${username}`;

/**
 * Same card anatomy as <XUserCell> (172px card, 52px circular avatar,
 * name + handle block, single-row action footer) so the Subscriptions
 * grid reads as the same site as the X-crossover grid. Two intentional
 * differences from XUserCell, per instruction: no current-account badge
 * on the photo (these people were never matched to a current X account)
 * and a single full-width action button instead of two, since there's
 * only one place to send someone -- the archived FriendFeed profile.
 */
export const FriendFeedUserCell: FC<{ user: FriendFeedSubscriberRecord }> = ({ user }) => {
  const [failed, setFailed] = useState(false);
  const showImg = user.avatar && !failed;

  return (
    <div
      className="ff-x-card"
      style={{
        display: "flex",
        flexDirection: "column",
        width: 172,
        background: "var(--ff-panel)",
        border: "1px solid var(--ff-border)",
        borderRadius: 10,
        overflow: "hidden",
        flexShrink: 0,
        transition: "box-shadow 120ms ease, transform 120ms ease",
      }}
    >
      <div style={{ display: "flex", gap: 12, padding: "16px 14px 14px" }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          {showImg ? (
            <img
              src={user.avatar}
              alt={user.name}
              width={52}
              height={52}
              loading="lazy"
              style={{
                borderRadius: "50%",
                border: "1px solid var(--ff-border)",
                objectFit: "cover",
                background: "#fff",
                display: "block",
              }}
              onError={() => setFailed(true)}
            />
          ) : (
            <div style={{ borderRadius: "50%", overflow: "hidden", border: "1px solid var(--ff-border)" }}>
              <DefaultAvatar size={52} />
            </div>
          )}
        </div>

        <div style={{ minWidth: 0, paddingTop: 3 }}>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: "bold",
              color: "var(--ff-text)",
              lineHeight: 1.4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {user.name}
          </div>
          <div
            style={{
              marginTop: 3,
              fontSize: 11,
              color: "var(--ff-muted-light)",
              direction: "ltr",
              textAlign: "right",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            @{user.username}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          borderTop: "1px solid var(--ff-border)",
        }}
      >
        <a
          href={getArchiveUrl(user.username)}
          target="_blank"
          rel="noreferrer"
          title={`آرشیو فرندفید: friendfeed.com/${user.username}`}
          className="ff-x-card-action"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            padding: "10px 6px",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ff-text)",
          }}
        >
          <img
            src="/brand/ff-badge.webp"
            alt=""
            width={16}
            height={16}
            style={{ display: "block", borderRadius: 4, flexShrink: 0 }}
          />
          آرشیو
        </a>
      </div>
    </div>
  );
};
