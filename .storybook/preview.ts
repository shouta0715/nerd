import type { Preview } from "@storybook/react";
import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    // actionに表示されものはonの後に大文字で始まるものだけ
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
