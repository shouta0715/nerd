import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "src/components/Elements/Avatar";

export default {
  title: "Elements/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
export const Random: Story = {
  args: {
    user_id: Math.floor(Math.random() * 1000).toString(),
    user_name: "test",
  },
};
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
