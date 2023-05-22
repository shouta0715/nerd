import { Meta, StoryObj } from "@storybook/react";
import TodayEpisodeItem from "src/features/episodes/components/TodayEpisodeItem";
import { todayEpisodeData } from "src/tests/mocks";
import { ListDecorator } from "src/tests/storybook";

export default {
  title: "features/Episode/TodayItem",
  component: TodayEpisodeItem,
  decorators: [ListDecorator],
} as Meta<typeof TodayEpisodeItem>;

type Story = StoryObj<typeof TodayEpisodeItem>;

export const Default: Story = {
  args: {
    episode: todayEpisodeData(),
  },
};

export const Now: Story = {
  args: {
    episode: todayEpisodeData("now"),
  },
};

export const WillStart: Story = {
  args: {
    episode: todayEpisodeData("will"),
  },
};
