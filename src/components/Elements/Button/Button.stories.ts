import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "src/components/Elements/Button/Button";

type Story = StoryObj<typeof Button>;

export default {
  title: "Elements/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default = {
  args: {
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "md",
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "md",
    theme: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "md",
    theme: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    radius: "md",
    size: "md",
    theme: "danger",
  },
};
