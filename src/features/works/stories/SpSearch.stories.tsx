import { Meta, StoryObj } from "@storybook/react";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";
import { handlers } from "src/features/works/mocks/msw";
import {
  BasicLayoutDecorator,
  createViewPortParameters,
} from "src/tests/storybook";

export default {
  title: "Features/Works/Search/Sp",
  component: SpSearchWorks,
  decorators: [BasicLayoutDecorator],
  parameters: {
    nextjs: {
      router: {
        basePath: "/search",
        query: {
          q: "x",
        },
      },
    },
    msw: {
      handlers: {
        works: [...handlers],
      },
    },
    ...createViewPortParameters("sm"),
  },
} as Meta<typeof SpSearchWorks>;

type Story = StoryObj<typeof SpSearchWorks>;

export const Default: Story = {};
