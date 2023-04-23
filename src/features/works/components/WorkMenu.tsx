/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { useMenu } from "src/features/episodes/hooks/useMenu";
import { PlayMenu } from "src/features/play/components/PlayMenu";
import { CountDownModal } from "src/features/timer/components/CountDownModal";

type Props = {
  series_id?: string | null;
  series_title?: string | null;
};

export const WorkMenu: FC<Props> = ({ series_id, series_title }) => {
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
          className={`mx-auto h-max max-h-[90vh] w-4/5 max-w-md animate-modal overflow-y-auto rounded-md  border border-solid border-slate-100 bg-white shadow lg:static lg:mx-0 lg:h-auto lg:max-h-fit  lg:w-full lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:border-0 lg:shadow-none lg:transition-none ${
            isMenuOpen ? "block" : "  hidden lg:block"
          }`}
        >
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
        </div>
      </div>
      <CountDownModal
        isOpen={isCountDownModalOpen}
        setIsOpen={setIsCountDownModalOpen}
      />
    </>
  );
};
