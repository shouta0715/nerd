import Image from "next/image";
import React, { FC } from "react";

export const Logo: FC = () => (
  <figure className="relative m-0 h-10 w-20 ">
    <Image
      alt="icon"
      className="h-full w-full object-contain"
      fill
      src="/vercel.svg"
    />
  </figure>
);
