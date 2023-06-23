import { Meta, StoryObj } from "@storybook/react";
import { Privacy } from "src/features/pages/privacy";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/Privacy",
  component: Privacy,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Privacy>;

type Story = StoryObj<typeof Privacy>;

export const Default: Story = {};
