import { Meta, StoryObj } from "@storybook/react";
import {
  handleSearchWorks,
  handlers,
} from "src/features/works/common/mocks/msw";
import { SearchWorks } from "src/features/works/search/components/SearchWorks";
import { SearchDecorator } from "src/tests/storybook";

export default {
  title: "Features/Works/Search",
  component: SearchWorks,
  decorators: [SearchDecorator],
  parameters: {
    msw: {
      handlers: {
        works: [...handlers],
      },
    },
  },
} as Meta<typeof SearchWorks>;

type Story = StoryObj<typeof SearchWorks>;

export const Default: Story = {};

export const SearchError: Story = {
  parameters: {
    msw: {
      handlers: {
        works: [handleSearchWorks(400)],
      },
    },
  },
};
