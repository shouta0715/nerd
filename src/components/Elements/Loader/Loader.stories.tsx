import type { StoryObj, Meta } from "@storybook/react";
import { Loader } from "src/components/Elements/Loader";

type Story = StoryObj<typeof Loader>;

export default {
  title: "Elements/Loader",
  component: Loader,
} as Meta<typeof Loader>;

export const Default: Story = {
  args: {
    variant: "oval",
    color: "indigo",
    size: "md",
  },
};

export const Oval: Story = {
  args: {
    variant: "oval",
    color: "indigo",
    size: "md",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
    color: "indigo",
    size: "md",
  },
};
