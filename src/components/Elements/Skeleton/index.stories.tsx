import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayoutOnlyHeaderDecorator } from "src/tests/storybook";

type Story = StoryObj<typeof Skeleton>;

export default {
  title: "Elements/Skeleton",
  component: Skeleton,
} as Meta<typeof Skeleton>;

export const Default: Story = {
  args: {
    theme: "work",
  },
};

export const EpisodeMenu: Story = {
  args: {
    theme: "episodeMenu",
  },
};

export const Episode: Story = {
  args: {
    theme: "episode",
  },
  decorators: [BasicLayoutOnlyHeaderDecorator],
};

export const NextButton: Story = {
  args: {
    theme: "nextButton",
  },
};

export const Timer: Story = {
  args: {
    theme: "timer",
  },
};

export const WorkEpisode: Story = {
  args: {
    theme: "workEpisode",
  },
};

export const Work: Story = {
  args: {
    theme: "work",
    props: {
      is_short: false,
      isButton: false,
    },
  },
};

export const Today: Story = {
  args: {
    theme: "today",
  },
};

export const WorkWithShort: Story = {
  args: {
    theme: "work",
    props: {
      is_short: true,
      isButton: false,
    },
  },
};

export const WorkWithButton: Story = {
  args: {
    theme: "work",
    props: {
      is_short: false,
      isButton: true,
    },
  },
};

export const WorkWithShortAndButton: Story = {
  args: {
    theme: "work",
    props: {
      is_short: true,
      isButton: true,
    },
  },
};

export const Search: Story = {
  args: {
    theme: "search",
  },
};
