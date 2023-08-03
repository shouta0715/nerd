import { act, render, renderHook } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import { NotificationProvider } from "src/components/Notification/NotificationProvider";
import { MenuForm } from "src/components/Form/Menu";
import { useUserState } from "src/store/user/userState";
import { userData } from "src/tests/mocks/fixture";

const user = useEvent.setup();

const TestComponents = () => {
  return (
    <NotificationProvider>
      <MenuForm />
    </NotificationProvider>
  );
};

const setup = (isUser = true) => {
  const { result: userState } = renderHook(() => useUserState());

  act(() => {
    if (isUser) userState.current.setUser(userData);
  });

  const utils = render(<TestComponents />);

  return {
    ...utils,
    ...userState.current,
  };
};

describe("MenuForm", () => {
  test("1文字以上20文字以下なら名前が変更されるが呼ばれる", async () => {
    const username = "test username";
    const { getByRole } = setup();

    const input = getByRole("textbox");
    const button = getByRole("button", {
      name: "変更",
    });

    await act(async () => {
      await user.type(input, username);
      await user.click(button);
    });

    expect(getByRole("alert")).toHaveTextContent("投稿名を変更しました");

    const { result } = renderHook(() => useUserState());

    expect(result.current.user?.user_name).toBe(username);
  });

  test("名前が変更前と同じならbuttonが押せない", async () => {
    const { getByRole } = setup();

    const input = getByRole("textbox") as HTMLInputElement;
    const button = getByRole("button", {
      name: "変更",
    });

    await act(async () => {
      await user.type(input, userData.user_name);
    });

    expect(button).toBeDisabled();
  });

  test("20文字以上は入力されない", async () => {
    const name = "This is 20 characters".repeat(20);

    const { getByRole } = setup();

    const input = getByRole("textbox") as HTMLInputElement;

    await act(async () => {
      await user.type(input, name);
    });

    expect(input.value).toHaveLength(20);
  });
});
