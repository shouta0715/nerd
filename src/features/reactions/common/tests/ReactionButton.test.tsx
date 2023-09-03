import { fireEvent, render, renderHook } from "@testing-library/react";
import { ComponentProps } from "react";
import { act } from "react-dom/test-utils";
import { Notification } from "src/components/Notification";
import { ReactionButton } from "src/features/reactions/common/components/ReactionButton";
import { mswInsertReactionsHandler } from "src/features/reactions/common/mocks/msw";
import {
  ReactionType,
  defaultReaction,
  reactionsData,
} from "src/features/reactions/common/types";
import { useTimerState } from "src/features/timer/store";
import { useUserState } from "src/store/user/userState";
import { userData } from "src/tests/mocks/fixture";
import { QueryClientWrapper } from "src/tests/provider";
import { setupMsw } from "src/tests/setup";

type Props = ComponentProps<typeof ReactionButton>;

const setup = (props: Partial<Props>) => {
  const wrapper = QueryClientWrapper;
  const defaultProps: Props = {
    onSubmitHandler: jest.fn(),
    reactions: defaultReaction,
    setReactions: jest.fn(),
    ...props,
  };
  const rendered = render(
    <>
      <ReactionButton {...defaultProps} />
      <Notification />
    </>,
    { wrapper }
  );
  const { result: user } = renderHook(() => useUserState());
  const { result: timer } = renderHook(() => useTimerState());

  return { ...rendered, user, timer };
};

describe("ReactionButton", () => {
  setupMsw(mswInsertReactionsHandler());

  test("disabledActionを渡した場合はdisabledActionが優先される", async () => {
    const { getByLabelText } = setup({
      disabledAction: true,
    });

    const reactionOpenButton = getByLabelText("リアクションを開く");

    expect(reactionOpenButton).toBeDisabled();
  });

  test("disabledActionを渡さなかった場合はタイマーが0の時はdisabledになる", async () => {
    const { getByLabelText, timer, user } = setup({});

    const reactionOpenButton = getByLabelText("リアクションを開く");

    act(() => {
      timer.current.getTime = () => 1;
      timer.current.interval.active = true;
      user.current.setUser(userData);
    });

    expect(reactionOpenButton).toBeEnabled();
  });

  test("userがいない場合はLoaderが表示される", async () => {
    const { getByRole, timer, user, getByLabelText } = setup({});

    const reactionOpenButton = getByLabelText("リアクションを開く");
    const loader = getByRole("status");

    act(() => {
      timer.current.getTime = () => 1;
      timer.current.interval.active = true;
    });

    expect(reactionOpenButton).toBeDisabled();
    expect(loader).toBeInTheDocument();

    act(() => {
      user.current.setUser(userData);
    });

    expect(reactionOpenButton).toBeEnabled();
    expect(loader).not.toBeInTheDocument();
  });

  test.each(Object.values(reactionsData))(
    "reactionButtonを押すと2秒後にonSubmitHandlerにreactionとreactionsが渡される",
    async (reaction) => {
      jest.useFakeTimers();

      const onSubmitHandler = jest.fn();
      const reactions = defaultReaction;
      const { getByLabelText, timer, user } = setup({
        onSubmitHandler,
      });

      const reactionButton = getByLabelText(`${reaction.label}ボタン`);

      act(() => {
        timer.current.getTime = () => 1;
        timer.current.interval.active = true;
        user.current.setUser(userData);
      });

      expect(reactionButton).toBeEnabled();

      fireEvent.click(reactionButton);

      const expectReaction = {
        type: reaction.value,
        count: 1,
        reactions_time: 1,
      };
      jest.runAllTimers();

      expect(onSubmitHandler).toHaveBeenCalled();
      expect(onSubmitHandler).toHaveBeenCalledWith(expectReaction, reactions);
    },
    10000
  );

  test('isShowがtrueの時は"リアクションを閉じる"が表示される', async () => {
    const { getByLabelText, timer, user } = setup({});

    const reactionOpenButton = getByLabelText("リアクションを開く");

    expect(reactionOpenButton).toBeInTheDocument();

    act(() => {
      timer.current.getTime = () => 1;
      timer.current.interval.active = true;
      user.current.setUser(userData);
    });

    fireEvent.click(reactionOpenButton);

    const reactionCloseButton = getByLabelText("リアクションを閉じる");

    expect(reactionCloseButton).toBeInTheDocument();
  });

  test("onSubmitHandlerがエラーを投げるとリアクションできませんでした。が表示される", async () => {
    const onSubmitHandler = jest.fn().mockImplementation(() => {
      throw new Error();
    });

    const { getByLabelText, timer, user, getByRole } = setup({
      onSubmitHandler,
    });

    const reactionButton = getByLabelText(`${reactionsData.HEART.label}ボタン`);

    act(() => {
      timer.current.getTime = () => 1;
      timer.current.interval.active = true;
      user.current.setUser(userData);
    });

    await act(async () => {
      jest.useFakeTimers();
      fireEvent.click(reactionButton);
      jest.advanceTimersByTime(2000);
    });

    expect(getByRole("alert")).toHaveTextContent(
      "リアクションできませんでした。"
    );
  });

  test("reactionを押すとsetReactionsが呼ばれとvalueにreactionが追加されreaction.valueのcountが増える", async () => {
    const setReactions = jest.fn();
    const reactions = defaultReaction;

    const { getByLabelText, timer, user } = setup({
      setReactions,
      reactions,
    });

    const reactionButton = getByLabelText(`${reactionsData.HEART.label}ボタン`);

    act(() => {
      timer.current.getTime = () => 1;
      timer.current.interval.active = true;
      user.current.setUser(userData);
    });

    fireEvent.click(reactionButton);

    expect(setReactions).toHaveBeenCalled();
    const setReactionsCalledWith = setReactions.mock.calls[0][0];

    const calledWithFn = (prev: ReactionType): ReactionType => {
      const newValues: ReactionType["values"] = [
        ...prev.values,
        {
          ...reactionsData.HEART,
          id: expect.any(String),
        },
      ];

      return {
        ...prev,
        [reactionsData.HEART.value]: {
          count: 1,
          reactions_time: 1,
        },
        values: newValues,
      };
    };

    expect(setReactionsCalledWith(reactions)).toEqual(calledWithFn(reactions));
  });
});
