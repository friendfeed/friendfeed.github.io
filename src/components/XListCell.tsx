import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";
import { IconX } from "../icons/Icons";

const BASE = import.meta.env.BASE_URL;

export interface XListRecord {
  handle: string;
  displayName: string;
  imagePath: string | null;
  /** Which public/images subfolder to look in, e.g. "brands" */
  imageFolder?: string;
}

const liveAvatarUrl = (handle: string) =>
  `https://unavatar.io/x/${encodeURIComponent(handle)}?fallback=false`;

/**
 * Generic X-list card -- same anatomy as XPodcastCell (single X action
 * row, live-first avatar cascade) used for all 7 new category pages.
 *
 * Avatar cascade:
 *   1. Live X photo via unavatar.io
 *   2. Local webp at public/images/<imageFolder>/<handle>.webp
 *      (derived automatically when imagePath is null, so you only need
 *       to drop correctly-named files into the folder -- no JSON edits)
 *   3. DefaultAvatar fallback
 */
export const XListCell: FC<{ item: XListRecord; imageFolder: string }> = ({
  item,
  imageFolder,
}) => {
  // Derive local path from imagePath in JSON, or fall back to
  // images/<folder>/<handle>.webp — so dropping a correctly-named
  // file into the folder is all that's needed, no JSON edit required.
  const localPath =
    item.imagePath ?? `images/${imageFolder}/${item.handle}.webp`;

  const [stage, setStage] = useState<"live" | "local" | "none">("live");

  let imgSrc: string | null = null;
  if (stage === "live") {
    imgSrc = liveAvatarUrl(item.handle);
  } else if (stage === "local") {
    imgSrc = `${BASE}${localPath}`;
  }

  const handleImgError = () => {
    if (stage === "live") setStage("local");
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
              alt={item.displayName}
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
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid var(--ff-border)",
              }}
            >
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
            {item.displayName}
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
            @{item.handle}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", borderTop: "1px solid var(--ff-border)" }}>
        <a
          href={`https://x.com/${item.handle}`}
          target="_blank"
          rel="noreferrer"
          title={`ایکس: x.com/${item.handle}`}
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
