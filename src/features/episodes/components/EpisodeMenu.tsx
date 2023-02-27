/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ActionIcon, Box, Burger, Input, Menu, Text } from "@mantine/core";
import { IconPencil, IconPlayerSkipForward, IconStack2 } from "@tabler/icons";
import Link from "next/link";
import React, { FC, memo, useState } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useUserState } from "src/store/user/userState";

type Props = {
  episodeTitle?: string;
  episodeNumber?: number;
  workTitle?: string;
  nextEpisodeId?: string;
};

const InitialUserName = localStorage.getItem("user_name");

export const EpisodeMenu: FC<Props> = memo(
  ({ episodeTitle, episodeNumber, workTitle, nextEpisodeId }) => {
    const { data } = useQueryEpisode(nextEpisodeId);
    const [isOpened, setIsOpened] = useState(false);
    const user = useUserState((state) => state.user);
    const setUser = useUserState((state) => state.setUser);
    const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue.trim() || !user) return;
      setUser({ ...user, user_name: inputValue });
      setIsOpened(false);
      localStorage.setItem("user_name", inputValue);
    };

    return (
      <Menu
        width={240}
        onChange={(value) => {
          setIsOpened(value);
        }}
        opened={isOpened}
        position="bottom"
        classNames={{
          dropdown: "max-w-xs w-full",
        }}
      >
        <ActionIcon component={Menu.Target} variant="transparent" color="dark">
          <Burger opened={isOpened} onClick={() => setIsOpened((p) => !p)} />
        </ActionIcon>
        <Menu.Dropdown>
          <Menu.Label>メニュー</Menu.Label>
          <Box className="px-3">
            <IconPencil className="mr-2" size={14} />
            <Text component="span" className="text-xs">
              投稿名の変更
            </Text>
          </Box>
          <form onSubmit={onSubmitHandler}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              onBlur={() => setIsOpened(false)}
              className="px-2"
              classNames={{
                input: "text-[16px] scale-75",
              }}
              size="xs"
            />
          </form>
          <Menu.Divider />
          <Menu.Label>エピソード</Menu.Label>
          <Text component="div" className="py-2 px-3">
            <Text component="p" className="mb-1 text-xs">
              {workTitle}
            </Text>
            {episodeTitle && (
              <div className="flex">
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
