import { Meta, StoryObj } from "@storybook/react";
import { Season } from "src/features/pages/season";
import { seasonData } from "src/tests/mocks/fixture";
import { BasicLayoutDecorator } from "src/tests/storybook";
import { genBuildDate } from "src/utils/server/genBuildData";

export default {
  title: "Pages/Season",
  component: Season,
  decorators: [BasicLayoutDecorator],
} as Meta<typeof Season>;

type Story = StoryObj<typeof Season>;

export const Default: Story = {
  args: {
    data: seasonData,
    buildDate: genBuildDate(),
  },
};
