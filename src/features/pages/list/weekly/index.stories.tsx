import { Meta, StoryObj } from "@storybook/react";
import { Weekly } from "src/features/pages/list/weekly";
import { createAutoCompleteData } from "src/tests/mocks";
import { weeklyData } from "src/tests/mocks/fixture";

export default {
  title: "Pages/List/Weekly",
  component: Weekly,
} as Meta<typeof Weekly>;

type Story = StoryObj<typeof Weekly>;

export const Default: Story = {
  args: {
    data: weeklyData,
    autoCompleteData: createAutoCompleteData(),
  },
};
