import { Avatar, Badge } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { Categories_Enum } from "../../../generated/graphql";
import { useCategoryToJa } from "../../../hooks/utils/useCategoryToJa";
import { User } from "../../../types/userType";

type Props = {
  category?: Categories_Enum;
  user: User | undefined;
};

export const PostTop: FC<Props> = memo(({ category, user }) => {
  const { categoryToJa } = useCategoryToJa();
  const router = useRouter();

  return (
    <div className=" mb-2 flex  w-full items-center justify-between">
      <button
        onClick={() => router.push(`/user/${user?.userName}`)}
        className="z-[30] cursor-pointer border-0 bg-transparent"
      >
        <Avatar radius="xl" src={user?.userPhotoURL} />
      </button>
      <Badge color={category === "Anime" ? "grape" : "green"}>
        {categoryToJa(category)}
      </Badge>
    </div>
  );
});
