import { Meta, StoryObj } from "@storybook/react";
import { Input } from "src/components/Elements/Input";

type Story = StoryObj<typeof Input>;

export default {
  title: "Elements/Input",
  component: Input,
} as Meta<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Input",
  },
};

export const XSmall: Story = {
  args: {
    placeholder: "Input",
    radius: "md",

    inputSize: "xs",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Input",
    radius: "md",
    inputSize: "sm",
  },
};

export const Medium: Story = {
  args: {
    placeholder: "Input",
    radius: "md",
    inputSize: "md",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Input",
    radius: "md",
    inputSize: "lg",
  },
};
