import { render, screen } from "@testing-library/react";
import { Switch } from "src/components/Elements/Switch";

describe("Switchのtest", () => {
  test("disabledのtest", () => {
    render(<Switch disabled />);
    const SwitchEl = screen.getByRole("switch");
    expect(SwitchEl).toBeDisabled();
  });
});
