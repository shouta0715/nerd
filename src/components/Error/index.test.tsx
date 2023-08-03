import { render } from "@testing-library/react";
import { ErrorPage } from "src/components/Error/items/ErrorPage";
import { Error } from "src/libs/error";

const setup = (props: Partial<Error>) => {
  const defaultProps: Error = {
    status: 401,
    message: "Unauthorized",
  };

  return render(<ErrorPage {...defaultProps} {...props} />);
};

describe("Error Page", () => {
  test("お問い合わせリンクをクリックすると、お問い合わせページに遷移する", () => {
    const { getByText } = setup({ status: 401 });

    const linkElement = getByText("お問い合わせ");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://forms.gle/GMzgLTw6FA8S6jjS9"
    );
  });
});
