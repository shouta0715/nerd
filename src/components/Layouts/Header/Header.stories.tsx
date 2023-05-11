import { Meta, StoryObj } from "@storybook/react";
import { Header } from "src/components/Layouts/Header";

type Story = StoryObj<typeof Header>;

export default {
  title: "Layouts/Header",
  component: Header,
} as Meta<typeof Header>;

export const Default: Story = {};
