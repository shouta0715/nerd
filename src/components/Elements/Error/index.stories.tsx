import { Meta, StoryObj } from "@storybook/react";
import { Error as ErrorComponent } from "src/components/Elements/Error";
import {
  BadRequestError,
  ForbiddenError,
  GraphQLError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "src/libs/error";

export default {
  title: "Elements/Error",
  component: ErrorComponent,
} as Meta<typeof ErrorComponent>;
type Story = StoryObj<typeof ErrorComponent>;

export const Default: Story = {
  args: {
    error: new InternalServerError(),
  },
};

export const Forbidden: Story = {
  args: {
    error: new ForbiddenError(),
  },
};

export const NotFound: Story = {
  args: {
    error: new NotFoundError(),
  },
};

export const ServerError: Story = {
  args: {
    error: new InternalServerError(),
  },
};

export const GraphQL: Story = {
  args: {
    error: new GraphQLError(),
  },
};

export const UnAuthorized: Story = {
  args: {
    error: new UnauthorizedError(),
  },
};

export const BadRequest: Story = {
  args: {
    error: new BadRequestError(),
  },
};
