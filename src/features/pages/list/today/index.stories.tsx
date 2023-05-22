import { Meta, StoryObj } from "@storybook/react";
import { Today } from "src/features/pages/list/today";
import { createAutoCompleteData } from "src/tests/mocks";
import { todayData } from "src/tests/mocks/fixture";

export default {
  title: "Pages/List/Today",
  component: Today,
} as Meta<typeof Today>;

type Story = StoryObj<typeof Today>;

export const Default: Story = {
  args: {
    data: todayData,
    autoCompleteData: createAutoCompleteData(),
  },
};
