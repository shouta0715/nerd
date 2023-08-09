import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useChatsEpisode } from "src/features/chats/episodes/hooks/useChatsEpisode";
import { mswInfiniteChats } from "src/features/chats/episodes/mocks/msw";
import { useTimerState } from "src/features/timer/store";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

setupMsw(mswInfiniteChats());

const setup = async () => {
  const wrapper = QueryClientWrapper;
  global.window.scrollTo = jest.fn();
  const { result } = renderHook(() => useChatsEpisode("1"), { wrapper });
  const { result: timerState } = renderHook(() => useTimerState());

  return { result, timerState };
};

describe("useChatsEpisode.test.tsx", () => {
  test("初期状態ではデータが取得されていない", async () => {
    const { result } = await setup();

    expect(result.current.data.length).toBe(0);
  });
  test("1秒ごとに1つデータが表示される。", async () => {
    const { result, timerState } = await setup();

    await waitFor(() => expect(result.current.isPending).toBe(true));
    await waitFor(() => expect(result.current.isPending).toBe(false));

    act(() => {
      // 4分59秒経過舌とすると1秒から299秒までのチャットが表示される
      timerState.current.setTime({ hours: 0, minutes: 4, seconds: 59 });
    });

    await waitFor(() => result.current.data.length);

    expect(result.current.data.length).toBe(299);

    const isEverySecond = result.current.data.every(
      (chat, i) => chat.comment_time === i + 1
    );

    expect(isEverySecond).toBe(true);
  });

  test("7分経過しても再度fetchが行われ7分分表示される", async () => {
    const { result, timerState } = await setup();

    await waitFor(() => expect(result.current.isPending).toBe(true));
    await waitFor(() => expect(result.current.isPending).toBe(false));

    act(() => {
      // 7分経過
      timerState.current.setTime({ hours: 0, minutes: 7, seconds: 0 });
    });

    await waitFor(() => result.current.data.length);

    expect(result.current.data.length).toBe(420);

    const isEverySecond = result.current.data.every(
      (chat, i) => chat.comment_time === i + 1
    );

    expect(isEverySecond).toBe(true);
  });

  test("4時間を超えた場合はそれ以上描画されない", async () => {
    const { result, timerState } = await setup();

    await waitFor(() => expect(result.current.isPending).toBe(true));
    await waitFor(() => expect(result.current.isPending).toBe(false));

    act(() => {
      // 4時間1秒経過
      timerState.current.setTime({ hours: 4, minutes: 0, seconds: 1 });
    });

    await waitFor(() => result.current.data.length);

    expect(result.current.data.length).toBe(14399);

    const isEverySecond = result.current.data.every(
      (chat, i) => chat.comment_time === i + 1
    );

    expect(isEverySecond).toBe(true);
  });

  test("4時間までは表示される", async () => {
    const { result, timerState } = await setup();

    await waitFor(() => expect(result.current.isPending).toBe(true));
    await waitFor(() => expect(result.current.isPending).toBe(false));

    act(() => {
      // 4時間経過
      timerState.current.setTime({ hours: 4, minutes: 0, seconds: 0 });
    });

    await waitFor(() => result.current.data.length);

    expect(result.current.data.length).toBe(14399);

    const isEverySecond = result.current.data.every(
      (chat, i) => chat.comment_time === i + 1
    );

    expect(isEverySecond).toBe(true);
  });
});
