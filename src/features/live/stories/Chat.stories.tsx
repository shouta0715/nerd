import { Meta, StoryObj } from "@storybook/react";
import { LiveChats } from "src/features/live/components/LiveChats";
import { handlers } from "src/features/live/mocks/msw";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "Features/Live/Chat",
  component: LiveChats,
  decorators: [ProvidersDecorator],
  args: {
    isTimerLoading: false,
    episode_id: "1",
    time: {
      hours: 0,
      minutes: 10,
      seconds: 0,
    },
  },
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/live/1",
        query: {
          slug: "x",
        },
      },
    },
    msw: {
      handlers: {
        live: [...handlers({ mode: "finished" })],
      },
    },
  },
} as Meta<typeof LiveChats>;

type Story = StoryObj<typeof LiveChats>;

export const Default: Story = {};

export const Up: Story = {
  args: {
    mode: "up",
  },
};
