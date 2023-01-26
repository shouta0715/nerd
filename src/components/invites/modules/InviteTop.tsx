import { Avatar, Badge } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { Categories_Enum, GetInvitesQuery } from "../../../generated/graphql";
import { useCategoryToJa } from "../../../hooks/utils/useCategoryToJa";

type Props = {
  category?: Categories_Enum;
  user: GetInvitesQuery["invites"][0]["user"];
};

export const InviteTop: FC<Props> = memo(({ category, user }) => {
  const { categoryToJa } = useCategoryToJa();
  const router = useRouter();
  const replaceUsername = user?.user_name?.replace(/\//, "");

  return (
    <div className=" mb-2 flex  w-full items-center justify-between">
      <button
        onClick={() => router.push(`/user/${replaceUsername}`)}
        className="z-[30] cursor-pointer border-0 bg-transparent"
      >
        <Avatar radius="xl" src={user?.photo_url} />
      </button>
      <Badge color={category === "Anime" ? "grape" : "green"}>
        {categoryToJa(category)}
      </Badge>
    </div>
  );
});
