import { renderHook, waitFor } from "@testing-library/react";
import { useInfiniteQueryChatsEpisode } from "src/features/chats/episodes/api/useInfiniteQueryChatsEpisode";
import { mswInfiniteChats } from "src/features/chats/episodes/mocks/msw";
import { useTimerState } from "src/features/timer/store";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

setupMsw(mswInfiniteChats());

const setup = async () => {
  const wrapper = QueryClientWrapper;

  const { result } = renderHook(
    () =>
      useInfiniteQueryChatsEpisode({
        episode_id: "1",
        enabled: true,
      }),
    {
      wrapper,
    }
  );
  const { result: timerState } = renderHook(() => useTimerState());

  return { result, timerState };
};

describe("useInfiniteQueryChatsEpisode", () => {
  test("ロード中ならisPendingがtrue", async () => {
    const { result } = await setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });
  });
});
