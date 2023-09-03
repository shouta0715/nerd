import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ViewReactionsData } from "src/features/reactions/common/types";
import { getReactionsData } from "src/features/reactions/common/utils";
import { useEpisodeReactions } from "src/features/reactions/episodes/hooks/useEpisodeReactions";
import { mswInfiniteReactionsEpisodeHandlers } from "src/features/reactions/episodes/mocks/msw";
import { useTimerState } from "src/features/timer/store";
import { Emoji_Types_Enum } from "src/gql/graphql";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

setupMsw(mswInfiniteReactionsEpisodeHandlers());
const generateHeartReactions = (time: number): ViewReactionsData => {
  const start = Math.max(1, time - 5);
  const end = Math.min(14399, time);
  const length = end - start + 1; // 配列の長さを計算します

  return Array.from({ length }, (_, i) =>
    getReactionsData({
      count: 1,
      reactions_time: start + i,
      type: Emoji_Types_Enum.Heart,
      id: start + i,
    })
  ).flat();
};

const setup = () => {
  const wrapper = QueryClientWrapper;

  const { result } = renderHook(() => useEpisodeReactions("1"), { wrapper });
  const { result: timer } = renderHook(() => useTimerState());

  return {
    result,
    timer,
  };
};

describe("useEpisodeReactions", () => {
  test("timeから5秒間のreactionsが表示される。", async () => {
    const { result, timer } = setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data).toStrictEqual([]);

    act(() => {
      timer.current.setTime({
        hours: 0,
        minutes: 0,
        seconds: 1,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(generateHeartReactions(1));
    });

    act(() => {
      timer.current.setTime({
        hours: 0,
        minutes: 0,
        seconds: 2,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(generateHeartReactions(2));
    });
  });

  test("数字が大きくなると、reactionsが増える。", async () => {
    const { result, timer } = setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data).toStrictEqual([]);

    act(() => {
      timer.current.setTime({
        hours: 0,
        minutes: 4,
        seconds: 30,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(generateHeartReactions(270));
    });

    act(() => {
      timer.current.setTime({
        hours: 0,
        minutes: 5,
        seconds: 0,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(generateHeartReactions(300));
    });
  });

  test("4時間1分以上経過したら、reactionsは4時間のものになる", async () => {
    const { result, timer } = setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data).toStrictEqual([]);

    act(() => {
      timer.current.setTime({
        hours: 3,
        minutes: 59,
        seconds: 0,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(
        generateHeartReactions(3 * 60 * 60 + 59 * 60)
      );
    });

    act(() => {
      timer.current.setTime({
        hours: 10,
        minutes: 0,
        seconds: 0,
      });
    });

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(generateHeartReactions(14400));
    });
  });
});
