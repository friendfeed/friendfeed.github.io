import type { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSearch } from "../services/SearchContext";
import { RoomCell } from "../components/RoomCell";
import type { RoomRecord } from "../components/RoomCell";
import { useSEO } from "../seo/useSEO";
import roomsData from "../data/rooms.json";

// Same page size as the other two directory pages, so browsing feels
// identical across all three.
const PAGE_SIZE = 20;

/**
 * Rebuilt to be pixel-for-pixel the same page as <XCrossoverPage> and
 * <SubscriptionsPage>: same header/count line, same URL-param
 * pagination (?page=N) with the same windowed numbered-links +
 * "صفحه بعد »" control, same search (via the shared header search box /
 * SearchContext -- independent per route, so it never leaks into or
 * out of the other two directory pages -- not a page-local input), same
 * card grid gap. The only intentional difference lives in <RoomCell>
 * itself: a single "آرشیو" action and no current-account badge, same as
 * <FriendFeedUserCell>, since rooms only ever link to one place.
 */
export const RoomsPage: FC = () => {
  useSEO({ path: "/rooms" });
  const rooms = roomsData as RoomRecord[];
  const { query } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam - 1 : 0;

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? rooms.filter(
        (r) =>
          r.name.toLowerCase().includes(normalizedQuery) ||
          r.slug.toLowerCase().includes(normalizedQuery)
      )
    : rooms;

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * PAGE_SIZE;
  const pageRooms = filtered.slice(start, start + PAGE_SIZE);

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
        <h1 style={{ fontSize: 14 }}>اتاق‌های فرندفید</h1>
        <span style={{ fontSize: 11.5, color: "var(--ff-muted)" }}>
          {normalizedQuery
            ? `${filtered.length} نتیجه از ${rooms.length} اتاق`
            : `${rooms.length} اتاق`}
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
          موردی با این نام پیدا نشد.
        </div>
      ) : (
        <>
          <PageNav page={safePage} pageCount={pageCount} onGo={goTo} />

          <div
            className="ff-x-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 14px",
            }}
          >
            {pageRooms.map((r) => (
              <RoomCell key={r.slug} room={r} />
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
  const hrefFor = (p: number) => (p === 0 ? "/rooms" : `/rooms?page=${p + 1}`);

  // Windowed page list -- always show the first and last page, plus up
  // to 2 pages either side of the current one, with "…" filling any
  // gap. Without this a large result set renders every single page
  // number in one unreadable, unbounded row.
  const pages: number[] = [];
  const radius = 2;
  for (let p = 0; p < pageCount; p++) {
    if (p === 0 || p === pageCount - 1 || Math.abs(p - page) <= radius) {
      pages.push(p);
    }
  }

  return (
    <div className="ff-page-nav" style={{ fontSize: 12.5, display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
      {pages.map((p, i) => {
        const prevP = pages[i - 1];
        const showEllipsis = prevP !== undefined && p - prevP > 1;
        return (
          <span key={p} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {showEllipsis && <span style={{ color: "var(--ff-muted)", fontSize: 12.5 }}>…</span>}
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
