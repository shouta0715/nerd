import { Meta, StoryObj } from "@storybook/react";
import { Nav } from "src/components/slug/live/nav";
import { episodeData } from "src/features/episodes/mocks/fixture";
import { handlers } from "src/features/episodes/mocks/msw";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "features/live/Nav",
  component: Nav,
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
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

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
