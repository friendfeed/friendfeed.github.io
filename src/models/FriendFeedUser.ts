import type {
  FriendFeedUserData,
  FriendFeedSnapshot,
  XAccountMatch,
  SocialLink,
  RoomRef,
  PersonRef,
} from "./types";
import { MatchConfidence } from "./types";

/**
 * OOP wrapper around a person's full FriendFeed history.
 * Handles the "profile changed over time" reality directly: a user is not
 * one static bio, it's an ordered series of snapshots we merge sensibly.
 */
export class FriendFeedUser {
  readonly id: string;
  readonly username: string;
  readonly displayName: string;
  readonly isHonoraryMember: boolean;
  readonly snapshots: FriendFeedSnapshot[];
  readonly xMatch?: XAccountMatch;
  readonly generalNotes?: string;

  constructor(data: FriendFeedUserData) {
    this.id = data.id;
    this.username = data.username;
    this.displayName = data.displayName;
    this.isHonoraryMember = !!data.isHonoraryMember;
    this.xMatch = data.xMatch;
    this.generalNotes = data.generalNotes;
    this.snapshots = [...data.snapshots].sort(
      (a, b) => Date.parse(a.capturedAt) - Date.parse(b.capturedAt)
    );
  }

  get earliestSnapshot(): FriendFeedSnapshot | undefined {
    return this.snapshots[0];
  }

  get latestSnapshot(): FriendFeedSnapshot | undefined {
    return this.snapshots[this.snapshots.length - 1];
  }

  /** The year we treat as this user's "join year" for calendar placement.
   *  Uses the earliest snapshot we have evidence for; this is a lower bound,
   *  not necessarily their true signup date. */
  get firstKnownYear(): number | undefined {
    const s = this.earliestSnapshot;
    return s ? new Date(s.capturedAt).getFullYear() : undefined;
  }

  /** Every distinct profile image we've captured, oldest first, deduped by URL. */
  get profileImageHistory(): { url: string; capturedAt: string }[] {
    const seen = new Set<string>();
    const out: { url: string; capturedAt: string }[] = [];
    for (const s of this.snapshots) {
      if (s.profileImageUrl && !seen.has(s.profileImageUrl)) {
        seen.add(s.profileImageUrl);
        out.push({ url: s.profileImageUrl, capturedAt: s.capturedAt });
      }
    }
    return out;
  }

  get currentProfileImage(): string | undefined {
    return this.latestSnapshot?.profileImageUrl;
  }

  /** Merges links across all snapshots into one deduped list (by url). */
  get allLinks(): SocialLink[] {
    const seen = new Set<string>();
    const out: SocialLink[] = [];
    for (const s of this.snapshots) {
      for (const link of s.links) {
        const key = link.platform + "|" + link.url;
        if (!seen.has(key)) {
          seen.add(key);
          out.push(link);
        }
      }
    }
    return out;
  }

  get allRooms(): RoomRef[] {
    const seen = new Set<string>();
    const out: RoomRef[] = [];
    for (const s of this.snapshots) {
      for (const r of s.rooms) {
        if (!seen.has(r.name)) {
          seen.add(r.name);
          out.push(r);
        }
      }
    }
    return out;
  }

  /** Best-known subscriber count, from the most recent snapshot that has one. */
  get bestSubscriberCount(): number | undefined {
    for (let i = this.snapshots.length - 1; i >= 0; i--) {
      const c = this.snapshots[i].followersCount ?? this.snapshots[i].subscribers.length;
      if (c) return c;
    }
    return undefined;
  }

  get subscriptions(): PersonRef[] {
    const latest = this.latestSnapshot;
    return latest ? latest.subscriptions : [];
  }

  get subscribers(): PersonRef[] {
    const latest = this.latestSnapshot;
    return latest ? latest.subscribers : [];
  }

  /** Whether the account is known to have flipped between public/private
   *  at any point (interesting fact worth surfacing on the profile page). */
  get hadPrivacyToggle(): boolean {
    const states = this.snapshots.map((s) => !!s.isPrivate);
    return new Set(states).size > 1;
  }

  get xConfidence(): MatchConfidence {
    return this.xMatch?.confidence ?? MatchConfidence.Unverified;
  }

  static fromJSON(data: FriendFeedUserData): FriendFeedUser {
    return new FriendFeedUser(data);
  }
}
