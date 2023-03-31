"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleOnSearch = (event: FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURIComponent(searchQuery);
    router.push(`/employee/search?q=${encodedSearchQuery}`);
    console.log("searchQuery", encodedSearchQuery);
  };

  return (
    <form onSubmit={handleOnSearch}>
      <div className="form-control">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
    </form>
  );
};
