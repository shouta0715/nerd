import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "src/components/Elements/Switch";

type Story = StoryObj<typeof Switch>;

export default {
  title: "Elements/Switch",
  component: Switch,
  argTypes: {
    defaultChecked: { control: "boolean" },
    onChange: { action: "onChange" },
  },
} as Meta<typeof Switch>;

export const Default: Story = {
  args: {
    theme: "primary",
    defaultChecked: true,
    // eslint-disable-next-line no-console
    onChange: action("onChange"),
  },
};

export const Primary: Story = {
  args: {
    theme: "primary",
    defaultChecked: true,
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    defaultChecked: true,
  },
};

export const Success: Story = {
  args: {
    theme: "success",
    defaultChecked: true,
  },
};

export const Danger: Story = {
  args: {
    theme: "danger",
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    theme: "primary",
    size: "sm",
    defaultChecked: true,
  },
};

export const Medium: Story = {
  args: {
    theme: "primary",
    size: "md",
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    theme: "primary",
    size: "lg",
    defaultChecked: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    theme: "primary",
    size: "xl",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    theme: "primary",
    size: "md",
    disabled: true,
    defaultChecked: true,
  },
};

export const Transparent: Story = {
  args: {
    theme: "transparent",
    size: "md",
    defaultChecked: true,
  },
};
