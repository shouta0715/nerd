import { Meta, StoryObj } from "@storybook/react";
import { Aside } from "src/components/Layouts/Aside";
import {
  handleSearchWorks,
  handlers,
} from "src/features/works/common/mocks/msw";
import { ProvidersDecorator } from "src/tests/storybook";

export default {
  title: "Layouts/Aside",
  component: Aside,
  decorators: [ProvidersDecorator],
} as Meta<typeof Aside>;

type Story = StoryObj<typeof Aside>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: {
        works: [...handlers],
      },
    },
  },
};

export const SearchError: Story = {
  parameters: {
    msw: {
      handlers: {
        works: [handleSearchWorks(400)],
      },
    },
  },
};
