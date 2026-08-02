import type { FC } from "react";
import { MatchConfidence } from "../models/types";

const LABELS: Record<MatchConfidence, string> = {
  [MatchConfidence.Confirmed]: "تایید شده",
  [MatchConfidence.Probable]: "احتمالی",
  [MatchConfidence.Speculative]: "حدسی",
  [MatchConfidence.Unverified]: "بررسی نشده",
};

const COLORS: Record<MatchConfidence, string> = {
  [MatchConfidence.Confirmed]: "var(--ff-confirmed)",
  [MatchConfidence.Probable]: "var(--ff-probable)",
  [MatchConfidence.Speculative]: "var(--ff-speculative)",
  [MatchConfidence.Unverified]: "var(--ff-unverified)",
};

export const ConfidenceBadge: FC<{ level: MatchConfidence; title?: string }> = ({
  level,
  title,
}) => {
  const color = COLORS[level];
  const dashed = level === MatchConfidence.Speculative || level === MatchConfidence.Unverified;
  return (
    <span
      title={title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 11,
        fontWeight: 600,
        color,
        border: `1px ${dashed ? "dashed" : "solid"} ${color}`,
        borderRadius: 999,
        padding: "2px 8px",
        background: "#fff",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {LABELS[level]}
    </span>
  );
};
