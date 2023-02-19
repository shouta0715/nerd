import { HeartIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Text, Title } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import React, { FC } from "react";
import { TimerSkelton } from "src/components/Layout/loading/TImerSkelton";

export const Skeleton: FC = () => (
  <li className="mx-auto max-w-lg flex-1 rounded-md p-4 shadow  md:px-6">
    <div className="mx-auto flex animate-pulse flex-col items-center justify-between">
      <Title
        order={3}
        size="h4"
        ff="Hiragino Sans"
        className="mb-1 h-6 w-52 rounded-md bg-slate-200 md:mb-2"
      />
      <div className="mb-2 flex h-4 w-full  ">
        <Text className="mr-4 h-4 w-1/12 rounded-md bg-slate-200" />
        <Text className="flex-1 rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-col">
        <Text className="m-0 mx-auto mb-2.5  h-5 w-32 bg-slate-200 px-10" />
        <TimerSkelton />
      </div>
      <div className="mt-2 flex w-full justify-around">
        <div className="flex place-items-center space-x-2">
          <HeartIcon className="h-5 w-5 fill-slate-200 text-slate-200  md:h-6 md:w-6" />
          <span className="inline-block h-4 w-4 rounded-md bg-slate-200" />
        </div>
        <div className="flex place-items-center space-x-2">
          <UserGroupIcon className="h-5 w-5 fill-slate-200 text-slate-200  md:h-6 md:w-6" />
          <span className="inline-block h-4 w-4 rounded-md bg-slate-200" />
        </div>
        <IconUpload className="h-5 w-5 fill-slate-200 text-slate-200  md:h-6 md:w-6" />
        <div className="h-8 w-20 rounded-md bg-slate-200" />
      </div>
    </div>
  </li>
);
