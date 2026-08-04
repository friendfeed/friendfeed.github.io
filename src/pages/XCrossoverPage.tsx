import type { FC } from "react";
import { useState } from "react";
import { useXUsers } from "../services/useXUsers";
import { useSearch } from "../services/SearchContext";
import { XUserCell } from "../components/XUserCell";
import { useSEO } from "../seo/useSEO";

const PAGE_SIZE = 20;

export const XCrossoverPage: FC = () => {
  useSEO({ path: "/" });
  const users = useXUsers();
  const { query } = useSearch();
  const [page, setPage] = useState(0);

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? users.filter(
        (u) =>
          u.displayName.toLowerCase().includes(normalizedQuery) ||
          u.handle.toLowerCase().includes(normalizedQuery)
      )
    : users;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * PAGE_SIZE;
  const pageUsers = filtered.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 6,
        }}
      >
        <h1 style={{ fontSize: 14 }}>آرشیو و کاربران فعلی</h1>
        <span style={{ fontSize: 11.5, color: "var(--ff-muted)" }}>
          {normalizedQuery
            ? `${filtered.length} نتیجه از ${users.length} کاربر`
            : `${users.length} کاربر`}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div
          style={{
            padding: "30px 10px",
            textAlign: "center",
            color: "var(--ff-muted)",
            fontSize: 12.5,
          }}
        >
          موردی با این نام یا نام کاربری پیدا نشد.
        </div>
      ) : (
        <>
          <PageNav page={safePage} pageCount={pageCount} onGo={goTo} />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 14px",
            }}
          >
            {pageUsers.map((u) => (
              <XUserCell key={u.handle} user={u} />
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <PageNav page={safePage} pageCount={pageCount} onGo={goTo} />
          </div>
        </>
      )}
    </div>
  );
};

const PageNav: FC<{ page: number; pageCount: number; onGo: (p: number) => void }> = ({
  page,
  pageCount,
  onGo,
}) => {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i);
  return (
    <div style={{ fontSize: 12.5, display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onGo(p)}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
            fontWeight: p === page ? "bold" : "normal",
            color: p === page ? "var(--ff-text)" : "var(--ff-link)",
            fontSize: 12.5,
          }}
        >
          {p + 1}
        </button>
      ))}
      {page < pageCount - 1 && (
        <button
          onClick={() => onGo(page + 1)}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
            color: "var(--ff-link)",
            fontSize: 12.5,
          }}
        >
          صفحه بعد »
        </button>
      )}
    </div>
  );
};
