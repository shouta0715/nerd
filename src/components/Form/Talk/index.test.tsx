import { act, fireEvent, render, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentPropsWithoutRef } from "react";
import { TalkForm } from "src/components/Form/Talk";
import { useGlobalState } from "src/store/global/globalStore";
import { setupAutoSizeTextarea } from "src/tests/setup";

setupAutoSizeTextarea();

const user = userEvent.setup();

const TestComponent = (props: ComponentPropsWithoutRef<typeof TalkForm>) => {
  return <TalkForm {...props} />;
};

const setup = (
  props: Partial<ComponentPropsWithoutRef<typeof TalkForm>>,
  authLoading = false
) => {
  const { result } = renderHook(() => useGlobalState);

  result.current.setState({ authLoading });

  const onSubmitHandler = props.onSubmitHandler || jest.fn();
  const onChangeHandler = props.onChange || jest.fn();
  const onBlurHandler = props.onBlur || jest.fn();

  const comp = render(
    <TestComponent
      disabled={props.disabled || false}
      isLoading={props.isLoading || false}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      placeholder={props.placeholder || ""}
      value={props.value || ""}
    />
  );

  return {
    ...comp,
    onSubmitHandler,
    onChangeHandler,
    onBlurHandler,
  };
};

describe("TalkForm", () => {
  test("should render", () => {
    const { container } = setup({});
    expect(container).toBeInTheDocument();
  });

  test("isLoadingとauthLoadingがfalseなら、onChangeHandlerが呼ばれる。", async () => {
    const { getByRole, onChangeHandler } = setup({});
    const textarea = getByRole("textbox");

    await act(async () => {
      await user.type(textarea, "test");
    });
    expect(onChangeHandler).toHaveBeenCalledTimes(4);
  });

  test("authLoadingがtrueなら、onChangeHandlerが呼ばれない。", async () => {
    const { getByRole, onChangeHandler } = setup({}, true);
    const textarea = getByRole("textbox");

    await act(async () => {
      await user.type(textarea, "test");
    });
    expect(onChangeHandler).toHaveBeenCalledTimes(0);
  });

  test("Enterを押すと、onSubmitHandlerが呼ばれる。", async () => {
    const { getByRole, onSubmitHandler } = setup({});
    const textarea = getByRole("textbox");

    await act(async () => {
      await user.type(textarea, "test");
      await userEvent.type(textarea, "{enter}");
    });
    expect(onSubmitHandler).toHaveBeenCalledTimes(1);
  });

  test("Shift + Enterを押すと、onSubmitHandlerが呼ばれない。", async () => {
    const { getByRole, onSubmitHandler } = setup({});
    const textarea = getByRole("textbox");

    await act(async () => {
      fireEvent.keyDown(textarea, {
        key: "Enter",
        code: "Enter",
        shiftKey: true,
      });
    });
    expect(onSubmitHandler).toHaveBeenCalledTimes(0);
  });

  test("loadingまたは何も入力されていないときはButtonが押せない", async () => {
    const { getAllByRole } = setup(
      {
        disabled: true,
        isLoading: true,
      },
      true
    );

    const buttons = getAllByRole("button");
    const spButton = buttons[1];
    const pcButton = buttons[buttons.length - 1];

    expect(spButton).toBeDisabled();
    expect(pcButton).toBeDisabled();
  });
});
