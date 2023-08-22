import { act, renderHook, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { CommentsFilter } from "src/features/comments/common/types";
import { useInfiniteCommentsEpisode } from "src/features/comments/episodes/api/useInfiniteCommentsEpisode";
import { mswInfiniteCommentsHandlers } from "src/features/comments/episodes/mocks/msw";
import { useUserState } from "src/store/user/userState";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";
import { User } from "src/types/userType";

setupMsw(...mswInfiniteCommentsHandlers);

const getUser = (): User => {
  return {
    provider_user_name: "test",
    user_name: "test",
    anonymous: false,
    isDefaultPhoto: false,
    photo_url: "test",
    id: "test",
  };
};

const setup = async (order: CommentsFilter = "popular") => {
  mockRouter.setCurrentUrl(`/episodes/1?mode=comment&order=${order}}`);
  const wrapper = QueryClientWrapper;

  const { result } = renderHook(() => useInfiniteCommentsEpisode("1", order), {
    wrapper,
  });
  const { result: user } = renderHook(() => useUserState());

  return { result, user };
};

describe("useCommentEpisode", () => {
  test("userがいない場合は取得しない。", async () => {
    const { result, user } = await setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).not.toBe(false);
    });

    act(() => {
      user.current.setUser(getUser());
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data?.pages).toHaveLength(1);
  });

  test("orderがpopularの場合はpopular順で取得する。", async () => {
    const { result, user } = await setup();

    act(() => {
      user.current.setUser(getUser());
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const comments = result.current.data?.pages[0].comments;

    comments?.forEach((comment, i) => {
      if (i === 0) return;
      const prevComment = comments[i - 1];

      if (!prevComment.likes_aggregate.aggregate?.count) return;
      if (!comment.likes_aggregate.aggregate?.count) return;

      expect(comment.likes_aggregate.aggregate.count).toBeLessThanOrEqual(
        prevComment.likes_aggregate.aggregate.count
      );
    });
  });

  test("orderがnewの場合はnew順で取得する。", async () => {
    const { result, user } = await setup("new");

    act(() => {
      user.current.setUser(getUser());
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const comments = result.current.data?.pages[0].comments;

    comments?.forEach((comment, i) => {
      if (i === 0) return;
      const prevComment = comments[i - 1];

      if (!prevComment.created_at) return;
      if (!comment.created_at) return;

      expect(new Date(comment.created_at).getTime()).toBeLessThanOrEqual(
        new Date(prevComment.created_at).getTime()
      );
    });
  });

  test("fetchNextPageを呼ぶと次のページを取得する。", async () => {
    const { result, user } = await setup();

    act(() => {
      user.current.setUser(getUser());
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data?.pageParams).toHaveLength(1);

    result.current.fetchNextPage();

    await waitFor(() => {
      expect(result.current.data?.pageParams).toHaveLength(2);
    });
  });
});
