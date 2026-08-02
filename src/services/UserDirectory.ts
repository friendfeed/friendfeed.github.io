import { FriendFeedUser } from "../models/FriendFeedUser";
import type { FriendFeedUserData } from "../models/types";
import { MatchConfidence } from "../models/types";

export interface YearGroup {
  year: number;
  users: FriendFeedUser[];
}

export interface PyramidEntry {
  user: FriendFeedUser;
  value: number;
  rank: number;
}

/**
 * Central in-memory index over the whole dataset. Built once from the raw
 * JSON, then queried by every page. Keeping this as a single class means
 * every page reasons about the data the same way (same year-bucketing rule,
 * same "best known" fallback rules, etc.) instead of duplicating logic.
 */
export class UserDirectory {
  readonly users: FriendFeedUser[];
  private byId = new Map<string, FriendFeedUser>();
  private byUsername = new Map<string, FriendFeedUser>();

  constructor(rawUsers: FriendFeedUserData[]) {
    this.users = rawUsers.map((u) => new FriendFeedUser(u));
    for (const u of this.users) {
      this.byId.set(u.id, u);
      this.byUsername.set(u.username.toLowerCase(), u);
    }
  }

  get size(): number {
    return this.users.length;
  }

  getById(id: string): FriendFeedUser | undefined {
    return this.byId.get(id);
  }

  getByUsername(username: string): FriendFeedUser | undefined {
    return this.byUsername.get(username.toLowerCase());
  }

  /** Groups users by their first known year, for the calendar/timeline view. */
  groupByYear(): YearGroup[] {
    const map = new Map<number, FriendFeedUser[]>();
    for (const u of this.users) {
      const y = u.firstKnownYear;
      if (!y) continue;
      if (!map.has(y)) map.set(y, []);
      map.get(y)!.push(u);
    }
    return [...map.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([year, users]) => ({
        year,
        users: users.sort((a, b) => a.displayName.localeCompare(b.displayName, "fa")),
      }));
  }

  /** Users with any X/Twitter account information at all, regardless of
   *  confidence level. Used by the "X crossover" page. */
  usersWithXPresence(): FriendFeedUser[] {
    return this.users.filter((u) => !!u.xMatch);
  }

  usersWithConfirmedX(): FriendFeedUser[] {
    return this.users.filter((u) => u.xConfidence === MatchConfidence.Confirmed);
  }

  usersStillLiveOnX(): FriendFeedUser[] {
    return this.users.filter((u) => u.xMatch?.isLive);
  }

  /** Pyramid ranking #1: oldest known accounts first (lowest capturedAt on
   *  earliest snapshot climbs to the top of the pyramid). */
  pyramidByOldest(): PyramidEntry[] {
    const withDates = this.users
      .filter((u) => u.earliestSnapshot)
      .map((u) => ({
        user: u,
        value: Date.parse(u.earliestSnapshot!.capturedAt),
      }))
      .sort((a, b) => a.value - b.value);

    return withDates.map((entry, i) => ({
      user: entry.user,
      value: entry.value,
      rank: i + 1,
    }));
  }

  /** Pyramid ranking #2: most subscribers first. */
  pyramidBySubscribers(): PyramidEntry[] {
    const withCounts = this.users
      .map((u) => ({ user: u, value: u.bestSubscriberCount ?? 0 }))
      .filter((e) => e.value > 0)
      .sort((a, b) => b.value - a.value);

    return withCounts.map((entry, i) => ({
      user: entry.user,
      value: entry.value,
      rank: i + 1,
    }));
  }

  /** Very simple "who interacts most" approximation from minimal information:
   *  count how many times each user appears in *other* users' subscription
   *  or subscriber lists. This is intentionally conservative: it only uses
   *  data we actually captured, and treats a subscription link as a weak
   *  signal of interaction, not proof of friendship. */
  interactionDegree(): Map<string, number> {
    const degree = new Map<string, number>();
    const bump = (username?: string) => {
      if (!username) return;
      const key = username.toLowerCase();
      degree.set(key, (degree.get(key) ?? 0) + 1);
    };
    for (const u of this.users) {
      for (const ref of [...u.subscriptions, ...u.subscribers]) {
        bump(ref.username);
      }
    }
    return degree;
  }
}
