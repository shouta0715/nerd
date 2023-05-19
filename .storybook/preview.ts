import { handler as authHandlers } from "../src/features/auth/mocks/msw";
import {
  TailwindStory,
  createViewPortParameters,
} from "../src/tests/storybook";
import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    // actionに表示されものはonの後に大文字で始まるものだけ
    ...TailwindStory.parameters,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers: {
        auth: authHandlers,
      },
    },
  },
};

initialize();
export const decorators = [mswDecorator];

export default preview;
