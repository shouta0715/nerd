import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  isThread: boolean;
  setIsThread: React.Dispatch<React.SetStateAction<boolean>>;
  // data?: GetEpisodeQuery;
};

export const LiveNav: FC<Props> = ({ setIsThread, isThread }) => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-[1] flex h-10 items-center justify-between border-0 border-b border-solid border-b-slate-200 bg-white px-2 lg:h-auto lg:border-none">
      <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
        <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 after:h-7 after:w-7 after:content-['']">
          <button className="h-7 w-7 border-none" onClick={() => router.back()}>
            <ArrowSmallLeftIcon className="h-full w-full" />
          </button>
          <ul className=" flex h-full flex-1 items-center justify-around">
            <Text
              className={`inline-block cursor-pointer rounded-none  py-2 text-sm font-bold text-indigo-500 md:text-base  ${
                isThread
                  ? "border-0 border-b-2 border-solid border-indigo-500"
                  : "border-none"
              }`}
              component="button"
              onClick={() => setIsThread(true)}
            >
              チャット
            </Text>
            <Text
              className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 md:text-base ${
                !isThread
                  ? "border-0 border-b-2 border-solid border-indigo-500"
                  : "border-none"
              }`}
              color="indigo"
              component="li"
              onClick={() => {
                setIsThread(false);
              }}
            >
              スレッド
            </Text>
          </ul>
        </div>

        {/* <DynamicEpisodeMenu episode={data?.episodes_by_pk} /> */}
      </div>
    </nav>
  );
};
