import { Meta, StoryObj } from "@storybook/react";
import { Today } from "src/features/pages/today";
import { todayData } from "src/tests/mocks/fixture";
import { BasicLayoutDecorator } from "src/tests/storybook";
import { genBuildData } from "src/utils/genBuildData";

export default {
  title: "Pages/Today",
  component: Today,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Today>;

type Story = StoryObj<typeof Today>;

export const Default: Story = {
  args: {
    data: todayData,
    buildDate: genBuildData(),
  },
};
