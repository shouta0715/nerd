/* eslint-disable no-nested-ternary */
import { ActionIcon, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { useEnteredInvite } from "../../hooks/invites/useEnteredInvite";
import { useQueryInvite } from "../../hooks/invites/useQueryInvite";
import { MainComment } from "../comments/MainComment";
import { Spinner } from "../layouts/loading/Spinner";

import { InviteCountUp } from "./modules/InviteCountUp";
import { InviteTimer } from "./modules/InviteTimer";

type Props = {
  postId: string;
};

export const DetailPost: FC<Props> = ({ postId }) => {
  const { invite, isLoading } = useQueryInvite(postId);
  const router = useRouter();
  const { isStart } = useEnteredInvite(postId, invite?.start_time);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[999] h-screen w-screen bg-white">
        <Spinner />
      </div>
    );
  }

  return (
    <div className=" font-semibold">
      <div className="container relative mx-auto flex h-[100svh] flex-col  pt-4 md:pt-6">
        <ActionIcon
          onClick={() => router.back()}
          className="absolute left-2 z-[10]"
          color="dark"
          size="md"
          radius="lg"
          variant="transparent"
        >
          <IconArrowNarrowLeft size={34} />
        </ActionIcon>
        <div className="relative mx-auto flex w-full shrink flex-col items-center justify-center">
          <Title order={2} className="pl-2 text-2xl md:text-3xl">
            {invite?.title}
          </Title>
          <div className="w-full border-x-0 border-y-0 border-b border-solid border-gray-200">
            {isStart ? (
              <InviteCountUp />
            ) : (
              <InviteTimer
                parent="comment"
                post_id={postId}
                start_time={invite?.start_time}
              />
            )}
          </div>
        </div>

        <MainComment postId={postId} />
      </div>
    </div>
  );
};
