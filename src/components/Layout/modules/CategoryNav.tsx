import { ScrollArea } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQueryMediaTypes } from "src/hooks/useQueryMediaTypes";
import { categoryProcessing } from "src/utils/categoryProcessing";

export const CategoryNav: FC = () => {
  const router = useRouter();
  const { data } = useQueryMediaTypes();

  return (
    <nav className="sticky top-0 z-[50] border-x-0 border-y-0 border-b border-solid border-gray-200 bg-white">
      <div className="container  mx-auto w-full overflow-hidden ">
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
          {data?.media_types.map((media) => (
            <Link
              prefetch={false}
              key={`nav-${media.id}`}
              href={`/categories/${media.name}`}
              className={`mr-6 inline-block border-x-0 border-y-0 border-solid py-2 px-2 last:mr-0 ${
                router.asPath === `/categories/${media.name}`
                  ? "border-b-2 text-black"
                  : ""
              }`}
            >
              {categoryProcessing(media).ja}
            </Link>
          ))}
        </ScrollArea>
      </div>
    </nav>
  );
};
