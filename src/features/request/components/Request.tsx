import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { useRequest } from "src/features/request/hooks/useRequest";
import { useUserState } from "src/store/user/userState";

export const Request = () => {
  const { onSubmitHandler, register, errors, isLoading } = useRequest();
  const user = useUserState((state) => state.user);

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
              <span className="mt-0.5 block text-xs text-indigo-500">
                ※略称は使わないでください。例: ヒロアカ5期 →
                僕のヒーローアカデミア5期
              </span>
            </label>
            <Input
              {...register("work_title", { required: true })}
              className="placeholder:text-xs"
              id="work_title"
              name="work_title"
              placeholder="例: 僕のヒーローアカデミア5期"
              type="text"
            />
            {errors.work_title && (
              <p className="mt-1 px-2 text-xs text-red-500">
                {errors.work_title.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="mb-1 inline-block text-sm md:text-base"
              htmlFor="work_url"
            >
              公式URLまたは公式TwitterのURL
            </label>
            <Input
              {...register("work_url")}
              className="placeholder:text-xs"
              id="work_url"
              name="work_url"
              placeholder="例: https://heroaca.com/"
              type="text"
            />
            {errors.work_url && (
              <p className="mt-1 px-2 text-xs text-red-500">
                {errors.work_url.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="mb-1 inline-block text-sm md:text-base"
              htmlFor="work_description"
            >
              作品の説明&nbsp;(任意)
            </label>
            <textarea
              {...register("work_description")}
              className="block w-full resize-none appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              id="work_description"
              name="work_description"
              rows={4}
            />
          </div>
          <Button
            className="mx-auto w-full max-w-xs bg-indigo-500 text-white hover:bg-indigo-600"
            disabled={isLoading || !user}
            loading={isLoading}
            type="submit"
          >
            {!user ? "ロード中..." : isLoading ? "送信中..." : "送信する"}
          </Button>
        </form>
      </section>
    </div>
  );
};
