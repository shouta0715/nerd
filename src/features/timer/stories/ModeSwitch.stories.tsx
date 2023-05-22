import { Meta, StoryObj } from "@storybook/react";
import { TimerModal } from "src/components/Modal/Timer";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

const createDecorator = () => () => {
  return (
    <>
      <TimerModal />
      <ModeSwitch />
    </>
  );
};

export default {
  title: "Features/Timer/ModeSwitch",
  component: ModeSwitch,
  decorators: [createDecorator()],
} as Meta<typeof ModeSwitch>;

type Story = StoryObj<typeof ModeSwitch>;

export const Default: Story = {};
