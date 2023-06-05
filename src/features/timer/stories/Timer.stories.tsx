import { Meta, StoryObj } from "@storybook/react";
import { Timer } from "src/features/timer/components/Timer";

export default {
  title: "Features/Timer",
  component: Timer,
  args: {
    isTimeLoading: false,
    id: "1",
    hours: "00",
    minutes: "00",
    seconds: "00",
  },
} as Meta<typeof Timer>;

type Story = StoryObj<typeof Timer>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    id: undefined,
  },
};
