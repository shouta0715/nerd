import { Meta, StoryObj } from "@storybook/react";
import { handlers } from "src/features/episodes/mocks/msw";
import { Skeleton } from "src/features/live/components/Skeleton";
import { BasicLayoutOnlyHeaderDecorator } from "src/tests/storybook";

export default {
  title: "features/live/Skeleton",
  component: Skeleton,
  decorators: [BasicLayoutOnlyHeaderDecorator],
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
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};
