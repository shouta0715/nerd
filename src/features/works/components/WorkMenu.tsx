/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { useMenu } from "src/features/episodes/hooks/useMenu";
import { MenuWrapper } from "src/features/play/components/MenuWrapper";
import { PlayMenu } from "src/features/play/components/PlayMenu";
import { CountDownModal } from "src/features/timer/components/CountDownModal";

type Props = {
  series_id?: string | null;
  series_title?: string | null;
};

export const WorkMenu: FC<Props> = ({ series_id, series_title }) => {
  const { setIsCountDownModalOpen, isCountDownModalOpen } = useMenu();

  return (
    <>
      <MenuWrapper>
        <PlayMenu
          isCountDownModalOpen={isCountDownModalOpen}
          setIsCountDownModalOpen={setIsCountDownModalOpen}
        />
        {series_id && (
          <nav className="group relative my-2 flex cursor-pointer items-center justify-center pb-2">
            <ButtonLink
              as={`/series/${series_id}`}
              className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
              href={{
                pathname: `/series/${series_id}`,
                query: { series_title },
              }}
              size="xs"
            >
              シリーズ一覧へ
            </ButtonLink>
          </nav>
        )}
      </MenuWrapper>
      <CountDownModal
        isOpen={isCountDownModalOpen}
        setIsOpen={setIsCountDownModalOpen}
      />
    </>
  );
};
