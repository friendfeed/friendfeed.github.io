import type { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { useDirectory } from "../services/useDirectory";
import { ConfidenceBadge } from "../components/ConfidenceBadge";
import {
  IconComment,
  IconStar,
  IconRoom,
  IconLink,
  IconTwitter,
  IconArchive,
  IconLock,
} from "../icons/Icons";
import type { SocialPlatform } from "../models/types";

const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  blog: "وبلاگ",
  twitter: "توییتر",
  facebook: "فیس‌بوک",
  lastfm: "لست.اف‌ام",
  delicious: "دلیشس",
  flickr: "فلیکر",
  youtube: "یوتیوب",
  vimeo: "ویمیو",
  "google-reader": "گوگل‌ریدر",
  picasa: "پیکاسا",
  digg: "دیگ",
  reddit: "ردیت",
  other: "سایر",
};

export const ProfilePage: FC = () => {
  const { id } = useParams();
  const dir = useDirectory();
  const user = id ? dir.getById(id) : undefined;

  if (!user) {
    return (
      <div style={panelStyle}>
        <p>کاربری با این شناسه پیدا نشد.</p>
        <Link to="/">بازگشت به تقویم کاربران</Link>
      </div>
    );
  }

  const latest = user.latestSnapshot;
  const images = user.profileImageHistory;

  return (
    <div>
      <section style={{ ...panelStyle, display: "flex", gap: 16 }}>
        <img
          src={user.currentProfileImage}
          alt={user.displayName}
          width={72}
          height={72}
          style={{
            borderRadius: 6,
            border: "1px solid var(--ff-border-strong)",
            objectFit: "cover",
            background: "#fff",
          }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 18, display: "flex", alignItems: "center", gap: 8 }}>
            {user.displayName}
            {user.hadPrivacyToggle && (
              <span
                title="این حساب حداقل یک‌بار بین حالت عمومی و خصوصی تغییر کرده است"
                style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--ff-muted)", fontWeight: 400 }}
              >
                <IconLock width={12} height={12} /> سابقه خصوصی‌سازی
              </span>
            )}
          </h1>
          <div style={{ color: "var(--ff-muted)", marginBottom: 6 }}>@{user.username}</div>
          {latest?.bio && <p style={{ margin: "0 0 8px" }}>{latest.bio}</p>}
          <div style={{ display: "flex", gap: 14, fontSize: 12.5, color: "var(--ff-muted)" }}>
            {latest?.stats?.commentsAllTime !== undefined && (
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <IconComment width={13} height={13} color="var(--ff-comment)" />
                {latest.stats.commentsAllTime} نظر (کل)،{" "}
                {latest.stats.commentsThisWeek ?? 0} این هفته
              </span>
            )}
            {latest?.stats?.likesAllTime !== undefined && (
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <IconStar width={13} height={13} color="var(--ff-like)" />
                {latest.stats.likesAllTime} پسندیدن (کل)،{" "}
                {latest.stats.likesThisWeek ?? 0} این هفته
              </span>
            )}
          </div>
        </div>
      </section>

      {user.allLinks.length > 0 && (
        <section style={panelStyle}>
          <h2 style={sectionTitle}>
            <IconLink width={14} height={14} /> حساب‌های متصل
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {user.allLinks.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                style={linkChip}
              >
                {PLATFORM_LABELS[l.platform]}
                {l.label ? ` (${l.label})` : ""}
              </a>
            ))}
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section style={panelStyle}>
          <h2 style={sectionTitle}>تاریخچه تصویر پروفایل</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {images.map((img, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img
                  src={img.url}
                  width={56}
                  height={56}
                  alt=""
                  style={{ borderRadius: 4, border: "1px solid var(--ff-border-strong)", objectFit: "cover" }}
                />
                <div style={{ fontSize: 10, color: "var(--ff-muted)", marginTop: 3 }}>
                  {img.capturedAt}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(user.subscriptions.length > 0 || user.subscribers.length > 0) && (
        <section style={{ ...panelStyle, display: "flex", gap: 24, flexWrap: "wrap" }}>
          {user.subscriptions.length > 0 && (
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2 style={sectionTitle}>عضویت‌ها ({user.subscriptions.length}+)</h2>
              <PersonList list={user.subscriptions} directory={dir} />
            </div>
          )}
          {user.subscribers.length > 0 && (
            <div style={{ flex: 1, minWidth: 220 }}>
              <h2 style={sectionTitle}>دنبال‌کنندگان ({user.subscribers.length}+)</h2>
              <PersonList list={user.subscribers} directory={dir} />
            </div>
          )}
        </section>
      )}

      {user.allRooms.length > 0 && (
        <section style={panelStyle}>
          <h2 style={sectionTitle}>
            <IconRoom width={14} height={14} /> اتاق‌های مشترک
          </h2>
          <ul style={{ margin: 0, paddingInlineStart: 18 }}>
            {user.allRooms.map((r, i) => (
              <li key={i}>{r.url ? <a href={r.url}>{r.name}</a> : r.name}</li>
            ))}
          </ul>
        </section>
      )}

      <section style={panelStyle}>
        <h2 style={sectionTitle}>
          <IconArchive width={14} height={14} /> عکس‌های آرشیو
        </h2>
        <ul style={{ margin: 0, paddingInlineStart: 18, fontSize: 12.5 }}>
          {user.snapshots.map((s, i) => (
            <li key={i}>
              <a href={s.archiveUrl} target="_blank" rel="noreferrer">
                {s.capturedAt}
              </a>{" "}
              {s.isPrivate && (
                <span style={{ color: "var(--ff-muted)" }}> (در این تاریخ خصوصی بوده)</span>
              )}
              {s.notes && <div style={{ color: "var(--ff-muted)" }}>{s.notes}</div>}
            </li>
          ))}
        </ul>
      </section>

      {user.xMatch && (
        <section style={panelStyle}>
          <h2 style={sectionTitle}>
            <IconTwitter width={14} height={14} /> حساب فعلی در ایکس (X)
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <a href={user.xMatch.url} target="_blank" rel="noreferrer" style={{ fontWeight: 700 }}>
              @{user.xMatch.handle}
            </a>
            <ConfidenceBadge level={user.xMatch.confidence} />
            {user.xMatch.isLive && (
              <span style={{ fontSize: 11, color: "var(--ff-confirmed)" }}>
                ● هنوز فعال است
              </span>
            )}
          </div>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--ff-muted)" }}>
            {user.xMatch.reasoning}
          </p>
        </section>
      )}

      {user.generalNotes && (
        <section style={{ ...panelStyle, fontSize: 12, color: "var(--ff-muted)" }}>
          <strong>یادداشت پژوهشی: </strong>
          {user.generalNotes}
        </section>
      )}

      <Link to="/">← بازگشت به تقویم کاربران</Link>
    </div>
  );
};

const PersonList: FC<{ list: { displayName: string; username?: string }[]; directory: ReturnType<typeof useDirectory> }> = ({
  list,
  directory,
}) => (
  <ul style={{ margin: 0, paddingInlineStart: 18, fontSize: 12.5 }}>
    {list.map((p, i) => {
      const resolved = p.username ? directory.getByUsername(p.username) : undefined;
      return (
        <li key={i}>
          {resolved ? <Link to={`/user/${resolved.id}`}>{p.displayName}</Link> : p.displayName}
        </li>
      );
    })}
  </ul>
);

const panelStyle: React.CSSProperties = {
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: "var(--ff-radius-md)",
  padding: 16,
  marginBottom: 14,
  boxShadow: "var(--ff-shadow-panel)",
};

const sectionTitle: React.CSSProperties = {
  fontSize: 13,
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginBottom: 10,
};

const linkChip: React.CSSProperties = {
  background: "var(--ff-blue-pale)",
  border: "1px solid var(--ff-border)",
  borderRadius: 999,
  padding: "4px 10px",
  fontSize: 12,
};
