import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/components/Elements/Button";
import { Modal } from "src/components/Modal";

const createDecorator = () => () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} theme="primary">
        Open Modal
      </Button>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <Modal.Title>
          これはモーダルのタイトルです。これはモーダルのタイトルです。これはモーダルのタイトルです。
        </Modal.Title>
        <Modal.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptas quod
          necessitatibus quos voluptatibus quas voluptate. Quisquam voluptatum,
          quibusdam, quia, quae voluptatem voluptas quod necessitatibus quos
          voluptatibus quas voluptate. Quisquam voluptatum, quibusdam, quia,
        </Modal.Content>
        <Modal.CancelButton
          className="w-full"
          onClose={() => setIsOpen(false)}
          theme="secondary"
        >
          Cancel
        </Modal.CancelButton>
      </Modal>
    </>
  );
};

export default {
  title: "Modal",
  component: Modal,
  decorators: [createDecorator()],
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;
export const Default: Story = {};
