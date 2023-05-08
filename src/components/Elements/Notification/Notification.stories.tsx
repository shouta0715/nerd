import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "src/components/Elements/Button";
import { Notification } from "src/components/Elements/Notification/Notification";
import {
  NotificationState,
  useNotificationState,
} from "src/components/Elements/Notification/store";

const ShowNotification = (props: Partial<NotificationState>) => {
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
      <ShowNotification {...props} />
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
