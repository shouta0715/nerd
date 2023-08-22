import { renderHook, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { act } from "react-dom/test-utils";
import { useRequestHistory } from "src/features/request/history/hooks/useRequestHistory";
import { requestHistoryHandlers } from "src/features/request/history/mocks/msw";
import { getStatusQuery } from "src/features/request/history/utils";
import { Status_Enum } from "src/gql/graphql";
import { useUserState } from "src/store/user/userState";
import { userData } from "src/tests/mocks/fixture";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

setupMsw(...requestHistoryHandlers());

const setup = (status: Status_Enum | "all" = "all", page = 1) => {
  mockRouter.setCurrentUrl(
    `/request?status=${getStatusQuery(status) ?? "all"}&page=${page}`
  );
  const wrapper = QueryClientWrapper;

  const { result } = renderHook(() => useRequestHistory(), { wrapper });
  const { result: user } = renderHook(() => useUserState());

  return { result, user };
};

describe("useQueryRequest", () => {
  test("userがいない場合はデータが取得されない", async () => {
    const { result } = setup();

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.data).toBeUndefined();
    });
  });

  test("userがいる場合はデータが取得される", async () => {
    const { result, user } = setup();

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });
  });

  test("statusがallの場合はapproval_statusがStatus_Enum.Approved : Status_Enum.Pending,のデータが取得される", async () => {
    const { result, user } = setup();

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const is = result.current.data?.request_works.every(
      (request, i) =>
        request.approval_status ===
        (i / 2 === 0 ? Status_Enum.Approved : Status_Enum.Pending)
    );

    expect(is).toBe(true);
  });

  test("statusがpendingの場合はapproval_statusがStatus_Enum.Pendingのデータが取得される", async () => {
    const { result, user } = setup(Status_Enum.Pending);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const is = result.current.data?.request_works.every(
      (request) => request.approval_status === Status_Enum.Pending
    );

    expect(is).toBe(true);
  });

  test("statusがapprovedの場合はapproval_statusがStatus_Enum.Approvedのデータが取得される", async () => {
    const { result, user } = setup(Status_Enum.Approved);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const is = result.current.data?.request_works.every(
      (request) => request.approval_status === Status_Enum.Approved
    );

    expect(is).toBe(true);
  });

  test("statusがrejectedの場合はapproval_statusがStatus_Enum.Rejectedのデータが取得される", async () => {
    const { result, user } = setup(Status_Enum.Rejected);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const is = result.current.data?.request_works.every(
      (request) => request.approval_status === Status_Enum.Rejected
    );

    expect(is).toBe(true);
  });

  test("pageが1の場合はoffsetが0でlimitが10のデータが取得される", async () => {
    const { result, user } = setup();

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data?.request_works.length).toBe(10);
    expect(result.current.data?.request_works[0].id).toBe(0);
    expect(result.current.data?.request_works[9].id).toBe(9);
  });

  test("pageが2の場合はoffsetが10でlimitが10のデータが取得される", async () => {
    const { result, user } = setup("all", 2);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    expect(result.current.data?.request_works.length).toBe(10);
    expect(result.current.data?.request_works[0].id).toBe(10);
    expect(result.current.data?.request_works[9].id).toBe(19);
  });

  test("page1からpage2に変更した場合1よりも古いデータが取得される", async () => {
    const { result, user } = setup("all", 1);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.isPending).toBe(false);
    });

    const firstData = result.current.data?.request_works[0].id;

    const { result: result2 } = setup("all", 2);

    act(() => {
      user.current.setUser(userData);
    });

    await waitFor(() => {
      expect(result2.current.isPending).toBe(true);
    });

    await waitFor(() => {
      expect(result2.current.isPending).toBe(false);
    });

    const secondData = result2.current.data?.request_works[0].id;

    if (!secondData) throw new Error("secondData is undefined");

    expect(firstData).toBeLessThan(secondData);
  });
});
