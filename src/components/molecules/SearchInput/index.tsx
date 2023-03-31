"use client";

import { FC, FormEvent, useState } from "react";
import useStore from "@/src/store";

export const SearchInput: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { setEmployees, setSearchedResults } = useStore();

  const handleOnSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchedResults(searchQuery);
  };

  return (
    <form onSubmit={handleOnSearch}>
      <div className="form-control">
        <input
          value={searchQuery}
          onChange={(e) => {
            if (searchQuery.length < 1) setEmployees();
            setSearchQuery(e.target.value);
            setSearchedResults(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </form>
  );
};
