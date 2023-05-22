import { Meta, StoryObj } from "@storybook/react";
import { Request } from "src/features/request/components/Request";
import { handleRequest } from "src/features/request/mocks/msw";
import { BasicLayoutDecorator } from "src/tests/storybook";

export default {
  title: "Features/Request",
  component: Request,
  decorators: [BasicLayoutDecorator],
  parameters: {
    msw: {
      handlers: {
        request: [handleRequest()],
      },
    },
  },
} as Meta<typeof Request>;

type Story = StoryObj<typeof Request>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: {
        request: [handleRequest()],
      },
    },
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: {
        request: [handleRequest(404)],
      },
    },
  },
};
