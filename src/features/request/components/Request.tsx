import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { useRequest } from "src/features/request/hooks/useRequest";

export const Request = () => {
  const { onSubmitHandler } = useRequest();

  return (
    <div className="container mx-auto flex-1 bg-gray-50 py-4">
      <section className="px-3 font-hiragino-sans md:px-6">
        <h1 className=" mb-4 grid w-full place-items-center text-lg font-bold md:text-xl">
          作品の追加要望
        </h1>
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label
              className="mb-1 inline-block text-sm md:text-base"
              htmlFor="work_title"
            >
              作品のタイトル
            </label>
            <Input
              id="work_title"
              name="work_title"
              placeholder="作品のタイトルを入力してください"
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-1 inline-block text-sm md:text-base"
              htmlFor="work_url"
            >
              公式のURL&nbsp;(任意)
            </label>
            <Input
              id="work_url"
              name="work_url"
              placeholder="作品のURLを入力してください"
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-1 inline-block text-sm md:text-base"
              htmlFor="work_description"
            >
              作品の説明&nbsp;(任意)
            </label>
            <textarea
              className="block w-full resize-none appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              id="work_description"
              name="work_description"
              rows={4}
            />
          </div>
          <Button
            className="mx-auto w-full max-w-xs bg-indigo-500 text-white hover:bg-indigo-600"
            type="submit"
          >
            送信する
          </Button>
        </form>
      </section>
    </div>
  );
};
