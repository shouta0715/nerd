import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { WorkItem } from "src/features/works/components/WorkItem";
import { useSeasonWorksList } from "src/features/works/hooks/useSeasonWorksList";

export const SeasonWorksList: FC = () => {
  const { deferredFilterWorks, indexPage } = useSeasonWorksList();

  return (
    <>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4  lg:grid-cols-3">
        {deferredFilterWorks?.map((work) => (
          <WorkItem work={work} key={`work-${work.id}`} />
        ))}
      </ul>
      {indexPage && (
        <Text
          align="center"
          component="p"
          className="mt-6 flex w-full items-center justify-center hover:underline"
        >
          <Link href="/lists/season" className="text-base md:text-lg">
            今期のアニメをもっと見る
          </Link>
          <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
        </Text>
      )}
    </>
  );
};
