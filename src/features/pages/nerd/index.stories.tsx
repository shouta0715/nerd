import { Meta, StoryObj } from "@storybook/react";
import { Nerd } from "src/features/pages/nerd";
import { seasonData, todayData, weeklyData } from "src/tests/mocks/fixture";
import { BasicLayoutDecorator } from "src/tests/storybook";
import { genBuildData } from "src/utils/server/genBuildData";

export default {
  title: "Pages/Nerd",
  component: Nerd,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Nerd>;

type Story = StoryObj<typeof Nerd>;

export const Default: Story = {
  args: {
    todayData,
    seasonData,
    weeklyData,
    buildDate: genBuildData(),
  },
};
