// import React from "react";
import { useGetCategoryQuery } from "../generated/graphql";
import { useGlobalStore } from "../store/global/globalStore";

export const useQueryCategory = () => {
  const client = useGlobalStore((state) => state.client);
  // const isClient = useGlobalStore((state) => state.isClient);

  return useGetCategoryQuery(
    client,
    {},
    { enabled: false, staleTime: Infinity, cacheTime: Infinity }
  );
};
