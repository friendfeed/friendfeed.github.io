import { createContext, useContext, useState } from "react";
import type { FC, ReactNode } from "react";

interface SearchContextValue {
  query: string;
  setQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState("");
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
