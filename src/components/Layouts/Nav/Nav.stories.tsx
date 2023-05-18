import { Meta, StoryObj } from "@storybook/react";
import { Nav } from "src/components/Layouts/Nav";

export default {
  title: "Layouts/Nav",
  component: Nav,
} as Meta<typeof Nav>;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {};
