import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Nav } from "src/components/dynamic/common/nav";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "Features/Works/Play/Nav",
  component: Nav,
  decorators: [ProvidersDecorator],
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

const createDecorators =
  (props: Partial<React.ComponentProps<typeof Nav>>) => () => {
    const [isChat, _] = useState(props.isChat ?? false);

    return <Nav response="lg" {...props} isChat={isChat} />;
  };

export const Default: Story = {
  decorators: [createDecorators({})],
};

export const Chat: Story = {
  decorators: [createDecorators({ isChat: true })],
};
