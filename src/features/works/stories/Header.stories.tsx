import { Meta, StoryObj } from "@storybook/react";
import { Header } from "src/components/Slug/common/header";

export default {
  title: "Features/Works/Play/Header",
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "タイトル",
    id: 1,
  },
};
