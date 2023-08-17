import { render } from "@testing-library/react";
import { Error as CError } from "src/components/Error";
import {
  Error,
  ForbiddenError,
  GraphQLError,
  InternalServerError,
  NotFoundError,
  SomeThingWentWrongError,
  UnauthorizedError,
} from "src/libs/error";

const setup = <T extends Error>(C: { new (): T }) => {
  return render(
    <CError
      error={new C()}
      resetErrorBoundary={
        // eslint-disable-next-line no-console
        () => console.log("resetErrorBoundary")
      }
    />
  );
};
describe("Error Page", () => {
  test("お問い合わせリンクをクリックすると、お問い合わせページに遷移する", () => {
    const { getByText } = setup(UnauthorizedError);

    const linkElement = getByText("お問い合わせ");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://forms.gle/GMzgLTw6FA8S6jjS9"
    );
  });

  test("ForbiddenErrorの場合は、403が表示される", () => {
    const { getByText } = setup(ForbiddenError);

    const linkElement = getByText("403");

    expect(linkElement).toBeInTheDocument();
  });

  test("NotFoundErrorの場合は、404が表示される", () => {
    const { getByText } = setup(NotFoundError);

    const linkElement = getByText("404");

    expect(linkElement).toBeInTheDocument();
  });

  test("InternalServerErrorの場合は、500が表示される", () => {
    const { getByText } = setup(InternalServerError);

    const linkElement = getByText("500");

    expect(linkElement).toBeInTheDocument();
  });

  test("UnauthorizedErrorの場合は、401が表示される", () => {
    const { getByText } = setup(UnauthorizedError);

    const linkElement = getByText("401");

    expect(linkElement).toBeInTheDocument();
  });

  test('status = 200 でmessageにstatus":200が含まれていたら,404が表示される', () => {
    const { getByText } = setup(GraphQLError);

    const linkElement = getByText("404");

    expect(linkElement).toBeInTheDocument();
  });

  test("その他のエラーの場合は、Something went wrongが表示される", () => {
    const { getByText } = setup(SomeThingWentWrongError);

    const linkElement = getByText("Something went wrong");

    expect(linkElement).toBeInTheDocument();
  });
});
