import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { TopPageList } from "src/libs/next/types";

export const Season = ({
  data,
  buildDate,
}: TopPageList<GetSeasonWorksQuery>) => (
  <section className="px-3 py-10 md:px-6">
    <TopTitle buildDate={buildDate} title="今期のアニメ" />
    <ul className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {data.works?.map((work) => (
        <WorkItem key={`work-${work.id}`} isSeriesPage={false} work={work} />
      ))}
    </ul>
    <Text
      align="center"
      className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-500 hover:underline"
      component="p"
    >
      <Link className="text-base md:text-lg" href="/list/season">
        今期のアニメをもっと見る
      </Link>
      <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
    </Text>
  </section>
);
