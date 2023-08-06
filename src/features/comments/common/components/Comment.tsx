/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { FC, Suspense, useRef, memo } from "react";
import { Replies } from "../../../replies/components/Replies";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Image } from "src/components/Elements/Image";
import { Loader } from "src/components/Elements/Loader";
import { Text } from "src/components/Elements/Text";
import { AutoErrorBoundary } from "src/components/Error/items/ReplyMessage";
import { Comment as TypeComment } from "src/features/comments/common/types";
import { Like } from "src/features/likes/components/Like";
import { useReply } from "src/features/replies/hooks/useReply";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  comment: TypeComment;
};

export const Comment: FC<Props> = memo(({ comment }) => {
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
      <div className="flex-1">
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
          <Text className="my-1 text-gray-500" size="xs">
            <span className="inline-flex items-center gap-x-1.5 rounded-full text-gray-500">
              {comment.commenter_name}
              {comment.user_id === user?.id && (
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
              )}
            </span>
          </Text>
          <Text
            ref={(comment.reply_count ?? -1) > 0 ? content : null}
            className="break-words text-base"
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
});
