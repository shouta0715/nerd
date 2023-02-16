import React, { FC } from "react";
import { TopTitle } from "src/components/Elements/TopTitle";
import { SeasonWorksList } from "src/features/works/components/SeasonWorksList";

export const SeasonWorks: FC = () => (
  <div className="px-6 pb-12 pt-6">
    <TopTitle href="/lists/season" title="今期のアニメ" />
    <SeasonWorksList />
  </div>
);
