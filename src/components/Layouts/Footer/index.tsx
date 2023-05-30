import React, { FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-12 md:items-center md:justify-between lg:flex lg:px-8">
      <p className="text-center text-xs leading-5 text-gray-500">
        当サイトは個人が運営している非公式のものであり、当サイトに掲載されているアニメ会社の企業様とは一切関係ありません。
      </p>
      <div className="mt-8 lg:order-1 lg:mt-0">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Nerd All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
