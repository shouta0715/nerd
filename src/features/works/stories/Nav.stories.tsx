import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PlayWorkNav } from "src/features/works/components/PlayWorkNav";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "Features/Works/Play/Nav",
  component: PlayWorkNav,
  decorators: [ProvidersDecorator],
} as Meta<typeof PlayWorkNav>;

type Story = StoryObj<typeof PlayWorkNav>;

const createDecorators =
  (props: Partial<React.ComponentProps<typeof PlayWorkNav>>) => () => {
    const [isChat, setIsChat] = useState(props.isChat ?? false);

    return <PlayWorkNav {...props} isChat={isChat} setIsChat={setIsChat} />;
  };

export const Default: Story = {
  decorators: [createDecorators({})],
};

export const Chat: Story = {
  decorators: [createDecorators({ isChat: true })],
};
