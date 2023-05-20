import { Meta, StoryObj } from "@storybook/react";
import { LiveComment } from "src/features/live/components/LiveComment";

export default {
  title: "Features/Live/Comment",
  component: LiveComment,
} as Meta<typeof LiveComment>;

type Story = StoryObj<typeof LiveComment>;

export const Default: Story = {};
