import { useRouter } from "next/router";
import React from "react";

export const useSearch = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      router.push({
        pathname: "/search",
        query: {
          q: search.trim(),
        },
      });

      setIsSearchOpen(false);
      setSearch("");
    }
  };

  return {
    isSearchOpen,
    setIsSearchOpen,
    search,
    setSearch,
    submitHandler,
  };
};
