import type { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSearch } from "../services/SearchContext";
import { XListCell } from "../components/XListCell";
import type { XListRecord } from "../components/XListCell";
import { useSEO } from "../seo/useSEO";

const PAGE_SIZE = 20;

const toPersianDigits = (n: number) =>
  n.toString().replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

interface XListPageProps {
  /** Route path, e.g. "/brands" -- used for SEO and pagination links. */
  path: string;
  /** Farsi page heading shown above the grid. */
  title: string;
  /** Farsi singular/plural noun used in the count label, e.g. "برند". */
  noun: string;
  /** The full dataset for this category. */
  items: XListRecord[];
  /** Subfolder under public/images/ where local avatars live, e.g. "brands" */
  imageFolder: string;
}

const PageNav: FC<{
  path: string;
  page: number;
  pageCount: number;
  onGo: (p: number) => void;
}> = ({ path, page, pageCount, onGo }) => {
  if (pageCount <= 1) return null;
  const hrefFor = (p: number) => (p === 0 ? path : `${path}?page=${p + 1}`);

  const pages: number[] = [];
  const radius = 2;
  for (let p = 0; p < pageCount; p++) {
    if (p === 0 || p === pageCount - 1 || Math.abs(p - page) <= radius) {
      pages.push(p);
    }
  }

  return (
    <div
      className="ff-page-nav"
      style={{
        fontSize: 12.5,
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginBottom: 8,
        flexWrap: "wrap",
      }}
    >
      {pages.map((p, i) => {
        const prevP = pages[i - 1];
        const showEllipsis = prevP !== undefined && p - prevP > 1;
        return (
          <span key={p} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {showEllipsis && (
              <span style={{ color: "var(--ff-muted)", fontSize: 12.5 }}>…</span>
            )}
            <Link
              to={hrefFor(p)}
              onClick={(e) => {
                e.preventDefault();
                onGo(p);
              }}
              style={{
                fontWeight: p === page ? "bold" : "normal",
                color: p === page ? "var(--ff-text)" : "var(--ff-link)",
                fontSize: 12.5,
              }}
            >
              {p + 1}
            </Link>
          </span>
        );
      })}
      {page < pageCount - 1 && (
        <Link
          to={hrefFor(page + 1)}
          onClick={(e) => {
            e.preventDefault();
            onGo(page + 1);
          }}
          style={{ color: "var(--ff-link)", fontSize: 12.5 }}
        >
          صفحه بعد »
        </Link>
      )}
    </div>
  );
};

export const XListPage: FC<XListPageProps> = ({ path, title, noun, items, imageFolder }) => {
  useSEO({ path });
  const { query } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam - 1 : 0;

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? items.filter(
        (u) =>
          u.displayName.toLowerCase().includes(normalizedQuery) ||
          u.handle.toLowerCase().includes(normalizedQuery)
      )
    : items;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setSearchParams(p === 0 ? {} : { page: String(p + 1) });
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
        <h1 style={{ fontSize: 14 }}>{title}</h1>
        <span style={{ fontSize: 11.5, color: "var(--ff-muted)" }}>
          {normalizedQuery
            ? `${toPersianDigits(filtered.length)} نتیجه از ${toPersianDigits(items.length)} ${noun}`
            : `${toPersianDigits(items.length)} ${noun}`}
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
          <PageNav path={path} page={safePage} pageCount={pageCount} onGo={goTo} />

          <div
            className="ff-x-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 14px",
            }}
          >
            {pageItems.map((item) => (
              <XListCell key={item.handle} item={item} imageFolder={imageFolder} />
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <PageNav path={path} page={safePage} pageCount={pageCount} onGo={goTo} />
          </div>
        </>
      )}
    </div>
  );
};
