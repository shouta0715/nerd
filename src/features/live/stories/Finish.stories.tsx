import { Meta, StoryObj } from "@storybook/react";
import { episodeData } from "src/features/episodes/mocks/fixture";
import { FinishLive } from "src/features/live/components/Finish";

export default {
  title: "Features/Live/Finish",
  component: FinishLive,
} as Meta<typeof FinishLive>;

type Story = StoryObj<typeof FinishLive>;

export const Default: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
};
