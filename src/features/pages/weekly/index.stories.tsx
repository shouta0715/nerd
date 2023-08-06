import { Meta, StoryObj } from "@storybook/react";
import { Weekly } from "src/features/pages/weekly";
import { weeklyData } from "src/tests/mocks/fixture";
import { BasicLayoutDecorator } from "src/tests/storybook";
import { genBuildData } from "src/utils/server/genBuildData";

export default {
  title: "Pages/Weekly",
  component: Weekly,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Weekly>;

type Story = StoryObj<typeof Weekly>;

export const Default: Story = {
  args: {
    data: weeklyData,
    buildDate: genBuildData(),
  },
};
