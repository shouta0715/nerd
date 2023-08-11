import React, { Fragment } from "react";
import { TopTitle } from "src/components/Elements/TopTitle";
import { RankingEpisode } from "src/features/ranking/episodes/components/RankingEpisode";
import { RankingWork } from "src/features/ranking/works/components/RankingWork";
import { RankingPage } from "src/libs/next/types";

export const Ranking = ({ buildDate, ranking }: RankingPage) => {
  return (
    <section className="grid flex-1 animate-fadeUp gap-y-8 pb-8">
      <TopTitle buildDate={buildDate} title="ランキング" />
      <div className="grid gap-y-4">
        <h3 className="flex items-center justify-between gap-x-2 font-semibold">
          コメント数ランキング
          <span className="text-sm font-normal text-gray-500">
            {buildDate}までのコメント数
          </span>
        </h3>
        <ul className="grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2">
          {ranking.works_all_ranking.map((work, index) => {
            return (
              <Fragment key={work.id}>
                {work.has_episodes ? (
                  <RankingEpisode index={index} top={index === 0} work={work} />
                ) : (
                  <RankingWork index={index} top={index === 0} work={work} />
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
