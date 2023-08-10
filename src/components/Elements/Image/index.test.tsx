import { render } from "@testing-library/react";
import { Image } from "src/components/Elements/Image";

describe("Components/Elements/Image", () => {
  test("should render", () => {
    render(<Image alt="" src="" />);
  });
  test("isLoadingがtrueならloading...が表示", () => {
    const { getByText } = render(<Image alt="" isLoading src="" />);
    const linkElement = getByText("loading...");
    expect(linkElement).toBeInTheDocument();
  });
});
