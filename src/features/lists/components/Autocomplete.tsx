import { ActionIcon, Autocomplete as MAutocomplete } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons";
import React, { FC } from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { AutoCompleteData } from "src/features/episodes/types";
import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  autoCompleteData: AutoCompleteData[];
};

export const Autocomplete: FC<Props> = ({ autoCompleteData }) => {
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const searchInput = useSearchInputState((state) => state.searchInput);

  return (
    <MAutocomplete
      filter={(value, item) =>
        item.title.includes(value.toLowerCase().trim()) ||
        item.episodeTitle?.includes(value.toLowerCase().trim())
      }
      itemComponent={AutoCompleteItem}
      data={autoCompleteData}
      className="mx-auto w-full max-w-sm md:max-w-md"
      icon={<IconSearch className="text-indigo-500" size={20} />}
      iconWidth={48}
      rightSectionWidth={48}
      rightSection={
        <ActionIcon variant="transparent" onClick={() => setSearchInput("")}>
          <IconX className="text-indigo-500" size={20} />
        </ActionIcon>
      }
      placeholder="タイトルで検索"
      classNames={{
        wrapper: "h-8 w-full  mx-auto md:mx-0 flex items-center ",
        input: "text-base",
      }}
      radius="xl"
      onChange={(e) => setSearchInput(e)}
      value={searchInput}
    />
  );
};
