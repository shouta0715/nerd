import { Meta, StoryObj } from "@storybook/react";

import { Button } from "src/components/Elements/Button";
import { AuthModal } from "src/components/Modal/Auth";
import { useGlobalState } from "src/store/global/globalStore";

const createDecorator = () => () => {
  const open = useGlobalState((state) => state.setIsOpenModal);

  return (
    <>
      <Button onClick={() => open(true)} theme="primary">
        Open Modal
      </Button>
      <AuthModal />
    </>
  );
};

export default {
  title: "Modal/Auth",
  component: AuthModal,
  decorators: [createDecorator()],
} as Meta<typeof AuthModal>;

type Story = StoryObj<typeof AuthModal>;

export const Default: Story = {};
