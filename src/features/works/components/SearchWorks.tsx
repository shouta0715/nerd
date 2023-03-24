import React from "react";
import { useSearchWorksState } from "src/features/works/store";

export const SearchWorks = () => {
  const [data, isLoading] = useSearchWorksState((state) => [
    state.data,
    state.isLoading,
  ]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.map((work) => (
        <div key={work.id}>{work.series_title}</div>
      ))}
    </div>
  );
};
