import { Meta, StoryObj } from "@storybook/react";
import { Today } from "src/features/pages/list/today";
import { createAutoCompleteData } from "src/tests/mocks";
import { todayData } from "src/tests/mocks/fixture";
import { BasicListLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/List/Today",
  component: Today,
  decorators: [BasicListLayoutDecorator],
} as Meta<typeof Today>;

type Story = StoryObj<typeof Today>;

export const Default: Story = {
  args: {
    data: todayData,
    autoCompleteData: createAutoCompleteData(),
  },
};
