import type { FC } from "react";
import { useState, useMemo, useEffect } from "react";
import { useSEO } from "../seo/useSEO";
import roomsData from "../data/rooms.json";

interface FriendFeedRoom {
  name: string;
  slug: string;
  avatar?: string;
  hasRealAvatar?: boolean;
}

// Same page size as the Subscriptions page, for a consistent browsing feel.
const PAGE_SIZE = 72;

// Rooms share the same avatar folder as users (per instruction), so this
// points at the exact same fallback file as SubscriptionsPage.
const FALLBACK_AVATAR = "/avatars/users/_fallback.webp";

const getArchiveUrl = (slug: string): string => {
  return `https://web.archive.org/web/20150000000000*/http://friendfeed.com/rooms/${slug}`;
};

const RoomCard: FC<{ room: FriendFeedRoom }> = ({ room }) => {
  return (
    <a
      href={getArchiveUrl(room.slug)}
      target="_blank"
      rel="noreferrer"
      style={cardStyle}
    >
      <img
        src={room.avatar || FALLBACK_AVATAR}
        alt={room.name}
        width={64}
        height={64}
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = FALLBACK_AVATAR;
        }}
        style={{
          borderRadius: "var(--ff-radius)",
          border: "1px solid var(--ff-border)",
          objectFit: "cover",
          width: "100%",
          height: "auto",
          aspectRatio: "1 / 1",
          marginBottom: 8,
        }}
      />
      <div
        style={{
          fontSize: 12.5,
          fontWeight: 500,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          lineHeight: 1.3,
        }}
      >
        {room.name}
      </div>
    </a>
  );
};

const PageButton: FC<{
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, disabled, onClick, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      minWidth: 28,
      height: 28,
      padding: "0 6px",
      fontSize: 12,
      fontFamily: "inherit",
      borderRadius: "var(--ff-radius)",
      border: "1px solid var(--ff-border)",
      background: active ? "var(--ff-accent, #3b6ea5)" : "var(--ff-panel)",
      color: active ? "#fff" : disabled ? "var(--ff-muted)" : "inherit",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }}
  >
    {children}
  </button>
);

const Pagination: FC<{
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}> = ({ page, totalPages, onChange }) => {
  const pages = useMemo(() => {
    const set = new Set<number>();
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || Math.abs(p - page) <= 2) set.add(p);
    }
    return Array.from(set).sort((a, b) => a - b);
  }, [page, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 8,
      }}
    >
      <PageButton disabled={page === 1} onClick={() => onChange(page - 1)}>
        ‹
      </PageButton>
      {pages.map((p, i) => {
        const prev = pages[i - 1];
        const showEllipsis = prev !== undefined && p - prev > 1;
        return (
          <span key={p} style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {showEllipsis && <span style={{ color: "var(--ff-muted)", fontSize: 12 }}>…</span>}
            <PageButton active={p === page} onClick={() => onChange(p)}>
              {p}
            </PageButton>
          </span>
        );
      })}
      <PageButton disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        ›
      </PageButton>
    </div>
  );
};

export const RoomsPage: FC = () => {
  useSEO({ path: "/rooms" });
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const rooms: FriendFeedRoom[] = roomsData as FriendFeedRoom[];

  const filteredRooms = useMemo(() => {
    if (!searchQuery.trim()) {
      return rooms;
    }
    const query = searchQuery.toLowerCase();
    return rooms.filter(
      (r) =>
        r.name.toLowerCase().includes(query) ||
        r.slug.toLowerCase().includes(query)
    );
  }, [searchQuery, rooms]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredRooms.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pageRooms = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredRooms.slice(start, start + PAGE_SIZE);
  }, [filteredRooms, currentPage]);

  const goToPage = (p: number) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    setPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ maxWidth: "100%", padding: "0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 16,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <h1 style={{ fontSize: 14, margin: 0 }}>اتاق‌های فرندفید</h1>
        <span style={{ fontSize: 11.5, color: "var(--ff-muted)" }}>
          {searchQuery
            ? `${filteredRooms.length} نتیجه از ${rooms.length} اتاق`
            : `${rooms.length} اتاق`}
        </span>
      </div>

      <div
        style={{
          background: "var(--ff-panel)",
          border: "1px solid var(--ff-border)",
          borderRadius: "var(--ff-radius)",
          padding: 12,
          marginBottom: 16,
          boxShadow: "var(--ff-shadow-panel)",
        }}
      >
        <input
          type="text"
          placeholder="جستجو بر اساس نام اتاق..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            fontSize: 13,
            border: "1px solid var(--ff-border)",
            borderRadius: "var(--ff-radius)",
            fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        />
      </div>

      {filteredRooms.length === 0 ? (
        <div
          style={{
            background: "var(--ff-panel)",
            border: "1px solid var(--ff-border)",
            borderRadius: "var(--ff-radius)",
            padding: 24,
            textAlign: "center",
            color: "var(--ff-muted)",
          }}
        >
          <p>اتاقی با این معیار پیدا نشد.</p>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 14,
            }}
          >
            {pageRooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>

          <Pagination page={currentPage} totalPages={totalPages} onChange={goToPage} />

          <div style={{ fontSize: 11, color: "var(--ff-muted)", textAlign: "center" }}>
            صفحه {currentPage} از {totalPages}
          </div>
        </>
      )}

      <div style={{ marginTop: 24, fontSize: 12, color: "var(--ff-muted)", textAlign: "center" }}>
        <p>تمام لینک‌ها به web.archive.org متصل می‌شوند</p>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: 12,
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: "var(--ff-radius)",
  textDecoration: "none",
  color: "inherit",
  transition: "all 120ms ease",
  cursor: "pointer",
};
