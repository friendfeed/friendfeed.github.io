/**
 * A former FriendFeed community member tracked to their current X (Twitter)
 * account. Deliberately simpler than FriendFeedUser: this dataset was
 * supplied directly as (name, handle, photo) triples rather than mined
 * from individual archived profiles, so it carries no snapshot/subscription
 * history -- just enough to render the identification list.
 */
export interface XUserRecord {
  handle: string;
  displayName: string;
  imagePath: string | null;
  /** Optional override when the FriendFeed username differed from the
   *  current X handle -- falls back to `handle` when absent. */
  friendfeedHandle?: string;
}
