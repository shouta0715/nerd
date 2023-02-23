import { ActionIcon, Avatar, Textarea } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons";
import React, { FC, memo } from "react";
import { useMutateChatComments } from "src/features/comments/api/useMutateChatComments";
import { useQueryComments } from "src/features/comments/api/useQueryComments";
import { useGlobalStore } from "src/store/global/globalStore";
import { useUserStore } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data } = useQueryComments(episode_id);
  const { insertComment } = useMutateChatComments();
  const [commentInput, setCommentInput] = React.useState("");
  const user = useUserStore((state) => state.user);
  const setIsOpenModal = useGlobalStore((state) => state.setIsOpenModal);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentInput) {
      await insertComment.mutateAsync({
        object: {
          episode_id,
          content: commentInput,
          time: 1,
        },
      });
    }
  };

  return (
    <>
      {data?.chat_comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
        </li>
      ))}
      <div className="fixed bottom-0 left-0 w-full border-0 border-t border-solid border-slate-200 px-4 py-2 md:py-4">
        <form
          className=" container mx-auto flex items-center justify-center opacity-100"
          onSubmit={onSubmitHandler}
        >
          <figure className="m-0 mr-2">
            <Avatar
              radius="xl"
              className="cursor-pointer"
              src={user?.photo_url}
              onClick={() => {
                if (user?.anonymous) setIsOpenModal(true);
              }}
            />
          </figure>
          <Textarea
            placeholder={`${user?.user_name}で投稿`}
            className="w-full max-w-sm flex-1"
            classNames={{
              input: "text-[16px] pr-[50px] placeholder:pl-4",
            }}
            rightSectionWidth={50}
            maxRows={2}
            maxLength={100}
            autosize
            radius="xl"
            value={commentInput}
            rightSection={
              <ActionIcon
                loading={insertComment.isLoading}
                type="submit"
                variant="light"
                color="teal"
                radius="xl"
              >
                <IconArrowUp />
              </ActionIcon>
            }
            onChange={(e) => setCommentInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
});

export default ChatComments;
