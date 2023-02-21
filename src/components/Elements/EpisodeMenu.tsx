import { Bars3Icon } from "@heroicons/react/24/outline";
import { ActionIcon, Menu, Text } from "@mantine/core";
import {
  IconClock,
  IconPlayerSkipForward,
  IconPlus,
  IconStack2,
  IconUser,
} from "@tabler/icons";
import Link from "next/link";
import React, { FC, memo } from "react";

type Props = {
  episodeTitle?: string;
  episodeNumber?: number;
  workTitle?: string;
  hasPrevEpisode?: boolean;
  hasNextEpisode?: boolean;
};

export const EpisodeMenu: FC<Props> = memo(
  ({ episodeTitle, episodeNumber, workTitle, hasNextEpisode }) => (
    <Menu>
      <ActionIcon component={Menu.Target} variant="transparent" color="dark">
        <Bars3Icon />
      </ActionIcon>
      <Menu.Dropdown>
        <Menu.Label>メニュー</Menu.Label>
        <Menu.Item icon={<IconUser size={14} />}>投稿名の変更</Menu.Item>
        <Menu.Item icon={<IconPlus size={14} />}>マイリストに追加</Menu.Item>
        <Menu.Item icon={<IconClock size={14} />}>再生速度</Menu.Item>
        <Menu.Divider />
        <Menu.Label>エピソード</Menu.Label>
        <Text component="p" className="py-2 px-[10px]">
          <Text className="mb-1 text-xs">{workTitle}</Text>
          {episodeTitle && (
            <div className="flex items-center">
              <Text size="xs" className="mr-1" color="dimmed">
                {episodeNumber}.
              </Text>
              <Text size="xs" color="dimmed">
                {episodeTitle}
              </Text>
            </div>
          )}
        </Text>
        {hasNextEpisode && (
          <Menu.Item icon={<IconPlayerSkipForward size={14} />}>
            次のエピソード
          </Menu.Item>
        )}
        <Menu.Item
          component={Link}
          href="/"
          icon={<IconStack2 size={14} strokeWidth={1.5} />}
        >
          他のエピソード
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
);
