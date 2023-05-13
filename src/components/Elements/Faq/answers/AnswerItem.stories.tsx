import { Meta, StoryObj } from "@storybook/react";
import { faqs } from "src/components/Elements/Faq";
import { AnswerItem } from "src/components/Elements/Faq/answers";

export default {
  title: "Elements/Faq/answers/items",
  component: AnswerItem,
} as Meta<typeof AnswerItem>;

type Story = StoryObj<typeof AnswerItem>;

const getFaq = (index: number) => faqs[index];

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
