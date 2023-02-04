import { ScrollArea } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Category_Enum } from "../../../generated/graphql";
import { useQueryCategory } from "../../../hooks/useQueryCategory";
import { categoryProcessing } from "../../../hooks/utils/categoryProcessing";

export const CategoryNav: FC = () => {
  const router = useRouter();
  const { data } = useQueryCategory();
  console.log(data);

  return (
    <nav className="  sticky top-0 z-[50] w-full overflow-hidden border-x-0 border-y-0 border-b border-solid border-gray-200 bg-white">
      <ScrollArea
        type="never"
        className="flex"
        classNames={{
          viewport:
            "px-4 font-bold text-base text-gray-500 h-full whitespace-nowrap ",
        }}
      >
        <Link
          href="/"
          className={` mr-6 inline-block border-x-0 border-y-0 border-solid px-2 py-2 tracking-wide ${
            router.pathname === "/" ? "border-b-2 text-black" : ""
          }`}
        >
          All
        </Link>
        {Object.keys(Category_Enum).map((enum_category) => (
          <Link
            prefetch={false}
            key={`nav-${enum_category}`}
            href={`/categories/${enum_category}`}
            className={`mr-6 inline-block border-x-0 border-y-0 border-solid py-2 px-2 last:mr-0 ${
              router.asPath === `/categories/${enum_category}`
                ? "border-b-2 text-black"
                : ""
            }`}
          >
            {
              categoryProcessing(
                Category_Enum[enum_category as keyof typeof Category_Enum]
              ).ja
            }
          </Link>
        ))}
      </ScrollArea>
    </nav>
  );
};
