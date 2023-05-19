import { Meta, StoryObj } from "@storybook/react";
import { PlayWorkHeader } from "src/features/works/components/PlayWorkHeader";

export default {
  title: "Features/Works/Play/Header",
  component: PlayWorkHeader,
} as Meta<typeof PlayWorkHeader>;

type Story = StoryObj<typeof PlayWorkHeader>;

export const Default: Story = {
  args: {
    title: "タイトル",
    id: 1,
  },
};
