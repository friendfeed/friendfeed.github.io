import { useMemo } from "react";
import raw from "../data/xUsers.json";
import type { XUserRecord } from "../models/XUser";

export function useXUsers(): XUserRecord[] {
  return useMemo(() => {
    const list = raw as XUserRecord[];
    // Stable alphabetical-ish ordering by display name so pagination is
    // deterministic across renders (Persian collation via localeCompare).
    return [...list].sort((a, b) => a.displayName.localeCompare(b.displayName, "fa"));
  }, []);
}
