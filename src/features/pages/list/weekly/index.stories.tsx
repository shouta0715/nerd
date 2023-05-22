import { Meta, StoryObj } from "@storybook/react";
import { Weekly } from "src/features/pages/list/weekly";
import { createAutoCompleteData } from "src/tests/mocks";
import { weeklyData } from "src/tests/mocks/fixture";
import { BasicListLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Pages/List/Weekly",
  component: Weekly,
  decorators: [BasicListLayoutDecorator],
} as Meta<typeof Weekly>;

type Story = StoryObj<typeof Weekly>;

export const Default: Story = {
  args: {
    data: weeklyData,
    autoCompleteData: createAutoCompleteData(),
  },
};
