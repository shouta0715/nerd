import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { ShareButton } from "src/components/Elements/Share";
import { Text } from "src/components/Elements/Text";
import { WorkMenuModal } from "src/components/Modal/WorkMenu";
import { getSeriesLink, getSeriesQuery } from "src/features/series/utils/link";
import { GetWorkQuery } from "src/gql/graphql";
import { genTitle } from "src/libs/meta/OnlyTitle";

type Props = {
  data?: GetWorkQuery;
};

export const WorkMenu: FC<Props> = ({ data }) => {
  return (
    <>
      <section className=" border-solid border-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <Text size="sm">エピソード</Text>
          <ShareButton
            text={`${genTitle({
              title: data?.works_by_pk?.series_title,
            })}の感想を一緒にシェアしよう！`}
            title={data?.works_by_pk?.title ?? ""}
            url={typeof window !== "undefined" ? window.location.href : ""}
          />
        </div>
        <Text component="div">
          <Text className="text-sm" component="p">
            {data?.works_by_pk?.series_title}
          </Text>
        </Text>
        <div className="mt-4 flex flex-wrap items-center justify-center">
          {data?.works_by_pk?.series_id && (
            <nav className="group relative my-2 flex cursor-pointer items-center justify-center pb-2">
              <ButtonLink
                as={`/series/${data?.works_by_pk?.series_id}`}
                className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-4  py-2 text-center text-sm font-bold text-white"
                href={{
                  pathname: getSeriesLink({
                    series_id: data?.works_by_pk?.series_id,
                  }),
                  query: getSeriesQuery({
                    title: data?.works_by_pk?.title,
                  }),
                }}
                size="xs"
              >
                シリーズ一覧へ
              </ButtonLink>
            </nav>
          )}
        </div>
      </section>
      <WorkMenuModal data={data} />
    </>
  );
};
