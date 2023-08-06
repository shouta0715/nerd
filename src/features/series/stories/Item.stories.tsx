import { Meta, StoryObj } from "@storybook/react";
import { SeriesItem } from "src/features/series/components/SeriesItem";
import { workItemData } from "src/features/works/common/mocks/fixture";

export default {
  title: "Features/Series/Item",
  component: SeriesItem,
} as Meta<typeof SeriesItem>;

type Story = StoryObj<typeof SeriesItem>;

export const Default: Story = {
  args: {
    series_work: workItemData,
  },
};
