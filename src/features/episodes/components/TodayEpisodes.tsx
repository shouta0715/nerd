import { Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";

export const TodayEpisodes: FC = () => (
  <div className="px-6 pb-12 pt-6">
    <Title order={2} size="h3" className="mb-4">
      <Link passHref href="/">
        <Text component="span">今日放送のエピソード</Text>
      </Link>
    </Title>
    <TodayEpisodeList />
  </div>
);
