import { Meta, StoryObj } from "@storybook/react";
import { handlers } from "src/features/works/common/mocks/msw";
import { Work } from "src/features/works/slug/components/Work";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Features/Work",
  component: Work,
  decorators: [BasicLayoutDecorator],
  parameters: {
    nextjs: {
      router: {
        basePath: "/works/1",
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
} as Meta<typeof Work>;

type Story = StoryObj<typeof Work>;

export const Default: Story = {};

export const WithSeries: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/works/2",
        query: {
          slug: "x",
          series: "y",
        },
      },
    },
  },
};
