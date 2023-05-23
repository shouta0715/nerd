import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/components/Elements/Button";
import { DeleteModal } from "src/components/Modal/Delete";

const createDecorator = () => () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DeleteModal onClose={() => setIsOpen(false)} open={isOpen} />
      <Button onClick={() => setIsOpen(true)} theme="primary">
        Open Modal
      </Button>
    </>
  );
};

export default {
  title: "Modal/Delete",
  component: DeleteModal,
  decorators: [createDecorator()],
} as Meta<typeof DeleteModal>;

type Story = StoryObj<typeof DeleteModal>;

export const Default: Story = {};
