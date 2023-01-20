import { ScrollArea } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

export const CategoryNav: FC = () => {
  const router = useRouter();

  return (
    <nav className=" sticky top-0 z-[50]  w-full border-x-0 border-y-0 border-b border-solid border-gray-200 bg-white">
      <ScrollArea
        type="never"
        className="flex w-full "
        classNames={{
          viewport: "px-4 font-bold text-base text-gray-500",
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
        <Link
          href="/category/Anime"
          className={` mr-6 inline-block border-x-0 border-y-0 border-solid py-2 px-2 ${
            router.pathname === "/category/Anime" ? "border-b-2 text-black" : ""
          }`}
        >
          Anime
        </Link>
        <Link
          href="/category/Movie"
          className={`mr-6 inline-block border-x-0 border-y-0 border-solid px-2 py-2 ${
            router.pathname === "/category/Movie" ? "border-b-2 text-black" : ""
          }`}
        >
          Movie
        </Link>
      </ScrollArea>
    </nav>
  );
};
