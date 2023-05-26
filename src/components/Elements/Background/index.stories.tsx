import { Meta, StoryObj } from "@storybook/react";
import { Background } from "src/components/Elements/Background";

export default {
  title: "Elements/Background",
  component: Background,
} as Meta<typeof Background>;

type Story = StoryObj<typeof Background>;

export const Default: Story = {};
