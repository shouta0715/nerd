import { Meta, StoryObj } from "@storybook/react";
import { NextEpisodeModal } from "src/components/Modal/NextEpisode";
import { episodeData } from "src/features/episodes/mocks/fixture";
import { handlers } from "src/features/episodes/mocks/msw";

export default {
  title: "Modal/NextEpisode",
  component: NextEpisodeModal,
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/1",
        query: {
          slug: "1",
        },
      },
    },
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
  },
} as Meta<typeof NextEpisodeModal>;

type Story = StoryObj<typeof NextEpisodeModal>;

export const Default: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
    data: episodeData,
  },
};
