import { createContext, useContext, useState, useCallback } from "react";
import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface SearchContextValue {
  query: string;
  setQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

/**
 * The header search box is shared UI across the two directory pages
 * (/users and /subscriptions), but the *state* behind it is kept
 * independent per route, keyed by pathname. Without this, a query typed
 * on /users would still be filtering the list on /subscriptions after
 * navigating there (or vice-versa) -- same input, but two unrelated
 * datasets, so sharing one flat string was the bug. Each page now gets
 * its own remembered query; switching routes never leaks one page's
 * search into another's.
 */
export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [queries, setQueries] = useState<Record<string, string>>({});
  const query = queries[location.pathname] ?? "";
  const setQuery = useCallback(
    (q: string) => {
      setQueries((prev) => ({ ...prev, [location.pathname]: q }));
    },
    [location.pathname]
  );
  return (
    <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>
  );
};

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return ctx;
}
