import { useMemo } from "react";
import { UserDirectory } from "./UserDirectory";
import usersRaw from "../data/users.json";
import type { FriendFeedUserData } from "../models/types";

let cached: UserDirectory | null = null;

/** Loads the dataset once per app session. Swap the JSON import for a fetch
 *  call later if the dataset grows large enough to want lazy-loading. */
export function useDirectory(): UserDirectory {
  return useMemo(() => {
    if (!cached) {
      cached = new UserDirectory(usersRaw as unknown as FriendFeedUserData[]);
    }
    return cached;
  }, []);
}
