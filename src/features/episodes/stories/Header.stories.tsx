import { Meta, StoryObj } from "@storybook/react";
import { EpisodeHeader } from "src/features/episodes/components/EpisodeHeader";

export default {
  title: "features/Episode/Header",
  component: EpisodeHeader,
} as Meta<typeof EpisodeHeader>;

type Story = StoryObj<typeof EpisodeHeader>;

export const Default: Story = {
  args: {
    episode_number: 1,
    episode_title: "緑谷出久：オリジン",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};

export const LongTitle: Story = {
  args: {
    episode_number: 1,
    episode_title: "緑谷出久：オリジン",
    id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
  },
};

export const LongEpisodeTitle: Story = {
  args: {
    episode_number: 1,
    episode_title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};

export const LongTitleAndEpisodeTitle: Story = {
  args: {
    episode_number: 1,
    episode_title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
    id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
  },
};

export const BiggestNumber: Story = {
  args: {
    episode_number: 1942,
    episode_title: "緑谷出久：オリジン",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};
