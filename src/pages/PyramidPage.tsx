import { useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useDirectory } from "../services/useDirectory";
import type { PyramidEntry } from "../services/UserDirectory";

type Mode = "oldest" | "subscribers";

export const PyramidPage: FC = () => {
  const dir = useDirectory();
  const [mode, setMode] = useState<Mode>("oldest");

  const entries: PyramidEntry[] =
    mode === "oldest" ? dir.pyramidByOldest() : dir.pyramidBySubscribers();

  // Render top-down, largest tier at bottom: reverse so rank 1 is at the
  // narrow top of the pyramid and later ranks widen out beneath it.
  const tiers = buildTiers(entries);

  return (
    <div>
      <section
        style={{
          background: "var(--ff-panel)",
          border: "1px solid var(--ff-border)",
          borderRadius: "var(--ff-radius-md)",
          padding: 16,
          marginBottom: 16,
          boxShadow: "var(--ff-shadow-panel)",
        }}
      >
        <h1 style={{ fontSize: 18 }}>هرم رتبه‌بندی</h1>
        <p style={{ color: "var(--ff-muted)", margin: "0 0 10px" }}>
          دو معیار مستقل برای رتبه‌بندی: قدیمی‌ترین حساب‌های شناسایی‌شده در
          آرشیو، و کاربرانی با بیشترین تعداد دنبال‌کننده ثبت‌شده. این رتبه‌بندی
          فقط بر اساس داده‌های واقعاً استخراج‌شده از آرشیو است؛ کاربرانی که
          هنوز بررسی نشده‌اند در این فهرست ظاهر نمی‌شوند.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <ModeTab active={mode === "oldest"} onClick={() => setMode("oldest")}>
            قدیمی‌ترین حساب‌ها
          </ModeTab>
          <ModeTab active={mode === "subscribers"} onClick={() => setMode("subscribers")}>
            بیشترین دنبال‌کننده
          </ModeTab>
        </div>
      </section>

      {entries.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "var(--ff-muted)",
            background: "var(--ff-panel)",
            border: "1px dashed var(--ff-border-strong)",
            borderRadius: "var(--ff-radius-md)",
          }}
        >
          داده کافی برای این رتبه‌بندی وجود ندارد.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ display: "flex", gap: 6, flexWrap: "nowrap" }}>
              {tier.map((entry) => (
                <Link
                  key={entry.user.id}
                  to={`/user/${entry.user.id}`}
                  title={entry.user.displayName}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 68,
                    height: 68,
                    background: "var(--ff-blue-pale)",
                    border: "1px solid var(--ff-border)",
                    borderRadius: 4,
                    color: "var(--ff-text)",
                    fontSize: 10,
                    textAlign: "center",
                    padding: 4,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={entry.user.currentProfileImage}
                    alt=""
                    width={26}
                    height={26}
                    style={{ borderRadius: "50%", objectFit: "cover", marginBottom: 3 }}
                  />
                  <span style={{ fontWeight: 700, fontSize: 9 }}>#{entry.rank}</span>
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: 60,
                    }}
                  >
                    {entry.user.displayName}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/** Splits ranked entries into widening rows: 1, 2, 3, 4... so it visually
 *  reads as a pyramid with rank #1 alone at the apex. */
function buildTiers(entries: PyramidEntry[]): PyramidEntry[][] {
  const tiers: PyramidEntry[][] = [];
  let i = 0;
  let rowSize = 1;
  while (i < entries.length) {
    tiers.push(entries.slice(i, i + rowSize));
    i += rowSize;
    rowSize += 1;
  }
  return tiers;
}

const ModeTab: FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({
  active,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    style={{
      border: `1px solid ${active ? "var(--ff-blue)" : "var(--ff-border)"}`,
      background: active ? "var(--ff-blue)" : "var(--ff-panel)",
      color: active ? "#fff" : "var(--ff-text)",
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 12,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
);
