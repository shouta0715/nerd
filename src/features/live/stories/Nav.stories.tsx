import { Meta, StoryObj } from "@storybook/react";
import { episodeData } from "src/features/episodes/mocks/fixture";
import { handlers } from "src/features/episodes/mocks/msw";
import { LiveNav } from "src/features/live/components/LiveNav";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "features/live/Nav",
  component: LiveNav,
  decorators: [ProvidersDecorator],
  args: {
    data: episodeData,
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
        episode: [...handlers],
      },
    },
  },
} as Meta<typeof LiveNav>;

type Story = StoryObj<typeof LiveNav>;

export const Default: Story = {};

export const UpMode: Story = {
  args: {
    mode: "up",
  },
};

export const DownMode: Story = {
  args: {
    mode: "down",
  },
};

export const FinishMode: Story = {
  args: {
    mode: "finish",
  },
};

export const NotRegister: Story = {
  args: {
    mode: "notRegister",
  },
};
