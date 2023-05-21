import { Meta, StoryObj } from "@storybook/react";
import { TimerModal } from "src/components/Modal/Timer";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

const createDecorator = () => () => {
  return (
    <>
      <ModeSwitch />
      <TimerModal />
    </>
  );
};

export default {
  title: "Modal/Timer",
  component: TimerModal,
  decorators: [createDecorator()],
} as Meta<typeof TimerModal>;

type Story = StoryObj<typeof TimerModal>;

export const Default: Story = {};
