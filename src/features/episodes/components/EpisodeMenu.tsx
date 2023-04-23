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
import { PlayMenu } from "src/features/play/components/PlayMenu";
import { CountDownModal } from "src/features/timer/components/CountDownModal";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode: GetEpisodeQuery["episodes_by_pk"];
};

export const EpisodeMenu: FC<Props> = ({ episode }) => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setIsCountDownModalOpen,
    isCountDownModalOpen,
  } = useMenu();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 place-items-center bg-black/40 lg:contents ${
          isMenuOpen ? "flex" : "hidden"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
      >
        <div
          className={` mx-auto h-max max-h-[90vh] w-4/5 max-w-md animate-modal overflow-y-auto rounded-md  border border-solid border-slate-100 bg-white shadow lg:static lg:mx-0 lg:h-auto lg:max-h-fit  lg:w-full lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:border-0 lg:shadow-none lg:transition-none ${
            isMenuOpen ? "block" : "  hidden lg:block"
          }`}
        >
          <PlayMenu
            isCountDownModalOpen={isCountDownModalOpen}
            setIsCountDownModalOpen={setIsCountDownModalOpen}
          />
          <div className="h-[1px] w-full bg-slate-200" />
          <Suspense fallback={<NextEpisodeMenuSkelton />}>
            <NextEpisodeMenu episode={episode} />
          </Suspense>
        </div>
      </div>
      <CountDownModal
        isOpen={isCountDownModalOpen}
        setIsOpen={setIsCountDownModalOpen}
      />
    </>
  );
};
