import { Meta, StoryObj } from "@storybook/react";
import { NextMenu } from "src/features/episodes/components/NextMenu";

import { episodeData } from "src/features/episodes/mocks/fixture";
import { handlers } from "src/features/episodes/mocks/msw";
import {
  ProvidersDecorator,
  createViewPortParameters,
} from "src/tests/storybook";

export default {
  title: "features/Episode/Next",
  component: NextMenu,
  decorators: [ProvidersDecorator],
  parameters: {
    msw: {
      handlers: {
        episodes: [...handlers],
      },
    },
  },
} as Meta<typeof NextMenu>;

type Story = StoryObj<typeof NextMenu>;

export const Default: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
};

export const Open: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
};

export const Sp: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
  parameters: {
    ...createViewPortParameters("sp"),
  },
};

export const Sm: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
  parameters: {
    ...createViewPortParameters("sm"),
  },
};

export const Lg: Story = {
  args: {
    episode: episodeData.episodes_by_pk,
  },
  parameters: {
    ...createViewPortParameters("lg"),
  },
};

export const DownSp: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "down",
  },
  parameters: {
    ...createViewPortParameters("sp"),
  },
};

export const DownSm: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "down",
  },
  parameters: {
    ...createViewPortParameters("sm"),
  },
};

export const DownLg: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "down",
  },
  parameters: {
    ...createViewPortParameters("lg"),
  },
};

export const FinishedSp: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "finish",
  },
  parameters: {
    ...createViewPortParameters("sp"),
  },
};

export const FinishedSm: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "finish",
  },
  parameters: {
    ...createViewPortParameters("sm"),
  },
};

export const FinishedLg: Story = {
  args: {
    episode: episodeData.episodes_by_pk,

    mode: "finish",
  },
  parameters: {
    ...createViewPortParameters("lg"),
  },
};
