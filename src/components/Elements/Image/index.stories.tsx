import { Meta, StoryObj } from "@storybook/react";
import { Image } from "src/components/Elements/Image";

export default {
  title: "Elements/Image",
  component: Image,
  args: {},
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://source.unsplash.com/random",
  },
};

export const Small: Story = {
  args: {
    src: "https://source.unsplash.com/random",
    height: 32,
    width: 32,
  },
};

export const Medium: Story = {
  args: {
    src: "https://source.unsplash.com/random",
    height: 38,
    width: 38,
  },
};

export const Large: Story = {
  args: {
    src: "https://source.unsplash.com/random",
    height: 48,
    width: 48,
  },
};

export const Loading: Story = {
  args: {
    src: "https://source.unsplash.com/random",
    isLoading: true,
  },
};
