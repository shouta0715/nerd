import { Meta, StoryObj } from "@storybook/react";
import { Season } from "src/features/pages/list/season";
import { createAutoCompleteData } from "src/tests/mocks";
import { seasonData } from "src/tests/mocks/fixture";
import { BasicListLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/List/Season",
  component: Season,
  decorators: [BasicListLayoutDecorator],
} as Meta<typeof Season>;

type Story = StoryObj<typeof Season>;

export const Default: Story = {
  args: {
    data: seasonData,
    autoCompleteData: createAutoCompleteData(),
  },
};
