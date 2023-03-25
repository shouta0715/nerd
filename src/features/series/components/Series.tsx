import { useRouter } from "next/router";
import React from "react";
import { useQuerySeries } from "src/features/series/api/useQuerySeries";

export const Series = () => {
  const router = useRouter();
  const { slug, series_title } = router.query;
  const { data } = useQuerySeries({ slug: slug ?? null });

  return (
    <div>
      {series_title ? (
        <h1>{series_title}</h1>
      ) : (
        <h1>{data?.works[0]?.title}</h1>
      )}
    </div>
  );
};
