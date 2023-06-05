import { Meta, StoryObj } from "@storybook/react";
import { LiveHeader } from "src/features/live/components/LiveHeader";

export default {
  title: "Features/Live/Header",
  component: LiveHeader,
} as Meta<typeof LiveHeader>;

type Story = StoryObj<typeof LiveHeader>;

const defaultArgs: Story["args"] = {
  id: "1",
  episode_title: "エピソードタイトル",
  episode_number: 1,
  title: "タイトル",

  time: {
    hours: "00",
    minutes: "00",
    seconds: "00",
  },
  mode: "down",
};

const createArgs = (args: Story["args"]) => ({
  ...defaultArgs,
  ...args,
});

export const Default: Story = {
  args: createArgs({}),
};

export const Loading: Story = {
  args: createArgs({}),
};

export const Up: Story = {
  args: createArgs({
    mode: "up",
  }),
};

export const UpLoading: Story = {
  args: createArgs({
    mode: "up",
  }),
};

export const Finish: Story = {
  args: createArgs({
    mode: "finish",
  }),
};

export const NotRegister: Story = {
  args: createArgs({
    mode: "notRegister",
  }),
};
