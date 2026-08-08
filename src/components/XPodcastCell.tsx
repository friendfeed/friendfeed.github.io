import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";
import { IconX } from "../icons/Icons";
import type { XPodcastRecord } from "../models/XPodcast";

const BASE = import.meta.env.BASE_URL;

/**
 * Live-first avatar loading, same cascade as XUserCell: unavatar.io
 * resolves a real X profile photo by handle; `fallback=false` makes it
 * 404 instead of returning a placeholder silhouette when it has nothing,
 * so <img onError> below can fall through to our own local webp (once
 * one exists for that handle) instead of unavatar's generic one.
 */
const liveAvatarUrl = (handle: string) =>
  `https://unavatar.io/x/${encodeURIComponent(handle)}?fallback=false`;

/**
 * Same card anatomy as XUserCell (the FriendFeed-in-X crossover list),
 * minus the FriendFeed side entirely: this dataset has no archived
 * FriendFeed account to link to, so there's a single, full-width X
 * action row instead of the two-way split action bar. Images live in
 * their own /images/xpodcasts/ folder, independent of the crossover
 * list's /images/x/ folder, per the source list being a completely
 * separate dataset.
 */
export const XPodcastCell: FC<{ podcast: XPodcastRecord }> = ({ podcast }) => {
  const [stage, setStage] = useState<"live" | "local" | "none">("live");

  let imgSrc: string | null = null;
  if (stage === "live") {
    imgSrc = liveAvatarUrl(podcast.handle);
  } else if (stage === "local" && podcast.imagePath) {
    imgSrc = `${BASE}${podcast.imagePath}`;
  }

  const handleImgError = () => {
    if (stage === "live") setStage(podcast.imagePath ? "local" : "none");
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
              alt={podcast.displayName}
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
            <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--ff-border)" }}>
              <DefaultAvatar size={52} />
            </div>
          )}
          <span
            title="حساب در ایکس"
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
            {podcast.displayName}
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
            @{podcast.handle}
          </div>
        </div>
      </div>

      {/* Single full-width X action row -- no archive/FriendFeed side,
          this dataset has none. */}
      <div style={{ display: "flex", borderTop: "1px solid var(--ff-border)" }}>
        <a
          href={`https://x.com/${podcast.handle}`}
          target="_blank"
          rel="noreferrer"
          title={`ایکس: x.com/${podcast.handle}`}
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
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <IconX width={9} height={9} color="#fff" />
          </span>
          ایکس
        </a>
      </div>
    </div>
  );
};
