import { render } from "@testing-library/react";
import { TextArea } from "src/components/Elements/TextArea";
import { setupAutoSizeTextarea } from "src/tests/setup";

setupAutoSizeTextarea();
describe("<TextareaAutosize />", () => {
  it("renders ok", () => {
    const { asFragment } = render(<TextArea />);

    expect(asFragment()).toMatchSnapshot();
  });
});
