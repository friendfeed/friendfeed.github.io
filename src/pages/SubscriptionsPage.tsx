import type { FC } from "react";
import { useState, useMemo } from "react";
import { useSEO } from "../seo/useSEO";
import usersData from "../data/users-subscriptions.json";

interface FriendFeedUser {
  name: string;
  username: string;
}

// Placeholder for user image - in production, you'd fetch these from somewhere
const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%23cccccc' width='64' height='64'/%3E%3C/svg%3E";

const getArchiveUrl = (username: string): string => {
  return `https://web.archive.org/web/20150000000000*/http://friendfeed.com/${username}`;
};

const UserCard: FC<{ user: FriendFeedUser }> = ({ user }) => {
  return (
    <a
      href={getArchiveUrl(user.username)}
      target="_blank"
      rel="noreferrer"
      style={cardStyle}
    >
      <img
        src={DEFAULT_AVATAR}
        alt={user.name}
        width={64}
        height={64}
        style={{
          borderRadius: "var(--ff-radius)",
          border: "1px solid var(--ff-border)",
          objectFit: "cover",
          width: "100%",
          height: "auto",
          marginBottom: 8,
        }}
      />
      <div style={{ fontSize: 12.5, fontWeight: 500, marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis" }}>
        {user.name}
      </div>
      <div style={{ fontSize: 11, color: "var(--ff-muted)", overflow: "hidden", textOverflow: "ellipsis" }}>
        @{user.username}
      </div>
    </a>
  );
};

export const SubscriptionsPage: FC = () => {
  useSEO({ path: "/subscriptions" });
  const [searchQuery, setSearchQuery] = useState("");

  const users: FriendFeedUser[] = usersData as FriendFeedUser[];

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }
    const query = searchQuery.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.username.toLowerCase().includes(query)
    );
  }, [searchQuery, users]);

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
        <h1 style={{ fontSize: 14, margin: 0 }}>مشترکان فرندفید</h1>
        <span style={{ fontSize: 11.5, color: "var(--ff-muted)" }}>
          {searchQuery
            ? `${filteredUsers.length} نتیجه از ${users.length} کاربر`
            : `${users.length} کاربر`}
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
          placeholder="جستجو بر اساس نام یا نام کاربری..."
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

      {filteredUsers.length === 0 ? (
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
          <p>کاربری با این معیار پیدا نشد.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 12,
          }}
        >
          {filteredUsers.map((user) => (
            <UserCard key={user.username} user={user} />
          ))}
        </div>
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
