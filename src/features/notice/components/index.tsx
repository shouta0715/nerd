import React, { FC } from "react";

import { TopTitle } from "src/components/Elements/TopTitle";
import { NoticePage } from "src/libs/next/types";

export const Notice: FC<NoticePage> = ({ markdowns, buildDate }) => {
  console.log(markdowns);

  return (
    <section className="flex-1 animate-fadeUp gap-y-8 pb-8">
      <TopTitle buildDate={buildDate} title="お知らせ" />
      <ul className="grid">
        {markdowns.map((markdown, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`notice-${index}`} />
          );
        })}
      </ul>
    </section>
  );
};
