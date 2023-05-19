/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { EpisodeNav } from "src/features/episodes/components/EpisodeNav";
import { episodeData } from "src/features/episodes/mocks/fixture";
import { handlers } from "src/features/episodes/mocks/msw";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "features/Episode/Nav",
  component: EpisodeNav,
  decorators: [ProvidersDecorator],
  parameters: {
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
  },
} as Meta<typeof EpisodeNav>;

type Story = StoryObj<typeof EpisodeNav>;

const createDecorators =
  (props: Partial<React.ComponentProps<typeof EpisodeNav>>) => () => {
    const [isChat, setIsChat] = useState(props.isChat ?? false);

    return <EpisodeNav {...props} isChat={isChat} setIsChat={setIsChat} />;
  };

export const Default: Story = {
  decorators: [
    createDecorators({
      isChat: false,
    }),
  ],
};

export const Chat: Story = {
  decorators: [createDecorators({ isChat: true })],
};
export const WithData: Story = {
  decorators: [createDecorators({ data: episodeData })],
};
