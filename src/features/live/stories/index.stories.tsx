import { Meta, StoryObj } from "@storybook/react";
import { Live } from "src/features/live/components/Live";
import { handlers } from "src/features/live/mocks/msw";
import { BasicLayoutOnlyHeaderDecorator } from "src/tests/storybook";

export default {
  title: "Features/Live",
  component: Live,
  decorators: [BasicLayoutOnlyHeaderDecorator],
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/live/1",
        query: {
          slug: "x",
        },
      },
    },
  },
} as Meta<typeof Live>;

type Story = StoryObj<typeof Live>;
//! queryをmodeによって変えないとキャッシュが効いてしまう

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/live/1",
        query: {
          slug: "finish",
        },
      },
    },
    msw: {
      handlers: {
        live: [...handlers({ mode: "finished" })],
      },
    },
  },
};

export const WillStart: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/live/1",
        query: {
          slug: "will",
        },
      },
    },
    msw: {
      handlers: {
        live: [...handlers({ mode: "will" })],
      },
    },
  },
};

export const Now: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: "/episodes/live/1",
        query: {
          slug: "now",
        },
      },
    },
    msw: {
      handlers: {
        live: [...handlers({ mode: "now" })],
      },
    },
  },
};
