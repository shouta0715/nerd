import { Meta, StoryObj } from "@storybook/react";
import { handlers } from "src/features/works/common/mocks/msw";
import { PlayWork } from "src/features/works/play/components/PlayWork";
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
