import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { SeriesError } from "src/components/Error/items/SeriesError";
import { WorkItem } from "src/features/works/slug/components/WorkItem";
import { GetSeasonWorksQuery } from "src/gql/graphql";
import { TopPageList } from "src/libs/next/types";

export const Season = ({
  data,
  buildDate,
}: TopPageList<GetSeasonWorksQuery>) => (
  <section className="py-10">
    <TopTitle buildDate={buildDate} title="今期のアニメ" />
    {data.works?.length > 0 ? (
      <ul className="grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {data.works?.map((work) => (
          <WorkItem key={`work-${work.id}`} isSeriesPage={false} work={work} />
        ))}
      </ul>
    ) : (
      <SeriesError />
    )}
    <Text
      align="center"
      className={clsx(
        "mt-6 flex w-full items-center justify-center  font-semibold text-indigo-600 hover:underline",
        data.works?.length === 0 &&
          "pointer-events-none cursor-not-allowed opacity-50"
      )}
      component="p"
    >
      <Link className="text-base md:text-lg " href="/list/season">
        今期のアニメをもっと見る
      </Link>
      <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-600" />
    </Text>
  </section>
);
