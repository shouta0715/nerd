import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "src/components/Elements/Loader";
import { AsideSkeleton } from "src/components/Elements/Skeleton/live/aisde";
import { HeaderSkeleton } from "src/components/Elements/Skeleton/live/header";
import { InputSkeleton } from "src/components/Elements/Skeleton/live/input";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

export const Skeleton = () => {
  const router = useRouter();
  const { slug } = router.query;
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<GetEpisodeQuery>([
    "GetEpisodeLive",
    { id: slug },
  ]);

  return (
    <>
      <AsideSkeleton episode={data?.episodes_by_pk} />
      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="block w-full bg-white/80 py-4 lg:hidden">
          <HeaderSkeleton
            number={data?.episodes_by_pk?.number}
            sub_title={data?.episodes_by_pk?.title}
            title={data?.episodes_by_pk?.work.series_title}
          />
          <InputSkeleton />
        </div>
        <div className="flex justify-around  bg-white/80 pb-2 lg:hidden">
          <div className="ml-2 h-6 w-20 animate-pulse rounded-md bg-slate-200" />
          <div className="ml-2 h-6 w-20 animate-pulse rounded-md bg-slate-200" />
        </div>
        <main className="flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
          <Loader className="m-auto" size="xl" variant="dots" />
        </main>
      </div>
    </>
  );
};
