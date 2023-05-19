import { Meta, StoryObj } from "@storybook/react";
import { WorkItem } from "src/features/works/components/WorkItem";
import { workItemData } from "src/features/works/mocks/fixture";
import { ListDecorator } from "src/tests/storybook";

export default {
  title: "Features/Work/Item",
  component: WorkItem,
  decorators: [ListDecorator],
} as Meta<typeof WorkItem>;

type Story = StoryObj<typeof WorkItem>;

export const Default: Story = {
  args: {
    work: workItemData,
    isSeriesPage: false,
  },
};

export const SeriesPage: Story = {
  args: {
    work: workItemData,
    isSeriesPage: true,
  },
};
