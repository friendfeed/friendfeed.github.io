import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";
import { IconX } from "../icons/Icons";
import type { XUserRecord } from "../models/XUser";

const BASE = import.meta.env.BASE_URL;

/**
 * FriendFeed's real archive.org capture window sits roughly between 2007
 * and mid-2015 (the site was shut down by Facebook in 2015). A "*" year
 * wildcard on the capture timestamp gives the Wayback Machine's calendar
 * view for that path, which is what we want here: land on whatever
 * snapshots exist for that username rather than one exact date.
 */
const archiveUrl = (handle: string) =>
  `https://web.archive.org/web/20150000000000*/http://friendfeed.com/${handle}`;

/**
 * A single person, one card -- not two separate boxes. UX rationale:
 * showing the same person as two disconnected cards reads as two
 * different people at a glance; the badge/chip pattern below (one photo,
 * a small "which era" badge on it, two clearly-labeled link buttons)
 * is the same "before/after" convention used by profile-migration and
 * verified-account UIs, so it stays legible without a caption explaining
 * what's going on.
 *
 * Spacing pass: the first version packed everything edge-to-edge (8px
 * card padding, 4-8px internal gaps, 10px text) which read as cramped --
 * dense card grids like this need *more* air per item, not less, since
 * there's nothing else on the page competing for attention. Padding,
 * gaps and line-height below are all bumped up from the first pass with
 * that in mind, and each row (photo+identity, then link buttons) gets
 * clear separation instead of touching the card edges.
 */
export const XUserCell: FC<{ user: XUserRecord }> = ({ user }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = !!user.imagePath && !imgFailed;
  const imgSrc = showImage ? `${BASE}${user.imagePath}` : null;
  const archiveHandle = user.friendfeedHandle || user.handle;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 168,
        background: "var(--ff-panel)",
        border: "1px solid var(--ff-border)",
        boxShadow: "var(--ff-card-shadow)",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 12, padding: "14px 12px 12px" }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={user.displayName}
              width={50}
              height={50}
              style={{
                border: "1px solid var(--ff-border)",
                objectFit: "cover",
                background: "#fff",
                display: "block",
              }}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div style={{ border: "1px solid var(--ff-border)" }}>
              <DefaultAvatar size={50} />
            </div>
          )}
          {/* Current-account badge on the photo itself -- this is the live
              identity, so it gets the mark directly on the avatar. */}
          <span
            title="حساب فعلی در ایکس"
            style={{
              position: "absolute",
              bottom: -4,
              left: -4,
              width: 17,
              height: 17,
              borderRadius: "50%",
              background: "#000",
              border: "2px solid #fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconX width={10} height={10} color="#fff" />
          </span>
        </div>

        <div style={{ minWidth: 0, paddingTop: 2 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "var(--ff-link)",
              lineHeight: 1.4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {user.displayName}
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
            @{user.handle}
          </div>
        </div>
      </div>

      {/* Two clearly-labeled, icon-led buttons rather than plain text
          links -- keeps "which link goes where" unambiguous even without
          reading the Farsi label, per the icon+label convention used for
          this kind of dual-destination card. */}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid var(--ff-border)",
        }}
      >
        <a
          href={archiveUrl(archiveHandle)}
          target="_blank"
          rel="noreferrer"
          title={`آرشیو فرندفید: friendfeed.com/${archiveHandle}`}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "9px 6px",
            fontSize: 11,
            color: "var(--ff-muted)",
            background: "var(--ff-panel-alt)",
            borderInlineEnd: "1px solid var(--ff-border)",
          }}
        >
          <img
            src="./brand/ff-badge.webp"
            alt=""
            width={13}
            height={13}
            style={{ display: "block", borderRadius: 2 }}
          />
          آرشیو
        </a>
        <a
          href={`https://x.com/${user.handle}`}
          target="_blank"
          rel="noreferrer"
          title={`ایکس: x.com/${user.handle}`}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "9px 6px",
            fontSize: 11,
            color: "var(--ff-link)",
            background: "var(--ff-panel-alt)",
          }}
        >
          <IconX width={11} height={11} />
          ایکس
        </a>
      </div>
    </div>
  );
};
