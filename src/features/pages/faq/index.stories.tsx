import { Meta, StoryObj } from "@storybook/react";
import { Faq } from "src/features/pages/faq";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/Faq",
  component: Faq,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Faq>;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {};
