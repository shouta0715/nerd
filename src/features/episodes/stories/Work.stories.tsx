import { Meta, StoryObj } from "@storybook/react";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { workEpisodeItemData } from "src/features/episodes/mocks/fixture";
import { ListDecorator } from "src/tests/storybook";

export default {
  title: "features/Episode/WorkItem",
  component: WorkEpisodeItem,
  decorators: [ListDecorator],
} as Meta<typeof WorkEpisodeItem>;
type Story = StoryObj<typeof WorkEpisodeItem>;

export const Default: Story = {
  args: {
    episode: workEpisodeItemData,
  },
};
