/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, Suspense } from "react";
import { NextEpisodeMenuSkelton } from "src/components/Elements/Loader/loaders/NextEpisodeMenuSkelton";
import { NextEpisodeMenu } from "src/features/episodes/components/NextEpisodeMenu";
import { useMenu } from "src/features/episodes/hooks/useMenu";
import { MenuWrapper } from "src/features/play/components/MenuWrapper";
import { PlayMenu } from "src/features/play/components/PlayMenu";
import { CountDownModal } from "src/features/timer/components/CountDownModal";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode: GetEpisodeQuery["episodes_by_pk"];
};

export const EpisodeMenu: FC<Props> = ({ episode }) => {
  const { setIsCountDownModalOpen, isCountDownModalOpen } = useMenu();

  return (
    <>
      <MenuWrapper>
        <PlayMenu
          isCountDownModalOpen={isCountDownModalOpen}
          setIsCountDownModalOpen={setIsCountDownModalOpen}
        />
        <div className="h-[1px] w-full bg-slate-200" />
        <Suspense fallback={<NextEpisodeMenuSkelton />}>
          <NextEpisodeMenu episode={episode} />
        </Suspense>
      </MenuWrapper>
      <CountDownModal
        isOpen={isCountDownModalOpen}
        setIsOpen={setIsCountDownModalOpen}
      />
    </>
  );
};
