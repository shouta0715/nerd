import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { WorkItem } from "src/features/works/slug/components/WorkItem";
import { GetWeeklyWorksQuery } from "src/gql/graphql";

import { TopPageList } from "src/libs/next/types";

export const Weekly = ({
  data,
  buildDate,
}: TopPageList<GetWeeklyWorksQuery>) => (
  <section className="pt-10 md:pb-10">
    <TopTitle buildDate={buildDate} title="今週のアニメ" />
    <ul className="grid grid-cols-1  gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {data?.weekly_works?.map((work) => (
        <WorkItem key={`work-${work.id}`} work={work} />
      ))}
    </ul>
    <Text
      align="center"
      className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-600 hover:underline"
      component="p"
    >
      <Link className="text-base md:text-lg" href="/list/weekly">
        今週のアニメをもっと見る
      </Link>
      <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-600" />
    </Text>
  </section>
);
