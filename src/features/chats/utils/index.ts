import { PageParams } from "src/features/chats/types";
import { MaxTime } from "src/features/timer/store/initialState";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";

export const isBetweenTime = (time: number, pageParams: PageParams) => {
  const { _gte, _lt } = pageParams;

  return time >= _gte && time < _lt;
};

export const multipleOf300 = (time: number) => {
  if (time > timeToSecond(MaxTime)) return timeToSecond(MaxTime);

  const next = Math.ceil((time + 1) / 300) * 300;

  if (next - time < 120) return next + 300;

  return next;
};
