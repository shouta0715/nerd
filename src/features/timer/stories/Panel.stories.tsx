import { Meta, StoryObj } from "@storybook/react";
import { Panel } from "src/features/timer/components/Panel";

export default {
  title: "Features/Timer/Panel",
  component: Panel,
} as Meta<typeof Panel>;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    // 0~9
    character: Math.floor(Math.random() * 10).toString(),
  },
};
