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
 * Live-first avatar loading, via unavatar.io (a free proxy that resolves
 * a real X profile photo by handle -- direct hotlinking to x.com itself
 * doesn't work: x.com/handle/photo is a JS-rendered webpage, not an
 * image file, and X has no public unauthenticated endpoint that returns
 * one). `fallback=false` makes unavatar return a 404 instead of a
 * generic placeholder when the handle has no photo (or doesn't exist),
 * so our own <img onError> below can reliably fall through to the local
 * webp snapshot instead of unavatar's silhouette.
 *
 * Note: unavatar's free tier is rate-limited (tens of requests/day per
 * visitor IP). Once exhausted, these requests 429/404 and every card
 * just falls through to the local webp for the rest of that visitor's
 * session -- same as before this feature existed, not broken.
 */
const liveAvatarUrl = (handle: string) =>
  `https://unavatar.io/x/${encodeURIComponent(handle)}?fallback=false`;

/**
 * Redesign pass: previous version used a square, un-cropped photo with a
 * boxy badge and two flat grey buttons that read as an afterthought.
 * This version:
 *  - crops the avatar into a circle (the near-universal "this is a
 *    person" convention) with a crisper current-account badge sitting on
 *    its edge, using the real X brand mark;
 *  - gives the card a touch of radius + a slightly stronger shadow on
 *    hover so it reads as an interactive/clickable unit rather than a
 *    flat data row -- an intentional, small departure from the rest of
 *    the site's flat FriendFeed-authentic chrome, scoped to this one
 *    "modern crossover" card;
 *  - turns the two links into a single, evenly-weighted action row with
 *    a clear hover state instead of a static grey bar.
 *
 * Avatar source cascades: live X photo (unavatar) -> local webp snapshot
 * -> generic default avatar. Each stage only kicks in once the previous
 * one has failed to load.
 */
export const XUserCell: FC<{ user: XUserRecord }> = ({ user }) => {
  const [stage, setStage] = useState<"live" | "local" | "none">("live");
  const archiveHandle = user.friendfeedHandle || user.handle;

  let imgSrc: string | null = null;
  if (stage === "live") {
    imgSrc = liveAvatarUrl(user.handle);
  } else if (stage === "local" && user.imagePath) {
    imgSrc = `${BASE}${user.imagePath}`;
  }

  const handleImgError = () => {
    if (stage === "live") setStage(user.imagePath ? "local" : "none");
    else if (stage === "local") setStage("none");
  };

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
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={user.displayName}
              width={52}
              height={52}
              style={{
                borderRadius: "50%",
                border: "1px solid var(--ff-border)",
                objectFit: "cover",
                background: "#fff",
                display: "block",
              }}
              onError={handleImgError}
            />
          ) : (
            <div style={{ borderRadius: "50%", overflow: "hidden", border: "1px solid var(--ff-border)" }}>
              <DefaultAvatar size={52} />
            </div>
          )}
          {/* Current-account badge on the photo itself, using the real X
              mark -- this is the live identity, so it gets the mark
              directly on the avatar. */}
          <span
            title="حساب فعلی در ایکس"
            style={{
              position: "absolute",
              bottom: -3,
              insetInlineStart: -3,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#000",
              border: "2px solid var(--ff-panel)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconX width={10} height={10} color="#fff" />
          </span>
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

      {/* Single evenly-weighted action row -- two icon+label links with a
          clear hover fill, separated by a thin divider instead of a flat
          grey background block. */}
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
          className="ff-x-card-action"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "10px 6px",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ff-muted)",
            borderInlineEnd: "1px solid var(--ff-border)",
          }}
        >
          <img
            src="/brand/ff-badge.webp"
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
          className="ff-x-card-action"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "10px 6px",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ff-text)",
          }}
        >
          <IconX width={11} height={11} />
          ایکس
        </a>
      </div>
    </div>
  );
};
