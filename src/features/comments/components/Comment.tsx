/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import React, { FC, Suspense, useRef } from "react";
import { Replies } from "./Replies";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { AutoErrorBoundary } from "src/components/Elements/Error/items/ReplyMessage";
import { Image } from "src/components/Elements/Image";
import { Loader } from "src/components/Elements/Loader";
import { Text } from "src/components/Elements/Text";
import { useReply } from "src/features/comments/hooks/useReply";
import { Comment as TypeComment } from "src/features/comments/types";
import { Like } from "src/features/likes/components/Like";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  comment: TypeComment;
};

export const Comment: FC<Props> = ({ comment }) => {
  const content = useRef<HTMLParagraphElement>(null);
  const { handleClick } = useReply();

  const user = useUserState((state) => state.user);

  return (
    <li className="flex w-full">
      <figure className="mr-2">
        {user?.isDefaultPhoto && user?.id === comment?.user?.id ? (
          <Image
            alt="avatar"
            className="rounded-full object-contain"
            height={38}
            src={user?.photo_url ?? ""}
            width={38}
          />
        ) : (
          <Avatar
            user_id={comment.user?.id ?? ""}
            user_name={comment.commenter_name}
          />
        )}
      </figure>
      <div className="max-w-[calc(100%-46px)] flex-1">
        <div
          className="w-full"
          onClick={() =>
            handleClick({
              reply_to: comment.id,
              replied_to_commenter_name: comment.commenter_name,
            })
          }
          role="button"
        >
          <Text className="font-bold" size="xs">
            {comment.commenter_name}
          </Text>
          <Text
            ref={(comment.reply_count ?? -1) > 0 ? content : null}
            className="  scroll-mt-20 break-words py-1 text-base lg:scroll-mt-10"
          >
            {comment.content}
          </Text>
        </div>
        <Text
          className="flex items-center justify-between space-x-2"
          color="dimmed"
          component="div"
          size="xs"
        >
          <div className="flex">
            <span className="text-dimmed">
              {formatTimeDistance(comment.created_at)}
            </span>
            <Button
              className="border-none p-0 text-black"
              onClick={() =>
                handleClick({
                  reply_to: comment.id,
                  replied_to_commenter_name: comment.commenter_name,
                })
              }
              size="xs"
              textClassName="font-bold text-xs"
            >
              返信
            </Button>
          </div>
          <Like
            comment_id={comment.id}
            is_like={comment.is_like || false}
            like_count={comment.likes_aggregate.aggregate?.count || 0}
          />
        </Text>
        <AutoErrorBoundary key={`${comment.id}-reply`}>
          <Suspense
            fallback={
              <div className="mt-1 flex w-full">
                <Loader className="mx-auto" variant="dots" />
              </div>
            }
          >
            <Replies
              content={content}
              reply_count={comment.reply_count || 0}
              reply_id={comment.id}
            />
          </Suspense>
        </AutoErrorBoundary>
      </div>
    </li>
  );
};
