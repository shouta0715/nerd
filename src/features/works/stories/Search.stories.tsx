import { Meta, StoryObj } from "@storybook/react";
import { SearchWorks } from "src/features/works/components/SearchWorks";
import { handleSearchWorks, handlers } from "src/features/works/mocks/msw";
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
