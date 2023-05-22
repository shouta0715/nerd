import { Meta, StoryObj } from "@storybook/react";
import { Series } from "src/features/series/components/Series";
import { handleSeries } from "src/features/series/mocks/msw";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Features/Series",
  component: Series,
  decorators: [BasicLayoutDecorator],
  parameters: {
    msw: {
      handlers: {
        request: [handleSeries({})],
      },
    },
  },
} as Meta<typeof Series>;

type Story = StoryObj<typeof Series>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/series/1",
        query: {
          slug: "1",
        },
      },
    },
  },
};

export const Loading = {
  nextjs: {
    router: {
      basePath: "/series/1",
      query: {
        slug: null,
      },
    },
  },
};
