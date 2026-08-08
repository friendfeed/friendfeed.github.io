import { useMemo } from "react";
import raw from "../data/xPodcasts.json";
import type { XPodcastRecord } from "../models/XPodcast";

export function useXPodcasts(): XPodcastRecord[] {
  return useMemo(() => {
    const list = raw as XPodcastRecord[];
    // Straight list order from the source CSV (X list export order) --
    // unlike useXUsers there's no "has a mapped handle" grouping here,
    // every record already carries a real X handle by definition.
    return list;
  }, []);
}
