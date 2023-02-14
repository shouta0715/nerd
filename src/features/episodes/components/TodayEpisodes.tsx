import { Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";

export const TodayEpisodes: FC = () => (
  <div className="p-6">
    <Title order={2} size="h3" className="mb-4">
      <Link passHref href="/">
        <Text component="span" underline color="indigo">
          今日放送のテレビ
        </Text>
      </Link>
    </Title>
    <TodayEpisodeList />
  </div>
);
