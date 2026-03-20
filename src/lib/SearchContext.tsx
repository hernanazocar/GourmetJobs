"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SearchState {
  role: string;
  when: string;
  where: string;
}

interface SearchContextType {
  search: SearchState;
  setSearch: (s: SearchState) => void;
  isFiltering: boolean;
}

const SearchContext = createContext<SearchContextType>({
  search: { role: "", when: "", where: "" },
  setSearch: () => {},
  isFiltering: false,
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<SearchState>({ role: "", when: "", where: "" });
  const isFiltering = search.role !== "" || search.where !== "";

  return (
    <SearchContext.Provider value={{ search, setSearch, isFiltering }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
