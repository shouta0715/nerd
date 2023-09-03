import { Meta, StoryObj } from "@storybook/react";
import { Episode } from "src/features/episodes/components";
import { handlers } from "src/features/episodes/mocks/msw";
import { BasicLayoutOnlyHeaderDecorator } from "src/tests/storybook";

export default {
  title: "features/Episode",
  component: Episode,
  decorators: [BasicLayoutOnlyHeaderDecorator],
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/1",
        query: {
          slug: "1",
        },
      },
    },
  },
} as Meta<typeof Episode>;

type Story = StoryObj<typeof Episode>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
  },
};

export const Chat: Story = {
  parameters: {
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
    nextjs: {
      router: {
        basePath: "/episodes/1",
        query: {
          slug: "1",
          mode: "chat",
        },
      },
    },
  },
};
