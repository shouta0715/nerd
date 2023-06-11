import { Meta, StoryObj } from "@storybook/react";
import { Header } from "src/components/Slug/common/Header";

export default {
  title: "features/Episode/Header",
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    number: 1,
    sub_title: "緑谷出久：オリジン",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};

export const LongTitle: Story = {
  args: {
    number: 1,
    sub_title: "緑谷出久：オリジン",
    id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
  },
};

export const LongEpisodeTitle: Story = {
  args: {
    number: 1,
    sub_title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};

export const LongTitleAndEpisodeTitle: Story = {
  args: {
    number: 1,
    sub_title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
    id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ipsum quis, officiis sit quo debitis animi blanditiis. Et nostrum adipisci possimus quos. Laboriosam quo magnam incidunt, voluptatum excepturi dolores.",
  },
};

export const BiggestNumber: Story = {
  args: {
    number: 1942,
    sub_title: "緑谷出久：オリジン",
    id: "1",
    title: "僕のヒーローアカデミア",
  },
};
