import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Text } from "src/components/Elements/Text";
import { useZeroTimeChats } from "src/features/live/hooks/useZeroTimeChats";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

export const ZeroTimeChats: FC<Props> = ({ episode_id }) => {
  const { data } = useZeroTimeChats(episode_id);
  const user = useUserState((state) => state.user);

  if (!user) return <Loader className="m-auto" variant="dots" />;

  return (
    <ul className="relative mx-auto w-full flex-1 space-y-3 px-4 pb-1 pt-4 md:max-w-xl">
      ZeroTime
      {data?.pages.map((page) =>
        page.chats.map((comment) => (
          <li
            key={comment.id}
            className={`flex w-full animate-comment transition-all ${
              user?.id === comment.user?.id ? "flex-row-reverse" : ""
            }`}
          >
            <figure
              className={`m-0 ${
                user?.id === comment.user?.id ? "ml-2" : "mr-2"
              }`}
            >
              <Avatar
                user_id={comment.user?.id}
                user_name={comment.commenter_name}
              />
            </figure>
            <div
              className={`max-w-[calc(100%-92px)] flex-1 ${
                user?.id === comment.user?.id ? "text-right" : ""
              }`}
            >
              <Text
                align="inherit"
                className="my-1 max-w-full break-words font-bold"
                ff="Hiragino Sans"
                size="xs"
              >
                {comment.commenter_name}
              </Text>

              <Text
                align="inherit"
                className="max-w-full break-words"
                component="p"
                ff="Hiragino Sans"
                size="sm"
              >
                {comment.content}
              </Text>
              <Text align="inherit" className="text-dimmed" size="xs">
                <span> {formatTimeDistance(comment.created_at)}</span>
              </Text>
            </div>
          </li>
        ))
      )}
      {/* <button
        className={`fixed bottom-[4.5rem] left-1/2 z-0 flex h-7 w-7 -translate-x-1/2   cursor-pointer items-center  justify-center rounded-full border-none bg-indigo-500 shadow-md shadow-black/[0.3]  transition-all active:translate-y-1 ${
          isBottom || time === 0
            ? "translate-y-10 opacity-0"
            : "opacity-1 translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDownIcon className="h-4 w-4 fill-white stroke-white stroke-2 text-white" />
      </button>
      <div ref={bottomRef} className="absolute bottom-0 opacity-0" /> */}
    </ul>
  );

  return <div>ZeroTimeChats</div>;
};
