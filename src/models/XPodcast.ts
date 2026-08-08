/**
 * An Iranian/Farsi podcast account tracked on X (Twitter). Sourced directly
 * from an X list export (display name + handle) rather than mined from
 * FriendFeed archives -- this dataset has no relation to the FriendFeed
 * crossover list (XUserRecord) and no archive.org link, since these
 * accounts never had a FriendFeed presence to begin with.
 */
export interface XPodcastRecord {
  handle: string;
  displayName: string;
  /** Relative path under /images/xpodcasts/, or null when no local
   *  snapshot has been added yet -- falls through to the live avatar /
   *  default avatar cascade in that case. */
  imagePath: string | null;
}
