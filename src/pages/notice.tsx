import fs from "fs";
import path from "path";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Notice } from "src/features/notice/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, NoticePage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<NoticePage> = ({ data }) => <Notice {...data} />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "お知らせ - Nerd");

export default Page;

export const getStaticProps: NextSSG<NoticePage> = async () => {
  const docsPath = path.join(process.cwd(), "src/docs/notice");
  const filenames = fs.readdirSync(docsPath);
  const markdowns = filenames.map((filename) => {
    const filePath = path.join(docsPath, filename);

    return fs.readFileSync(filePath, "utf8");
  });

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
