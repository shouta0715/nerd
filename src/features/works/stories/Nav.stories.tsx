import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Nav } from "src/components/Slug/common/nav";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "Features/Works/Play/Nav",
  component: Nav,
  decorators: [ProvidersDecorator],
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

const createDecorators =
  (props: Partial<React.ComponentProps<typeof Nav>>) => () => {
    const [isChat, setIsChat] = useState(props.isChat ?? false);

    return (
      <Nav response="lg" {...props} isChat={isChat} setIsChat={setIsChat} />
    );
  };

export const Default: Story = {
  decorators: [createDecorators({})],
};

export const Chat: Story = {
  decorators: [createDecorators({ isChat: true })],
};
