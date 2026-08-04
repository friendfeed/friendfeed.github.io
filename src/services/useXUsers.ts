import { useMemo } from "react";
import raw from "../data/xUsers.json";
import type { XUserRecord } from "../models/XUser";

export function useXUsers(): XUserRecord[] {
  return useMemo(() => {
    const list = raw as XUserRecord[];
    // Users with a known friendfeedHandle come first, keeping their original
    // xUsers.json order within that group (so newly-added handles land at
    // the end of the group instead of jumping to an alphabetical spot).
    // Users without a handle keep their existing alphabetical-ish ordering.
    const withHandle = list.filter((u) => u.friendfeedHandle);
    const withoutHandle = list
      .filter((u) => !u.friendfeedHandle)
      .sort((a, b) => a.displayName.localeCompare(b.displayName, "fa"));
    return [...withHandle, ...withoutHandle];
  }, []);
}
