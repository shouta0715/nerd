import clsx from "clsx";
import React, { FC } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Image } from "src/components/Elements/Image";
import { Text } from "src/components/Elements/Text";
import { OptimisticMutateVariables } from "src/features/comments/types";
import { useUserState } from "src/store/user/userState";

type Props = {
  comment: OptimisticMutateVariables;
};

export const Optimistic: FC<Props> = ({ comment }) => {
  const user = useUserState((state) => state.user);

  return (
    <li className={clsx("flex w-full animate-pulse opacity-30")}>
      <figure className="mr-2">
        {user?.isDefaultPhoto ? (
          <Image
            alt="avatar"
            className="rounded-full object-contain"
            height={38}
            src={user?.photo_url ?? ""}
            width={38}
          />
        ) : (
          <Avatar user_id={user?.id ?? ""} user_name={comment.commenter_name} />
        )}
      </figure>
      <div className="flex-1">
        <div className="w-full">
          <Text className="my-1 text-gray-500" size="xs">
            {comment.commenter_name}
          </Text>
          <Text className=" break-words py-1 text-base">{comment.content}</Text>
        </div>
      </div>
    </li>
  );
};
