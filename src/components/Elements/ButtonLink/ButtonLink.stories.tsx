import type { StoryObj, Meta } from "@storybook/react";
import { ButtonLink } from "src/components/Elements/ButtonLink";

type Story = StoryObj<typeof ButtonLink>;

export default {
  title: "Elements/ButtonLink",
  component: ButtonLink,
} as Meta<typeof ButtonLink>;

export const Default: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
  },
};

export const Xsmall: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "md",
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "md",
    theme: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",

    size: "md",
    theme: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "ButtonLink",
    href: "/",
    radius: "md",
    size: "md",
    theme: "danger",
  },
};
