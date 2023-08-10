import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { AboutPage } from "src/features/pages/about";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <AboutPage />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "サイトについて - Nerd");

export default Page;
