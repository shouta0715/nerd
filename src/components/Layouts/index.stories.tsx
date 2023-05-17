import { Meta, StoryObj } from "@storybook/react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { BasicLayoutDecorator } from "src/tests/storybook";

export type Story = StoryObj<typeof BasicLayout>;

export default {
  title: "Layouts/BasicLayout",
  decorators: [BasicLayoutDecorator],
} as Meta<typeof BasicLayout>;

export const Default: Story = {};
