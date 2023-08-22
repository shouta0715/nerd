import { render, renderHook, waitFor } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import { act } from "react-dom/test-utils";
import { RequestHistory } from "src/features/request/history/components/RequestHistory";
import { requestHistoryHandlers } from "src/features/request/history/mocks/msw";
import { getStatusQuery } from "src/features/request/history/utils";
import { Status_Enum } from "src/gql/graphql";
import { useUserState } from "src/store/user/userState";
import { userData } from "src/tests/mocks/fixture";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

const initialUrl = "/request?status=all&page=1";
const userEvent = userEvents.setup();

setupMsw(...requestHistoryHandlers());

const getUrl = (status: Status_Enum | "all" = "all", page = 1) => {
  return `/request?status=${getStatusQuery(status)}&page=${page}`;
};

const setup = () => {
  mockRouter.setCurrentUrl(initialUrl);
  const wrapper = QueryClientWrapper;

  const utils = render(<RequestHistory />, { wrapper });
  const { result: currentUser } = renderHook(() => useUserState());

  act(() => {
    currentUser.current.setUser(userData);
  });

  return { ...utils };
};

describe("RequestHistory", () => {
  test("listboxの指定した審査中をクリックすると、statusが変更される", async () => {
    const { getByText, getByRole } = setup();

    const status = getByText("全て");

    userEvent.click(status);

    await waitFor(async () => {
      const statusList = getByRole("option", { name: "審査中" });
      expect(statusList).toBeInTheDocument();

      await userEvent.click(statusList);
    });

    expect(mockRouter.asPath).toBe(getUrl(Status_Enum.Pending));
  });

  test("listboxの指定した承認済みをクリックすると、statusが変更される", async () => {
    const { getByText, getByRole } = setup();

    const status = getByText("全て");

    userEvent.click(status);

    await waitFor(async () => {
      const statusList = getByRole("option", { name: "承認済み" });
      expect(statusList).toBeInTheDocument();

      await userEvent.click(statusList);
    });

    expect(mockRouter.asPath).toBe(getUrl(Status_Enum.Approved));
  });

  test("listboxの指定した見送りをクリックすると、statusが変更される", async () => {
    const { getByText, getByRole } = setup();

    const status = getByText("全て");

    userEvent.click(status);

    await waitFor(async () => {
      const statusList = getByRole("option", { name: "見送り" });
      expect(statusList).toBeInTheDocument();

      await userEvent.click(statusList);
    });

    expect(mockRouter.asPath).toBe(getUrl(Status_Enum.Rejected));
  });

  test("listboxの指定した全てをクリックすると、statusが変更される", async () => {
    const { getByText, getByRole } = setup();

    const status = getByText("全て");

    userEvent.click(status);

    await waitFor(async () => {
      const statusList = getByRole("option", { name: "全て" });
      expect(statusList).toBeInTheDocument();

      await userEvent.click(statusList);
    });

    expect(mockRouter.asPath).toBe(getUrl("all"));
  });
});
