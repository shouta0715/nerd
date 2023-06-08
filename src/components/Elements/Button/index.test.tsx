import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "src/components/Elements/Button";

const user = userEvent.setup();

describe("Elements/Buttonのテスト", () => {
  const children = "Button";
  test("Buttonが存在すること", () => {
    render(<Button>{children}</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("onClickに渡した関数が実行されること", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{children}</Button>);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("isLoadingがtrueの場合loaderが表示されButtonがdisabledになること", async () => {
    const onClick = jest.fn();
    render(
      <Button loading onClick={onClick}>
        {children}
      </Button>
    );
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    const Loader = screen.getByRole("status");
    expect(Loader).toBeInTheDocument();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  test("disabledがtrueなら押せない", async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        {children}
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
