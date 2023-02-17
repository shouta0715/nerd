import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { WorkItem } from "src/features/works/components/WorkItem";
import { useSeasonWorksList } from "src/features/works/hooks/useSeasonWorksList";
import { AutoCompleteData } from "src/types/dataType";

type Props = {
  callbackTitle?: (items: AutoCompleteData[] | undefined) => void;
};

export const SeasonWorksList: FC<Props> = memo(({ callbackTitle }) => {
  const { deferredFilterWorks, indexPage } = useSeasonWorksList({
    callbackTitle,
  });

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
          className="mt-6 flex w-full items-center justify-center text-lg hover:underline"
        >
          <Link href="/lists/season" className="">
            今期のアニメをもっと見る
          </Link>
          <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
        </Text>
      )}
    </>
  );
});
