import { renderHook, waitFor } from "@testing-library/react";
import { useQueryTrends } from "src/features/trends/api/useQueryEpisodeTrends";
import { trendingChatsEpisodesHandler } from "src/features/trends/mocks/msw";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

setupMsw(trendingChatsEpisodesHandler());

const setup = async () => {
  const wrapper = QueryClientWrapper;
  const { result } = renderHook(() => useQueryTrends(), { wrapper });

  return {
    result,
  };
};

describe("useQueryTrends", () => {
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
