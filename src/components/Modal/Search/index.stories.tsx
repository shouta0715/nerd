import { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/components/Elements/Button";
import { useSearch } from "src/components/Elements/SearchButton/useSearch";
import { SearchModal } from "src/components/Modal/Search";

const createDecorator = () => () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <Button onClick={() => setIsSearchOpen(true)} theme="primary">
        Open Modal
      </Button>
      <SearchModal
        isSearchOpen={isSearchOpen}
        search={search}
        setIsSearchOpen={setIsSearchOpen}
        setSearch={setSearch}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default {
  title: "Modal/Search",
  component: SearchModal,
} as Meta<typeof SearchModal>;
type Story = StoryObj<typeof SearchModal>;

export const Default: Story = {
  decorators: [createDecorator()],
};
