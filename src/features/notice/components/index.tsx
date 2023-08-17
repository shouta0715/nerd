import clsx from "clsx";
import React, { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { TopTitle } from "src/components/Elements/TopTitle";
import { getImportanceColor } from "src/features/notice/utils";
import { NoticePage } from "src/libs/next/types";

export const Notice: FC<NoticePage> = ({ markdowns, buildDate }) => {
  return (
    <section className="flex-1 animate-fadeUp gap-y-8 pb-8">
      <TopTitle buildDate={buildDate} title="お知らせ" />
      <div className="grid gap-y-12">
        {markdowns.map((markdown) => {
          return (
            <article
              key={markdown.title + markdown.date}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500" dateTime={markdown.date}>
                  {new Date(markdown.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span
                  className={clsx(
                    "relative z-10 rounded-full px-3 py-1 text-xs font-medium ",
                    getImportanceColor(markdown.importance)
                  )}
                >
                  {markdown.category}
                </span>
              </div>
              <div className="relative">
                <h3 className="mt-3 font-semibold leading-6 text-gray-900">
                  <p>{markdown.title}</p>
                </h3>
                <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  <ReactMarkdown
                    className="markdown"
                    remarkPlugins={[remarkGfm]}
                  >
                    {markdown.content}
                  </ReactMarkdown>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
