import { Meta, StoryObj } from "@storybook/react";
import { PlayWork } from "src/features/works/components/PlayWork";
import { handlers } from "src/features/works/mocks/msw";
import { BasicLayoutOnlyHeaderDecorator } from "src/tests/storybook";

export default {
  title: "Features/Works/Play",
  component: PlayWork,
  decorators: [BasicLayoutOnlyHeaderDecorator],
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/play/1",
        query: {
          slug: "x",
        },
      },
    },
    msw: {
      handlers: {
        work: [...handlers],
      },
    },
  },
} as Meta<typeof PlayWork>;

type Story = StoryObj<typeof PlayWork>;

export const Default: Story = {};
