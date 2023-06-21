import { Meta, StoryObj } from "@storybook/react";
import { Terms } from "src/features/pages/terms";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/Terms",
  component: Terms,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Terms>;

type Story = StoryObj<typeof Terms>;

export const Default: Story = {};
