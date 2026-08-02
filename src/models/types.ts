// -----------------------------------------------------------------------------
// Core data types for the FriendFeed Farsi archive project.
//
// Design intent: every fact about a person carries its OWN evidence trail.
// We never store a bare "twitterUrl: string" on a user without also being
// able to say *why* we believe it belongs to them. This is what lets the
// site render "confirmed" vs "probable" vs "speculative" matches instead of
// presenting a guess as a fact.
// -----------------------------------------------------------------------------

/** How confident we are that a piece of linked data (usually an X/Twitter
 *  account) actually belongs to the same person as a FriendFeed profile.
 *  Implemented as a const object (not a TS `enum`) so it erases cleanly
 *  under isolated-declarations / erasableSyntaxOnly builds. */
export const MatchConfidence = {
  /** Direct textual proof: same username, or one profile explicitly links
   *  to the other (bio, blog, filter section). */
  Confirmed: "confirmed",
  /** Strong circumstantial evidence: matching photo + matching blog, or
   *  matching name + mutual mentions, but no direct link found. */
  Probable: "probable",
  /** Pattern-level similarity only (name resemblance, similar interests,
   *  interaction pattern). Flagged clearly, never asserted as fact. */
  Speculative: "speculative",
  /** No candidate match found/attempted yet. */
  Unverified: "unverified",
} as const;

export type MatchConfidence = (typeof MatchConfidence)[keyof typeof MatchConfidence];

export type SocialPlatform =
  | "blog"
  | "twitter"
  | "facebook"
  | "lastfm"
  | "delicious"
  | "flickr"
  | "youtube"
  | "vimeo"
  | "google-reader"
  | "picasa"
  | "digg"
  | "reddit"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  /** raw label as it appeared on the FriendFeed "filter" panel, if any */
  label?: string;
}

/** A reference to another user, as seen in a subscription/subscriber list.
 *  Kept intentionally loose because archived pages often show a display
 *  name without a resolvable username. */
export interface PersonRef {
  displayName: string;
  username?: string;
  /** internal id, filled in once we've matched this ref to a full record */
  resolvedId?: string;
}

export interface RoomRef {
  name: string;
  url?: string;
}

export interface EngagementStats {
  commentsThisWeek?: number;
  commentsAllTime?: number;
  likesThisWeek?: number;
  likesAllTime?: number;
}

/** One captured snapshot of a FriendFeed profile at a point in time.
 *  A user can (and often will) have several of these, since profiles
 *  changed photos, went private/public, gained subscribers, etc. */
export interface FriendFeedSnapshot {
  /** ISO date the snapshot was captured (the Wayback timestamp) */
  capturedAt: string;
  /** the exact web.archive.org URL this data came from */
  archiveUrl: string;
  bio?: string;
  profileImageUrl?: string;
  isPrivate?: boolean;
  stats?: EngagementStats;
  followingCount?: number;
  followersCount?: number;
  links: SocialLink[];
  subscriptions: PersonRef[];
  subscribers: PersonRef[];
  rooms: RoomRef[];
  /** free-text notes, e.g. "logo changed to Nowruz theme, credited to nimanilian" */
  notes?: string;
}

export interface XSnapshot {
  capturedAt: string;
  handle: string;
  displayName?: string;
  bio?: string;
  profileImageUrl?: string;
  url: string;
}

export interface XAccountMatch {
  handle: string;
  url: string;
  confidence: MatchConfidence;
  /** human-readable justification, always shown next to the confidence badge */
  reasoning: string;
  isLive?: boolean;
  snapshots?: XSnapshot[];
}

export interface FriendFeedUserData {
  id: string;
  username: string;
  displayName: string;
  /** true for the small set of non-Persian users adopted by the community
   *  (e.g. foreign users frequently interacting with Farsi users) */
  isHonoraryMember?: boolean;
  snapshots: FriendFeedSnapshot[];
  xMatch?: XAccountMatch;
  generalNotes?: string;
}
