import { render, screen } from "@testing-library/react";
import { Faq } from "src/features/pages/faq";

describe("faq", () => {
  test("こちらをクリックするとお問い合わせページへ移動", () => {
    render(<Faq />);

    const linkElement = screen.getByRole("link", { name: "こちら" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://forms.gle/GMzgLTw6FA8S6jjS9"
    );
  });
});
