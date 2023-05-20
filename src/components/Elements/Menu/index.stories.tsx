import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "src/components/Elements/Menu";
import { useOpenState } from "src/features/episodes/store";
import { Provider } from "src/features/provider";
import { createViewPortParameters } from "src/tests/storybook";

const decorator =
  (open = true) =>
  () => {
    const setOpen = useOpenState((state) => state.setIsMenuOpen);

    setOpen(open);

    return (
      <Provider>
        <Menu />
      </Provider>
    );
  };

export default {
  title: "Elements/Menu",
  component: Menu,
  parameters: {
    ...createViewPortParameters("sp"),
  },
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  decorators: [decorator()],
};

export const Sm: Story = {
  parameters: {
    ...createViewPortParameters("sm"),
  },
};

export const Md: Story = {
  parameters: {
    ...createViewPortParameters("md"),
  },
};

export const Lg: Story = {
  parameters: {
    ...createViewPortParameters("lg"),
  },
};

export const Xl: Story = {
  parameters: {
    ...createViewPortParameters("xl"),
  },
};

export const Xxl: Story = {
  parameters: {
    ...createViewPortParameters("2xl"),
  },
};

export const Closed: Story = {
  decorators: [decorator(false)],
};

export const ClosedSm: Story = {
  parameters: {
    ...createViewPortParameters("sm"),
  },
  decorators: [decorator(false)],
};

export const ClosedMd: Story = {
  parameters: {
    ...createViewPortParameters("md"),
  },
  decorators: [decorator(false)],
};

export const ClosedLg: Story = {
  parameters: {
    ...createViewPortParameters("lg"),
  },
  decorators: [decorator(false)],
};

export const ClosedXl: Story = {
  parameters: {
    ...createViewPortParameters("xl"),
  },
  decorators: [decorator(false)],
};

export const ClosedXxl: Story = {
  parameters: {
    ...createViewPortParameters("2xl"),
  },
  decorators: [decorator(false)],
};
