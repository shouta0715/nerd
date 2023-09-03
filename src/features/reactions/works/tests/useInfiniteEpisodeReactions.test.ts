import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PageParams } from "src/features/chats/common/types";
import { useInfiniteWorkReactions } from "src/features/reactions/works/api/useInfiniteWorkReactions";
import { mswInfiniteReactionsWorkHandlers } from "src/features/reactions/works/mocks/msw";
import { useTimerState } from "src/features/timer/store";

import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

const createPageParams = (length = 1): PageParams[] => {
  // _lt = length * 300 , _gte = length * 300 - 300
  return Array.from({ length }).map((_, i) => ({
    _gte: 300 * i ? 300 * i : 1,
    _lt: 300 * (i + 1),
  }));
};

const setup = () => {
  const wrapper = QueryClientWrapper;
  const { result } = renderHook(
    () =>
      useInfiniteWorkReactions({
        enabled: true,
        work_id: 1,
      }),
    { wrapper }
  );

  const { result: timer } = renderHook(() => useTimerState());

  return { result, timer };
};

describe("useInfiniteWorkReactions", () => {
  describe("query success", () => {
    setupMsw(mswInfiniteReactionsWorkHandlers());
    test("ロード中ならisPendingがtrue", async () => {
      const { result } = setup();

      await waitFor(() => {
        expect(result.current.isPending).toBe(true);
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });
    });

    test("timeが4分30を超えるとpageParamsに_lt = 600 _gt = 300が追加される。", async () => {
      const { result, timer } = setup();

      await waitFor(() => {
        expect(result.current.isPending).toBe(true);
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      act(() => {
        timer.current.setTime({ hours: 0, minutes: 4, seconds: 30 });
      });

      result.current.fetchNextPage();

      await waitFor(() => {
        expect(result.current.data?.pageParams).toStrictEqual(
          createPageParams(2)
        );
      });

      act(() => {
        timer.current.setTime({ hours: 0, minutes: 11, seconds: 30 });
      });

      result.current.fetchNextPage();

      await waitFor(() => {
        expect(result.current.data?.pageParams).toStrictEqual(
          createPageParams(3)
        );
      });
    });

    test("timeが4時間を超えると呼ばれない。", async () => {
      const { result, timer } = setup();

      await waitFor(() => {
        expect(result.current.isPending).toBe(true);
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      act(() => {
        timer.current.setTime({ hours: 4, minutes: 0, seconds: 0 });
      });

      result.current.fetchNextPage();

      await waitFor(() => {
        expect(result.current.data?.pageParams).toStrictEqual(
          createPageParams(1)
        );
      });

      act(() => {
        timer.current.setTime({ hours: 3, minutes: 59, seconds: 59 });
      });

      result.current.fetchNextPage();

      await waitFor(() => {
        expect(result.current.data?.pageParams).toStrictEqual([
          ...createPageParams(1),
          {
            _gte: 300 * 1,
            _lt: 14400,
          },
        ]);
      });

      act(() => {
        timer.current.setTime({ hours: 4, minutes: 0, seconds: 1 });
      });

      result.current.fetchNextPage();

      await waitFor(() => {
        expect(result.current.data?.pageParams).toStrictEqual([
          ...createPageParams(1),
          {
            _gte: 300 * 1,
            _lt: 14400,
          },
        ]);
      });
    });
  });
});
