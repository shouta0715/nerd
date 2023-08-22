import { render, renderHook, waitFor } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { RequestForm } from "src/components/Form/Request";
import { Notification } from "src/components/Notification";
import { handleRequest } from "src/features/request/common/mocks/msw";
import { useUserState } from "src/store/user/userState";
import { userData } from "src/tests/mocks/fixture";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

const startMsw = (status?: number, delay = 0) => {
  setupMsw(handleRequest(status, delay));
};
const user = useEvent.setup();
const setup = () => {
  const wrapper = QueryClientWrapper;

  const rendered = render(
    <>
      <RequestForm />
      <Notification />
    </>,
    {
      wrapper,
    }
  );
  const { result } = renderHook(() => useUserState());

  act(() => {
    result.current.setUser(userData);
  });

  return { ...rendered };
};

describe("Form/Request", () => {
  describe("Form/Request 成功", () => {
    startMsw();
    test("タイトルが入力されていない場合はエラーが表示される", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");

      await act(async () => {
        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(input).toHaveFocus();
      });

      expect(getByRole("alert")).toHaveTextContent("作品名を入力してください");
    });

    test("urlとdetailは空でも送信できる。", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");

      await act(async () => {
        await user.type(input, "test");

        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(getByRole("alert")).toHaveTextContent(
          "リクエストありがとうございます。"
        );
      });
    });

    test("urlの形式が正しくない場合はerrorになる。", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");
      const urlInput = getByPlaceholderText("URLを入力...");

      await act(async () => {
        await user.type(input, "test");
        await user.type(urlInput, "test");

        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(urlInput).toHaveFocus();
      });

      expect(getByRole("alert")).toHaveTextContent(
        "正しいURLを入力してください"
      );
    });

    test("正しく入力されている場合は、送信される。", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");
      const urlInput = getByPlaceholderText("URLを入力...");
      const detailInput = getByPlaceholderText("詳細を入力...");

      await act(async () => {
        await user.type(input, "test");
        await user.type(urlInput, "https://test.com");
        await user.type(detailInput, "test");

        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(getByRole("alert")).toHaveTextContent(
          "リクエストありがとうございます。"
        );
      });
    });
  });

  describe("Form/Request 失敗", () => {
    startMsw(400);
    test("エラーの場合は、送信されない。", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");
      const urlInput = getByPlaceholderText("URLを入力...");

      await act(async () => {
        await user.type(input, "test");
        await user.type(urlInput, "https://test.com");

        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(getByRole("alert")).toHaveTextContent("送信できませんでした。");
      });
    });
  });

  describe("Form/Request ロード中", () => {
    startMsw(200, 1000);
    test("ロード中は、ボタンが押せない。送信中が表示される", async () => {
      const { getByRole, getByPlaceholderText } = setup();

      const submitBtn = getByRole("button", {
        name: "送信する",
      });

      const input = getByPlaceholderText("タイトルを入力...");
      const urlInput = getByPlaceholderText("URLを入力...");

      await act(async () => {
        await user.type(input, "test");
        await user.type(urlInput, "https://test.com");

        await user.click(submitBtn);
      });

      await waitFor(() => {
        expect(submitBtn).toBeDisabled();
      });

      expect(submitBtn).toHaveTextContent("送信中...");
    });
  });
});
