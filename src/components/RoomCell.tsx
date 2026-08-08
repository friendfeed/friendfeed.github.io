import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";

export interface RoomRecord {
  name: string;
  slug: string;
  avatar?: string;
  hasRealAvatar?: boolean;
}

const getArchiveUrl = (slug: string): string =>
  `https://web.archive.org/web/20150000000000*/http://friendfeed.com/rooms/${slug}`;

/**
 * Same card anatomy as <XUserCell> / <FriendFeedUserCell> (172px card,
 * 52px circular avatar, name/handle block, single-row action footer) so
 * all three directory grids -- X-crossover, all FriendFeed users, and
 * rooms -- read as one consistent site. Like <FriendFeedUserCell>, this
 * has no current-account badge (rooms were never matched to an X
 * account) and a single "آرشیو" action, since a room only ever links to
 * one place: its archived FriendFeed page.
 */
export const RoomCell: FC<{ room: RoomRecord }> = ({ room }) => {
  const [failed, setFailed] = useState(false);
  const showImg = room.avatar && !failed;

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
              src={room.avatar}
              alt={room.name}
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
            <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--ff-border)" }}>
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
            {room.name}
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
            @{room.slug}
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
          href={getArchiveUrl(room.slug)}
          target="_blank"
          rel="noreferrer"
          title={`آرشیو فرندفید: friendfeed.com/rooms/${room.slug}`}
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
