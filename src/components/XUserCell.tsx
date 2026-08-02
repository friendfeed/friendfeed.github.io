import type { FC } from "react";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";
import type { XUserRecord } from "../models/XUser";

const BASE = import.meta.env.BASE_URL;

export const XUserCell: FC<{ user: XUserRecord }> = ({ user }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = user.imagePath && !imgFailed;

  return (
    <a
      href={`https://x.com/${user.handle}`}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 108,
        textAlign: "center",
        color: "var(--ff-text)",
        padding: "8px 4px",
      }}
    >
      {showImage ? (
        <img
          src={`${BASE}${user.imagePath}`}
          alt={user.displayName}
          width={64}
          height={64}
          style={{
            border: "1px solid var(--ff-border)",
            objectFit: "cover",
            background: "#fff",
          }}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div style={{ border: "1px solid var(--ff-border)" }}>
          <DefaultAvatar />
        </div>
      )}
      <div
        style={{
          marginTop: 5,
          fontSize: 11.5,
          fontWeight: "bold",
          color: "var(--ff-link)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: 100,
        }}
      >
        {user.displayName}
      </div>
      <div
        style={{
          fontSize: 10.5,
          color: "var(--ff-muted-light)",
          direction: "ltr",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: 100,
        }}
      >
        @{user.handle}
      </div>
    </a>
  );
};
