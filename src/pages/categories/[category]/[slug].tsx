import { ActionIcon, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { MainComment } from "../../../features/comments/MainComment";
import { InviteCountUp } from "../../../features/invites/modules/InviteCountUp";
import { InviteTimer } from "../../../features/invites/modules/InviteTimer";
import { useEnteredInvite } from "../../../hooks/invites/useEnteredInvite";
import { useQueryInvite } from "../../../hooks/invites/useQueryInvite";

const Detail: NextPage = () => {
  const router = useRouter();

  const { slug } = router.query as { slug: string };
  const { data } = useQueryInvite(slug);
  const { isStart } = useEnteredInvite({
    invite_id: slug,
    start_time: data?.invites_by_pk?.start_time,
  });

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
                invite_id={slug}
                start_time={data?.invites_by_pk?.start_time}
              />
            )}
          </div>
        </div>

        <MainComment invite_id={slug} />
      </div>
    </div>
  );
};

export default Detail;
