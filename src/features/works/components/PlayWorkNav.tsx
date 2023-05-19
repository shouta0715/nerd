import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Menu } from "src/components/Elements/Menu";
import { Text } from "src/components/Elements/Text";
import { usePrefetchCommentWork } from "src/features/comments/api/usePrefetchCommentWork";
import { useTimerState } from "src/features/timer/store/timerStore";
import { GetWorkQuery } from "src/graphql/work/workQuery.generated";
import { useUserState } from "src/store/user/userState";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetWorkQuery;
  stop: () => void;
};

export const PlayWorkNav: FC<Props> = ({ setIsChat, isChat, stop, data }) => {
  const prefetchComments = usePrefetchCommentWork();
  const router = useRouter();
  const user = useUserState((state) => state.user);
  const mode = useTimerState((state) => state.mode);

  return (
    <nav className="sticky top-0 z-10 flex h-10 items-center justify-between border-b border-solid border-b-slate-200 bg-white px-2 lg:static lg:h-auto">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 after:h-7 after:w-7 after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <ul className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none  py-2 text-sm font-bold  md:text-base ${
                isChat ? "border-0 border-b-2 border-solid " : "border-none"
              } ${
                mode === "up"
                  ? "border-orange-500 text-orange-500"
                  : "border-indigo-500 text-indigo-500"
              }`}
              component="button"
              ff="Hiragino Sans"
              onClick={() => setIsChat(true)}
            >
              チャット
            </Text>
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold md:text-base ${
                !isChat ? "border-0 border-b-2 border-solid" : "border-none"
              } ${
                mode === "up"
                  ? "border-orange-500 text-orange-500"
                  : "border-indigo-500 text-indigo-500"
              }`}
              color="indigo"
              component="li"
              ff="Hiragino Sans"
              onClick={() => {
                setIsChat(false);
                stop();
              }}
              onMouseEnter={() =>
                user && prefetchComments(data?.works_by_pk?.id ?? 0)
              }
              onTouchStart={() =>
                user && prefetchComments(data?.works_by_pk?.id ?? 0)
              }
            >
              コメント
            </Text>
          </ul>
        </div>
        <Menu>
          {data?.works_by_pk?.series_id && (
            <nav className="group relative my-2 flex cursor-pointer items-center justify-center pb-2">
              <ButtonLink
                as={`/series/${data?.works_by_pk?.series_id}`}
                className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
                href={{
                  pathname: `/series/${data?.works_by_pk?.series_id}`,
                  query: { series_title: data?.works_by_pk?.title },
                }}
                size="xs"
              >
                シリーズ一覧へ
              </ButtonLink>
            </nav>
          )}
        </Menu>
      </div>
    </nav>
  );
};
