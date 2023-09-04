import { act, render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { ComponentProps } from "react";
import { ActiveLink } from "src/components/Elements/ActiveLink";

const setup = (props: ComponentProps<typeof ActiveLink>) => {
  act(() => {
    mockRouter.setCurrentUrl("/");
  });

  return render(<ActiveLink {...props} />);
};

describe("ActiveLink", () => {
  test("正常にレンダリングされる", () => {
    const { asFragment } = setup({
      href: "/",
      children: () => <div>test</div>,
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test("hrefが現在のURLと一致する場合、childrenにisActiveが渡される", () => {
    const children = jest.fn().mockReturnValue(<div>test</div>);
    setup({
      href: "/",
      children,
    });

    expect(children).toHaveBeenCalledWith({ isActive: true });

    children.mockClear();

    setup({
      href: "/test",
      children,
    });

    expect(children).toHaveBeenCalledWith({ isActive: false });
  });

  test("画面遷移するとonTransitionCompleteが呼ばれる", () => {
    const onTransitionComplete = jest.fn();
    setup({
      href: "/",
      onTransitionComplete,
      children: () => <div>test</div>,
    });

    act(() => {
      mockRouter.push("/test");
    });

    expect(onTransitionComplete).toHaveBeenCalled();
  });
});
