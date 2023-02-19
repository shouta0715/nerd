/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { Skeleton } from "src/components/Layout/loading/Skeleton";

type Props = {
  length: number;
};

export const ListSkelton: FC<Props> = ({ length }) => (
  <ul className="flex flex-wrap gap-2 md:gap-4">
    {[...Array(length)].map((_, i) => (
      <Skeleton
        key={`
        list-skelton-${i}-${length}
        `}
      />
    ))}
  </ul>
);
