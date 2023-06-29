import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "src/components/Elements/Button";
import { Notification } from "src/components/Elements/Notification";
import {
  NotificationState,
  useNotificationState,
} from "src/components/Elements/Notification/store";

const DefaultState: NotificationState = {
  title: "Default",
  type: "success",
  message: "",
  isPersistent: false,
  link: false,
};

const ShowNotification = (props: NotificationState) => {
  const { onShow } = useNotificationState();

  return (
    <Button
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
      onClick={() => onShow(props)}
    >
      Show Notification
    </Button>
  );
};

const createDecorators = (props: Partial<NotificationState>) => () =>
  (
    <>
      <Notification />
      <ShowNotification {...DefaultState} {...props} />
    </>
  );

type Story = StoryObj<typeof Notification>;

export default {
  title: "Elements/Notification",
  component: Notification,
} as Meta<typeof Notification>;

export const Default: Story = {
  decorators: [createDecorators({ title: "Default" })],
};

export const Success: Story = {
  decorators: [createDecorators({ title: "Success", type: "success" })],
};

export const Error: Story = {
  decorators: [createDecorators({ title: "Error", type: "error" })],
};

export const Info: Story = {
  decorators: [createDecorators({ title: "Info", type: "info" })],
};

export const Persistent: Story = {
  decorators: [createDecorators({ title: "Persistent", isPersistent: true })],
};

export const WithMessage: Story = {
  decorators: [
    createDecorators({
      title: "With Message",
      message: "This is a message",
    }),
  ],
};

export const LongMessage: Story = {
  decorators: [
    createDecorators({
      title: "Long Message",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. ",
      isPersistent: true,
    }),
  ],
};

export const LongTitle: Story = {
  decorators: [
    createDecorators({
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl.",
      message: "This is a message",
    }),
  ],
};

export const CommentError: Story = {
  decorators: [
    createDecorators({
      title: "コメントの投稿に失敗しました",
      type: "error",
      message: "再度お試しください",
    }),
  ],
};

export const Link: Story = {
  decorators: [
    createDecorators({
      title: "Link",
      link: true,
    }),
  ],
};
