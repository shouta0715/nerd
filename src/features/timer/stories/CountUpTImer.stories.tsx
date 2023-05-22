import { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/components/Elements/Button";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useTimerState } from "src/features/timer/store/timerStore";

const createDecorator = () => () => {
  const { setTimer, interval } = useTimerState((state) => ({
    setTimer: state.setTime,
    interval: state.interval,
  }));

  return (
    <div className="space-y-10">
      <CountUpTimer />
      <Button
        onClick={() => setTimer({ hours: 0, minutes: 12, seconds: 12 })}
        theme="primary"
      >
        時間を設定
      </Button>
      <Button onClick={interval.start} theme="primary">
        開始
      </Button>
    </div>
  );
};

export default {
  title: "Features/Timer/CountUpTimer",
  component: CountUpTimer,
  decorators: [createDecorator()],
} as Meta<typeof CountUpTimer>;

type Story = StoryObj<typeof CountUpTimer>;

export const Default: Story = {
  args: {
    id: "1",
  },
};
