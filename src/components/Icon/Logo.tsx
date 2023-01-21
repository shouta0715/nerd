import Image from "next/image";
import React, { FC } from "react";

export const Logo: FC = () => (
  <figure className="relative m-0 h-10 w-20 ">
    <Image
      className="h-full w-full object-contain"
      src="/vercel.svg"
      fill
      alt="icon"
    />
  </figure>
);
