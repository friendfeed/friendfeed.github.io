import { useState } from "react";
import type { FC } from "react";
import { useDirectory } from "../services/useDirectory";
import { ProfileCard } from "../components/ProfileCard";

export const HomePage: FC = () => {
  const dir = useDirectory();
  const groups = dir.groupByYear();
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const visible =
    activeYear === "all" ? groups : groups.filter((g) => g.year === activeYear);

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
        <h1 style={{ fontSize: 18 }}>آرشیو کاربران فارسی‌زبان فرندفید</h1>
        <p style={{ color: "var(--ff-muted)", margin: 0 }}>
          این صفحه جامعه فارسی‌زبان فرندفید را بر اساس سالی که اولین رد پای
          آن‌ها در آرشیو یافت شده مرتب می‌کند. تعداد کاربران هر سال، حداقلِ
          شواهد ثبت‌شده است، نه لزوماً تاریخ دقیق عضویت؛ با ادامه بررسی
          آرشیو، این اعداد کامل‌تر خواهند شد.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          gap: 6,
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <YearTab active={activeYear === "all"} onClick={() => setActiveYear("all")}>
          همه سال‌ها ({dir.size})
        </YearTab>
        {groups.map((g) => (
          <YearTab
            key={g.year}
            active={activeYear === g.year}
            onClick={() => setActiveYear(g.year)}
          >
            {g.year} ({g.users.length})
          </YearTab>
        ))}
      </div>

      {visible.length === 0 && (
        <EmptyState />
      )}

      {visible.map((g) => (
        <section key={g.year} style={{ marginBottom: 24 }}>
          <h2
            style={{
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid var(--ff-border)",
              paddingBottom: 6,
            }}
          >
            سال {g.year}
            <span style={{ fontWeight: 400, color: "var(--ff-muted)", fontSize: 12 }}>
              {g.users.length} کاربر شناسایی‌شده
            </span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
            {g.users.map((u) => (
              <ProfileCard key={u.id} user={u} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const YearTab: FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({
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

const EmptyState: FC = () => (
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
    هنوز کاربری برای این بازه ثبت نشده است. داده‌های تأییدشده از آرشیو را اضافه
    کنید تا این بخش تکمیل شود.
  </div>
);
