/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Nav } from "src/components/dynamic/common/nav";

import { handlers } from "src/features/episodes/mocks/msw";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "features/Episode/Nav",
  component: Nav,
  decorators: [ProvidersDecorator],
  parameters: {
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
  },
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

const createDecorators =
  (props: Partial<React.ComponentProps<typeof Nav>>) => () => {
    const [isChat, _] = useState(props.isChat ?? false);

    return <Nav response="lg" {...props} isChat={isChat} />;
  };

export const Default: Story = {
  decorators: [
    createDecorators({
      isChat: false,
    }),
  ],
};

export const Chat: Story = {
  decorators: [createDecorators({ isChat: true })],
};
