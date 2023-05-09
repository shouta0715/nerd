import { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/components/Elements/Text";

type Story = StoryObj<typeof Text>;

export default {
  title: "Elements/Text",
  component: Text,
} as Meta<typeof Text>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Xsmall: Story = {
  args: {
    children: "Text",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    children: "Text",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Text",
    size: "md",
  },
};

export const Xlarge: Story = {
  args: {
    children: "Text",
    size: "xl",
  },
};

export const Xxlarge: Story = {
  args: {
    children: "Text",
    size: "2xl",
  },
};

export const Xxxlarge: Story = {
  args: {
    children: "Text",
    size: "3xl",
  },
};

export const Xxxxlarge: Story = {
  args: {
    children: "Text",
    size: "4xl",
  },
};

export const Xxxxxlarge: Story = {
  args: {
    children: "Text",
    size: "5xl",
  },
};

export const Xxxxxxlarge: Story = {
  args: {
    children: "Text",
    size: "6xl",
  },
};

export const Xxxxxxxlarge: Story = {
  args: {
    children: "Text",
    size: "7xl",
  },
};

export const Xxxxxxxxlarge: Story = {
  args: {
    children: "Text",
    size: "8xl",
  },
};

export const Xxxxxxxxxlarge: Story = {
  args: {
    children: "Text",
    size: "9xl",
  },
};

export const HiraginoSans: Story = {
  args: {
    children: "Text",
    ff: "Hiragino Sans",
  },
};
