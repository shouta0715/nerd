import { Meta, StoryObj } from "@storybook/react";
import { workFaqs } from "src/features/pages/faq";

import { AnswerItem } from "src/features/pages/faq/answers";

export default {
  title: "Pages/Faq/Answers",
  component: AnswerItem,
} as Meta<typeof AnswerItem>;

type Story = StoryObj<typeof AnswerItem>;

const getFaq = (index: number) => workFaqs[index];

const mock = {
  question: "このサイトは何をするためのサイトですか？",
  answer: "このサイトは何をするためのサイトですか？",
};

export const Default: Story = {
  args: {
    question: "このサイトは何をするためのサイトですか？",
    answer: "このサイトは何をするためのサイトですか？",
  },
};

export const DefaultOpen: Story = {
  args: {
    ...mock,
    defaultOpen: true,
  },
};

export const SiteFor: Story = {
  args: getFaq(0),
};

export const PostedName: Story = {
  args: getFaq(1),
};

export const Search: Story = {
  args: getFaq(2),
};

export const NoChat: Story = {
  args: getFaq(3),
};

export const LoginMeaning: Story = {
  args: getFaq(4),
};

export const LoginName: Story = {
  args: getFaq(5),
};

export const DoNotFind: Story = {
  args: getFaq(6),
};

export const WillRequest: Story = {
  args: getFaq(7),
};

export const TimeIsWrong: Story = {
  args: getFaq(8),
};
