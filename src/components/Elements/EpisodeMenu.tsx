import { ActionIcon, Burger, Menu, Text } from "@mantine/core";
import {
  IconClock,
  IconPlayerSkipForward,
  IconPlus,
  IconStack2,
  IconUser,
} from "@tabler/icons";
import Link from "next/link";
import React, { FC, memo, useState } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";

type Props = {
  episodeTitle?: string;
  episodeNumber?: number;
  workTitle?: string;
  nextEpisodeId?: string;
};

export const EpisodeMenu: FC<Props> = memo(
  ({ episodeTitle, episodeNumber, workTitle, nextEpisodeId }) => {
    const { data } = useQueryEpisode(nextEpisodeId);
    const [isOpened, setIsOpened] = useState(false);

    return (
      <Menu
        opened={isOpened}
        classNames={{
          dropdown: "max-w-xs w-full",
        }}
      >
        <ActionIcon component={Menu.Target} variant="transparent" color="dark">
          <Burger opened={isOpened} onClick={() => setIsOpened((p) => !p)} />
        </ActionIcon>
        <Menu.Dropdown>
          <Menu.Label>メニュー</Menu.Label>
          <Menu.Item icon={<IconUser size={14} />}>投稿名の変更</Menu.Item>
          <Menu.Item icon={<IconPlus size={14} />}>マイリストに追加</Menu.Item>
          <Menu.Item icon={<IconClock size={14} />}>再生速度</Menu.Item>
          <Menu.Divider />
          <Menu.Label>エピソード</Menu.Label>
          <Text component="div" className="py-2 px-[10px]">
            <Text component="p" className="mb-1 text-xs">
              {workTitle}
            </Text>
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
          {nextEpisodeId && (
            <Menu.Item
              component={Link}
              href={`${data?.episodes_by_pk?.id}?category=archive`}
              icon={<IconPlayerSkipForward size={14} />}
            >
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
    );
  }
);
