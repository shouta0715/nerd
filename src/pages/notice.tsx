import { DisableAuthLayout } from "src/components/Layouts/BasicLayout";
import { Notice } from "src/features/notice/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, NoticePage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";
import { getMarkdowns } from "src/utils/server/getMarkdowns";

const Page: NextSSGPage<NoticePage> = ({ data }) => <Notice {...data} />;

Page.getLayout = DisableAuthLayout;
Page.getTitle = Meta(() => "お知らせ - Nerd");

export default Page;

export const getStaticProps: NextSSG<NoticePage> = async () => {
  const markdowns = getMarkdowns();
  const { buildDate } = genBuildDate();

  return {
    props: {
      data: {
        markdowns,
        buildDate,
      },
      error: null,
    },
  };
};
