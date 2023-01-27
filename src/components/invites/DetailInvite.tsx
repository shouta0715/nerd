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
  invite_id: string;
};

export const DetailInvite: FC<Props> = ({ invite_id }) => {
  const { data, isLoading } = useQueryInvite(invite_id);
  const router = useRouter();
  const { isStart } = useEnteredInvite(
    invite_id,
    data?.invites_by_pk?.start_time
  );

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
            {data?.invites_by_pk?.title}
          </Title>
          <div className="w-full border-x-0 border-y-0 border-b border-solid border-gray-200">
            {isStart ? (
              <InviteCountUp />
            ) : (
              <InviteTimer
                parent="comment"
                invite_id={invite_id}
                start_time={data?.invites_by_pk?.start_time}
              />
            )}
          </div>
        </div>

        <MainComment invite_id={invite_id} />
      </div>
    </div>
  );
};
