import { ActionIcon, Autocomplete, Box } from "@mantine/core";
import { IconArrowLeft, IconSearch, IconX } from "@tabler/icons";
import Link from "next/link";
import React, { FC } from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { AutoCompleteData } from "src/features/episodes/types";
import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  autoCompleteData: AutoCompleteData[];
};

export const ListHeader: FC<Props> = ({ autoCompleteData }) => {
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const searchInput = useSearchInputState((state) => state.searchInput);

  return (
    <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
      <Box className="container mx-auto bg-transparent py-3">
        <div className="flex w-full items-center px-4">
          <Link href="/" className="mr-2 flex justify-center md:mr-4 ">
            <IconArrowLeft className="h-6 w-6 text-black" />
          </Link>
          <Autocomplete
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
              <ActionIcon
                variant="transparent"
                onClick={() => setSearchInput("")}
              >
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
        </div>
      </Box>
    </header>
  );
};
