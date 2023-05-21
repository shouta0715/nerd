import { Meta, StoryObj } from "@storybook/react";
import { Usage } from "src/features/pages/usage";

export default {
  title: "Pages/Usage",
  component: Usage,
} as Meta<typeof Usage>;

type Story = StoryObj<typeof Usage>;

export const Default: Story = {};
