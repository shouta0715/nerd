import { useRouter } from "next/router";
import React from "react";
import { useQueryWork } from "src/features/works/api/useQueryWork";

export const PlayWork = () => {
  const router = useRouter();
  const { slug, work } = router.query;
  const { data, isLoading } = useQueryWork({ slug, work });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return <div>PlayWork</div>;
};
