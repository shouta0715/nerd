import React, { FC } from "react";
import { TopTitle } from "src/components/Elements/TopTitle";
import { useQuerySeasonWorks } from "src/features/works/api/useQuerySeasonWorks";

export const SeasonWorks: FC = () => {
  const { data } = useQuerySeasonWorks();

  console.log(data);

  return (
    <div className="px-6 pb-12 pt-6">
      <TopTitle href="/" title="今季のアニメ" />
    </div>
  );
};
