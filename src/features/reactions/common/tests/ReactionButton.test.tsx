import { fireEvent, render, renderHook } from "@testing-library/react";
import { ComponentProps } from "react";
import { act } from "react-dom/test-utils";
import { ReactionButton } from "src/features/reactions/common/components/ReactionButton";
import { mswInsertReactionsHandler } from "src/features/reactions/common/mocks/msw";
import {
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
  const rendered = render(<ReactionButton {...defaultProps} />, { wrapper });
  const { result: user } = renderHook(() => useUserState());
  const { result: timer } = renderHook(() => useTimerState());

  return { ...rendered, user, timer };
};

describe("ReactionButton", () => {
  describe("mutate 成功", () => {
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
  });
});
