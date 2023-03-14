import { IconArrowDown } from "@tabler/icons";
import React, { FC, memo } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Text } from "src/components/Elements/Text";
import { useChats } from "src/features/comments/hooks/useChatComments";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

const Chats: FC<Props> = memo(({ episode_id }) => {
  const { data, bottomRef, isBottom, entry, time } = useChats({
    episode_id,
  });
  const { timeCommented } = timeProcessing();

  const user = useUserState((state) => state.user);

  return (
    <ul className="relative mx-auto w-full flex-1 space-y-3 px-4 pt-4 pb-1 md:max-w-xl">
      {data?.map((comment) => (
        <li
          key={comment.id}
          className={`flex w-full animate-comment transition-all ${
            user?.id === comment.user?.id ? "flex-row-reverse" : ""
          }`}
        >
          <figure
            className={`m-0 ${user?.id === comment.user?.id ? "ml-2" : "mr-2"}`}
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
              ff="Hiragino Sans"
              size="xs"
              className="my-1 max-w-full break-words font-bold"
            >
              {comment.commenter_name}
            </Text>

            <Text
              align="inherit"
              component="p"
              ff="Hiragino Sans"
              size="sm"
              className="max-w-full break-words"
            >
              {comment.content}
            </Text>
            <Text size="xs" align="inherit" className="text-dimmed">
              <span>{timeCommented(comment.comment_time)}</span>
            </Text>
          </div>
        </li>
      ))}
      <Button
        className={`fixed left-1/2 bottom-[4.5rem] z-0 flex h-7 w-7 -translate-x-1/2   cursor-pointer items-center  justify-center rounded-full border-none bg-indigo-500 shadow-md shadow-black/[0.3]  transition-all active:translate-y-1 ${
          isBottom || time === 0
            ? "translate-y-10 opacity-0"
            : "opacity-1 translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <IconArrowDown size={22} className="text-white" />
      </Button>
      <div ref={bottomRef} className="absolute bottom-0 opacity-0" />
    </ul>
  );
});

export default Chats;
