"use client";

import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import useStore from "@/src/store";

export const SearchInput: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { setEmployees, setSearchedResults } = useStore();

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query.length > 0) {
        setSearchedResults(query);
      } else {
        setEmployees();
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  const handleOnSearch = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <form>
      <div className="form-control">
        <input
          value={searchQuery}
          onChange={handleOnSearch}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </form>
  );
};
