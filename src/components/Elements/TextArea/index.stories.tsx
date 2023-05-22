import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "src/components/Elements/TextArea";

export default {
  title: "Elements/TextArea",
  component: TextArea,
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
