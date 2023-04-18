import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { usePrefetchCommentWork } from "src/features/comments/api/usePrefetchCommentWork";
import { GetWorkQuery } from "src/graphql/work/workQuery.generated";
import { useUserState } from "src/store/user/userState";

const DynamicWorkMenu = dynamic(
  () =>
    import("src/features/works/components/WorkMenu").then(
      (mod) => mod.WorkMenu
    ),
  {
    ssr: false,
  }
);

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

  return (
    <nav className="sticky top-0 z-[1] flex h-10 items-center justify-between border-b border-solid border-b-slate-200 bg-white px-2 lg:h-auto">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 after:h-7 after:w-7 after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <ul className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none  py-2 text-sm font-bold text-indigo-500 md:text-base  ${
                isChat
                  ? "border-0 border-b-2 border-solid border-indigo-500"
                  : "border-none"
              }`}
              component="button"
              onClick={() => setIsChat(true)}
            >
              チャット
            </Text>
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 md:text-base ${
                !isChat
                  ? "border-0 border-b-2 border-solid border-indigo-500"
                  : "border-none"
              }`}
              color="indigo"
              component="li"
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
        <DynamicWorkMenu
          series_id={data?.works_by_pk?.series_id}
          series_title={data?.works_by_pk?.title}
        />
      </div>
    </nav>
  );
};
